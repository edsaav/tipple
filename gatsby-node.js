// const data = require('./src/data/recipes.json')
// const path = require(`path`)

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions

//   data.forEach(node  => {
//     createPage({
//       path: node.name.toLowerCase().replace(/ /g,"-"),
//       component: path.resolve(`./src/templates/recipe.js`),
//       context: {
//         // Data passed to context is available
//         // in page queries as GraphQL variables.
//         test: 'Test Field',
//       },
//     })
//   })
// }