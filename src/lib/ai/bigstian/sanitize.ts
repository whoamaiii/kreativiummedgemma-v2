// Sanitization helpers to ensure no PII leaves the device in prompts.

export type MinimalStudent = {
  id: string;
  grade?: string;
};

export function sanitizeStudent(student: { id: string; name?: string; grade?: string }): MinimalStudent {
  return { id: student.id, grade: student.grade };
}

export function bucketizeDateISO(d: Date): string {
  // Bucketize to ISO date (no time). If needed later, can coarsen to week or month.
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function stripPIIFromNotes(text?: string): string | undefined {
  if (!text) return undefined;
  // Naive redaction of typical name-like tokens (capitalized First Last) and emails.
  // This keeps the spirit of PII minimization for on-device usage.
  return text
    .replace(/[A-Z][a-z]+\s+[A-Z][a-z]+/g, '[redacted]')
    .replace(/[\w.-]+@[\w.-]+\.[A-Za-z]{2,}/g, '[redacted]');
}


