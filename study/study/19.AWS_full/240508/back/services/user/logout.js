export default (req, res) => {
  res.cookie("user", "", {
    maxAge: 0,
    httpOnly: true,
    secure: true,
    signed: true,
  });
  res.json({ result: "ok" });
};
