function arr(){
for (var a=[],i=0;i<3;++i) a[i]=i+1;

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

a = shuffle(a);

if(localStorage.getItem('a1') === null){
    var a1 = [];
    var n = 3;
for (var i=0;i<n;++i){
	a1.push(a[i]);
	console.log(a[i]);
	}    
	console.log(a1)
    localStorage.setItem('a1', JSON.stringify(a1));

  var x = a[0];
  var Easy = document.getElementById('Easy');
  console.log(Easy);
  Easy.innerHTML = '';
  console.log(Easy);
  var b="<h2 class=\"neon pink\"><a href=\"qu_" ;
  var c=".html\">Easy</a></h2>";
  Easy.innerHTML=b+x+c;
  console.log(Easy)
  
}
}