import * as View from './view'

// commenting away these two lines makes view update model properly
import * as Model from './model'
console.log('Model.value =', Model.value)

function updateView() {
  document.getElementById('root').innerHTML = View.getView()
}

updateView()

if (module.hot) {
  module.hot.accept(() => {
    updateView()
  })
}
