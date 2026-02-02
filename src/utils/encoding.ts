/**
 * Encode a string to base64 (URL-safe)
 */
export function encodeBase64(str: string): string {
  return Buffer.from(str).toString('base64');
}

/**
 * Decode a base64 string
 */
export function decodeBase64(encoded: string): string {
  return Buffer.from(encoded, 'base64').toString('utf-8');
}

/**
 * Escape HTML special characters to prevent XSS
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
