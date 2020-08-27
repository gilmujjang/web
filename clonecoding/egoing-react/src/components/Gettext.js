import React, { useEffect, useState } from 'react';


function Gettext() {
  const [text, setText] = useState([])
  let jsonfile = 'https://raw.githubusercontent.com/gilmujjang/web/master/small/ring_of_fire/index.html'


  useEffect(() => {
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
      <iframe id="if"></iframe>
    </div>
  )
}

export default Gettext