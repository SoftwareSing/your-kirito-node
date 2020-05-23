// ==UserScript==
// @name         your-kirito
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to Starburst Stream!
// @author       SoftwareSing
// @match        https://mykirito.com/*
// @grant        none
// ==/UserScript==

import { main, setEnv } from './main'
import { setToken } from './systemCall/systemCall'
import { getProfile } from './systemCall/getProfile'
import { getUserList } from './systemCall/getUserList'
import { postDoaction } from './systemCall/postDoaction'

setEnv({ customFetch: window.fetch })

window.yourKiritoScriptGOGO = function (token) {
  main({ token })
}

function generateEntireCommandList () {
  window.__yourSystemCall = {
    setToken,
    getProfile,
    getUserList,
    postDoaction,
    inspectEntireCommandList
  }
}
function inspectEntireCommandList () {
  console.log(window.__yourSystemCall)
}
generateEntireCommandList()
