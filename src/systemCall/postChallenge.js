import { post } from './systemCall'

export function postChallenge ({ lv = 1, opponentUID = '', shout = '', type = 0 }) {
  return post('api/challenge', { lv, opponentUID, shout, type })
}
