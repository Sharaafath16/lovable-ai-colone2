const ENABLED = process.env.CONTACT_RATE_LIMIT === 'true'
const WINDOW_MS = 10 * 60 * 1000
const MAX_REQ = 5

const hits = new Map<string, number[]>()

export function rateLimitCheck(ip: string) {
  if (!ENABLED) return { allowed: true, retryAfterSec: 0 }

  const now = Date.now()
  const windowStart = now - WINDOW_MS

  const arr = hits.get(ip)?.filter((t) => t > windowStart) ?? []
  arr.push(now)
  hits.set(ip, arr)

  if (arr.length > MAX_REQ) {
    const retryAfterMs = WINDOW_MS - (now - arr[0])
    return { allowed: false, retryAfterSec: Math.ceil(retryAfterMs / 1000) }
  }

  return { allowed: true, retryAfterSec: 0 }
}
