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
if(localStorage.getItem('m1') === null){
    var m1 = [];
    m1.push(m);
    localStorage.setItem('m1', JSON.stringify(m1));
  } 
else {
    var m1 = JSON.parse(localStorage.getItem('m1'));
    if(3-m1.length>0)
    {
    	m1.push(m);
    	localStorage.setItem('m1', JSON.stringify(m1));
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
  
  var m1 = JSON.parse(localStorage.getItem('m1'));
  m1 = m1 || [];
  var x = m1.length;
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
  if(a1[i]==1){
    var x=a1[r];
    var y=a1[t];
    console.log(x)
    console.log(y)
    var l1 = document.getElementById('l1');
    var r1 = document.getElementById('r1');
    console.log(l1)
    console.log(r1)
    l1.innerHTML = '';
    r1.innerHTML = '';
    console.log(l1)
    console.log(r1)
    var a="<a href=\"qu_";
    var b=".html\"><div class=\"triangle-left cl\"></div></a>";   
    var c="<a href=\"qu_" ;
    var d=".html\"><div class=\"triangle-right cr\"></div></a>";
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    l1.innerHTML=a+x+b;
    r1.innerHTML=c+y+d;
    console.log(l1)
    console.log(r1)
  }
  }
}