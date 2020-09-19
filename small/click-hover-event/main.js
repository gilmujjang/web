function cursorFuntion(e){
  let cursor = document.getElementById('cursor');
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
}

function cursorOut(){
  let cursor = 0;
}