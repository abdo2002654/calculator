let inputs = document.querySelectorAll(".input");
let screen = document.querySelector(".result-screen");
let clear = document.querySelector(".reset");
let equals = document.querySelector(".equals");
let Delete = document.querySelector(".delete");
let error = document.querySelector(".error");


inputs.forEach(input => {
  input.onclick = () => {
    if(input.innerHTML == ' * ' ||input.innerHTML == ' / ' ||input.innerHTML == ' + ') {
      if(!isNaN(screen.innerHTML[screen.innerHTML.length - 1]) && screen.innerHTML[screen.innerHTML.length - 1] != " ") {
        screen.innerHTML += input.innerHTML;
      }
    } else if(input.innerHTML == ' - ') {
      if((!isNaN(screen.innerHTML[screen.innerHTML.length - 1]) && !screen.innerHTML.toString().endsWith(" - ")) || screen.innerHTML == '') {
        screen.innerHTML += input.innerHTML;
      }
    } else if (input.innerHTML == '.') {
      if(!isNaN(screen.innerHTML[screen.innerHTML.length - 1]) && screen.innerHTML[screen.innerHTML.length - 1] != " "){
        let valid = true;
        screen.innerHTML.split(' ')[screen.innerHTML.split(' ').length - 1].split("").map(ele => {
          if(ele == ".") {
            valid = false;
          }
        })
        if(valid) {
          screen.innerHTML += input.innerHTML;
        }
      }
    } else  {
      screen.innerHTML += input.innerHTML;
    } 
  }
})
clear.onclick = () => screen.innerHTML = '';
equals.onclick = () => {
  if(!isNaN(screen.innerHTML[screen.innerHTML.length - 1]) && screen.innerHTML[screen.innerHTML.length - 1] != " ") {
    if(eval(screen.innerHTML) == "Infinity" || eval(screen.innerHTML) == "-Infinity" ) {
      sendError("infinity");
      screen.innerHTML = '';
    } else if(isNaN(eval(screen.innerHTML))) {
      sendError("NAN");
      screen.innerHTML = '';
    } else {
      if(eval(screen.innerHTML) % 1 == 0) {
        screen.innerHTML = eval(screen.innerHTML)
      } else {
        screen.innerHTML = eval(screen.innerHTML)
      }
    }
  }
}
Delete.onclick = () => {
  if(screen.innerHTML[screen.innerHTML.length - 1] != " ") {
    screen.innerHTML = screen.innerHTML.slice(0, -1);
  } else {
    screen.innerHTML = screen.innerHTML.slice(0, -3);
  }
}

let sendError = (errorMessage) => {
  error.innerHTML = errorMessage;
}
console.log(eval("0.08-0.06"))