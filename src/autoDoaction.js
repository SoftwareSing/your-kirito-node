import { doaction } from './action/doaction'
import { randomNumber } from './utils/randomNumber'

export function autoDoaction () {
  setTimeout(async function () {
    const isSuccess = await doaction()
    if (isSuccess) {
      autoDoaction()
    }
  }, randomNumber(105, 120) * 1000)
}
