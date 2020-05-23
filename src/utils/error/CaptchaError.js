export class CaptchaError extends Error {
  constructor (msg = `${(new Date()).toISOString()}: 需進行防機器人驗證，請至網頁執行`, ...params) {
    super(msg, ...params)
  }
}
