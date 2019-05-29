module.exports = {
  getProduct: async (req, res) => {
    const db = req.app.get("db")

    try {
      const data = await db.getMensProducts()
      res.status(200).send(data)
    } catch (err) {
      res.sendStatus(404)
    }
  }
}