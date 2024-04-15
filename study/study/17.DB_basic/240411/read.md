## SQL

## DDL

- Data Definition Language
- 데이터를 정의하는 언어
- Database의 구조를 설정하는 명령어

## DBMS의 구조는?

- DBMS는 서버 << 'port'를 이용해서 접근
- 서버는 프로그램

## MySQL

- RDBMS
  - 실행되는 서버가 있고, 거기에 대응하는 프로그램이있다.
  - 뭔가 실행파일이 있음--> 'mysql -u root -p'<<실제로 실행되고 있즌 서버와는 다른 프로그램이다.
    - 'service mysqk start' << mysqld.sh << demon - demon << 백그라운드에서 항상 실행되고 있는 프로그램 종류이다.

### mysql

- 접속기, 워크밴치와 다를게 없다.
- 워크치와의 차이 --> CLI VS GUI

## 프로그램 내에서는?

- DDL

### 서버(프로그램)

- 제일 큰 놈

### DATABASE(SCHIMA)

- 데이터 베이스

### TABLE

- 데이터 베이스 내의 표

# 계정 생성

```sql
create user 'aws'
identified by '1234qwer';
```

## 비밀번호에 대한 내용

```sql
show variables like 'validate_password%';
```

- policy == MEDIUM : 영어 대소문자, 숫자 , 특수문자 모두 포함되어야 한다.

```sql
create user 'aws' identified by '1234qwER!@';
```

## 데이터베이스 생성

```sql
create database AWS_test;
```

## 데이터 베이스 확인

```sql
show databases;
```

### 데이터 베이스 삭제

```sql
drop database AWS_TEST;
```

## 사용자 권한 설정

```sql
grant grant all privileges on AWS_TEST.*to aws; 모든권한
-- grant select on AWS_TEST.*to aws; 선택권한
-- grant insert on AWS_TEST.*to aws; 입력권한
```

# 데이터베이스 세팅

- 사용할 데이터 베이스를 설정해야 테이블을 생성, 수정할 수 있다.

```sql
use AWS_TEST;
```

# 테이블 생성

```sql
create table test (
  id int
);
```

# 테이블 삭제

```sql
drop table test;
```

# 테이블 초기화(데이터 삭제)

```sql
truncate table test;
```

# 테이블 생성시 컬럼

- () 안에 컬럼명 타입 순으로 입력한다.

# 타입

### integer

| Type      | byte  | min                  | max                 | unsigned             |
| --------- | ----- | -------------------- | ------------------- | -------------------- |
| tinyint   | 1byte | -128                 | 127                 | 255                  |
| smallint  | 2byte | -32768               | 32767               | 65535                |
| mediumint | 3byte | -8388608             | 8388607             | 16777215             |
| int       | 4byte | -2147483648          | 2147483647          | 4294967295           |
| bigint    | 8byte | -9223372036854775808 | 9223372036854775807 | 18446744073709552000 |

### fixed-point number

- 소수점이 정해진 실수
- DECIMAL(M,D)
  - M : 숫자의 총길이
  - D : 소수점의 위치

```sql
DECIMAL(10,5);
```

    - 12345.67113
    - 12345.67113123 >> 12345.67113
    - 12345.6711397746 >> 12345.67114

### floating-point bumber

- 소수점이 정해지지 않은 실수
- FLOAT(P) : P는 정밀도를 뜻한다. 0~24까지의 정밀도는 float,25~53까지의 정밀도는 double
- FLOAT(M,D) : -3.40282e+38 ~ 3.40282e+38 << 4bytes
- DUBLE(M,D) : -1.79769e+308 ~ 1.79769e+308 << 8bytes

### bit-value

- BIT(M) : 최대 64의 길이를 가질수 있다.

```sql
CREARE TABLE test(
  'id' TINYINT UNSIGNED,/*0~255*/
  'tall' FLOAT(5,2),
  'weight' FLOAT(5,2),
)
```

```js
({ id: -123 });
```

### CHAR

- character의 약자
- char가 모여서 string이 된다. string == char[]
  - a, b, c, ㄱ, ㄴ, ㄷ, ㄹ, ,ㅏ ,ㅣ ,가 ,나 ,다, 1 ,2 ,3....
- CHAR(M) : 최대 255자

### VARCHAR

- variable character
- char랑 사용허가애 크게 다를게 없다.
- VARCHAR(M) : 최대 65535자

### CHAR VS VARCHAR

- CHAR(10) << 10자를 무.조.건 넣게 된다.
- VARCHAR(10) << 넣은 것만 들어간다.

### BLOB VS TEXT

- BLOB : Binary Large Object
  - Binary를 저장하기 위한(bit) 타입
  - TINYBLOB(256bytes), BLOB(64KB), MEDIUMBLOB(8MB) , LONGBLOB(4GB) /_최대용량_/
- TEXT : string 저장하기 위한 타입
  - TINY, TEXT, MEDIUMTEXT, LONGTEXT

### ENUM

- enumeration : 열거형
- ENUM('data1','data2'ES
- data = 'data1'||'data2'
- 미리 설정한 값만을 하나만 넣을 수 있다.

```sql
creare table text(
  gender EMUM('man','woman')
);
```

### set

- enumeration : 열거형
- data SET('data1','data2')
- data = 'data1','data2'
- 미리 설정한 값만을 넣을 수 있다(갯수 무관).

### DATE, DATETIME, TIMESTAMP

- DATE: YYYY-M-DD
- DATETIME: YYYY-M-DD HH:MM:SS
- IMESTAMP : number(UTC)

### TIME

- HH:MM:SS || HHH:MM:SS

# constraint

- 제약조건

## NOT NULL

- NULL이 아니다 >> 값이 항상 들어가야 한다.

## UNSIGND

- 음수가 없다.

## UNIQUE

- 유일한, 값이 중복될수 없다.

## DEFAULT

- 기본값

## 테이블 확인

```sql

DESC test;
```

## 테이블 수정

```sql
ALTER TABLE test MODIFY COLUMN id INT UNSIGNED UNIQUE NOT NULL;
```

```sql
ALTER TABLE test ADD COLUMN name VARCHAR(10) NOT NULL DEFAULT "no name";
```

- 삭제

```sql
ALTER TABLE test DROP COLUMN name;
```

```sql
ALTER TABLE test ADD COLUMN creared_at DATETIME;
```

# 테이블 토탈

```sql
CREARE TABLE test (
  id INT NOT NULL UNIQUE,
  gender ENUM('man','woman')
);


ALTER TABLE 테이블명 ADD COLUMN 컬럼명 DATETIME;
ALTER TABLE 테이블명 MODIFY COLUMN 컬럼명 DATETIME;
ALTER TABLE 테이블명 DROP COLUMN 컬럼명 DATETIME;
```
