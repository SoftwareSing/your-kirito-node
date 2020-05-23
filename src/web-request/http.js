import fetch from 'node-fetch'
import { RejectError } from '../utils/error/RejectError'

export function get (path, data) {
  return send('GET', path, data)
}

export function post (path, data) {
  return send('POST', path, data)
}

async function send (method, path, data) {
  const url = `https://mykirito.com/${path}`
  const body = typeof data === 'object' ? JSON.stringify(data) : undefined

  const response = await fetch(url, {
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
    throw new RejectError(`${(new Date()).toISOString()}: 需進行防機器人驗證，請至網頁執行`)
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
