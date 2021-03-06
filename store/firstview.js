export const state = () => ({
  entered: false,
  completed: false,
  killed: false
})

export const getters = {
  entered: state => state.entered,
  completed: state => state.completed,
  killed: state => state.killed
}

export const mutations = {
  enter (state) {
    state.entered = true
    console.log('enter')
  },
  complete (state) {
    state.completed = true
    console.log('complete')
  },
  kill (state) {
    state.killed = true
    console.log('kill')
  }
}
