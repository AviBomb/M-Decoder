document.getElementById('myForm').addEventListener('submit', saveAns);

function saveAns(e){
  fturns();
  var Answer =document.getElementById('Answer').value;

    if(!validateForm(Answer)){
    return false;
  }
var m = {
      Answer: Answer
  }
if(localStorage.getItem('m2') === null){
    var m2 = [];
    m2.push(m);
    localStorage.setItem('m2', JSON.stringify(m2));
  } 
else {
    var m2 = JSON.parse(localStorage.getItem('m2'));
    if(3-m2.length>0)
    {
    	m2.push(m);
    	localStorage.setItem('m2', JSON.stringify(m2));
    }
    else{
    	alert("The Maximum Number of tries are Achieved");
  		var att = document.getElementById('att'); 
  		  att.innerHTML = '';
		  var a = "<p> 0 </p>";
    	att.innerHTML=a;
    }
  }
  document.getElementById('myForm').reset();
  fturns();
  blink();
  e.preventDefault();
}

function fturns(){
  
  var m2 = JSON.parse(localStorage.getItem('m2'));
  m2 = m2 || [];
  var x = m2.length;
  console.log(x)
  var y = 3-x;
  console.log(y)
  var att = document.getElementById('att');
  console.log(att)
  att.innerHTML = '';
  console.log(att)
  var a="<p>";
  var b="</p>";
  att.innerHTML=a+y+b;
  console.log(att)
}

function validateForm(Answer){
  if(!Answer){
    alert('Please Enter An Answer');
    return false;
  }
  return true;
}

function blink()
{
  var a1 = JSON.parse(localStorage.getItem('a1'));
  a1 = a1 || [];
  var n = a1.length;
  console.log(a1[0],a1[1],a1[2],a1[3],a1[4])
  for(var i=0;i<n;++i){
    var r=i-1;
    var t=i+1;
  if(r==-1)
    r=(n-1);
  if(t==n)
    t=0;
  console.log(r);
  console.log(t);
  if(a1[i]==2){
    var x=a1[r];
    var y=a1[t];
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
    var b=".html\"><div class=\"triangle-left cl\"></div></a>";   
    var c="<a href=\"qu_" ;
    var d=".html\"><div class=\"triangle-right cr\"></div></a>";
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    l2.innerHTML=a+x+b;
    r2.innerHTML=c+y+d;
    console.log(l2)
    console.log(r2)
  }
  }
}