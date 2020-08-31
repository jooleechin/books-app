import React from 'react' 

const About = ({blurb}) => {
      return (
            <div className="col-12">
                  <h5>About</h5>
                  <p>{blurb}</p>
            </div>
      )
}

export default About