import React, { useEffect, useState } from 'react';


function Gettext() {
  const [text, setText] = useState([])

  useEffect(() => {
    let jsonfile = 'https://raw.githubusercontent.com/gilmujjang/web/master/small/Analog-clock/index.html'
    fetch(jsonfile)
      .then(response => response.text())
      .then(response => {
        setText(response)
    })
  }, [])

  function createMarkup(text){
    return {__html:text};
  }
  

  return (
    <div>
      <div dangerouslySetInnerHTML={createMarkup(text)}></div>
    </div>
  )
}

export default Gettext