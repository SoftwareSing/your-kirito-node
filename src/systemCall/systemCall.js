import { CaptchaError } from '../utils/error/CaptchaError'
import { wait } from '../utils/wait'
import { randomNumber } from '../utils/randomNumber'

export function get (path, data) {
  return systemCall('GET', path, data)
}

export function post (path, data) {
  return systemCall('POST', path, data)
}

let lastCallTime = 0
let lock = false
async function systemCall (method, path, data) {
  // eslint-disable-next-line no-unmodified-loop-condition
  while (lock) {
    await wait(500)
  }
  lock = true

  const passTime = Date.now() - lastCallTime
  if (passTime < 1000) {
    const baseNeedWait = 1000 - passTime
    await wait(randomNumber(baseNeedWait + 500, baseNeedWait))
  }

  const result = await send(method, path, data)

  lastCallTime = Date.now()
  lock = false

  return result
}

async function send (method, path, data) {
  const url = `https://mykirito.com/${path}`
  const body = typeof data === 'object' ? JSON.stringify(data) : undefined

  const response = await customFetch(url, {
    headers: {
      token: getToken(),
      origin: 'https://mykirito.com',
      accept: 'application/json, text/plain, */*',
      'User-Agent': 'ozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
      'content-type': 'application/json'
    },
    method,
    body
  })

  const jsonResponse = await response.json()
  if (jsonResponse.error === '需進行防機器人驗證，若無出現請重新整理') {
    throw new CaptchaError()
  }

  return jsonResponse
}

let token
function getToken () {
  return token
}
export function setToken (input) {
  token = input
}

let customFetch
export function setFetch (fetchFunc) {
  customFetch = fetchFunc
}
