import React from 'react'

const BookNav = ({navClick}) => {
      return (
            <div className="col-12 bookNav">
                  <ul className="col-12 d-flex justify-content-between flex-row no-wrap pl-0 pr-0"> 
                        <li onClick={e => navClick(e.target.innerText)}>about</li>
                        <li onClick={e => navClick(e.target.innerText)}>reviews</li>
                        <li onClick={e => navClick(e.target.innerText)}>submit</li>
                  </ul>
            </div>
      )
}

export default BookNav