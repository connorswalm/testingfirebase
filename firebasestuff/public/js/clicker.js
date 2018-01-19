
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
  
  var rootref = firebase.database().ref();
  var formref = rootref.child('forminfo');
  /*
  formref.once('value').then(snap => {
    let val = snap.val()
    console.log(val);
  });
  */

  var theform = document.getElementById("forminfo_name");
 
  //
  // Creates a unique id and makes a child key-value pair under it with name:
  // theform.value
  //
  
  formref.push().set({
    name: theform.value
  });

  //console.log(theform.value);
  //console.log(formref);

  //
  // clear the form so there is a new submit
  //
  
  theform.value = '';
  

};


