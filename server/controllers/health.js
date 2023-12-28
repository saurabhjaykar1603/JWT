const apiHealth = (req, res) => {
  res.json({
    status: "ok",
    message: "Server health is Good",
  });
};
export {apiHealth}