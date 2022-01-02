


let out = 0 ;

document.getElementById("result").addEventListener("click", myFunction);

function myFunction() {
    var u = parseFloat (document.getElementById('Uvar').value);
    var z = parseFloat (document.getElementById('Zvar').value) ;
    let m = 8.451566103*Math.pow(10, -5);
    out = u* Math.exp(-1*m*z);
    document.getElementById('output').append("The concentration of the Methadone after dialysis =" + out )
  }