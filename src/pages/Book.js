import React, {useState, useEffect} from "react"
import axios from 'axios'
import {useHistory} from 'react-router'
import About from '../components/About'
import Reviews from '../components/Reviews'
import BookNav from '../components/BookNav'
import Form from '../components/ReviewForm'

const {REACT_APP_JSONBOX_URL} = process.env

const Book = () => {
      const [reviews, setReviews] = useState([]) 
      const [navItem, setNavItem] = useState("Reviews") 
      
      const history = useHistory()
      const { title, author, img, blurb, bookID } = history.location.state
      const goBack = () => history.goBack()

      const handleReviewSubmit = async(state) => {
            console.log(history)
            let { email, review } = state
            if (!email || !review) return
            let body = {
                  email, 
                  review,
                  bookID
            }
            console.log(body)
            const { data, status } = await axios.post(`${REACT_APP_JSONBOX_URL}reviews`, body)
            if (status === 200) {
                  setReviews([...reviews, data])
                  setNavItem("Reviews")
            }
      }  

      const navClick = (navItem) => {
            console.log(navItem)
            setNavItem(navItem)
      }

      useEffect(() => {
            const fetchReviewsByBookID = async() => {
                  let {data, status} = await axios.get(`${REACT_APP_JSONBOX_URL}reviews`)
                  if (status === 200) { 
                        let reviews = data.filter(ele => ele.bookID === bookID)
                        setReviews(reviews)
                  }
            }
            fetchReviewsByBookID()
      }, [reviews])

      const renderNav = () => {
            switch (navItem) {
                  case "Reviews":
                        return <Reviews reviews={reviews} />
                  case "Submit": 
                        return <Form handleReviewSubmit={handleReviewSubmit} />
                  default:
                        return <About blurb = {blurb} />
            }
      }
      
      return ( 
            <div className="bookDetail container-fluid pl-0 pr-0" style={{backgroundColor: '#FFCB01'}}>
                  <div className="row pt-3">
                        <div className="col-12 d-flex justify-content-center">
                                    <i className="fas fa-long-arrow-alt-left fa-2x" onClick={goBack}></i>
                                    <h5>Book Detail</h5>
                        </div>
                  </div>
                  <div className="container mt-1" style={{height: '100vh'}}>
                        <div className="bookDetailBorder">
                              <div className="row mt-3">
                                    <div className="col-12 d-flex justify-content-center">
                                          <div className="bookImgBox">
                                                <img src={img} />
                                          </div>
                                    </div>
                              </div>
                              <div className="row mt-3">
                                    <div className="col-12 d-flex align-items-center flex-column">
                                          <h5 style={{textTransform: 'capitalize'}}>{title.toLowerCase()}</h5>
                                          <p>{author}</p>
                                    </div>
                              </div>

                              <div className="row pr-3 pl-3">
                                    <BookNav 
                                          navClick={navClick}
                                    />
                              </div>
                              <div className="row pr-3 pl-3">
                                    {renderNav()} 
                              </div>
                              {/* <div className="row">
                                    <div className='col-12'>
                                          <h5>About</h5>
                                          <p>{blurb}</p>
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-12">
                                          <h5>Reviews</h5>
                                          {reviews && reviews.length === 0 
                                                ? <p>No reviews.</p> 
                                                : reviews.map(ele => {
                                                      return (
                                                            <div>
                                                                  <p>{ele.email}</p>
                                                                  <p>{ele.review}</p>
                                                            </div>
                                                      )
                                                })
                                          }
                                          <Form  
                                                handleReviewSubmit = {handleReviewSubmit}
                                          />
                                          </div>
                              </div> */}
                        </div>
                  </div>
            </div>
      )
}

export default Book