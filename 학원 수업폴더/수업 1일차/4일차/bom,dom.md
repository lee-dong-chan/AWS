#BOM

-Browser Object Model

- 브라우저의 정보를 가지고 있는 객채 -주소(url), 웹페이지 이동기록.....
- location : 주소 관련
  -history : 웹 페이지 이동기록
  #DOM

-Document Object Model 브라우저 실행--->bom --->dom
-HTML에 대한 정보를 잦고있다. ----> 자료형은 객체

# Event

...mermaid
flowchart LR
A[유저의 클릭] ---> B[윈도우]--->C[브라우저]
--->D[HTML] --->E[body] --->F[div] --->
G[div]에서 이벤트 함수가 실행

... -이벤트 함수를 언제 실행한다고 알수 있을까?----->무엇을 실행할까?(미리 전달 (함수ex onclick))
(유저의 클릭이 언제있을지 알수없다.)
