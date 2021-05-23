const createAllProducts = require(`./create-pages/products/create-products`)
const createAllPages = require(`./create-pages/pages/create-pages`)

exports.createPages = async gatsbyUtilities => {
    await createAllProducts(gatsbyUtilities)
    await createAllPages(gatsbyUtilities)
}
