# event loop

# js는 어떻게 구동하는가

# Event Loop

- JS Engine(V8)

  - callstack
  - memory heep

- web APIs

  - window(BOM)
  - setTimeout
  - set imterval
  - Ajax

- Event Loop
- CallbackQueue

## web APIs

- 브라우저가 내부적으로 실행하고 있는 스레드
- serTineout, setInterval과 같이 따로 실행되어야하는 코드가 실행되고 있음
- Ajax 라고 하는 기눙도 포함 (요청을 보내는 기능)
- 코드를 실행함에 있어서 기다리는것을 동기, 안기다리는 것을 비동기라고 한다.

## Event Loop

- 우리가 작성한 코드가 실행되는 곳

## js가 실행되는 순서

- 코드를 한번 잀는다
- Execution Context(실행 컨텍스트)를 생성한다.(callstack 내부)
- Variable Environment(변수환경)에 변수,함수들을 선언한다.(실행컨텍스트 내부)(Hoistiong)

```javascript
var a = 1;
```

- 실행 컨택스트가 생성된다.(callstack내부)
- variable Environment에 a라는 변수가 선언된다.
- Lexical Environment에 variable Enviralment를 복사해 온다.
  - variable Environment의 내용을 Lexical Environment의 Environment Record(통칭 Record) 에 복사한다
- Outer Lexical Environmen 를 설정한다.
  외부 Lexical Environment가 무엇인지 Reference를 할당한다.

# 인터페이스 구현

- 인터페이스 == Interface(API)
