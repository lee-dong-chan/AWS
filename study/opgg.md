## 데이터 베이스 생성 및 권한설정

```
mysql -u root -p
create database test_240418;
create user 'aws_tester' identified by '1234qwER!@';
GRANT ALL PRIVILEGES ON test_240418.*TO aws_tester;
exit
```

## 유저 접속 및 데이터베이스 선택

```
mysql -u aws_tester -p;
use test_240418;
```

## 테이블 생성

```
CREATE TABLE userdata(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_ID VARCHAR(20) UNIQUE NOT NULL,
PW VARCHAR(20) NOT NULL,
nick VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE category(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(10) UNIQUE NOT NULL
);

CREATE TABLE board(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(50) NOT NULL,
content VARCHAR(1000) NOT NULL,
create_at DATETIME DEFAULT NOW(),
writer INT UNSIGNED,
category_id INT UNSIGNED,
FOREIGN KEY (writer) REFERENCES userdata (id) ON UPDATE CASCADE,
FOREIGN KEY (category_id) REFERENCES category(id) ON UPDATE CASCADE);

CREATE TABLE comment(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
writer INT UNSIGNED,
content VARCHAR(1000),
create_at DATETIME DEFAULT NOW(),
board_id INT UNSIGNED NOT NULL,
comment_id INT UNSIGNED,
FOREIGN KEY (writer) REFERENCES userdata(id) ON UPDATE CASCADE,
FOREIGN KEY (board_id) REFERENCES board(id) ON UPDATE CASCADE,
FOREIGN KEY (comment_id) REFERENCES comment(id) ON UPDATE CASCADE
);

CREATE TABLE recommend(
likecount BOOLEAN,
user_id INT UNSIGNED,
board_id INT UNSIGNED NOT NULL,
comment_id INT UNSIGNED,
FOREIGN KEY (user_id) REFERENCES userdata(id) ON UPDATE CASCADE,
FOREIGN KEY (board_id) REFERENCES board(id) ON UPDATE CASCADE,
FOREIGN KEY (comment_id) REFERENCES comment(id) ON UPDATE CASCADE
);

CREATE TABLE ward(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED NOT NULL,
board_id INT UNSIGNED NOT NULL,
FOREIGN KEY (user_id) REFERENCES userdata(id) ON UPDATE CASCADE,
FOREIGN KEY (board_id) REFERENCES board(id) ON UPDATE CASCADE
);

CREATE TABLE report(
reason VARCHAR(500) NOT NULL,
reportuser INT UNSIGNED NOT NULL,
board_id INT UNSIGNED NOT NULL,
comment_id INT UNSIGNED,
FOREIGN KEY (reportuser) REFERENCES userdata(id) ON UPDATE CASCADE,
FOREIGN KEY (board_id) REFERENCES board(id) ON UPDATE CASCADE,
FOREIGN KEY (comment_id) REFERENCES comment(id) ON UPDATE CASCADE
);

show tables;
+-----------------------+
| Tables_in_test_240418 |
+-----------------------+
| board                 |
| category              |
| comment               |
| recommend             |
| report                |
| userdata              |
| ward                  |
+-----------------------+

```

## 테이블 데이터 입력

### userdata

```
INSERT INTO userdata(user_id,PW,nick) VALUES('rudekpuppy@gmail.com','1234','불꽃놀이_마스터_이'),('qwer123@naver.com','1234','파스타맛집'),
('qwer456@naver.com','1234','김'),
('qwer789@naver.com','1234','AI로그림그리는사람'),
('qwer1@naver.com','1234','임장박거서색각해모새요'),
('qwer2@naver.com','1234','김관장님'),
('qwer3@naver.com','1234','일상올림'),
('qwer4@naver.com','1234','블레이디'),
('qwer5@naver.com','1234','Lolfr'),
('qwer6@naver.com','1234','78수'),
('qwer7@naver.com','1234','핳핳흐핳핳'),
('ffffg1233@naver.com','1234','fffffg'),
('dsdaasd123@naver.com','1234','dddddsdaasd');

select*from userdata;
+----+----------------------+------+-----------------------------------+
| id | user_ID              | PW   | nick                              |
+----+----------------------+------+-----------------------------------+
|  1 | rudekpuppy@gmail.com | 1234 | 불꽃놀이_마스터_이                |
|  2 | qwer123@naver.com    | 1234 | 파스타맛집                        |
|  3 | qwer456@naver.com    | 1234 | 김                                |
|  4 | qwer789@naver.com    | 1234 | AI로그림그리는사람                |
|  5 | qwer1@naver.com      | 1234 | 임장박거서색각해모새요            |
|  6 | qwer2@naver.com      | 1234 | 김관장님                          |
|  7 | qwer3@naver.com      | 1234 | 일상올림                          |
|  8 | qwer4@naver.com      | 1234 | 블레이디                          |
|  9 | qwer5@naver.com      | 1234 | Lolfr                             |
| 10 | qwer6@naver.com      | 1234 | 78수                              |
| 11 | qwer7@naver.com      | 1234 | 핳핳흐핳핳                        |
| 12 | ffffg1233@naver.com  | 1234 | fffffg                            |
| 13 | dsdaasd123@naver.com | 1234 | dddddsdaasd                       |
+----+----------------------+------+-----------------------------------+
```

<img src=>

### category

```
INSERT INTO category (name) VALUES('정보'),
('커뮤니티'),
('e스포츠'),
('OP.GG 기획'),
('유저 뉴스'),
('팁과 노하우'),
('패치노트'),
('자유'),
('유머'),
('질문'),
('영상'),
('사건 사고'),
('전적 인증'),
('팬 아트'),
('LCK'),
('기타 리그');

select*from category;
+----+------------------+
| id | name             |
+----+------------------+
|  3 | e스포츠          |
| 15 | LCK              |
|  4 | OP.GG 기획       |
| 16 | 기타 리그        |
| 12 | 사건 사고        |
| 11 | 영상             |
|  9 | 유머             |
|  5 | 유저 뉴스        |
|  8 | 자유             |
| 13 | 전적 인증        |
|  1 | 정보             |
| 10 | 질문             |
|  2 | 커뮤니티         |
|  6 | 팁과 노하우      |
|  7 | 패치노트         |
| 14 | 팬 아트          |
+----+------------------+
```

### board

```
INSERT INTO board(title,content,writer,category_id) VALUES('접속은 되는데','어째서 랭크가 닫혀있는건데',12,8),
('역대급 사고 터진 아프리카','는 너굴맨이 치웟습니다',2,8),
('심하게 기울어진 대한민국','는 너굴맨이 해치웠다고',3,8),
('오징어게임 생존자 근황','몰루',4,8),
('자기전에 낙서한거','제육볶음 어떻게만드냐',5,14),
('유튜버 고기남자 최신근황','숨쉰채로 발견',6,9),
('개미 가둬놓기','탈출했는데 어쩌냐',7,8),
('역지사지와 부작용','멍청해짐',8,9);
```

# 추천수 추가

```
ALTER TABLE baord ADD likecount INT UNSIGEND;
update board set likecount=(SELECT COUNT(*) FROM recommend WHERE LIKECOUNT =1 and board_id =2 and comment_id is null) WHERE id=2;
update board set likecount=(SELECT COUNT(*) FROM recommend WHERE LIKECOUNT =1 and board_id =1 and comment_id is null) WHERE id=1;
update board set likecount=(SELECT COUNT(*) FROM recommend WHERE LIKECOUNT =1 and board_id =3 and comment_id is null) WHERE id=3;
```

```
select*from board;
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+-----------
| id | title                             | content                    | create_at           | writer | category_id | likecount |
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+-----------
|  1 | 접속은 되는데                     | 어째서 랭크가 닫혀있는건데             | 2024-04-17 14:07:04 |     13 |           7 |         3 |
|  2 | 역대급 사고 터진 아프리카            | 는 너굴맨이 치웟습니다                | 2024-04-17 14:46:58 |      3 |           7 |         4 |
|  3 | 심하게 기울어진 대한민국             | 는 너굴맨이 해치웠다고                | 2024-04-17 14:46:58 |      4 |           7 |         1 |
|  4 | 오징어게임 생존자 근황              | 몰루                               | 2024-04-17 14:46:58 |      5 |           7 |      NULL |
|  5 | 자기전에 낙서한거                  | 제육볶음 어떻게만드냐                  | 2024-04-17 14:46:58 |      6 |          13 |      NULL |
|  6 | 유튜버 고기남자 최신근황             | 숨쉰채로 발견                        | 2024-04-17 14:46:58 |      7 |           8 |      NULL |
|  7 | 개미 가둬놓기                      | 탈출했는데 어쩌냐                      2024-04-17 14:46:58 |      8 |           7 |      NULL |
|  8 | 역지사지와 부작용                  | 멍청해짐                             | 2024-04-17 14:46:58 |      9 |           8 |      NULL |
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+-----------+
```

## 7번카테고리인 자유게시판의 글목록

```
select*from where
```

### comment

```
INSERT INTO comment(writer,content,board_id,comment_id) VALUES(13,'ㄹㅇ',1,null),
(4,'뭔데그래',1,1),(2,'ㄹㅇㅋㅋ',3, null),(4,'집을 포기해라',7,null),(7,'ㅋㅋㅋ집을 뺏겻네',7,4),(1,'정말?',2,null);
```

# 추천수 추가

```
ALTER TABLE baord ADD likecount INT UNSIGEND;
update comment set likecount=(SELECT COUNT(*) FROM recommend WHERE LIKECOUNT =1 and board_id =2 and comment_id=7) WHERE id=2;
update comment set likecount=(SELECT COUNT(*) FROM recommend WHERE LIKECOUNT =1 and board_id =1 and comment_id=2) WHERE id=1;
update comment set likecount=(SELECT COUNT(*) FROM recommend WHERE LIKECOUNT =1 and board_id =3 and comment_id=3) WHERE id=3;
```

```
select*from comment;
+----+--------+---------------------------+---------------------+----------+------------+
| id | writer | content                   | create_at           | board_id | comment_id |
+----+--------+---------------------------+---------------------+----------+------------+
|  1 |     13 | ㄹㅇ                      | 2024-04-18 09:54:58 |        1 |       NULL |
|  2 |      4 | 뭔데그래                  | 2024-04-18 09:54:58 |        1 |          1 |
|  3 |      2 | ㄹㅇㅋㅋ                  | 2024-04-18 09:54:58 |        3 |       NULL |
|  4 |      4 | 집을 포기해라             | 2024-04-18 09:54:58 |        7 |       NULL |
|  5 |      7 | ㅋㅋㅋ집을 뺏겻네         | 2024-04-18 09:54:58 |        7 |          4 |
|  6 |      1 | 정말?                     | 2024-04-18 09:54:58 |        2 |       NULL |
+----+--------+---------------------------+---------------------+----------+------------+
```

### recommend

```
INSERT INTO recommend(LIKECOUNT,user_id,board_id,comment_id) VALUES(1,3,2,null),
(1,4,2,null),
(0,2,2,null),
(1,1,2,null),
(0,5,2,null),
(1,6,2,null),
(0,9,2,null),
(1,2,2,6),
(1,3,1,2),
(1,4,1,2),
(0,2,1,2),
(1,1,1,2),
(0,5,1,2),
(1,6,1,2),
(0,9,1,2),
(0,10,1,2),
(0,11,1,2),
(1,7,1,2),
(1,3,1,null),
(1,2,1,null),
(1,5,1,null),
(1,2,3,null),
(1,3,3,3);



select*from recommend;
mysql> select*from recommend;
+-----------+---------+----------+------------+
| likecount | user_id | board_id | comment_id |
+-----------+---------+----------+------------+
|         1 |       4 |        2 |       NULL |
|         1 |       3 |        2 |       NULL |
|         0 |       2 |        2 |       NULL |
|         1 |       1 |        2 |       NULL |
|         0 |       5 |        2 |       NULL |
|         1 |       6 |        2 |       NULL |
|         0 |       9 |        2 |       NULL |
|         1 |       2 |        2 |          6 |
|         1 |       3 |        1 |          2 |
|         1 |       4 |        1 |          2 |
|         0 |       2 |        1 |          2 |
|         1 |       1 |        1 |          2 |
|         0 |       5 |        1 |          2 |
|         1 |       6 |        1 |          2 |
|         0 |       9 |        1 |          2 |
|         0 |      10 |        1 |          2 |
|         0 |      11 |        1 |          2 |
|         1 |       7 |        1 |          2 |
|         1 |       3 |        1 |       NULL |
|         1 |       2 |        1 |       NULL |
|         1 |       5 |        1 |       NULL |
|         1 |       2 |        3 |       NULL |
|         1 |       3 |        3 |          3 |
+-----------+---------+----------+------------+
```

# 2번 게시판의 좋아요와 싫어요

```
SELECT COUNT(*) FROM recommend WHERE LIKECOUNT='1' and board_id=2 and comment_id is null;
+----------+
| COUNT(*) |
+----------+
|        4 |
+----------+
SELECT COUNT(*) FROM recommend WHERE LIKECOUNT=0 and board_id=2 and comment_id is null;
+----------+
| COUNT(*) |
+----------+
|        3 |
+----------+
```

# 1번 게시판의 1번쨰 댓글의 좋아요와 싫어요

```
SELECT COUNT(*) FROM recommend WHERE LIKECOUNT =1 and board_id =1 and comment_id=2;
+----------+
| COUNT(*) |
+----------+
|        5 |
+----------+
SELECT COUNT(*) FROM recommend WHERE LIKECOUNT =0 and board_id =1 and comment_id=2;
+----------+
| COUNT(*) |
+----------+
|        5 |
+----------+
```

### ward

```
INSERT INTO ward (user_id,board_id) VALUES(1,5),
(1,4),
(1,7),
(4,3),
(4,2),
(5,2),
(5,3),
(4,8),
(2,8);

select*from ward;
+----+---------+----------+
| id | user_id | board_id |
+----+---------+----------+
|  1 |       1 |        5 |
|  2 |       1 |        4 |
|  3 |       1 |        7 |
|  4 |       4 |        3 |
|  5 |       4 |        2 |
|  6 |       5 |        2 |
|  7 |       5 |        3 |
|  8 |       4 |        8 |
|  9 |       2 |        8 |
+----+---------+----------+
```

# 5번유져 AI로 그림그리는 사람의 즐겨찾기 게시글 목록

```
select*from ward WHERE user_id=4;
+----+---------+----------+
| id | user_id | board_id |
+----+---------+----------+
|  4 |       4 |        3 |
|  5 |       4 |        2 |
|  8 |       4 |        8 |
+----+---------+----------+
```

### report

```
INSERT INTO report (reason,reportuser,board_id,comment_id) VALUES
('어그로꾼임',1,2,null),
('잘모름',2,1,2),
('안알랴줌',7,2,null),
('신고합니다',1,7,4),
('신고중',1,4,null);

select*from report;
+-----------------+------------+----------+------------+
| reason          | reportuser | board_id | comment_id |
+-----------------+------------+----------+------------+
| 어그로꾼임      |          1 |        2 |       NULL |
| 잘모름          |          2 |        1 |          2 |
| 안알랴줌        |          7 |        2 |       NULL |
| 신고합니다      |          1 |        7 |          4 |
| 신고중          |          1 |        4 |       NULL |
+-----------------+------------+----------+------------+
```

# 신고 유저 1번 불꽃놀이*마스터*이 신고 목록

```
select*from report WHERE reportuser=1;
+-----------------+------------+----------+------------+
| reason          | reportuser | board_id | comment_id |
+-----------------+------------+----------+------------+
| 어그로꾼임         |          1 |        2 |       NULL |
| 신고합니다         |          1 |        7 |          4 |
| 신고중            |          1 |        4 |       NULL |
+-----------------+------------+----------+------------+
```

# 2번 게시판의 신고횟수

```
SELECT COUNT(*) FROM report WHERE board_id=2;
+----------+
| COUNT(*) |
+----------+
|        2 |
+----------+
```

### board,comment 날짜순으로 정렬

# 최신순

```
select*from comment ORDER BY create_at DESC;
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+
| id | title                                | content                                | create_at           | writer | category_id |
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+
|  2 | 역대급 사고 터진 아프리카                  | 는 너굴맨이 치웟습니다                       | 2024-04-17 14:46:58 |      3 |           7 |
|  3 | 심하게 기울어진 대한민국                   | 는 너굴맨이 해치웠다고                       | 2024-04-17 14:46:58 |      4 |           7 |
|  4 | 오징어게임 생존자 근황                    | 몰루                                     | 2024-04-17 14:46:58 |      5 |           7 |
|  5 | 자기전에 낙서한거                        | 제육볶음 어떻게만드냐                        | 2024-04-17 14:46:58 |      6 |          13 |
|  6 | 유튜버 고기남자 최신근황                  | 숨쉰채로 발견                               | 2024-04-17 14:46:58 |      7 |           8 |
|  7 | 개미 가둬놓기                          | 탈출했는데 어쩌냐                             | 2024-04-17 14:46:58 |      8 |           7 |
|  8 | 역지사지와 부작용                       | 멍청해짐                                    | 2024-04-17 14:46:58 |      9 |           8 |
|  1 | 접속은 되는데                          | 어째서 랭크가 닫혀있는건데                      | 2024-04-17 14:07:04 |     13 |           7 |
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+
select*from comment ORDER BY create_at DESC;
+----+--------+---------------------------+---------------------+----------+------------+
| id | writer | content                   | create_at           | board_id | comment_id |
+----+--------+---------------------------+---------------------+----------+------------+
|  6 |      5 | 배를 버려라~              | 2024-04-17 15:00:01 |        7 |          4 |
|  2 |      5 | 뭔데그래                  | 2024-04-17 14:52:03 |        1 |          1 |
|  3 |      3 | ㄹㅇㅋㅋ                  | 2024-04-17 14:52:03 |        3 |       NULL |
|  4 |      5 | 집을 포기해라             | 2024-04-17 14:52:03 |        7 |       NULL |
|  5 |      8 | ㅋㅋㅋ집을 뺏겻누         | 2024-04-17 14:52:03 |        7 |          4 |
|  1 |     14 | ㄹㅇ                      | 2024-04-17 14:27:54 |        1 |       NULL |
+----+--------+---------------------------+---------------------+----------+------------+
```

```index
CREATE INDEX idx_board_date ON board(create_at DESC);
SELECT*from board WHERE create_at;
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+----------
| id | title                      | content                                | create_at           | writer | category_id | likecount |
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+----------
|  1 | 접속은 되는데                  | 어째서 랭크가 닫혀있는건데             | 2024-04-17 14:07:04 |     13 |           7 |         3 |
|  2 | 역대급 사고 터진 아프리카         | 는 너굴맨이 치웟습니다                 | 2024-04-17 14:46:58 |      3 |           7 |         4 |
|  3 | 심하게 기울어진 대한민국          | 는 너굴맨이 해치웠다고                 | 2024-04-17 14:46:58 |      4 |           7 |         1 |
|  4 | 오징어게임 생존자 근황           | 몰루                                | 2024-04-17 14:46:58 |      5 |           7 |      NULL |
|  5 | 자기전에 낙서한거               | 제육볶음 어떻게만드냐                  | 2024-04-17 14:46:58 |      6 |          13 |      NULL |
|  6 | 유튜버 고기남자 최신근황          | 숨쉰채로 발견                         | 2024-04-17 14:46:58 |      7 |           8 |      NULL |
|  7 | 개미 가둬놓기                   | 탈출했는데 어쩌냐                     | 2024-04-17 14:46:58 |      8 |           7 |      NULL |
|  8 | 역지사지와 부작용                | 멍청해짐                             | 2024-04-17 14:46:58 |      9 |           8 |      NULL |
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+-----------
CREATE INDEX idx_comment_date ON comment(create_at DESC);
select*from comment WHERE create_at;
+----+--------+---------------------------+---------------------+----------+------------+-----------+
| id | writer | content                   | create_at           | board_id | comment_id | likecount |
+----+--------+---------------------------+---------------------+----------+------------+-----------+
|  1 |     14 | ㄹㅇ                      | 2024-04-17 14:27:54 |        1 |       NULL |         5 |
|  2 |      5 | 뭔데그래                  | 2024-04-17 14:52:03 |        1 |          1 |         1 |
|  3 |      3 | ㄹㅇㅋㅋ                  | 2024-04-17 14:52:03 |        3 |       NULL |         1 |
|  4 |      5 | 집을 포기해라             | 2024-04-17 14:52:03 |        7 |       NULL |      NULL |
|  5 |      8 | ㅋㅋㅋ집을 뺏겻누         | 2024-04-17 14:52:03 |        7 |          4 |      NULL |
|  6 |      5 | 배를 버려라~              | 2024-04-17 15:00:01 |        7 |          4 |      NULL |
|  7 |      1 | 정말?                     | 2024-04-18 00:40:25 |        2 |       NULL |      NULL |
+----+--------+---------------------------+---------------------+----------+------------+-----------+
```

# 오래된순

```order BY
select*from board ORDER BY create_at ASC;
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+
| id | title                                | content                                | create_at           | writer | category_id |
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+
|  1 | 접속은 되는데                           | 어째서 랭크가 닫혀있는건데                     | 2024-04-17 14:07:04 |     13 |           7 |
|  2 | 역대급 사고 터진 아프리카                   | 는 너굴맨이 치웟습니다                       | 2024-04-17 14:46:58 |      3 |           7 |
|  3 | 심하게 기울어진 대한민국                    | 는 너굴맨이 해치웠다고                       | 2024-04-17 14:46:58 |      4 |           7 |
|  4 | 오징어게임 생존자 근황                     | 몰루                                     | 2024-04-17 14:46:58 |      5 |           7 |
|  5 | 자기전에 낙서한거                          | 제육볶음 어떻게만드냐                        | 2024-04-17 14:46:58 |      6 |          13 |
|  6 | 유튜버 고기남자 최신근황                    | 숨쉰채로 발견                              | 2024-04-17 14:46:58 |      7 |           8 |
|  7 | 개미 가둬놓기                             | 탈출했는데 어쩌냐                           | 2024-04-17 14:46:58 |      8 |           7 |
|  8 | 역지사지와 부작용                          | 멍청해짐                                  | 2024-04-17 14:46:58 |      9 |           8 |
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+
select*from comment ORDER BY create_at ASC;
+----+--------+---------------------------+---------------------+----------+------------+
| id | writer | content                   | create_at           | board_id | comment_id |
+----+--------+---------------------------+---------------------+----------+------------+
|  1 |     14 | ㄹㅇ                       | 2024-04-17 14:27:54 |        1 |       NULL |
|  2 |      5 | 뭔데그래                    | 2024-04-17 14:52:03 |        1 |          1 |
|  3 |      3 | ㄹㅇㅋㅋ                    | 2024-04-17 14:52:03 |        3 |       NULL |
|  4 |      5 | 집을 포기해라                 | 2024-04-17 14:52:03 |        7 |       NULL |
|  5 |      8 | ㅋㅋㅋ집을 뺏겻누              | 2024-04-17 14:52:03 |        7 |          4 |
|  6 |      5 | 배를 버려라~                 | 2024-04-17 15:00:01 |        7 |          4 |
+----+--------+---------------------------+---------------------+----------+------------+
```

### 추천순으로 정렬

```order BY
select*from board ORDER BY likecount DESC
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+----------
| id | title                    | content                         | create_at           | writer | category_id | likecount |
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+-----------
|  2 | 역대급 사고 터진 아프리카       | 는 너굴맨이 치웟습니다                 | 2024-04-17 14:46:58 |      3 |           7 |         4 |
|  1 | 접속은 되는데                 | 어째서 랭크가 닫혀있는건데             | 2024-04-17 14:07:04 |     13 |           7 |         3 |
|  3 | 심하게 기울어진 대한민국         | 는 너굴맨이 해치웠다고                | 2024-04-17 14:46:58 |      4 |           7 |         1 |
|  4 | 오징어게임 생존자 근황           |몰루                              | 2024-04-17 14:46:58 |      5 |           7 |      NULL |
|  5 | 자기전에 낙서한거               | 제육볶음 어떻게만드냐                 | 2024-04-17 14:46:58 |      6 |          13 |      NULL |
|  6 | 유튜버 고기남자 최신근황         | 숨쉰채로 발견                        | 2024-04-17 14:46:58 |      7 |           8 |      NULL |
|  7 | 개미 가둬놓기                  | 탈출했는데 어쩌냐                     | 2024-04-17 14:46:58 |      8 |           7 |      NULL |
|  8 | 역지사지와 부작용               |멍청해짐                             | 2024-04-17 14:46:58 |      9 |           8 |      NULL |
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+-----------
select*from comment ORDER BY likecount DESC;
+----+--------+---------------------------+---------------------+----------+------------+-----------+
| id | writer | content                   | create_at           | board_id | comment_id | likecount |
+----+--------+---------------------------+---------------------+----------+------------+-----------+
|  1 |     14 | ㄹㅇ                      | 2024-04-17 14:27:54 |        1 |       NULL |         5 |
|  2 |      5 | 뭔데그래                  | 2024-04-17 14:52:03 |        1 |          1 |         1 |
|  3 |      3 | ㄹㅇㅋㅋ                  | 2024-04-17 14:52:03 |        3 |       NULL |         1 |
|  4 |      5 | 집을 포기해라               | 2024-04-17 14:52:03 |        7 |       NULL |      NULL |
|  5 |      8 | ㅋㅋㅋ집을 뺏겻누            | 2024-04-17 14:52:03 |        7 |          4 |      NULL |
|  6 |      5 | 배를 버려라~               | 2024-04-17 15:00:01 |        7 |          4 |      NULL |
|  7 |      1 | 정말?                     | 2024-04-18 00:40:25 |        2 |       NULL |      NULL |
+----+--------+---------------------------+---------------------+----------+------------+-----------+
```

```index
CREATE INDEX idx_board_likecount ON board(likecount DESC);
SELECT*from board WHERE likecount;
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+----------
| id | title                  | content                          | create_at           | writer | category_id | likecount |
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+----------
|  2 | 역대급 사고 터진 아프리카    | 는 너굴맨이 치웟습니다                 | 2024-04-17 14:46:58 |      3 |           7 |         4 |
|  1 | 접속은 되는데              | 어째서 랭크가 닫혀있는건데             | 2024-04-17 14:07:04 |     13 |           7 |         3 |
|  3 | 심하게 기울어진 대한민국     | 는 너굴맨이 해치웠다고                 | 2024-04-17 14:46:58 |      4 |           7 |         1 |
+----+--------------------------------------+----------------------------------------+---------------------+--------+-------------+-----------

CREATE INDEX idx_comment_likecount ON comment(likecount DESC);
select*from comment WHERE likecount;
+----+--------+--------------+---------------------+----------+------------+-----------+
| id | writer | content      | create_at           | board_id | comment_id | likecount |
+----+--------+--------------+---------------------+----------+------------+-----------+
|  1 |     14 | ㄹㅇ         | 2024-04-17 14:27:54 |        1 |       NULL |         5 |
|  2 |      5 | 뭔데그래     | 2024-04-17 14:52:03 |        1 |          1 |         1 |
|  3 |      3 | ㄹㅇㅋㅋ     | 2024-04-17 14:52:03 |        3 |       NULL |         1 |
+----+--------+--------------+---------------------+----------+------------+-----------+
```
