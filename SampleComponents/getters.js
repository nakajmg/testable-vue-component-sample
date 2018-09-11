export default {
  todos(state) {
    return state.originalTodos.map(todo => {
      // todoを加工する処理
      return todo
    })
  },
  filteredTodos(state, getters) {
    return getters.todos.filter(todo => {
      return todo.done === false
    })
  },
  yabaiGetter(state, getters, rootState, rootGetters) {
    const userTodos = getters.todos.filter(todo => {
      return todo.author === rootState.userName
    })
    return userTodos.filter(todo => {
      return new Date(todo.date).getMonth() === rootGetters.currentDate.getMonth()
    })
  },
}
