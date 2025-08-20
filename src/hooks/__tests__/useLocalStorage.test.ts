import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from '../useLocalStorage';

describe('useLocalStorage Hook', () => {
  const TEST_KEY = 'test-key';
  
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('Initialization', () => {
    it('returns initial value when localStorage is empty', () => {
      const { result } = renderHook(() => 
        useLocalStorage(TEST_KEY, 'initial')
      );
      
      expect(result.current[0]).toBe('initial');
    });

    it('returns parsed value from localStorage when it exists', () => {
      localStorage.setItem(TEST_KEY, JSON.stringify('stored-value'));
      
      const { result } = renderHook(() => 
        useLocalStorage(TEST_KEY, 'initial')
      );
      
      expect(result.current[0]).toBe('stored-value');
    });

    it('handles complex initial values', () => {
      const complexValue = {
        user: { id: 1, name: 'Test' },
        settings: { theme: 'dark', notifications: true },
        data: [1, 2, 3]
      };
      
      const { result } = renderHook(() => 
        useLocalStorage(TEST_KEY, complexValue)
      );
      
      expect(result.current[0]).toEqual(complexValue);
    });

    it('uses lazy initial value function', () => {
      const expensiveInit = vi.fn(() => ({ computed: true }));
      
      const { result } = renderHook(() => 
        useLocalStorage(TEST_KEY, expensiveInit)
      );
      
      expect(expensiveInit).toHaveBeenCalledTimes(1);
      expect(result.current[0]).toEqual({ computed: true });
    });
  });

  describe('Setting values', () => {
    it('updates value and localStorage', () => {
      const { result } = renderHook(() => 
        useLocalStorage(TEST_KEY, 'initial')
      );
      
      act(() => {
        result.current[1]('updated');
      });
      
      expect(result.current[0]).toBe('updated');
      expect(localStorage.getItem(TEST_KEY)).toBe(JSON.stringify('updated'));
    });

    it('handles function updates', () => {
      const { result } = renderHook(() => 
        useLocalStorage(TEST_KEY, 0)
      );
      
      act(() => {
        result.current[1](prev => prev + 1);
      });
      
      expect(result.current[0]).toBe(1);
      
      act(() => {
        result.current[1](prev => prev * 2);
      });
      
      expect(result.current[0]).toBe(2);
    });

    it('stores complex objects correctly', () => {
      const { result } = renderHook(() => 
        useLocalStorage<{ count: number; items: string[] }>(
          TEST_KEY, 
          { count: 0, items: [] }
        )
      );
      
      const newValue = { count: 5, items: ['a', 'b', 'c'] };
      
      act(() => {
        result.current[1](newValue);
      });
      
      expect(result.current[0]).toEqual(newValue);
      expect(JSON.parse(localStorage.getItem(TEST_KEY)!)).toEqual(newValue);
    });

    it('handles null and undefined values', () => {
      const { result } = renderHook(() => 
        useLocalStorage<string | null>(TEST_KEY, null)
      );
      
      expect(result.current[0]).toBeNull();
      
      act(() => {
        result.current[1]('value');
      });
      
      expect(result.current[0]).toBe('value');
      
      act(() => {
        result.current[1](null);
      });
      
      expect(result.current[0]).toBeNull();
    });
  });

  describe('Error handling', () => {
    it('falls back to initial value on parse error', () => {
      localStorage.setItem(TEST_KEY, 'invalid-json{');
      
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      
      const { result } = renderHook(() => 
        useLocalStorage(TEST_KEY, 'fallback')
      );
      
      expect(result.current[0]).toBe('fallback');
      expect(consoleSpy).toHaveBeenCalled();
      
      consoleSpy.mockRestore();
    });

    it('handles localStorage quota exceeded', () => {
      const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
      const setItemSpy = vi.spyOn(Storage.prototype, 'setItem')
        .mockImplementation(() => {
          throw new Error('QuotaExceededError');
        });
      
      const { result } = renderHook(() => 
        useLocalStorage(TEST_KEY, 'initial')
      );
      
      act(() => {
        result.current[1]('new-value');
      });
      
      // Value should still update in state even if localStorage fails
      expect(result.current[0]).toBe('new-value');
      expect(consoleSpy).toHaveBeenCalled();
      
      consoleSpy.mockRestore();
      setItemSpy.mockRestore();
    });

    it('handles localStorage not available', () => {
      const originalLocalStorage = global.localStorage;
      Object.defineProperty(global, 'localStorage', {
        value: undefined,
        writable: true,
      });
      
      const { result } = renderHook(() => 
        useLocalStorage(TEST_KEY, 'default')
      );
      
      expect(result.current[0]).toBe('default');
      
      act(() => {
        result.current[1]('updated');
      });
      
      expect(result.current[0]).toBe('updated');
      
      global.localStorage = originalLocalStorage;
    });
  });

  describe('Synchronization', () => {
    it('syncs across multiple hooks with same key', () => {
      const { result: hook1 } = renderHook(() => 
        useLocalStorage(TEST_KEY, 'initial')
      );
      
      const { result: hook2 } = renderHook(() => 
        useLocalStorage(TEST_KEY, 'initial')
      );
      
      act(() => {
        hook1.current[1]('updated-from-hook1');
      });
      
      // Both hooks should have the updated value
      expect(hook1.current[0]).toBe('updated-from-hook1');
      expect(hook2.current[0]).toBe('updated-from-hook1');
    });

    it('responds to storage events from other tabs', () => {
      const { result } = renderHook(() => 
        useLocalStorage(TEST_KEY, 'initial')
      );
      
      // Simulate storage event from another tab
      act(() => {
        localStorage.setItem(TEST_KEY, JSON.stringify('from-other-tab'));
        window.dispatchEvent(new StorageEvent('storage', {
          key: TEST_KEY,
          newValue: JSON.stringify('from-other-tab'),
          storageArea: localStorage,
        }));
      });
      
      expect(result.current[0]).toBe('from-other-tab');
    });

    it('ignores storage events for different keys', () => {
      const { result } = renderHook(() => 
        useLocalStorage(TEST_KEY, 'initial')
      );
      
      act(() => {
        window.dispatchEvent(new StorageEvent('storage', {
          key: 'different-key',
          newValue: JSON.stringify('other-value'),
          storageArea: localStorage,
        }));
      });
      
      expect(result.current[0]).toBe('initial');
    });

    it('handles storage clear events', () => {
      localStorage.setItem(TEST_KEY, JSON.stringify('stored'));
      
      const { result } = renderHook(() => 
        useLocalStorage(TEST_KEY, 'default')
      );
      
      expect(result.current[0]).toBe('stored');
      
      act(() => {
        window.dispatchEvent(new StorageEvent('storage', {
          key: null,
          newValue: null,
          storageArea: localStorage,
        }));
      });
      
      expect(result.current[0]).toBe('default');
    });
  });

  describe('Type safety', () => {
    it('maintains type through operations', () => {
      interface User {
        id: number;
        name: string;
        preferences: {
          theme: 'light' | 'dark';
          notifications: boolean;
        };
      }
      
      const defaultUser: User = {
        id: 1,
        name: 'Test',
        preferences: {
          theme: 'light',
          notifications: true,
        },
      };
      
      const { result } = renderHook(() => 
        useLocalStorage<User>('user', defaultUser)
      );
      
      expect(result.current[0].id).toBe(1);
      expect(result.current[0].preferences.theme).toBe('light');
      
      act(() => {
        result.current[1](prev => ({
          ...prev,
          preferences: {
            ...prev.preferences,
            theme: 'dark',
          },
        }));
      });
      
      expect(result.current[0].preferences.theme).toBe('dark');
    });
  });

  describe('Cleanup', () => {
    it('removes event listeners on unmount', () => {
      const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
      
      const { unmount } = renderHook(() => 
        useLocalStorage(TEST_KEY, 'value')
      );
      
      unmount();
      
      expect(removeEventListenerSpy).toHaveBeenCalledWith(
        'storage',
        expect.any(Function)
      );
      
      removeEventListenerSpy.mockRestore();
    });
  });

  describe('Performance', () => {
    it('does not cause unnecessary re-renders', () => {
      const renderSpy = vi.fn();
      
      const { result, rerender } = renderHook(() => {
        renderSpy();
        return useLocalStorage(TEST_KEY, 'initial');
      });
      
      // Initial render
      expect(renderSpy).toHaveBeenCalledTimes(1);
      
      // Setting same value should not trigger re-render
      act(() => {
        result.current[1]('initial');
      });
      
      expect(renderSpy).toHaveBeenCalledTimes(1);
      
      // Setting different value should trigger re-render
      act(() => {
        result.current[1]('updated');
      });
      
      expect(renderSpy).toHaveBeenCalledTimes(2);
      
      // Re-rendering parent should not reset value
      rerender();
      expect(result.current[0]).toBe('updated');
    });
  });
});
