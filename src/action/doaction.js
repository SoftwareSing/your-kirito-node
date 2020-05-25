import { postDoaction } from '../systemCall/postDoaction'

export class Doaction {
  static hunt () {
    return postDoaction('hunt2')
  }

  static train () {
    return postDoaction('train2')
  }

  static eat () {
    return postDoaction('eat2')
  }

  static girl () {
    return postDoaction('girl2')
  }

  static good () {
    return postDoaction('good2')
  }

  static sit () {
    return postDoaction('sit2')
  }

  static fish () {
    return postDoaction('fish')
  }
}
