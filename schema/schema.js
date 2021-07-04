const gql = require("graphql-tag")

var userSchema = require("./user")
var docSchema = require("./document")


const schema = gql`

 type Query {
    _empty : User
}

 type Mutation {
    _empty : String
}

${userSchema}
${docSchema}
    

`


module.exports = schema