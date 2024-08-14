# React

- 단방향 데이터 바인딩 --> 데이터 흐름을 단순하게 고정하기 위해서

- View.js -->s 양방향 데이터 바인딩

## VDOM

- DOM을 추상화한 가상 객체를 메모리에 생성
- VDOM은 DOM 조작에의한 렌더링 비효율성을 해결하고자 하는 기술
- DOM을 반복적으로 조작하면 브라우저가 렌더링을 자주 하게 되무로 PC의 자원을 소모함
- React에서는 변경사항을 바로 실제 DOM에 반영하지않고 VDOM에 변경내역을 모아서 실제 DOM과 변경된 VDOM을 비교한뒤
  변경된 부분만 찾아 변경하고 그에따른 렌더링을 한번에 처리함

## State

- 자바스크립트 객체
- Component의 상태를 의미 --> State : React Componet의 변경가능한 데이터
- js:변수사용 React:State사용
- 렌더링이나 데이터흐름에 사용되는 것만 State에 사용해야한다. --> State변경시 Component가 재랜더링됨 불필요한 렌더링 방지
  연관이 없는 값은 Component의 인스턴스 필드로 정의
- State는 직접 변경X setState함수를 통하여 수정한다.

## Component

- 입력(Props)를 받아 출력(React elememt)하는 역활 --> js의 함수와 역활이 비슷
- React는 모든페이지가 Component로 구성되어 있고, Component는 여러개의 Component로 구성 될수도 있다.

### class Component

- class로 정의하고 render()함수에서 jsx코드를 반환
- React.Component를 상속받아 생성한다.

### Function Component

- function으로 정의하고 return문에 jsx코드를 반환
- 코드가 간단함

## Life Cycl

### 1.Mounting

- React에서 Component가 생성되는 시점
- class Component 사용할 경우 Component의 constructer 즉 생성자가 실행된다
- 생성자에서는 Component의 State를 정의하게 된다.
- Component가 렌더링된 이후에 componentDidMount함수가 호출된다.

### 2.Update

- ReactComponent가 변화에 따라 렌더링되는 과정
- Component의 Props가 변경,set State함수 호출에 의해 state가 변경,falseUpdate라는 강제업데이트 함수호출시 Component 재랜더링

### 3.Unmounting

- Component의 unmount는 상위 컴포넌트를 더이상 화면에 표시하지 않게 될때 unmount된다

## 제네릭

- 타입을 고정된값으로 명시하지 않고 변할수 있는 타입으로 전달 --> 타입의 변수화

### 특징

- 타입이 고정되는 것을 방지하고 재사용 가능한 요소를 선언가능

### 예시

```Typescript
function test<T>(a:T,b:T):T{ // 꺽쇠 형태로표햔
 return a+b
 }
//호출시
test<number>(1,2) // 호출할떄 타입을 <Number>로 지정
test<string>("good","bad")
```

- 배열로 출력시

```Typescript
function Arr<T>(a:T,b:T):T[]{
return[a,b]
}

const Arr = <T>(a:T,b:T):T[] => { //화살표 함수
    return[a,b]
}
s
Arr<number>(1,2)// 숫자배열
Arr<string|number>(1,"2") //혼합
```

- 인수를 배열로 받을 경우

```Typescript
function test<T>(a:T[]):T:[]{
    console.log(a.length)
    return a;

test([1,2,3])
}
```
