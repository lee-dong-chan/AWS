## GIT

-분산 버전관리 시스템

- 코드 공유를 위해 사용
- snapshot 사용
  - 파일들을 사진을 찍듯이 기록하여 파일이나 이미지로 저장
    ->수정시 히스토리가 남겨짐-->이전것들을 기준으로 변경된내용을 하나하나추가

# 파일시스템

최상위 기준폴더 root를 기준으로 하위의 폴더를 관리

- 기준폴더= 우리가 작업하는폴(working directory)--->
- 스테이지 에리어(stage Area)--->
  - 스냅샷에 남긴 파일 목록
- 스냅샷 목록(repository)

# add,commit

working tree - (add)-> stage area -(commit)->repository

# push, pull

local Repository(내부) -(push)-> remote repository(외부)

local Repository(내부) <-(pull)- remote repository(외부)

- 깃의 변경로그만 받는경우가있음(fetch)
  - 우분투에서 update == fetch 와 upgrade == pull의 차이

# 파일의 상태

- modified
  - 수정된 파일(commit 되지 않은 파일)
- unmodified
  - 수정되지 않은 파일(commit에 올라가 있는 파일) 내려받은 파일
- staged

  - 수정되어 stage area에서 commit을 대기중인파일

- untracked
  - Git애 포함 되지 않는 파일(Gitignore)(빈 폴더 등)
- tracked
  - modified,unmodified,staged

# Branch

- 가지를 나눈다
- 처음 시작 master/main 브랜치
- 다음 브랜치명은 자유롭게
- 브랜치 명은 가지자체를 가르킴

# 머지/merge

- 브랜치를 합치는 개념
- 브랜치 내용을 master브랜치로 이동

# 리베이스 /rebase

- 브랜치의 베이스를 옮긴다는 개념

# Git에 대한 전략

# 헤드/HEAD-->모두 대문자

- 각 브랜치의 끝부분을 뜻함
- HEAD^ 헤드의 이전
- HEAD~1 헤드에1칸 이전

# check out

- 브랜치에서 나감
  브랜치에 속해야 하기때문에 가고자하는 브랜치

# reset

- 특정커밋으로 현재의 working tree를 바꾼다.

# Github(원격 저장소(remote repository)를 서비스 해주는 웹사인트)
