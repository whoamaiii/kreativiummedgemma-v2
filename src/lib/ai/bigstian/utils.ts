export function parseDaysFromTimeframe(input?: string): number {
  if (!input) return 0;
  const m = String(input).match(/(\d+)\s*day/);
  return m ? Number(m[1]) : 0;
}


