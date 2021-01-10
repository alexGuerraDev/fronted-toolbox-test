import { ADD_TEXT, REMOVE_TEXT, REMOVE_ALL } from './actionTypes'

const textReducer = (state = { listText: [] }, action) => {
  let arr = []
  switch (action.type) {
    case ADD_TEXT:
      arr = [...state.listText]
      arr.unshift(action.content)
      return {
        ...state,
        listText: arr
      }
    case REMOVE_TEXT:
      arr = [...state.listText]
      const exists = arr[action.key]
      if (exists) arr.splice(exists, 1);
      return {
        ...state,
        listText: arr
      }
    case REMOVE_ALL:
      return {
        ...state,
        listText: []
      }
    default:
      return state
  }
}

export default textReducer