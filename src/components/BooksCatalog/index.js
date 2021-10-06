import React, {useEffect} from 'react';
import {getBooks} from "../../redux/actions/catalogActions";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../Spinner";

const BooksCatalog = () => {
  const dispatch = useDispatch()
  const {books, isLoading, error} = useSelector(store => store.catalog)

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])
  if (isLoading) {
    return <Spinner/>
  }
  return (
    <div className='row'>
      {
        books.map(item =>
          <div className='col-md-3' key={item.id}>
            <div className="card">
              <img src={item.coverImage} className="card-img-top" alt={item.title}/>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Price: {item.price}$</p>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>)
      }
    </div>
  );
};

export default BooksCatalog;