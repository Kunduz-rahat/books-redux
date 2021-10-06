const inicialState = {
  books: [],
  error: false,
  isLoading: false
}
export const catalogReducer =(state = inicialState,  action) =>{
  switch (action.type){
    case "FETCH_BOOKS_REQUETS":
      return {...state, isLoading: true}
    case "FETCH_BOOKS_SUCCESS":
      return {...state, books: action.payload, isLoading: false }
    case "FETCH_BOOKS_FAILED":
      return {...state, isLoading: false, error: true}
    default:
      return state
  }
}