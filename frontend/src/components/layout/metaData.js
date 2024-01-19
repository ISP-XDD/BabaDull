import React from 'react'
import { Helmet } from 'react-helmet'

const metaData = ({title}) => {
  return (
    <Helmet>
        <title>{`${title} - BabaDull`}</title>
    </Helmet>
  )
}

export default metaData
