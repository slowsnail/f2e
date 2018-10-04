import React from 'react'
import { Provider } from 'mobx-react'

import App from './App'

const shop = {
  sayHi() {
    return 'hello mobx'
  },
}

const Root = () => (
  <Provider shop={shop}>
    <App />
  </Provider>
)

export default Root

console.log('hello world')
