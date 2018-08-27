/* @flow */
/* global location, graphql */

import Layout from '../containers/Layout'
import Link from 'gatsby-link'
import React from 'react'

import { CONTENT } from '../../config'
import ExternalSearchLinks from '../components/ExternalSearchLinks'
import { SearchProvider } from '../containers'

export type PageProps = {
  data: {
    siteSearchIndex: any
  }
}

export type Props = {|
  keyword: ?string, // => 'rails' | null
  title: string, // => 'Not Found'
  description: string, // => 'Try searching!'
  home: string, // => 'Back to home'
  siteSearchIndex: any
|}

/**
 * The 404 page.
 */

export const NotFoundPage = ({ data }: PageProps) => {
  const pathname: ?string =
    typeof location !== 'undefined' ? location.pathname : null
  const keyword: ?string = keywordify(pathname)

  return (
    <Layout>
      <NotFoundPageView
        keyword={keyword}
        title={CONTENT.notFound.notFound}
        description={CONTENT.notFound.description}
        home={CONTENT.notFound.home}
        siteSearchIndex={data && data.siteSearchIndex}
      />
    </Layout>
  )
}

/**
 * The 404 page view.
 */

export const NotFoundPageView = ({
  keyword,
  title,
  description,
  home,
  siteSearchIndex
}: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      {keyword && <ExternalSearchLinks keyword={keyword} />}
      <SearchProvider siteSearchIndex={siteSearchIndex} />
      <Link to='/'>{home}</Link>
    </div>
  )
}

/**
 * Convert pathname to keywords.
 *
 *     keywordify('/gatsby') => 'gatsby'
 *     keywordify('/rails/models.html') => 'rails-models'
 *     keywordify(null) => null
 */

function keywordify (str: ?string): ?string {
  if (!str) return null

  return str
    .slice(1)
    .replace(/^cheatsheets-ng\//, '')
    .replace(/\//g, '-')
    .replace(/ /g, '_')
    .replace(/\.html$/, '')
}

export default NotFoundPage

export const query = graphql`
  query SearchIndexExampleQuery {
    siteSearchIndex {
      index
    }
  }
`
