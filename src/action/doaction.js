import { postDoaction } from '../web-request/postDoaction'

export function doaction (action = 'girl2') {
  return postDoaction(action)
}
