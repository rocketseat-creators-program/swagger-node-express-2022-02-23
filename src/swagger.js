const swaggerAutogen = require('swagger-autogen')()

const genericDocumentation = {
  info: {
    title: 'Swagger para Node/Express',
    description: 'Documentação de um API Node/Express com Swagger - Experts Club',
    version: "1.0.0"
  },
  host: 'localhost:3333',
}

const outputFile = 'swagger-output.json'
const endpointsFiles = ['src/routes.js']

swaggerAutogen(outputFile, endpointsFiles, genericDocumentation)