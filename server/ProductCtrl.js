module.exports = {
  getProducts: async (req, res) => {
    const db = req.app.get("db")

    try {
      const data = await db.getMensProducts()
      res.status(200).send(data)
    } catch (err) {
      res.sendStatus(404)
    }
  },

  updateProduct: async (req, res) => {
    const { newName } = req.body
    const { prodId } = req.params
    console.log("-- THIS IS THE PROD ID --", prodId)
    console.log("-- THIS IS THE NEW NAME --", newName)
    res.sendStatus(200)
  }
}