const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require("morgan")

const app = express()
const port = 3000

app.use(morgan('dev'));
app.use(
    '/',
    createProxyMiddleware({
      target: 'https://hm.com/',
      changeOrigin: true,
    })
  );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})