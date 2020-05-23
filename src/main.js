import { autoDoaction } from './autoDoaction'
import { setToken, setFetch } from './systemCall/systemCall'

export function setEnv ({ customFetch }) {
  setFetch(customFetch)
}

export function main ({ token }) {
  setToken(token)
  console.log('auto C8763 start')

  autoDoaction()
}
