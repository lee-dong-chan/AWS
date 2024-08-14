# React

-Example

```jsx
function MyButton() {
  return <button>I'm abutton</button>;
}
```

```js
function Mybutton() {
  const temp = document.createElement("button");
  temp.innerHTML = "I'm a button";
  return temp;
}
```

- 작성된 코드를 Javascript 문법에 맞게 수정해줘야한다,
  이렇게 코드를 바뚸주는 것을 뭐라고 할까?

# Compiler

- 작성한 코드를 기계어로 바꾸는 프로그램
- Javascript는 무슨 언어? 인터프리터 언어 -> 컴파일 단계가 따로 있지않고 실행과 동시에 이루어진다.
- React에서 사용하는 언어가 JS일까? --> JS + HTML --> JSX: Javascript Extension

# babel

"어쩔TV" -> babel :2000년대 유행어로 바꿔줘 -> "KIN"

## babel 실습

```bash
npm init -y
npm i -D @babel/core @babel/cli

npx babel src --out-dir dist1 #첫 바벨 사용

npm i -D @babel/preset-env

npx babel src --out-dir dist2 --presets=@babel/preset-env

# babel.config.json 파일추가 "presets": ["@babel/preset-env"] 입력

npx babel src --out-dir dist3
npx babel src -d dist3
# package.json script에 "build": "babel src -d dist" 추가

npm run build

```

# Typescript

```bash
npm i -D typescript
#tsconfig.json에 추가 {"compilerOptions": { "target": "ES5",   "module": "CommonJS",  "outDir": "./bulid"}}

npx tsc # TypeScript Compiler


# babel로 컴파일

# package.json에  "build": "babel src -d dist --extensions '.ts'"
npm i -D @babel/preset-typescript
# babel.config.json 파일 "presets": ["@bable/preset-typescript", "@babel/preset-env"], 추가
npm run build
```

# virtual DOM (리액트 핵심 기술)

- 달라진 내용만 변경하여 적용함

- state(상태값)을 줘서 상태가 바뀌는 것을 React가 이해하도록 만듬 => setState({a:1}) props 부모가 넘겨준 정보
