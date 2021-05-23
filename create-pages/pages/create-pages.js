const { slash } = require( `gatsby-core-utils` )
const getPages = require(`./queries/get-pages`)

const singlePageTemplate = require.resolve(`../../src/templates/page-single.js`)
const pageArchiveTemplate = require.resolve(`../../src/templates/page-archive.js`)

module.exports = async gatsbyUtilities => {
    const pages = await getPages(gatsbyUtilities)
    if (!pages?.length) {
        return
    }
    await createSinglePages({ pages, gatsbyUtilities })
    await createPageArchive({ pages, gatsbyUtilities })
}


const createSinglePages = async ({ pages, gatsbyUtilities }) => (
    pages.map(({ node: { uri, id } }) => (
        uri && id && gatsbyUtilities.actions.createPage({
            path: decodeURIComponent(uri),
            component: slash(singlePageTemplate),
            context: { id },
        })
    ))
)

const createPageArchive = async ({ pages, gatsbyUtilities }) => (
    gatsbyUtilities.actions.createPage({
        path: '/pages',
        component: slash(pageArchiveTemplate),
        context: { pages },
    })
)
