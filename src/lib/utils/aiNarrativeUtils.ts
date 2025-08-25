import type { NarrativeJson } from '@/lib/ai/bigstian/schemas';

/**
 * Escapes HTML special characters to prevent XSS attacks
 */
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Validates AI narrative structure to ensure it's safe to render
 */
export function validateAINarrative(narrative: unknown): narrative is NarrativeJson {
  if (!narrative || typeof narrative !== 'object') return false;
  
  const n = narrative as any;
  
  // Check sections array
  if (!Array.isArray(n.sections)) return false;
  
  // Validate each section
  for (const section of n.sections) {
    if (typeof section.title !== 'string') return false;
    if (!Array.isArray(section.paragraphs)) return false;
    
    for (const paragraph of section.paragraphs) {
      if (typeof paragraph !== 'string') return false;
    }
    
    if (section.bullets) {
      if (!Array.isArray(section.bullets)) return false;
      for (const bullet of section.bullets) {
        if (typeof bullet !== 'string') return false;
      }
    }
  }
  
  // Check meta
  if (!n.meta || typeof n.meta !== 'object') return false;
  if (typeof n.meta.confidence !== 'number') return false;
  if (typeof n.meta.timeframe !== 'string') return false;
  
  return true;
}

/**
 * Generates safe HTML for AI narrative content
 */
export function generateAINarrativeHTML(narrative: NarrativeJson | null | undefined): string {
  if (!narrative || !validateAINarrative(narrative)) {
    return '';
  }
  
  const confidencePercent = Math.max(0, Math.min(100, narrative.meta.confidence * 100));
  
  const sections = narrative.sections.map(section => {
    const bulletsList = section.bullets && section.bullets.length > 0
      ? `<ul>${section.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join('')}</ul>`
      : '';
      
    return `
      <div style="margin-bottom: 12px;">
        <h3>${escapeHtml(section.title)}</h3>
        ${section.paragraphs.map(p => `<p>${escapeHtml(p)}</p>`).join('')}
        ${bulletsList}
      </div>
    `;
  }).join('');
  
  return `
    <div class="section">
      <h2>AI Narrative</h2>
      ${sections}
      <p style="font-size: 12px; color: #6b7280">
        Confidence: ${confidencePercent.toFixed(0)}% • Timeframe: ${escapeHtml(narrative.meta.timeframe)}
      </p>
    </div>
  `;
}

/**
 * Generates React-compatible AI narrative elements (for use in JSX)
 */
export function renderAINarrativeReact(narrative: NarrativeJson | null | undefined) {
  if (!narrative || !validateAINarrative(narrative)) {
    return null;
  }
  
  return {
    sections: narrative.sections,
    meta: {
      ...narrative.meta,
      confidencePercent: Math.max(0, Math.min(100, narrative.meta.confidence * 100))
    }
  };
}
