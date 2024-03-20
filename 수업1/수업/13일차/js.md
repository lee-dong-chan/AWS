# HTML 을 브라우저애서 어떻게 읽어 낼까?

- window 객체 생성

  - HTML 파일(문서)를 받아온다

    - DOM(document)객체를 만든다.

      - DOM에 HTML파일의 내용을 하나하나 적용한다 ->script앨리먼트가 아니라면
      - style -> css스타일을 DOM에 적용한다
      - link -> css파일을 가져온다 -->css스타일을 DOM에 전달한다.
      - 앨리먼트인지 확인한다.
        - HTML 파일을 모두 읽었는가?----> 정리된 DOM객체를 가지고 브라우져 화면에 출력을 위해서 계산한다 --> 출력한다.

    - script 앨리먼트일경우 javascript의 Eventloop에게 코드전달
