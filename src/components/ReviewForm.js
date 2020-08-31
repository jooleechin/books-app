import React, { useState } from 'react'
import { get } from 'lodash'
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap'

const ReviewForm = ({ handleReviewSubmit }) => {   
      const [state, setState] = useState({ email: "", review: "" });
      const [modal, setModal] = useState(false)
      const [errors, setErrors] = useState({})
      
      const toggle = () => setModal(!modal)

      const submit = (e) => {
            e.preventDefault()
            if (!validateFields()) return
            toggle()
            console.log(state)
            return handleReviewSubmit(state)
      }

      const onChange = (name, val) => {
            return setState(prevState => ({ ...prevState, [name]: val }))
      } 

      const validateFields = () => {
            const errors = {}
            if (!state.email) errors.email = 'Required'

            if (!state.review) errors.review = 'Required'

            setErrors({errors})
		return !Object.keys(errors).length
      }

      return (
            <div className="col-12 mb-3">
                  <h5>Submit a Review</h5>
                  <Form onSubmit={(e) => submit(e)}>
                        <FormGroup>
                              <Label for="email">Email</Label>
                              <Input type="email" name="email" 
                                    required
                                    // invalid={errors & errors.email ? true : false} 
                                    onChange={ (e) => onChange('email', e.target.value)}
                              />
                              <FormFeedback>{get(errors, 'email', '')}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                              <Label for="exampleText">Review</Label>
                              <Input type="textarea" name="review" 
                                    required
                                    // invalid={errors && errors.review ? true : false}
                                    onChange={ (e) => onChange('review', e.target.value)}
                              />
                              <FormFeedback>{get(errors, 'review', '')}</FormFeedback>
                        </FormGroup> 
                        <Button>Submit</Button>
                  </Form>
            </div>
      )
}

export default ReviewForm