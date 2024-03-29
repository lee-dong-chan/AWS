const parseHeader = (str) => {
  const arr = str.split("\r\n");

  const [method, path, protocol] = arr[0].split(" ");
  let tempIdx = path.indexOf("?");
  if (tempIdx == -1) tempIdx = path.length;
  const temp = { method, path: path.slice(0, tempIdx), protocol };
  console.log(temp.path);
  if (path.indexOf(".jpg") > -1) {
    temp.ext = "jpg";
  }

  if (path.indexOf(".png") > -1) {
    temp.ext = "png";
  }

  for (i = 1; i < arr.length; ++i) {
    const tempIdx = arr[i].indexOf(": "); //----->": "를찾는다
    temp[arr[i].slice(0, tempIdx)] = arr[i].slice(tempIdx + 2);
  }
  return temp;
};

const parseBody = (str) => {
  if (str.length == 0) return {};
  const body = {};
  //id=sarvasev&pw=earser
  const bodyArr = str.split("&");
  //["id=sarvase","pw=earser"]
  bodyArr.forEach((item) => {
    //"id=sarvase"
    const [name, value] = item.split("=");
    //"id",%EA%B0%96%EB%82%98%EB%8B%A4%EB%9D%Bse
    body[name] = decodeURI(value);
  });
  return body;
};

const makeReq = (data) => {
  const tempStr = data.toString();
  console.log(tempStr);

  const [headerStr, bodyStr] = tempStr.split("\r\n\r\n");
  return { header: parseHeader(headerStr), body: parseBody(bodyStr) };
};
module.exports = { makeReq };
