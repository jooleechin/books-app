import React from 'react' 
import {Link} from 'react-router-dom'

const Book = ({ title, author, blurb, bookID, img, index, key }) => {
      return (
            <div className="col-12">
                  <Link className="book-item d-flex flex-row no-wrap align-items-center mb-3" to={{pathname: `/book/${bookID}`, state: {title, author, blurb, bookID, img}}}>
                        <div>
                              <div className="bookImgBox">
                                    <img src={img} alt={title + 'img'}/>
                              </div>
                        </div>
                        <div className="book-content d-flex justify-content-center flex-column pl-2">
                              <h4 className="bookTitle">{title.toLowerCase()}</h4>
                              <p className="mb-0 bookAuthor">{author}</p>
                        </div>
                  </Link>
            </div>
      )
}

export default Book