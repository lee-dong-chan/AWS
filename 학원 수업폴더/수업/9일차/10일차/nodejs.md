# NodeJS

NodeJS 설치

NodeJS는 무엇인가?

## 브라우저

문서를 읽기위한 응용 프로그램 또는 응용 소프트웨어

### javascript

웹페이지에서 돌아가기 위해서-->브라우저에서 동작

### 컴퓨터를 조작하면 안될까?

nodeJS
컴퓨터 조작이란 무엇인가?
계산기

연산

- 파일 저장
- 파일 처리
- 파일 출력

브라우저에서의 js =>파일조작 안됨
nodeJS 에서의 js -> 파일조작 가능

네트워크 <--
파일처리

## 런타임

프로그램을 실행시키는 도구

## 프로그램

코드 덩어리

## 프로세스

프로그램을 실행했을때 프로세스가됨
프로그램은 코드덩어리,실행됬을때 메모리로
메모리에 올라가있는 프로그램

## NodeJS 설치

### 목적

파일을 조작하기 위해

### 설치 방법

우분투에 설치한다.

unix-> 리눅스
-> MacOS

# 리눅스

## NodeJS 설치 2가지 방법

- nodejs
  - 1년에 2번씩 6개월주기 버전
  - 마이너, 메이저
  - LTS(작년마지막버전),최신버전
- NVM
  버전을 쉽게 바꿀수 있다.

## mac

```sh
$ brew install nvm
```

```sh
nvm --version
```

```sh
source .bashrc
```

## Linux (windows)

cd ~
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

.nvm이 생겻는가> 홈 디렉토리
홈디렉토리 기준에서 .basjrc 파일안에

nvm --version

---

export PATH="usr/bin:/bin:/user/sbin:/sbin:/usr/local/bin:/user/X11/bin"
export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/sbin"

nvm ls 목록

nvm install --lts

nvm use --lts

node --version

vi test.js
console.log("Hello world")
:WQ!

node test.js
