
const axios = require('axios')
const {REACT_APP_JSONBOX_URL} = process.env

let keys = ["title", "author", "blurb", "img", "publisher"]

const getTXT = () => {
      axios.get(`https://raw.githubusercontent.com/moonvd/hw/master/books.txt`)
      .then(res => {
            let data = res.data 
            let split = data.split('\n\n').map(ele => {
                  return ele.split('\n')
            })
            split.forEach((el, idx) => {
                  var obj = {};
                  for (var i = 0, l = el.length; i < l; i++) {
                        obj["key"] = idx
                        if (keys[i] === "author") {
                              let sanitizeArr = el[i].substring(3).split("|")
                              let ele = sanitizeArr[0].toString().trim()
                              let publisher = sanitizeArr[1].toString().trim()
                              obj[keys[i]] = ele
                              obj["publisher"] = publisher
                        } else {
                              obj[keys[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
                        }
                  }
                  axios.post(`${REACT_APP_JSONBOX_URL}/books`, 
                        obj,
                        {
                              headers: {
                                    'content-type': 'application/json'
                              }
                        }
                  )
                  .then(res => console.log(res))
                  .catch(err => console.log('ERROR', err))
                  return obj;
            });
      
      }) 
      .catch(err => console.log(err))
} 

getTXT()