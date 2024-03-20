- 인터넷어세 이미지를 받으려고 한다-> 이미지가 다운이 안된다.

        - 원인파악
            - 1. 랜선이 잘 꽃혀있는지?
              -> physical
            - 2.인터넷 연결이 잘되어있는지?
                -> 컴퓨터에 ip주소가 없다면
                 ->Network Layer 이슈
        3.HTTP = {Header:{Ip,accept,Content-Type, Content-Length}, Body: "<html><html>"}
        -->Content - Type이 잘못되거나 요청을 보낼떄 잘못 보냇거나
        Content-Length의 길이가 잘못 됫거나 -->Application Layer 이슈

- 해결방안
  1. 랜선 꽃는다. Wifi 잡는다.
  2. 공유기 확인
  3. 헤더 수정(정확한 데이터) Body확인

# TCP | UDP 차이

## TCP

- 서로 간에 확인을 거치는 통신
- 패킷

## 3 Handshake

```mermaid
sequencDiagram
A ->> B: (SYN)요청 받을준비 해줘
B ->> A: (SYN+ACK)요청 받을 준비 끝낫어, 너는?
A ->> B: (ACK)ok 받을게
```

### 4 Handshake

```mermaid
sequencDiagram
A ->> B: (FIN)이제끝낫어 종료해줘
B ->> A: (ACK)ㅇㅋ ,종료할게
B ->> A: (FIN)종료됫어
A ->> B: (ACK)ㅇㅋ ㅅㄱ
```

## UDP

- 데이터를 보내고 끝
- 데이터그램

## TCP vs UDP

- 속도:TCP < UDP
- 안정성:TCP > UDP
- 게임 만들떄:TCP < UDP 빠르니까
  요즘엔: TCP > UDP

# HTTP 이론

- Header - Method - accept - Content-type - Content-Length - ......
  \_ body

## Method

- 요청의 종류

## GET

- 평소 우리가 쓰는것.
- 정보를 받아오기 위해사용

### Post

- 로그인 등등 정보를 보내기 위해 사용

## PUT

- 정보 전체를 수정 요청을 보내기 위해 사용

## PATCH

- 정보의 일부를 수정 요청을 보내기위해사용

## DELETE

- 정보를 삭제 요청을 보내기 위해 사용

### OPTION

- POST 등 정보 수정 등등을 요청 보낼떄 선요청으로 인증 절차 등을 진행하기 위해 사용

# REST API(RESTFUL API)

- Method를 적정히 사용하여 통신하는 방식
- HTTP 통신의 기초

# WSL / Ubuntu

## WSL

- Windows Subsystem Linux
  -Linux용 Windows 하위 시스템
- Hyper-v
  - 가상 머신 플랫폼
  - Virtual Machine
- WSL VS WSL2
  - version:1 VS 2
  - Base: WinAPI VS Kernal(VM)
- Windows에서 사용하다가 그대로 AWS 같은 클라우드에서
  Ubuntu 등으로 사용하려면 WSL2가 좋음

## Ubuntu

- Linux의 커스텀 OS(오픈소스)
- Linux: Kernel 기반의 오픈소스 OS - Unix 계열의 OS
  Linux의 OS: centOS, redHet, Linux for AWS

# 방화벽

- 80 port(HTTP)를 방화벽에서 설정해주면 열어서 타인이 내컴퓨터에 요청을 보낼수 있다.
- 443 port(HTTPS)
- mySQL: 3306 port
