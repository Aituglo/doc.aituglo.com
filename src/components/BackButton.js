/* @flow */
import Link from 'gatsby-link'
import React from 'react'
import css from 'styled-jsx/css'

export const BackButton = () => {
  return (
    <span>
      <Link className='home back-button' to='/' />
      <style jsx>{STYLE}</style>
    </span>
  )
}

export const STYLE = css`
  @import 'src/styles/common';

  :global(.back-button) {
    text-decoration: none;
    width: 48px;
    height: 48px;
    line-height: calc(48px - 2px);
    text-align: center;
    display: inline-block;
    border-radius: 50%;
    transition: all 100ms linear;

    /* Smaller on mobile */
    @media (max-width: 480px) {
      width: 32px;
      height: 32px;
      line-height: calc(32px - 2);
    }

    /* Colors */
    &,
    &:visited {
      color: var(--text-mute);
    }

    /* Active */
    &:hover,
    &:focus {
      color: white;
      background: var(--brand-a);
      opacity: 1;
    }

    /* Icon */
    &::before {
      content: '';
      /* TODO @include ion-md-arrow-back(24px, $base-text); */
      vertical-align: middle;
    }

    &:hover::before,
    &:focus::before {
      /* TODO @include ion-md-arrow-back(24px, white); */
    }

    /* Icon: smaller on mobile */
    @media (max-width: 480px) {
      &::before {
        font-size: 16px;
      }
    }
  }
`

export default BackButton
