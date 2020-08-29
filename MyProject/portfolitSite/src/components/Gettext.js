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
  }, [])


  function createMarkup(t){
    return {__html:t};
  }

  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  fetch(jsonfile1)
      .then(response => response.text())
      .then(response => {
        setText(response)
      })


  return (
    <div className="contents">
      <div className="gitlists">
        {lists.map(list => <a className="gitlist" onClick={function(e) {
          e.preventDefault();
          setClicked(list.name)
        }}>{list.name}</a>)}
      </div>
      <button onClick={forceUpdate}>re-render</button>
      <div className="githtml">
        <div dangerouslySetInnerHTML={createMarkup(text)}></div>
      </div>
    </div>
  )
}

export default Gettext