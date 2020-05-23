import { autoDoaction } from './autoDoaction'
import { setToken, setFetch } from './systemCall/systemCall'

export function main ({ token, customFetch }) {
  setToken(token)
  setFetch(customFetch)
  console.log('auto C8763 start')

  autoDoaction()
}
