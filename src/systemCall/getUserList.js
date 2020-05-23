import { get } from './systemCall'
import { generateUrlQueryParam } from '../utils/generateUrlQueryParam'

export async function getUserList ({ lv = 999, page = 1 }) {
  const url = generateUrlQueryParam('api/user-list', { lv, page })
  const result = await get(url)

  return result
}
