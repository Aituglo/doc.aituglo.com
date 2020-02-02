/**
 * Raw content
 */

export const CONTENT = {
  home: {
    title: 'Aituglo — Documentation',
    description: 'A collection of cheatsheets',
    recentlyUpdated: 'Recently updated',
    updatedLabel: 'Updated'
  },

  // Home page banner (SiteHeader)
  siteHeader: {
    title: "Aituglo's cheatsheets",
    tagline: `I'm <a href='https://aituglo.com'>@Aituglo</a>. This cheatsheet system is based on the work of <a href='https://ricostacruz.com'>@rstacruz</a>`
  },

  // Top navigation (TopNav)
  topNav: {
    title: 'Aituglo',
    edit: 'Edit',
    editOnGithub: 'Edit this page on GitHub'
  },

  sheet: {
    suffix: 'cheatsheet'
  },

  // Callout at the bottom of the sheets
  relatedPostsCallout: {
    description: 'Over SIZE curated cheatsheets, by developers for developers.',
    link: 'Home'
  },

  // Search form in the home page
  searchForm: {
    defaultPlaceholder: 'Search SIZE+ cheatsheets',
    homePlaceholder: 'Search...',
    prefix: 'aituglo'
  },

  // Comments area in the sheets
  commentsArea: {
    suffix: 'for this cheatsheet.',
    link: 'Write yours!'
  },

  // 404 page
  notFound: {
    title: 'Not found',
    description:
      "Sorry, we don't have a cheatsheet for this yet. Try searching!",
    home: 'Back to home'
  }
}

const siteMetadata = {
  content: CONTENT,
  github: {
    repo: 'https://github.com/Aituglo/doc.aituglo.com',
    branch: 'master'
  },
  assets: {
    preview_host: 'https://assets.devhints.io/previews'
  },
  codefund: {
    enabled: false,
    token: 'c2c8bc62-c275-4c7a-a304-74335c5a1cd0'
  },
  googleAnalytics: {
    hostname: 'devhints.io',
    id: 'UA-106902774-1'
  }
}

export default siteMetadata
