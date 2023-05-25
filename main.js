console.log("This is how i am working on tik tak toe....");

const container = document.querySelector(".container");
let sign = "x";

const boxClicked = (box) => {
  if (
    (box1.innerHTML == box2.innerHTML && box1.innerHTML == box3.innerHTML) ||
    (box1.innerHTML == box5.innerHTML && box1.innerHTML == box9.innerHTML) ||
    (box1.innerHTML == box4.innerHTML && box1.innerHTML == box7.innerHTML) ||
    (box2.innerHTML == box5.innerHTML && box2.innerHTML == box8.innerHTML) ||
    (box3.innerHTML == box6.innerHTML && box3.innerHTML == box9.innerHTML) ||
    (box4.innerHTML == box5.innerHTML && box4.innerHTML == box6.innerHTML)
  ) {
    alert("you won!");
    turn.innerHTML = "You Won !";
    return;
  }

  if (box.innerHTML == "x" || box.innerHTML == "o") {
    return;
  } else {
    box.innerHTML = sign;
    box.classList.add("x");
    if (sign == "x") {
      sign = "o";
    } else {
      sign = "x";
    }
    // console.log(box, "box1 is clicked");
    // if (box1.innerHTML == box2.innerHTML && box1.innerHTML == box3.innerHTML) {
    //   //   alert("you won!");
    //   turn.innerHTML = "You Won !";
    //   return;
    // }
  }
  turn.innerHTML = "Your Turn: " + sign;
};

const turn = document.getElementById("turn");
turn.innerHTML = "Your Turn: " + sign;

const box1 = document.getElementById("box1");
box1.onclick = () => boxClicked(box1);

const box2 = document.getElementById("box2");
box2.onclick = () => boxClicked(box2);

const box3 = document.getElementById("box3");
box3.onclick = () => boxClicked(box3);

const box4 = document.getElementById("box4");
box4.onclick = () => boxClicked(box4);

const box5 = document.getElementById("box5");
box5.onclick = () => boxClicked(box5);

const box6 = document.getElementById("box6");
box6.onclick = () => boxClicked(box6);

const box7 = document.getElementById("box7");
box7.onclick = () => boxClicked(box7);

const box8 = document.getElementById("box8");
box8.onclick = () => boxClicked(box8);

const box9 = document.getElementById("box9");
box9.onclick = () => boxClicked(box9);
