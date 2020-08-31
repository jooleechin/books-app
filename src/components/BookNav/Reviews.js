import React from 'react' 
import moment from 'moment'
import axios from 'axios'

const {REACT_APP_JSONBOX_URL} = process.env


const Reviews = ({reviews}) => {
      const deleteArr = () => {
            axios.delete(`${REACT_APP_JSONBOX_URL}reviews/5f4cb6f326d36300178e51fc`)
            .then(res => console.log(res))
      }
      return ( 
            <div className="col-12">
                  {/* <h5>Reviews</h5> */}
                  {reviews && reviews.length === 0 
                        ? <p>No reviews.</p> 
                        : reviews.map(ele => {
                              return (
                                    <div className="reviews">
                                          <div className="d-flex flex-column mb-2">
                                                <p className="reviewTitle mb-0">{ele.title}</p>
                                                <time>{moment(ele._createdOn).format('LL')}</time>
                                          </div>
                                          <p>{ele.review}</p>
                                          <div className="d-flex align-items-center flex-row">
                                                <i className="far fa-user-circle fa-lg mr-2"></i>
                                                <p className="mb-0 reviewEmail">{ele.email}</p>
                                          </div>
                                          <hr />
                                    </div>
                              )
                        })
                  }
                  {/* <p onClick={deleteArr}>delete</p> */}
            </div>
      )
}

export default Reviews