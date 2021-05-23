import React from 'react'
import "typeface-montserrat"
import "typeface-merriweather"
import "./src/css/normalize.css"

import "./src/css/style.scss"

import { AppProvider } from './src/context/contextApp'

export const wrapRootElement = ({ element }) => (
  <AppProvider>
    {element}
  </AppProvider>
)