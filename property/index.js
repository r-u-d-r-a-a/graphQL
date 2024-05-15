import { addProperty, editProperty, deleteProperty } from './mutation/propertyMutation.js'
import { listProperties, getProperty } from './query/propertyQuery.js'


export const typeDefs = `#graphql
  # OBJECT TYPES

  type Property {
    id: ID!
    title: String!
    #description: String
    #type: String
    #location: String!
    #price: Float!
    bedroom: Int!
    #bathroom: Int!
    #area: Float!
    #image: [String]
  }

  input PropertyToEdit {
    id: ID!
    title: String!
    bedroom: Int!
  }

  input PropertyToAdd {
    title: String!
    bedroom: Int!
  }

  type Query {
    properties: [Property],
    property(id: ID!): Property
  }

  type Mutation {
    addProperty(propertyToAdd: PropertyToAdd!): Property,
    editProperty(propertyToEdit: PropertyToEdit!): Property,
    deleteProperty(id: ID!): [Property],
  }
`

export const resolvers = {
    // Resolvers for Queries
    Query: {
        properties: () => listProperties(),
        property: (_, { id }) => getProperty(id)
    },

    // Resolvers for Mutations
    Mutation: {
        addProperty: (_, { propertyToAdd }) => addProperty(propertyToAdd),
        editProperty: (_, { propertyToEdit }) => editProperty(propertyToEdit),
        deleteProperty: (_, { id }) => deleteProperty(id)
    }
}