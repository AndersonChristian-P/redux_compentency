require("dotenv").config()
const express = require("express")
const app = express()
const massive = require("massive")
const { SERVER_PORT, CONNECTION_STRING } = process.env
const prodCtrl = require("./ProductCtrl")

// -- MIDDLEWARE -- //
app.use(express.json())

// -- MASSIVE -- //
massive(CONNECTION_STRING).then((database) => {
  app.set("db", database)
  console.log("database set!")
  console.log(database.listTables())
  app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}`)
  })
})

// -- ENDPOINTS -- //
app.get("/api/products", prodCtrl.getProducts)
app.put("/api/product/:prodId", prodCtrl.updateProduct)