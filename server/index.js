require("dotenv").config()
const express = require("express")
const app = express()
const massive = require("massive")
const session = require("express-session")
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

// -- MIDDLEWARE -- //
app.use(express.json())

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 72
  }
}))

app.use((req, res, next) => {
  if (!req.session.cart) {
    req.session.cart = []
  }
  next()
})

// -- MASSIVE -- //
massive(CONNECTION_STRING).then((database) => {
  app.set("db", database)
  console.log("database set!")
  console.log(database.listTables())
  app.listen(SERVER_PORT, () => {
    console.log(`listening on port ${SERVER_PORT}`)
  })
})