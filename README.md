# Project: TestTool

這是一個NUXT3的練習系統，裡面目前有兩個功能，一個是啤酒成分查詢系統，另一個是隨機抽樣的設備品牌資料．

# Demo

[github page](https://lualextest1995.github.io/Nuxt3-testApp/)

# Features

- NUXT3
- Vue3 Composition API
- TypeScript
- Element-plus UI
- CSP 安全設置(Content Security Policy)
- i18n 中英文
- pinia
- Echart.js
- docker

# Technologies

- [Random Data API](https://random-data-api.com/documentation)
- [NUXT3](https://nuxt.com/)
- [ofetch](https://github.com/unjs/ofetch)
- [Element-plus UI](https://element-plus.org/zh-CN/)
- [docker](https://www.docker.com/)

更多詳細資訊，請點擊 client 資料夾的 [package.json](https://github.com/lualextest1995/Nuxt3-testApp/blob/main/package.json)

# Getting Started

## development

1. Clone this repositories.

```
$ git clone https://github.com/lualextest1995/Nuxt3-testApp.git
```

2. Install NPM.

```
$ cd Nuxt3-testApp
$ npm install
```

3. Run the client and server.

```
$ npm run dev
```

4. Open Web Browser.

```
http://localhost:3000/
```

## production

1. Clone this repositories.

```
$ git clone https://github.com/lualextest1995/Nuxt3-testApp.git
```

2. Install NPM.

```
$ cd project2
$ npm install
```

3. build

```
$ npm run build
```

4. Open Web Browser.

```
$ node .output/server/index.mjs

http://localhost:3000/
```

## docker build

1. build docker image

```
$ docker build -t testapp .
```

2. run web

```
$ docker run -d  --name testApp -p 3887:3000 testapp
```

3. Open Web Browser.

```
http://localhost:3887/
```

---

## Copyright © 2023 Alex Lu. All rights reserved.
