# div

- 영역을 나누기 위해 사용하는 HTML 테그
- divide

# P

- 문단을 나타내는 Tag
- Paragrape

# a

- HyperLink가 생기는 태드

# img

- 이미지 Tag
- image

# ul/ol/li

- list Tag
- ul: 순서가 중요하지 않은 리스트
- ol: 순서를 나타내는 리스트
- li:ol과 ul의 자식

- Unorder List
- Order List
- List Item

# Display

- 요소를 어떻게 보여줄지 설정
- 레이아웃 결정
- 배치 방법
- block,inline,nonemflex,grig
- block,inline: 요소자체의 배치 방법

# Margin Padding

- 외부 여백, 내부 여백

# Position

- 위치 기준 설정
- absolute,relative,static,sticky

# box-sizing

- 영엳의 크기에 대해 기준을 설정
- Content| Border

# 전역변수 | 지역변수

- 전역변수 : 프로젝트 기준으로 어디서나 사용할수 있는 변수 //node.js d에서는 파일기준으로 나누어짐
- import,require를 하지않아도 사용할수 있다.

- Node.js 에서 사용하는 전역 변수는 대표적으로 global이 있다.

- 브라우저에서는 Window 객페를 전역으로 사용하기 때문에 {}(Scope) 밖에서 선언 ,할당, 초기화된 변수는 모두 사용할수 있다.
- Math,Number ,String ,Set,Symbol,Consol...

### Scope

- Function Scope , Block scope
- 전역스코프,지역스코프
- 객체 {} <-- Object Literal

```js
{
  const temp = 1; //블록 스코프
}
```

## 지역변수

- 전역변수가 아닌 모든변수
- 특정 스코프 에서만 사용할수 있는 변수
- 함수 내에서 선언된 변수
- Node.js 상에서 파일 기준 변수

# 함수선언식 /함수표현식 / 화살표 함수

- 함수 선언식
- 호이스팅

```js
function func() {}
```

- 함수표현식
- 호이스팅 막음

```js
const func = function () {};
const func2 = () => {};
```

- 화살표함수
- this 바인딩x

```js
() => {};
```

```js
//this 바인딩
const temp = {
  func: () => {
    console.log(this); //temp의 상위객체(window)
  },
  func() {
    console.log(this); //temp
  },
  func3: function () {
    console.log(this); //temp
  },
};
```

```js
var a = 2; //window.a
function foo() {
  console.log("a:", a);
  var a = 1;
  console.log(window.a);
}
```

# 사탕

```js
function solution(scores) {
  var answer = 0;
  const arr = scores.split("").sort((a, b) => b - a);
  let scoreCount = 0;
  for (let i = 0, nowScore; scoreCount < 4; nowScore = arr[i], i++) {
    if (nowScore != arr[i]) {
      scoreCount++;
    }
    aanswer++;
  }

  return --answer;
}
```

# 행렬

```js
const a = [
  [1, 2],
  [2, 4],
];

const b = [
  [1, 0],
  [0, 3],
];

function(a,b){
    let answer=[]
    for(let i=0;i<a.length;i++){
        answer.push([])
        for(let j =0;j<b[0].length;++j){
            let temp=0;
            for(let k =0;k<a[0].length;k++){
                temp += a[i][k] *b[k][j]
            }
            answer[i].push(temp);
        }    }
}
```

## Todolist

```bash
cd 22.React/240519
npm list -g # create -react-app
create-react-app todo-list --template typescript
cd todo-list
```

- SCSS 적용

```bash
npm i sass  #npm i scss
npm i tailwindcss
npx tailwindcss init
```

```bash
create-react-app todo-list-js --template javascript
```
