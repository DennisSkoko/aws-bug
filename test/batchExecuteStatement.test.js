'use strict'

const dotenv = require('dotenv')
const RDSDataService = require('aws-sdk/clients/rdsdataservice')

dotenv.config()

let db = null

beforeAll(() => {
  db = new RDSDataService({ region: process.env.REGION })
})

it('rejects with an error message', () => {
  const result = db
    .batchExecuteStatement({
      resourceArn: process.env.ARN_DB,
      secretArn: process.env.ARN_SECRET,
      sql: 'Invalid sql and this should very much fail',
      // parameterSets: [[{ name: 'what', value: { isNull: true } }]]
    })
    .promise()

  return expect(result).rejects.toThrow('SQL syntax')
})
