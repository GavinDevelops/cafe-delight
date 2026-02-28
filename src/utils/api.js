const API_URL = '/api/events'

async function request(method, { token, body } = {}) {
  const headers = {}
  if (token) headers['Authorization'] = `Bearer ${token}`
  if (body) headers['Content-Type'] = 'application/json'

  const res = await fetch(API_URL, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    const text = await res.text().catch(() => 'Request failed')
    throw new Error(text || `HTTP ${res.status}`)
  }

  const contentType = res.headers.get('content-type')
  if (contentType?.includes('application/json')) {
    return res.json()
  }
  return null
}

export function fetchEvents() {
  return request('GET')
}

export function createEvent(token, event) {
  return request('POST', { token, body: event })
}

export function updateEvent(token, event) {
  return request('PUT', { token, body: event })
}

export function deleteEvent(token, id) {
  return request('DELETE', { token, body: { id } })
}
