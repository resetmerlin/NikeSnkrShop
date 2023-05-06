# Nike Snkrs Shop!(Kr)
[![wakatime](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/44a63003-60b6-42e5-b7a2-4ea90a10511c.svg)](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/44a63003-60b6-42e5-b7a2-4ea90a10511c)
[![wakatime](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/4f3d39e1-cc09-4bea-92a7-7b51e044af58.svg)](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/4f3d39e1-cc09-4bea-92a7-7b51e044af58)
[![wakatime](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/2d727b0a-493e-4f25-aadf-daf624562a26.svg)](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/2d727b0a-493e-4f25-aadf-daf624562a26)
[![wakatime](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/36b94519-b476-480d-a80a-da2914cec61c.svg)](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/36b94519-b476-480d-a80a-da2914cec61c)
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
___

# Nike Snkrs Shop!(En)
[![wakatime](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/44a63003-60b6-42e5-b7a2-4ea90a10511c.svg)](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/44a63003-60b6-42e5-b7a2-4ea90a10511c)
[![wakatime](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/4f3d39e1-cc09-4bea-92a7-7b51e044af58.svg)](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/4f3d39e1-cc09-4bea-92a7-7b51e044af58)
[![wakatime](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/2d727b0a-493e-4f25-aadf-daf624562a26.svg)](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/2d727b0a-493e-4f25-aadf-daf624562a26)
[![wakatime](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/36b94519-b476-480d-a80a-da2914cec61c.svg)](https://wakatime.com/badge/user/60e4818e-19d5-478c-9922-4c7fe3366bc4/project/36b94519-b476-480d-a80a-da2914cec61c)
### Introduction
- I used React, React Redux, Express, Node.js, Mongo DB to make this project(MERN stack). 
- This is a website that enables user to see nike snkrs via 3d rather than image(Do not put real email address or your private information while using this website).
- I develop this project after I clone code a eCommerce from https://www.udemy.com/course/mern-ecommerce/
- [This is a meme while I make this project(written in kr language)](https://docs.google.com/document/d/1rZa-SA2ecmGbWXiZf4TfwvGbeesP03Klyp6bi7PkX1I/edit?usp=sharing)


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

1. You need to create an env file on / directory

2. The key and value that you need
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
3. You need to change your proxy /api url into your server url from vite.config.js
```js
proxy: {
      "/api": "https://www.com:port",
    },
```


