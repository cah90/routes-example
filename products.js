module.exports = {
  all(req, res) {
    const requestMethod = req.method
    const baseUrl = req.hostname
    const requestUri = req.originalUrl

    return res.send (`
    You made a ${requestMethod} HTTP request to http://${baseUrl}:8080${requestUri}.
    According to the REST API this means that we would return all
    products from the DB.
    `)
  },

  product(req, res) {
    const requestMethod = req.method
    const baseUrl = req.hostname
    const requestUri = req.originalUrl

    return res.send (`
    You made a ${requestMethod} HTTP request to http://${baseUrl}:8080${requestUri}.
    According to the REST API this means that we would return the product
    with the requested id.
    `)
  },

  create(req, res) {
    const requestMethod = req.method
    const baseUrl = req.hostname
    const requestUri = req.originalUrl
    const requestBody = req.body
    let requestBodyStr = []
    
    for(key in requestBody)  {
      requestBodyStr.push(`${key} = ${requestBody[key]}`)
    }

    console.log('requestBody',requestBody)
    console.log('requestBodyStr',requestBodyStr)
    
    let requestBodyFinal = requestBodyStr.join("\n    ")
    console.log('requestBodyFinal',requestBodyFinal)
    
    return res.send (`
    You made a ${requestMethod} HTTP request to http://${baseUrl}:8080${requestUri}.
    According to the REST API this means that we would create a new product with these
    properties.

    You sent the HTTP payload:
    
    ${requestBodyFinal}   

    `)
  },

  edit(req, res) {
    const requestMethod = req.method
    const baseUrl = req.hostname
    const requestUri = req.originalUrl

    return res.send (`
    You made a ${requestMethod} HTTP request to http://${baseUrl}:8080${requestUri}.
    According to the REST API this means that we would edit the product
    with the requested id.
    `)  },

  delete(req, res) {
    const requestMethod = req.method
    const baseUrl = req.hostname
    const requestUri = req.originalUrl

    return res.send (`
    You made a ${requestMethod} HTTP request to http://${baseUrl}:8080${requestUri}.
    According to the REST API this means that we would delete the product
    with the requested id.
    `)  }
}