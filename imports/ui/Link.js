import React from 'react'

import AddLink from './AddLink'
import LinksList from './LinksList'
import LinksVisibilityToggle from './LinksVisibilityToggle'
import PrivateHeader from './PrivateHeader'

export default () => {
  return (
    <div>
      <PrivateHeader title="Your Links" />
      <div className="wrapper">
        <LinksVisibilityToggle />
        <AddLink />
        <LinksList />
      </div>
    </div>
  )
}