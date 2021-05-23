const { slash } = require( `gatsby-core-utils` )
const chunk = require(`lodash/chunk`)
const getProducts = require(`./queries/get-products`)
const getWpSettingsProductsPerPage = require(`./queries/get-wp-settings-products-per-page`)

const singleProductTemplate = require.resolve(`../../src/templates/product-single.js`)
const productArchiveTemplate = require.resolve(`../../src/templates/product-archive.js`)

module.exports = async gatsbyUtilities => {
    const products = await getProducts(gatsbyUtilities)
    if (!products.length) {
        return
    }
    await createAllProducts({ products, gatsbyUtilities })
    await createSingleProductPages({ products, gatsbyUtilities })
}
const createAllProducts = async ({ products, gatsbyUtilities }) => {
    return gatsbyUtilities.actions.createPage({
        path: `/products`,
        component: slash(productArchiveTemplate),
        context: {
            products
        },
    })
}
// const createProductsArchive = async ({ products, gatsbyUtilities }) => {
//     const productsPerPage = await getWpSettingsProductsPerPage(gatsbyUtilities)
//
//     const productsChunkedIntoArchivePages = chunk(products, productsPerPage)
//     const totalPages = productsChunkedIntoArchivePages.length
//
//     return Promise.all(
//         productsChunkedIntoArchivePages.map(async (_products, index) => {
//             const pageNumber = index + 1
//
//             const getPagePath = page => {
//                 if (page > 0 && page <= totalPages) {
//
//                     return page === 1 ? `/products` : `/products/${page}`
//                 }
//
//                 return null
//             }
//
//             await gatsbyUtilities.actions.createPage({
//                 path: getPagePath(pageNumber),
//                 component: slash(productArchiveTemplate),
//                 context: {
//                     offset: index * productsPerPage,
//                     productsPerPage,
//                     nextPagePath: getPagePath(pageNumber + 1),
//                     previousPagePath: getPagePath(pageNumber - 1),
//                 },
//             })
//         })
//     )
// }

const createSingleProductPages = async ({ products, gatsbyUtilities }) =>
  // получаем категррию и вставляем в роут
    Promise.all(
        products.map(({ previous, product, next }) => {
            return gatsbyUtilities.actions.createPage({
                path: `/products/${decodeURIComponent(product.slug)}`,
                component: slash(singleProductTemplate),
                context: {
                    id: product.id,
                    previousProductId: previous ? previous.id : null,
                    nextProductId: next ? next.id : null,
                },
            })
        })
    )
