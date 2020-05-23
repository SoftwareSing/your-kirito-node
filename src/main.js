import { setFetch } from './env/fetch'
import { setToken } from './env/token'
import { autoDoaction } from './autoDoaction'

export function setEnv ({ customFetch }) {
  setFetch(customFetch)
}

export function main ({ token }) {
  setToken(token)
  console.log('auto C8763 start')

  autoDoaction()
}
