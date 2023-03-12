import React from 'react'
import { Breadcrumb } from 'antd';


function Breadcrumbs({title}) {
  return (
    <Breadcrumb
    style={{marginTop:10}}
    items={[
      {
        href: '',
        title: (
          <>
            <span style={{color: '#61D9AB',fontWeight:600}}>Dashboard</span>
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
