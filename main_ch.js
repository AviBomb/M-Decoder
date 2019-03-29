function arr(){
 console.log(5); 
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
    // Init array
    var a1 = [];
    var n = 3;
    // Add to array
for (var i=0;i<n;++i){
	a1.push(a[i]);
	console.log(a[i]);
	}    
	console.log(a1)
    // Set to localStorage
    localStorage.setItem('m1', JSON.stringify(a1));

  var x = a[0];
  var Easy = document.getElementById('Easy');
  console.log(Easy);
  Easy.innerHTML = '';
  console.log(Easy);
  var b="<h2 class=\"neon pink\"><a href=\"qu_" ;
  var c=".html\">Easy</a></h2>";
  Easy.innerHTML=b+x+c;
  console.log(Easy)
  console.log(a[0],a[1],a[2],a[3],a[4])
  for(var i=0;i<n;++i){
  	var r=i-1;
  	var t=i+1;
	if(r==-1)
		r=(n-1);
	if(t==n)
		t=0;
	console.log(r);
	console.log(t);
	if(a[i]==1){
		var x=a[r];
		var y=a[t];
		console.log(x);
		console.log(y);
		var l1 = document.getElementById('l1');
		var r1 = document.getElementById('r1');
		console.log(l1);
		console.log(r1);
		l1.innerHTML = '';
		r1.innerHTML = '';
		console.log(l1)
		console.log(r1)
		var b="<a href=\"qu_";
		var c=".html><div class=\"triangle-left cl\"></div></a>";   
		console.log(b)
		console.log(c)
		l1.innerHTML=b+x+c;
		r1.innerHTML=b+y+c;
		console.log(l1)
		console.log(r1)
	}
	if(a[i]==2){
		var x=a[r];
		var y=a[t];
		console.log(x)
		console.log(y)
		var l2 = document.getElementById('l2');
		var r2 = document.getElementById('r2');
		console.log(l2)
		console.log(r2)
		l2.innerHTML = '';
		r2.innerHTML = '';
		console.log(l2)
		console.log(r2)
		var a="<a href=\"qu_";
		var b=".html><div class=\"triangle-left cl\"></div></a>";   
		console.log(a)
		console.log(b)
		l2.innerHTML=a+x+b;
		r2.innerHTML=a+y+b;
		console.log(l2)
		console.log(r2)
	}
	if(a[i]==3)	{
		var x=a[r];
		var y=a[t];
		var l3 = document.getElementById('l3');
		var r3 = document.getElementById('r3');
		l3.innerHTML = '';
		r3.innerHTML = '';
		var a="<a href=\"qu_";
		var b=".html><div class=\"triangle-left cl\"></div></a>";   
		l3.innerHTML=a+x+b;
		r3.innerHTML=a+y+b;
	}
	}
}
}