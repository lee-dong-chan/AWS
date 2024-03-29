const makeReq = (data) => {
  const tempArr = data.toString().split("\r\n"); //--> 버퍼를 문자로 받아서 잘라준다.줄바꿈
  const [method, path, protocol] = tempArr[0].split(" "); //-->tempArr의 0번째를 받아서 뜨어쓰기로 잘라준다음 mathod,path,protocol롤 받아준다.
  const temp = { method, path, protocol };
  let i = 1;
  for (; i < tempArr.length; ++i) {
    if (tempArr[i].length == 0) break;
    const tempIdx = tempArr[i].indexOf(": "); //----->": "를찾는다
    temp[tempArr[i].slice(0, tempIdx)] = tempArr[i].slice(tempIdx + 2);
  }
  console.log(tempArr[i + 1]);
  const body = {};
  //id=sarvasev&pw=earser
  const bodyArr = tempArr[i + 1].split("&");
  //["id=sarvase","pw=earser"]
  bodyArr.forEach((item) => {
    //"id=sarvase"
    const tempArr = item.split("=");
    //"id",%EA%B0%96%EB%82%98%EB%8B%A4%EB%9D%B
    body[tempArr[0]] = decodeURI(tempArr[1]);
  });
  temp.body = body;

  return temp;
};
module.exports = { makeReq };
