/**
 * UTF-8 encode a JavaScript string into a Uint8Array without relying on TextEncoder.
 * - Iterates over Unicode code points using for...of (handles surrogate pairs correctly)
 * - Encodes each code point into 1–4 bytes per UTF-8 rules
 */
export function utf8Encode(str: string): Uint8Array {
  // First pass: count bytes needed
  let byteCount = 0;
  for (const ch of str) {
    const cp = ch.codePointAt(0)!; // for...of yields full code points
    if (cp <= 0x7f) byteCount += 1;
    else if (cp <= 0x7ff) byteCount += 2;
    else if (cp <= 0xffff) byteCount += 3;
    else byteCount += 4;
  }

  const out = new Uint8Array(byteCount);
  let i = 0;
  for (const ch of str) {
    const cp = ch.codePointAt(0)!;
    if (cp <= 0x7f) {
      // 0xxxxxxx
      out[i++] = cp;
    } else if (cp <= 0x7ff) {
      // 110xxxxx 10xxxxxx
      out[i++] = 0xc0 | (cp >> 6);
      out[i++] = 0x80 | (cp & 0x3f);
    } else if (cp <= 0xffff) {
      // 1110xxxx 10xxxxxx 10xxxxxx
      out[i++] = 0xe0 | (cp >> 12);
      out[i++] = 0x80 | ((cp >> 6) & 0x3f);
      out[i++] = 0x80 | (cp & 0x3f);
    } else {
      // 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
      out[i++] = 0xf0 | (cp >> 18);
      out[i++] = 0x80 | ((cp >> 12) & 0x3f);
      out[i++] = 0x80 | ((cp >> 6) & 0x3f);
      out[i++] = 0x80 | (cp & 0x3f);
    }
  }
  return out;
}
