let string = "";
var state = 0

function d1() {
  if (state == 1) {
    string = "1"
  } else {
    string += "1"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d2() {
  if (state == 1) {
    string = "2"
  } else {
    string += "2"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d3() {
  if (state == 1) {
    string = "3"
  } else {
    string += "3"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d4() {
  if (state == 1) {
    string = "4"
  } else {
    string += "4"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d5() {
  if (state == 1) {
    string = "5"
  } else {
    string += "5"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d6() {
  if (state == 1) {
    string = "6"
  } else {
    string += "6"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d7() {
  if (state == 1) {
    string = "7"
  } else {
    string += "7"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d8() {
  if (state == 1) {
    string = "8"
  } else {
    string += "8"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d9() {
  if (state == 1) {
    string = "9"
  } else {
    string += "9"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function ac() {
  var div = document.getElementById("output");
  string = " "
  div.innerHTML = string;
}

function multi() {
  var div = document.getElementById("output");
  string += "*"
  div.innerHTML = string;
  state = 0;
}

function addi() {
  var div = document.getElementById("output");
  string += "+"
  div.innerHTML = string;
  state = 0;
}

function divi() {
  var div = document.getElementById("output");
  string += "/"
  div.innerHTML = string;
  state = 0;
}

function subtr() {
  var div = document.getElementById("output");
  string += "-"
  div.innerHTML = string;
  state = 0;
}

function equals() {
  var div= document.getElementById("output");
  string = eval(string);
  div.innerHTML = Number(string);
  state = 1;
}

function negative() {
  var div= document.getElementById("output");
  string = Number(string) * (-1);
  div.innerHTML = string;
  state = 0;
}

function parenthLeft() {
 var div= document.getElementById("output");
 string += "("
 div.innerHTML = string;
 state = 0;
}

function parenthRight() {
 var div= document.getElementById("output");
 string += ")"
 div.innerHTML = string;
 state = 0;
}
