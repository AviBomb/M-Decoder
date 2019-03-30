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
if(localStorage.getItem('m3') === null){
    var m3 = [];
    m3.push(m);
    localStorage.setItem('m3', JSON.stringify(m3));
  } 
else {
    var m3 = JSON.parse(localStorage.getItem('m3'));
    if(3-m3.length>0)
    {
    	m3.push(m);
    	localStorage.setItem('m3', JSON.stringify(m3));
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
  
  var m3 = JSON.parse(localStorage.getItem('m3'));
  m3 = m3 || [];
  var x = m3.length;
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
  if(a1[i]==3){
    var x=a1[r];
    var y=a1[t];
    console.log(x)
    console.log(y)
    var l3 = document.getElementById('l3');
    var r3 = document.getElementById('r3');
    console.log(l3)
    console.log(r3)
    l3.innerHTML = '';
    r3.innerHTML = '';
    console.log(l3)
    console.log(r3)
    var a="<a href=\"qu_";
    var b=".html\"><div class=\"triangle-left cl\"></div></a>";   
    var c="<a href=\"qu_" ;
    var d=".html\"><div class=\"triangle-right cr\"></div></a>";
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    l3.innerHTML=a+x+b;
    r3.innerHTML=c+y+d;
    console.log(l3)
    console.log(r3)
  }
  }
}