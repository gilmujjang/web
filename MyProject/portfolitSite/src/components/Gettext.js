import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet"

function Gettext() {

  const [lists, setLists] = useState([])
  const [text, setText] = useState([])
  const [clicked, setClicked] = useState([])
  const [jsfile, setJsfile] =useState([])


  let jsonfile2 = 'https://api.github.com/repos/gilmujjang/web/contents/small'
  let jsonfile1 = 'https://raw.githubusercontent.com/gilmujjang/web/master/small/'+clicked+'/index.html'
  let js = 'https://cdn.jsdelivr.net/gh/gilmujjang/web/small/'+clicked+'/main.js'
  useEffect(() => {
    fetch(jsonfile2)
      .then(response => response.json())
      .then(response => {
        setLists(response)
      })
  }, [])


  function createMarkup(t){
    return {__html:t};
  }

  fetch(jsonfile1)
      .then(response => response.text())
      .then(response => {
        setText(response)
      })

  fetch(js)
    .then(response => response.text())
    .then(response => {
      setJsfile(response)
    })



  return (
    <div className="contents">
      <Helmet>
        <script src={js} defer></script>
     </Helmet>
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
