import axios from "axios";

export const getBooks = () => {
  return (dispatch) => {
    try {
      dispatch({type: "FETCH_BOOKS_REQUETS"})
      axios('https://613b58be110e000017a4559f.mockapi.io/api/books')
        .then(({data}) => dispatch({type: "FETCH_BOOKS_SUCCESS", payload: data}))
    } catch (e) {
      dispatch({type: "FETCH_BOOKS_FAILED"})
    }
  }
}

