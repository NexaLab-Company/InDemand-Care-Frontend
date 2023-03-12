import React from 'react'
import { Breadcrumb } from 'antd';


function Breadcrumbs({title}) {
  return (
    <Breadcrumb
    items={[
      {
        href: '',
        title: (
          <>
            <span style={{color: '#C72C41'}}>Dashboard</span>
          </>
        ),
      },
      {
        title: title,
      },
    ]}
  />
  )
}

export default Breadcrumbs
