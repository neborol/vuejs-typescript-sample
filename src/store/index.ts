import Vue from 'vue'
import Vuex from 'vuex'

import todos from './todos'
// import { counter } from './counter'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    todos
  }
})
// export const store = new Vuex.Store(todos)

