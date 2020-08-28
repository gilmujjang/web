import React, { useEffect, useState } from 'react';


function Gettext() {
  const [lists, setLists] = useState([])
  const [text, setText] = useState([])
  const [clicked, setClicked] = useState([])


  let jsonfile2 = 'https://api.github.com/repos/gilmujjang/web/contents/small'
  let jsonfile1 = 'https://raw.githubusercontent.com/gilmujjang/web/master/small/'+clicked+'/index.html'

  useEffect(() => {
    fetch(jsonfile2)
      .then(response => response.json())
      .then(response => {
        setLists(response)
      })
   
    fetch(jsonfile1)
      .then(response => response.text())
      .then(response => {
        console.log(response)
        setText(response)
      })
  }, [])

  function createMarkup(t){
    return {__html:t};
  }


  return (
    <div className="contents">
      <div className="gitlists">
        {lists.map(list => <a className="gitlist" onClick={function(e) {
          e.preventDefault();
          setClicked(list.name)
        }}>{list.name}</a>)}
      </div>
      <div className="githtml">
        <div dangerouslySetInnerHTML={createMarkup(text)}></div>
      </div>
    </div>
  )
}

export default Gettext