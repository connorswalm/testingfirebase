var ref=db.ref();


function addDb() {
  var the = document.getElementById('thebutton');
  if (the.innerHTML == "one"){
    the.innerHTML = "hello there";
  }

  else {
    the.innerHTML = "one";
  };
};

function addName(){

  var theform = document.getElementById("name");

  console.log(theform.value);
  var formref = ref.child("forminfo");

  var newformref = formref.push({
    name: theform.value,
  });
    theform.value = '';

};


var thebutton = document.getElementById('thebutton');
thebutton.addEventListener("click",addDb);
