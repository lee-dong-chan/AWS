const makeHeader = (type, length) => `HTTP/1.1 200 OK
Content-Type: ${type}; charset=UTF-8
Content-Lenfth:${length}`;

const makeResponse = (type, body) => {
  body = Buffer.from(body);
  //<scrip
  //</script>
  //</body>
  return `${makeHeader(type, body.length)}

${body.toString()}`;
};

const redirect = () => {
  return `HTTP/1.1 301 Moved Permenently
Content-Type: text/html
Content-Lenfth: 0
commection: Close
Location: /

`;
};

const sendFile = (type, body) => {
  const headerBuffer = Buffer.from(`${makeHeader(type, body.length)}

`);
  //'r\n\'
  const tempBuffer = Buffer.concat(
    //string + buffer는 불가능
    [headerBuffer, body],
    headerBuffer.length + body.length
  );
  return tempBuffer;
};

module.exports = { makeResponse, redirect, sendFile };
