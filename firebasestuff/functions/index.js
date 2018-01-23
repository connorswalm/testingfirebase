const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});


exports.log = functions.database.ref('/forminfo/{uid}').onCreate(  event => { 

  var thedata = event.data.val();
    console.log(event);
    console.log(thedata);

  return 0
});


exports.infolog = functions.database.ref('/forminfo/').onUpdate(  event => { 

  var thedata = event.data._delta;
 // var thejson = event.data.toJSON();

    console.log(thedata);
    console.log(thejson);
   
   // console.log(Object.keys(thedata)[0] + " is it working yest");
  
  var thekey = Object.keys(thedata)[0];
  console.log(typeof thekey)
  
  var objectref = functions.database.ref('/forminfo/' + thekey);
  objectref.set({
  
    test: "tested yo",
  });


  return 0
});


