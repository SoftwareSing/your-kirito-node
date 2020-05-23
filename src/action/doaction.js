import { postDoaction } from '../systemCall/postDoaction'

export function doaction (action = 'girl2') {
  return postDoaction(action)
}
