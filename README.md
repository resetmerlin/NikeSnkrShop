# Nike Snkrs Shop!


### Introduction
- React, React Redux, Express, Node.js , Mongo DB 즉 MERN 스택 사용
- 나이키 스니커즈를 3d로 보며 결제를 할 수 있는 온라인 샵(보안이 취약하여 실제 구글 아이디 및 결제 금지).
- 이 프로젝트는 https://www.udemy.com/course/mern-ecommerce/ 를 클론 코딩하고 발전시킨 결과물입니다.
- [당시 공부하면서 메모한 글](https://docs.google.com/document/d/1rZa-SA2ecmGbWXiZf4TfwvGbeesP03Klyp6bi7PkX1I/edit?usp=sharing)


## How to install and run the project?


```
 git clone https://github.com/resetmerlin/NikeSnkrShop.git
```
### Run only Frontend

```
 cd frontend
```
```
 npm install
```

```
 npm start
 
```

### Run Whole Application

1. / directory에 env file 생성 필요

2. 요구되는 키 값
 - JWT_SECRET
 - MONGO_URI
 - NODE_ENV(production or development)
 - PAYPAL_CLIENT_ID
 - PORT

```
 npm run build
 
```

```
 npm run dev

```


```
 cd frontend 

```
3. vite.config.js에서 proxy /api url을 서버 url로 변경 필요
```js
proxy: {
      "/api": "https://www.com:port",
    },
```

