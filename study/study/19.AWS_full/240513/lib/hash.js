//hash 라는것은 단방향 암호화를 얘기한다.
//hash : 칼질하다.
//유일값으로 변경된다.
//a => a1
//언제 사용하는가?
// - 개인정보 저장할떄
import crypto from "crypto";
//암호화에 대한 내장 모듈

const hashAlgorithm = crypto.createHash("sha256");
//hash 암호화 객체를 만든다. sha256은 hash 종류중 하나.
const hashing = hashAlgorithm.update("비밀번호를 입력하세요");
const hashedString = hashing.digest("hex");
console.log(hashedString);

const hashAlgorithm2 = crypto.createHash("sha256");
//hash 암호화 객체를 만든다. sha256은 hash 종류중 하나.
const hashing2 = hashAlgorithm2.update("비밀번호를 입력하세요");
const hashedString2 = hashing2.digest("hex");
console.log(hashedString2);
// sha256 =>256bits => 32byte => 64자
//1byte => 2글자 FF
// 2**256 => 요즘은 컴퓨터 성능의 증가로 모두 넣어두고 찾는 방법이있음 -->레인보우 테이블

const hashAlgorithm3 = crypto.createHash("sha512");
//hash 암호화 객체를 만든다. sha256은 hash 종류중 하나.
const hashing3 = hashAlgorithm3.update("비밀번호를 입력하세요");
const hashedString3 = hashing3.digest("hex");
console.log(hashedString3);
//종류:MD5,SHA-1,SHA-2(SHA-256),SHA(512)

const salt = "sdasdqwdasfafaq";
const hashAlgorithm4 = crypto.createHash("sha256");
//hash 암호화 객체를 만든다. sha256은 hash 종류중 하나.
const hashing4 = hashAlgorithm4.update("비밀번호를 입력하세요" + salt);
const hashedString4 = hashing4.digest("hex");
console.log(hashedString4);
// salt,소금,  암호화에 있어서 의미없는, 필요없는 문자열을 추가하여 진행한다.
// - 해커가 쉽게 암호를 추측할수 없게 만든다.
// - 각 솔트가 다 다르게 넣는게 일반적이다.
// 키 스트레칭 :해시화를 반복한다.
// pdkdf2, bcrypto, scrypt
// bcrypto : 가장 기본적인 키 스트레칭 암호화 함수
// pdkdf2 : 가장 많이 사용되는 암호화 함수
// scrypt : 요즘 많이 쓰이는 함수

const salt2 = (await crypto.randomBytes(64)).toString("base64");

crypto.pbkdf2(
  "비밀번호를 입력", //암호화할 데이터
  salt2, // 소금
  1000, //반복횟수
  64, // 암호화에 필요한 Bytes 길이
  "sha512", // 암호화 알고리즘
  (err, key) => {
    //함수,콜백함수 ,pbkdf2 메서드가 언제 끝날지 모르기 때문에
    console.log("key : ", key.toString("hex"));
  }
);
// 비동기가 아니라 동기로 실행

const pbkdf2 = crypto.pbkdf2Sync(
  "비밀번호를 입력", //암호화할 데이터
  salt2, // 소금
  1000, //반복횟수
  64, // 암호화에 필요한 Bytes 길이
  "sha512" // 암호화 알고리즘
);
console.log("pbkf2 : ", pbkdf2.toString("hex"));
// Hash는 생각보다 중요한 개념이다.
// Hash Map
