import { autoDoaction } from './autoDoaction'
import { setToken, setFetch } from './web-request/http'

export function main ({ token, customFetch }) {
  setToken(token)
  setFetch(customFetch)
  console.log('auto C8763 start')

  autoDoaction()
}
