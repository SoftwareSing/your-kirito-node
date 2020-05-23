import { post } from './systemCall'

export async function postDoaction (action) {
  const res = await post('api/my-kirito/doaction', { action })

  return res.message === '行動成功！'
}
