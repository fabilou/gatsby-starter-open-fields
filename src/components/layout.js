import React from "react"

import Seo from "./seo"

import * as style from "./layout.module.sass"

const Layout = ({ children, description, image, path, title }) => (

  <div>
    <Seo
      description={description}
      image={image}
      path={path}
      title={title}
    />
    <main>
      {children}
    </main>
  </div>

)

export default Layout
