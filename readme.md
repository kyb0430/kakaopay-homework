
# 사전과제

## 과제1
- 프로모션1 : https://kyb0430.github.io/kakaopay-homework/dist/html/homework-1/promotion-1.html
- 프로모션2 : https://kyb0430.github.io/kakaopay-homework/dist/html/homework-1/promotion-2.html


## 과제2
- 컴포넌트 가이드 : https://kyb0430.github.io/kakaopay-homework/dist/html/homework-2/component-guide.html
- 회원가입 페이지 : https://kyb0430.github.io/kakaopay-homework/dist/html/homework-2/join-form.html
- 레이아웃 페이지 : https://kyb0430.github.io/kakaopay-homework/dist/html/homework-2/@layout.html

`기존 프로젝트 진행 시 Gulp로 빌드되는 './dist/html', './dist/css' 파일들은 gitignore 시키지만 해당 저장소 세팅이 불가 할 수 있다는 경우를 대비하여 저장소에 포함시키고 Pages로 웹호스팅 시켰습니다.`   
`무료 웹호스팅이라 속도가 아주 느리다는 점 양해 부탁드립니다.`

## 프로젝트 가이드

해당 저장소의 작업환경을 실행하기 위해서는 Git, Node.js가 설치되어 있어야 한다.  
Git설치주소 : https://git-scm.com  
Node.js설치주소 : https://nodejs.org/en  
(최신버전보다 권장버전을 다운로드 추천)  

### 작업환경 세팅

#### 1. git clone
저장소 소스를 받을 디렉토리를 정한 후 해당 디렉토리에서 'PowerShell창' 또는 'VScode의 터미널'을 이용하여 'git clone' 명령어를 실행해 저장소 소스를 받는다.
```
D:\project> git clone
```

#### 2. npm install
clone받은 소스폴더를 주소로 'PowerShell창' 또는 'VScode의 터미널'을 이용해 'npm install' 명령어를 실행하여 해당 소스에서 사용된 npm package들을 다운받는다.
```
D:\project\kakaopay-homework> npm install
```

#### 3. npm start
작업환경을 실행하기 위해 'npm start'명령어를 실행한다.  
웹브라우저 주소창에 `localhost:8000`을 입력하면 해당 작업의 빌드된 소스들을 확인할수 있다.  
(포트번호는 `gulpfile.js`에서 수정가능)
```
D:\project\kakaopay-homework> npm start
```