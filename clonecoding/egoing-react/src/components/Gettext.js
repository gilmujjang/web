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

  function createMarkup(t){
    return {__html:t};
  }


  return (
    <div>
      <div dangerouslySetInnerHTML={createMarkup(text)}></div>
    </div>
  )
}

export default Gettext