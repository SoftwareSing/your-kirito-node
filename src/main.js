import { autoDoaction } from './autoDoaction'
import { token } from '../config'

function main () {
  process.env.token = token
  console.log('auto C8763 start')

  autoDoaction()
}

main()
