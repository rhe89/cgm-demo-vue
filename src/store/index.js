import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    counterHistory: []
  },
  mutations: {
    increment(state){
      state.counter++;
      state.counterHistory.push(state.counter);
    }
  },
  actions: {   
  },  
  modules: {
  }
})
