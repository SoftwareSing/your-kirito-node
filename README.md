# your-kirito-node

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

本專案透過使用 `神聖術` ([システム・コール](https://youtu.be/fN65vtFBYQ0)) 來操作[你的桐人](https://mykirito.com/)  
目前已完成桐人最重要的招牌絕招 ── `汁妹` ，確保你的桐人可以有後宮環繞  
其他神聖術陸續嘗試中

---

## **因遊戲伺服器關閉 已停止開發**

---

本專案透過 [AGPL-3.0-or-later](/LICENSE) 授權開源  
歡迎自由複製修改，但修改後再發布需注意 `AGPL` 相關開源規範 ([開放源碼授權概觀](https://medium.com/getamis/%E9%96%8B%E6%94%BE%E6%BA%90%E7%A2%BC%E6%8E%88%E6%AC%8A%E6%A6%82%E8%A7%80-%E4%B8%8B-eeda7ce13f1e))

**NOTE** : 本專案不保證永久支援，亦不負責使用後造成的任何後果 (如被 ban)

---

目前支援透過 [Node.js](https://nodejs.org/) 或 [Tampermonkey](https://www.tampermonkey.net/) 二種使用方式  
您可以依照需求選擇用 CLI 或是 瀏覽器腳本 來操作

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
