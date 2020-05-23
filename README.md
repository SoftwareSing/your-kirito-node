# your-kirito-node

## 使用前的注意事項

在你開始使用之前，應先觀賞以下影片，以確保您了解如何使用  
<https://youtu.be/pFgUluV_00s>

在您了解可愛即是正義後，即可開始使用

## install

```shell
npm install
```

## 使用 node 啟動

本專案預設以 `node` 環境開發，也建議以 `node` 啟動

### config

在專案資料夾下建立 `config.js` ，在裡面放入你的 `token`  
他看起來會像這個樣子

```js
export const token = '000000000000000000000000.00000000000000000000000.000000000000000000000'
```

### start by node

```shell
npm start
```

## 使用網頁瀏覽器啟動

專案同時也支援以網頁瀏覽器執行  
可以將此專案編譯為 `tampermonkey` 支援的腳本，並透過瀏覽器使用

### build

```shell
npm run build_script
```

### start by web console

編譯後將輸出到 `_____output_____.js` ，將檔案內容複製到 `tampermonkey` 中  
接著在網站 `console` 透過呼叫 `yourKiritoScriptGOGO(token)` 啟用

```js
yourKiritoScriptGOGO('000000000000000000000000.00000000000000000000000.000000000000000000000')
```
