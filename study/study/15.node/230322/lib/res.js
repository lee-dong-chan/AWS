const makeHeader = (type, length) => `HTTP/1.1 200 OK
Content-Type: ${type}
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

module.exports = { makeResponse, redirect };
