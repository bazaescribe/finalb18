function alfabeto(){
  var alphabeth = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O" ];
  var content = "";

  for (var i = 0; i < alphabeth.length; i++) {
    content += "<div class='cube'>" + alphabeth[i] + "</div>"
  }
  document.getElementById('content').innerHTML = content;
}

function saludo(){
  document.getElementById('content').innerHTML = "<h1> HOLA!! </h1>";
}
