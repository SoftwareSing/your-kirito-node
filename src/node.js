import fetch from 'node-fetch'

import { token } from '../config'
import { main } from './main'

main({ token, customFetch: fetch })
