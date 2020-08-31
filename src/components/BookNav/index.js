import React, {useState} from 'react'

const BookNav = ({navClick}) => {
      const [isActive, setActive] = useState('About')
      const toggleClass = (e) => {
            setActive(e)
            navClick(e)
      }

      return (
            <div className="col-12 bookNav">
                  <ul className="col-12 d-flex justify-content-between flex-row no-wrap pl-0 pr-0"> 
                        <li onClick={e => toggleClass(e.target.innerText)} className={isActive === 'About' ? 'activeNav' : ''}>about</li>
                        <li onClick={e => toggleClass(e.target.innerText)} className={isActive === 'Reviews' ? 'activeNav' : ''}>reviews</li>
                        <li onClick={e => toggleClass(e.target.innerText)} className={isActive === 'Submit' ? 'activeNav' : ''}>submit</li>
                  </ul>
            </div>
      )
}

export default BookNav