
function init(){
  let database;
  const config = {
    apiKey: "AIzaSyC46hAVFF5ly7DGSSdSMO0G9euFfeSoUzg",
    authDomain: "agilforyou-challenge.firebaseapp.com",
    databaseURL: "https://agilforyou-challenge.firebaseio.com",
    projectId: "agilforyou-challenge",
    storageBucket: "agilforyou-challenge.appspot.com",
    messagingSenderId: "285978990060"
};
  firebase.initializeApp(config);
  database = firebase.database();
}

function view_challenge_one(){
    var reto1 = document.getElementById("reto1");
    var challenge=document.getElementById("challenge");

      if (reto1.className == "top" && challenge.className=="Middle-block") {
        var texthtml1 = document.getElementById("txtreto1html");
        var textjs1 = document.getElementById("txtreto1java");
        //
        var textjs2 = document.getElementById('TA1');
        //
        var texthtml3 = document.getElementById("text_html");
        var textjs3 =  document.getElementById("text_js");
        //
        var textjs4 = document.getElementById("js_reto4");
        //
        var file = document.getElementById("campoarchivo");

        texthtml1.value = "";
        textjs1.value = "";
        textjs2.value ="";
        texthtml3.value= ""; 
        textjs3.value ="";
        textjs4.value= "";
        file.value="";

        reto1.className = "top1";
        challenge.className="Middle-block1"
      }else{
        reto1.className = "top";
        challenge.className="Middle-block";
    }
};

function view_challenge_two(){
    var reto2 = document.getElementById("reto2");
    var reto1=document.getElementById("reto1");
    var txtreto1html= document.getElementById("txtreto1html");
    var txtreto1java=document.getElementById("txtreto1java");

      if (txtreto1html.value=="" && txtreto1java.value==""){
        alert("Both textarea are empty.")
        return reto1
      }

      if 
      (txtreto1html.value==""){
      alert ("HTML textarea can't be empty.");
      return reto1;
      }
      
      if
      (txtreto1java.value==""){
        alert("Javascript's textarea can't be empty.");
        return reto1;
      }

      if (txtreto1html.value.length < 10) {
        alert("HTML textarea must has min 10 characters")
        return reto1;
        
      }
      
      if (txtreto1java.value.length < 10) {
        alert("Javascript's textarea must has min 10 characters")
        return reto1;
      }

      if (reto1.className == "top1" && reto2.className=="top") {
        reto1.className = "top";
        reto2.className="top1"

      }else {
        reto2.className = "top";
        reto1.className="top1";
      }
};

function view_challenge_three(){
  var TA1 = document.getElementById('TA1');
  var reto3 = document.getElementById("reto3");
  var reto2=document.getElementById("reto2");

    if (TA1.value === "") {
        alert("Javascript's textarea can't be empty.");
    }else
    if(TA1.value.length < 70){
        alert("Javascript's textarea must has min 70 characters.");  
    }else{
      
        if (reto2.className == "top1" && reto3.className=="top") {
          reto2.className = "top";
          reto3.className="top1";
        }else {
          reto3.className = "top";
          reto4.className="top1";
        }
    }
};

function view_challenge_four(){
    var reto4 = document.getElementById("reto4");
    var reto3=document.getElementById("reto3");
    var text_html= document.getElementById("text_html");
    var text_js=document.getElementById("text_js");

      if (text_html.value == "" && text_js.value == ""){
          alert(" textareas are empty.")
          return false;
      }else{
      if (text_html.value == ""){
          alert ("HTML textarea can't be empty.");
          return false;
      }else{ 
        if (text_html.value.length < 90) {
          alert("HTML textarea must has min 90 characters")
          return false;
        }else{
          if
            (text_js.value == ""){
              alert("Javascript's textarea can't be empty.");
              return false;
          }else{
           if (text_js.value.length < 90) {
              alert("Javascript's textarea must has min 90 characters")
              return false;
          }
        }
      }
    }
  }
   
    if (reto3.className == "top1" && reto4.className=="top") {
      reto3.className = "top";
      reto4.className="top1"
    }else {
      reto4.className = "top";
      reto3.className="top1";
    }
};

function view_challenge_thankyou(){
    var textarea1 = document.getElementById("js_reto4");
    var thankyou = document.getElementById("gracias");
    var reto4=document.getElementById("reto4");
      if(textarea1.value===""){
        alert("Javascrit's textarea can't be empty")
      }
      else{
        if(textarea1.value.length<100){
          alert("Javascrit's textarea must has min 100 characts");
        }
        else{
          if (reto4.className == "top1" && thankyou.className=="gracias") {
            reto4.className = "top";
            thankyou.className="gracias1"               
          }
          else{
            thankyou.className = "gracias";
            reto4.className="top";                 
          }
        }
      }   
};

function alerta(){
    var gracias = document.getElementById("gracias");
    var challenge=document.getElementById("challenge");
      if (gracias.className == "gracias1" && challenge.className=="Middle-block1") {
        alert("Thanks, we will contact you.")
        gracias.className = "gracias";
        challenge.className="Middle-block";
         
      }else {
        gracias.className = "gracias1";
        challenge.className="Middle-block1";
      
      }
}

init();
  var myDatabase = firebase.database().ref();
  myDatabase.on('value', function(snap) {
    console.log('Connection successful!', snap.val());
});

  var myDatabase4 =  firebase.database().ref('/Retos_info').once('value').then(function(snap) { 
  var info=snap.val();

  //Reto 1:
  titulo1=document.getElementById('titulo1');
  titulo1.innerHTML=info.reto1.titulo;
  descripcion1=document.getElementById('descripcion1');
  descripcion1.innerHTML=info.reto1.descripcion;

  //Reto 2:
  titulo2=document.getElementById('titulo2');
  titulo2.innerHTML=info.reto2.titulo;
  descripcion2=document.getElementById('descripcion2');
  descripcion2.innerHTML=info.reto2.descripcion;
  //Reto 3
  titulo3=document.getElementById('titulo3');
  titulo3.innerHTML=info.reto3.titulo;
  descripcion3=document.getElementById('descripcion3');
  descripcion3.innerHTML=info.reto3.descripcion;
  //Reto 4:
  titulo=document.getElementById('titulo4');
  titulo.innerHTML=info.reto4.titulo;
  descripsion=document.getElementById('descripsion4');
  descripsion.innerHTML=info.reto4.description;

});

var authService = firebase.auth();
var storageService = firebase.storage();

window.onload = function() {
  authService.signInAnonymously()
    .catch(function(error) {
      console.error('Authentication error detected', error);
    });

  document.getElementById('campoarchivo').addEventListener('change', function(evento){
    evento.preventDefault();
    var archivo  = evento.target.files[0];
    subirArchivo(archivo);
  });
}
function subirArchivo(archivo) {
  var uploadTask = storageService.ref('micarpeta').child(archivo.name).put(archivo);

  uploadTask.on('state_changed', function(snapshot){
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  progress  = Math.round(progress)
  console.log('Upload is ' + progress + '% done');
   
  var barra = document.getElementById('barra');
  var valor1 = document.getElementById('valor');
  barra.value = progress;
  valor1 = '<strong>'+progress+'%</strong>';
  
  valor.innerHTML= valor1;
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: 
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: 
      console.log('Upload is running');
      break;
  }
  
  },
    function(error){
      console.log('error uploading file', error);
    },
    function() {  
      var downloadURL = uploadTask.snapshot.downloadURL;
      Test1(downloadURL);
    }
  )};


function Test1(downloadURL) {
  var Test1 = firebase.database().ref('/Retos_result');
  //Reto1
  var txtreto1html= document.getElementById("txtreto1html");
  var txtreto1java=document.getElementById("txtreto1java");
  //Reto2
  var txtjs = document.getElementById('TA1');
  //Reto3
  var text_html= document.getElementById("text_html");
  var text_js=document.getElementById("text_js");
  //Reto4
  var textarea = document.getElementById("js_reto4");
  //Asig:
  var texthtml1 = txtreto1html.value;
  var textjs1 = txtreto1java.value;
  //
  var textjs2 = txtjs.value;
  //
  var texthtml3 = text_html.value;
  var textjs3 =  text_js.value;
  //
  var textjs4 = textarea.value;

  //Asig:
  var texthtml1 = document.getElementById("txtreto1html").value;
  var textjs1 = document.getElementById("txtreto1java").value;
  //
  var textjs2 = document.getElementById('TA1').value;
  //
  var texthtml3 = document.getElementById("text_html").value;
  var textjs3 =  document.getElementById("text_js").value;
  //
  var textjs4 = document.getElementById("js_reto4").value;

    var obj = [
      reto1={HTML:texthtml1,JS:textjs1},
      reto2={JS:textjs2},
      reto3={HTML:texthtml3,JS:textjs3},
      reto4={JS:textjs4},
      cv={url:downloadURL}
    ]
    Test1.push().set(obj);

}

