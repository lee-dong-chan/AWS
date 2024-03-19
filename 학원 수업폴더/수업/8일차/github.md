# git init

로컬레포지토리를 만든다.----->

- 원격 레포지토리를 만든다.----->

# git clone

- 원격저장소를 만든다--> 원격 저장소를 복사하여 로컬저장소를 만든다

# Git

- 모르겠으면 아래 참고

```bash
git add.
git commit -m "feat: ???"
git push origin banchName
```

- add는 Staging Area에 변경사항을 추가한다.
- commit은 Local Reposittory에 Staging의 내용을 추가하여 commit(Snaopshot)을 남긴다.
- push는 원격 저장소에 branch를 업로드 한다.

## 브렌치 컨벤션

- 기능을 나타내는 영어
- develop-> login
- develop-> logout
- develop-> createboard
- develop-> readBoard
- 이슈사항에 있어서 긴급대처의 경우 fix를 많이 사용한다
- develop -> fix_login

# 커밋 메세지 컨벤션

- -m "커밋 메시지"
- 아래와 같이 해당 커밋이 어떤건지 분류 해준다.
  - feat:추가
  - fix:긴급 수정
  - edit: 수정
  - del: 삭제
- 여러가진 컨벤션이 있다.
  - ex)
    - Feat: add login
    - Feat: create logout
    - Feat: add user-info 24.03.12
    - Feat: add board 24.03.12 11:44
    - fix: 로그인 오류남
    - edit: 디비 추가
    - feat: addboard 24.03.12 11:44
      add board list
      add board edit
  - 등등의 많은 컨벤션이 있다
