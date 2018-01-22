
var thebutton = document.getElementById('thebutton');
thebutton.addEventListener("click", addDB);

function addDB() {

  var the = document.getElementById('thebutton');
  if (the.innerHTML == "one"){
    the.innerHTML = "hello there";
  }

  else {
    the.innerHTML = "one";
  };
};

function addNames(){
  
  var formref = firebase.database().ref().child('forminfo');
  /*
  formref.once('value').then(snap => {
    let val = snap.val()
    console.log(val);
  });
  */
  
  var theform = document.getElementById("forminfo_name");
 
  
  var newid = formref.push();
  var key = newid.key;

  console.log(key);
  
  newid.set({
    name: theform.value
  });
  
  theform.value = '';
};


