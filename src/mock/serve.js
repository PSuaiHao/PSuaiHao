const express = require("express")
const Mock = require("mockjs")

const loginRes = require("./mommon/login.json")
const port = 3030
const app = express()

app.post("/sys/login", (require, response) => {
  console.log(require)
  console.log(response)
  response.json(Mock.mock(loginRes))
})

app.listen(port, () => {
  console.log(`我启动服务了${port}`)
})
