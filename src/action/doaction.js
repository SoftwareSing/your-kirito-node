import { sendDoaction } from '../web-request/sendDoaction'

export function doaction (action = 'girl2') {
  return sendDoaction(action)
}
