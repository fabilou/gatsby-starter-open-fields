import React from "react"

import * as style from "./layout.module.sass"

const Layout = ({children}) => (
  <div className={style.site}>
    {children}
  </div>
)

export default Layout
