let cursor = document.getElementById('cursor');
function cursorFuntion(e){
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
}
