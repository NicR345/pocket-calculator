let string = "";
var state = 0
let saved= "";
let operatorUsed = 0;

function d0() {
  if (state == 1) {
    string = "0"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    string += "0"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d1() {
  if (state == 1) {
    string = "1"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    string += "1"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d2() {
  if (state == 1) {
    string = "2"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
    string += "2"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d3() {
  if (state == 1) {
    string = "3"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
  string += "3"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d4() {
  if (state == 1) {
    string = "4"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
  string += "4"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d5() {
  if (state == 1) {
    string = "5"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
  string += "5"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d6() {
  if (state == 1) {
    string = "6"
  } else {
    if (operatorUsed == 1) {
    operatorUsed = 0;
    string = saved;
    }
  string += "6"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d7() {
  if (state == 1) {
    string = "7"
  } else {
    if (operatorUsed == 1) {
      operatorUsed = 0;
      string = saved;
    }
  string += "7"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d8() {
  if (state == 1) {
    string = "8"
  } else {
    if (operatorUsed == 1) {
      string = saved;
      operatorUsed = 0;
    }
  string += "8"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function d9() {
  if (state == 1) {
    string = "9"
  } else {
    if (operatorUsed == 1) {
      string = saved;
      operatorUsed = 0;
    }
    string += "9"
  }
  var div = document.getElementById("output");
  div.innerHTML = string;
}

function ac() {
  var div = document.getElementById("output");
  div.innerHTML = 0;
  string = " "
  saved = ""
  state = 0;
}

function multi() {
  var div = document.getElementById("output");
  saved = string
  saved += "*"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
}

function addi() {
  var div = document.getElementById("output");
  saved = string
  saved += "+"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
}

function divi() {
  var div = document.getElementById("output");
  saved = string
  saved += "/"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
}

function subtr() {
  var div = document.getElementById("output");
  saved = string
  saved += "-"
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
}

function equals() {
  var div= document.getElementById("output");
  string = eval(string);
  div.innerHTML = Number(string).toLocaleString();
  if (Number(string) > 999999999 || Number(string) < 0.000000001) {
    div.innerHTML = Number(string).toExponential()
  }
  state = 1;
}

function negative() {
  var div= document.getElementById("output");
  string = Number(string) * (-1);
  div.innerHTML = string;
  state = 0;
}

function decimal() {
  var div= document.getElementById("output");
  saved = string
  saved += "."
  div.innerHTML = saved;
  state = 0;
  operatorUsed = 1;
}

function percent() {
  var div = document.getElementById("output");
  string = Number(string) * (0.01)
  div.innerHTML = string;
  state = 0;
}
