# Typescript

```bash
npm init -y
npm i -D typescript
npx tsc --init

npm i express
npm i -D @types/node @types/express

npx tsc

# 타입스크립트 바로 실행
npm i -D ts-node
npx ts-node src/server.ts

# nodemon

npm i -D nodemon
# package.json => "start": "nodemon src/server.ts"
```

```json
{
  "outDir": "./build" /* Specify an output folder for all emitted files. */,
  "rootDir": "./src" /* Specify the root folder within your source files. */
}
```
