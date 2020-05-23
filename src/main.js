import { autoDoaction } from './autoDoaction'
import { setToken } from './web-request/http'

export function main (token) {
  setToken(token)
  console.log('auto C8763 start')

  autoDoaction()
}
