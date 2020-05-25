import { randomNumber } from './utils/randomNumber'
import { Doaction } from './action/doaction'

export function autoDoaction () {
  setTimeout(async function () {
    const isSuccess = await Doaction.sit()
    if (isSuccess) {
      autoDoaction()
    }
  }, randomNumber(105, 120) * 1000)
}
