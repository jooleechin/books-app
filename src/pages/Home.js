import React, {useState, useEffect, Fragment} from "react"
import axios from 'axios'
import Book from '../components/Book'

const {REACT_APP_JSONBOX_URL} = process.env

const Home = () => {
      const [books, setBooks] = useState([])

      const fetchBooks = async() => {
            const { data, status } = await axios.get(`${REACT_APP_JSONBOX_URL}/books`)
            if (status === 200) setBooks(data)
      }

      useEffect(() => {
            fetchBooks()
      }, [])

      return (
            <Fragment>
                  <div className="container">
                        <div className="row mt-3" style={{backgroundColor:"white"}}>
                              <div className="col-12">
                                    <h1>Books</h1>
                              </div>
                        </div>
                  </div>
                  <div className="container-fluid" style={{backgroundColor: '#FFCB01', borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}>
                        <div className="container">
                              <div className="row pt-3">
                                    {books.map((book, idx) => (
                                          <Book
                                                title={book.title}
                                                author={book.author}
                                                blurb={book.blurb}
                                                img={book.img}
                                                index={idx}
                                                bookID={book._id}
                                                key={book.key}
                                          />
                                    ))}
                              </div>
                        </div>
                  </div>
            </Fragment>
      )
}

export default Home