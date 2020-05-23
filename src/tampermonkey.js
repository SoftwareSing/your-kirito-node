// ==UserScript==
// @name         your-kirito
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to Starburst Stream!
// @author       SoftwareSing
// @match        https://mykirito.com/*
// @grant        none
// ==/UserScript==

import { main } from './main'

window.yourKiritoScriptGOGO = function (token) {
  main({
    token,
    customFetch: window.fetch
  })
}
