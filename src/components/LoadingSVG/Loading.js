import React from 'react'
import ContentLoader from 'react-content-loader'

const Grid = props => {
  return (
    <ContentLoader
      viewBox="0 0 100vw 450"
      height={450}
      width='100vw'
      
      {...props}
    >
      <rect x="110" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="380" y="10" rx="5" ry="5" width="260" height="280" />
      <rect x="650" y="10" rx="5" ry="5" width="260" height="140" />
      <rect x="110" y="160" rx="5" ry="5" width="260" height="280" />
      <rect x="380" y="300" rx="5" ry="5" width="260" height="140" />
      <rect x="650" y="160" rx="5" ry="5" width="260" height="280" />
      <rect x="920" y="10" rx="5" ry="5" width="260" height="280" />
      <rect x="920" y="300" rx="5" ry="5" width="260" height="140" />


    </ContentLoader>
  )
}

Grid.metadata = {
  name: 'baptiste fkt',
  github: 'baptistefkt',
  description: 'Three column grid layout',
  filename: 'Grid',
}

export default Grid