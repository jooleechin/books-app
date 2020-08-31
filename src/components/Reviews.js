import React from 'react' 
import moment from 'moment'

const Reviews = ({reviews}) => {
      console.log(reviews)
      return ( 
            <div className="col-12">
                  <h5>Reviews</h5>
                  {reviews && reviews.length === 0 
                        ? <p>No reviews.</p> 
                        : reviews.map(ele => {
                              return (
                                    <div className="reviews">
                                          <div className="d-flex align-items-center flex-row">
                                                <i className="far fa-user-circle fa-lg mr-2"></i>
                                                <p className="mb-0 reviewEmail">{ele.email}</p>
                                          </div>
                                          <time>{moment(reviews._createdOn).format('LL')}</time>
                                          <p>{ele.review}</p>
                                          <hr />
                                    </div>
                              )
                        })
                  }
            </div>
      )
}

export default Reviews