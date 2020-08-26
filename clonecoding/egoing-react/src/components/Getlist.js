import React, { useEffect, useState } from 'react';


function Getlist(props) {

  const [content, setContent] = useState([])

  useEffect(() => {

    let jsonfile = 'https://api.github.com/repos/gilmujjang/web/contents/small'
    fetch(jsonfile)
      .then(response => response.json())
      .then(response => {
        setContent(response)
      })
  }, [])


  return (
    <div>
      {content.map(content => <div>{content.name}</div>)}
    </div>
  )
}

export default Getlist