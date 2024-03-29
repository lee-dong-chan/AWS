# npm

- nvm => node version manager
- npm => node package manager
  - prohect 개념으로 관리하기 시작한다.
  - folder로 project를 나눈다. =>package.json

```json
{
  "name": "asdf"
}
```

## init

- 첫 세팅 명령어cd 24032

## install | i

- npm페이지에 포함된package(라이브러리)를 설치한다.

```bash
npm i express
```

- npm i 설치한 패키지명
  ```basj
  dded 64 packages, and audited 65 packages in 987ms
  ```

12 packages are looking for funding
run `npm fund` for details

found 0 vulnerabilities

```

```

## gitignore

- 깃에 올리고 싶지않은 파일을 제외할수있다. git ignore이 존래하는 레퍼지토리를 기준으로---> 최상위 루트폴더에 존재

## npm i

- 깃에서 클론을 한경우 npm i를 입력해준다면 package.jason을 기준으로 dependencies를 참조하여 다운로드 받아준다.
