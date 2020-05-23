import { get } from './systemCall'

export async function getProfile (userId) {
  const url = `api/profile/${userId}`
  const result = await get(url)

  return result.profile
}
