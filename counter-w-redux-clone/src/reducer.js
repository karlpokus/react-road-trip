export default function(state = {v: 0}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        v: state.v + action.v
      }
    default:
      return state
  }
}
