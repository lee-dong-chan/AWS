router.post("/regist", async (req, res) => {
  try {
    await sequelize.transaction(async (transaction)=>{
      const user=[]
      if (req.body.pw==req.body.pwr) user.push({...req.body})
    })
    res.redirect("/");
  } catch (err) {
    console.error(err);
  }
});


router.post("/regist", (req, res) => {
  if (req.body.pw == req.body.pwr) users.push({ ...req.body, pwr: undefined });
  res.redirect("/");
});