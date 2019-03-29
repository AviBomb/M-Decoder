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
    // Init array
    var m1 = [];
    // Add to array
    m1.push(m);
    // Set to localStorage
    localStorage.setItem('m1', JSON.stringify(m1));
  } 
else {
    // Get mentees from localStorage
    var m1 = JSON.parse(localStorage.getItem('m1'));
    // Add mentee to array
    if(3-m1.length>0)
    {
    	m1.push(m);
    	// Re-set back to localStorage
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

  // Clear form
  document.getElementById('myForm').reset();

  // Re-fetch mentees
  fturns();

  // Prevent form from submitting
  e.preventDefault();

}


// Fetch mentees
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
  //var x = m1.length;
  //var y = 3-x;
  att.innerHTML=a+y+b;
  console.log(att)
}

// Validate Form
function validateForm(Answer){
  if(!Answer){
    alert('Please Enter An Answer');
    return false;
  }
  return true;
}