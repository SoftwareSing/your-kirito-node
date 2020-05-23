export function generateUrlQueryParam (url, params = {}) {
  const queryString = Object.entries(params)
    .map(([key, value]) => {
      return `${key}=${value}`
    })
    .join('&')

  return `${url}?${queryString}`
}
