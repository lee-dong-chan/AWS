const makeReq = (data) => {
  const tempArr = data.toString().split("\r\n");
  const [method, path, protocol] = tempArr[0].split(" ");
  const temp = { method, path, protocol };
  let i = 1;
  for (; i < tempArr.length; ++i) {
    if (tempArr[i].length == 0) break;
    const tempIdx = tempArr[i].indexOf(": ");
    temp[tempArr[i].slice(0, tempIdx)] = tempArr[i].slice(tempIdx + 2);
  }

  console.log(tempArr[i + 1]);

  const body = {};
  const bodyArr = tempArr[i + 1].split("&");
  bodyArr.forEach((item) => {
    const tempArr = item.split("=");
    body[tempArr[0]] = decodeURI(tempArr[1]);
  });

  temp.body = body;

  return temp;
};
module.exports = { makeReq };
