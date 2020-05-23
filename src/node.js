import fetch from 'node-fetch'

import { token } from '../config'
import { main, setEnv } from './main'

setEnv({ customFetch: fetch })
main({ token })
