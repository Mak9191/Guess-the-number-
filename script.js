"use strict";
let nameArray = new Array();
let colorobj = {
  Blue: "#68BBE5",
  Green: "#41b853",
  Pink: "#df4c73",
  Skin: "#f17a7e",
  Yellow: "#8f951d",
  PaleRose: "#f58f7c",
};
let total = 0;
let number = 0;
let points = new Array();
const refresh = () => {
  location.reload();
};
const ohkay2 = () => {
  document.getElementById("turnerpage").classList.add("unshow");
  document.getElementById("turner").textContent = "Plese enter the number !";
};
const checking = () => {
  let newGuess = Math.floor(Math.random() * 5 + 1);
  // for (let i = 0; i < nameArray.length; i++) {
  //   points.push(0);
  // }
  let num = document.getElementById("checkinput").value;

  document.querySelector(".number").textContent = newGuess;
  console.log("The entered value is  " + num + "  correct number " + newGuess);
  if (num === "") {
    document.getElementById("turner").textContent = "Plese enter the number!";
    document.getElementById("turnerpage").classList.remove("unshow");
    return;
    // document.getElementById("player_naming").classList.add("unshow");
  } else if (0 > Number(num) || Number(num) > 5) {
    document.getElementById("turner").textContent =
      "Plese enter the number between 1 to  5";
    document.getElementById("turnerpage").classList.remove("unshow");
    return;
  }

  if (total < nameArray.length * 5) {
    let i = Math.trunc(total / 5);
    if (number <= 5) {
      console.log(
        "The entered value is  " +
          num +
          "  correct number " +
          newGuess +
          " turns  " +
          number +
          " total turs " +
          total
      );
      console.log(Number(num) + " --- " + newGuess);
      if (newGuess === Number(num)) {
        console.log("The Guess is correct ");
        document.getElementById("guessing").textContent =
          "Wow ,Your guess is correct :D";

        points[i] = points[i] + 1;
        let scoew = points[i];
        document.getElementById("formedtable").rows[i].cells[1].textContent =
          scoew;
        total++;
        number++;
        // myTable.rows[0].cells[1].innerHTML = 'Hello';
      } else {
        console.log("The Guess is incorrect ");
        document.getElementById("guessing").textContent =
          "Oops ,Your guess is Incorrect :( ";
        total++;
        number++;
      }
    }
    if (number % 5 == 0 && total < nameArray.length * 5) {
      console.log("this is working number % 5 ");
      document.getElementById("guessing").textContent = "PLease Guess ";
      // document.getElementById("guessing").textContent =
      //   "Wow ,Your guess is Incorrect :( ";
      document.getElementById("turnerpage").classList.remove("unshow");
      document.getElementById("turner").innerHTML = number =
        "Player " + (i + 2) + " turns";
      console.log("end if is working");
      number = 0;
      console.log(colorarray);
      let c1 = colorarray[i + 1];
      let c = colorobj[c1];
      document.body.style.backgroundColor = c;
    }
    if (total === nameArray.length * 5) {
      checking();
      let index = 0;
      let winner = 0;
      console.log("the points array is " + points);
      for (let i = 0; i < points.length; i++) {
        if (winner < points[i]) {
          winner = points[i];
          index = i;
          console.log(
            `Winner value is ${winner} and points[i] is ${points[i]}    `
          );
        }
      }
      console.log("The winner is " + winner);
      document.getElementById("winner").classList.remove("unshow");
      document.getElementById("winpage").innerHTML =
        number = `Congratulation ! Player ${index + 1} is winner `;
      if ( points.length == 1){
        document.getElementById("scoreshowing1").innerHTML = `Player 1 score is ${points[0]}`;
        // document.getElementById("scoreshowing1").style.margin = "20px 0px";
      }else if ( points.length == 2){
        document.getElementById("scoreshowing1").innerHTML = `Player 1 score is ${points[0]}`;
        document.getElementById("scoreshowing2").innerHTML = `Player 2 score is ${points[1]}`;
      }else if (points.length == 3){
        document.getElementById("scoreshowing1").innerHTML = `Player 1 score is ${points[0]}`;
        document.getElementById("scoreshowing2").innerHTML = `Player 2 score is ${points[1]}`;
        document.getElementById("scoreshowing3").innerHTML = `Player 3 score is ${points[2]}`;
      }else if (points.length == 4){
        document.getElementById("scoreshowing1").innerHTML = `Player 1 score is ${points[0]}`;
        document.getElementById("scoreshowing2").innerHTML = `Player 2 score is ${points[1]}`;
        document.getElementById("scoreshowing3").innerHTML = `Player 3 score is ${points[2]}`;
        document.getElementById("scoreshowing4").innerHTML = `Player 4 score is ${points[3]}`;
      }else if (points.length == 5){
        document.getElementById("scoreshowing1").innerHTML = `Player 1 score is ${points[0]}`;
        document.getElementById("scoreshowing2").innerHTML = `Player 2 score is ${points[1]}`;
        document.getElementById("scoreshowing3").innerHTML = `Player 3 score is ${points[2]}`;
        document.getElementById("scoreshowing4").innerHTML = `Player 4 score is ${points[3]}`;
        document.getElementById("scoreshowing5").innerHTML = `Player 5 score is ${points[4]}`;
      }
       
    }
    console.log("the value of total is " + total);
    document.getElementById("checkinput").value = "";
  }
};

const ohkaying = () => {
  const a1 = document.getElementById("numPlayer").value;
  // console.log("the a1 is = " + a1);
  // const num = document.getElementById("check").value;
  const playerName = document.getElementById("playername").value;
  console.log(nameArray.includes(playerName));
  if (Number(a1) <= 0 || a1 === "" || Number(a1) > 5) {
    document.getElementById("playerPage").classList.remove("unshow");
    document.getElementById("player_naming").classList.add("unshow");
    document.getElementById("numPlayer").value = "";
    document.getElementById("nonumber").classList.add("unshow");
  } else if (playerName === "" || nameArray.includes(playerName)) {
    document.getElementById("player_naming").classList.remove("unshow");
    document.getElementById("playerPage").classList.add("unshow");
    document.getElementById("playername").value = "";
    document.getElementById("nonumber").classList.add("unshow");
  }
  // console.log("It is working");
  document.querySelector(".upshow").classList.add("unshow");
};
let go;
const going = () => {
  go = document.getElementById("numPlayer").value;
  if (Number(go) <= 0 || go === "" || Number(go) > 5) {
    document.getElementById("uppara1").textContent = "Invalid Player number";
    document.getElementById("playerPage").classList.add("unshow");
    document.getElementById("nonumber").classList.remove("unshow");
  } else {
    document.getElementById("player_naming").classList.remove("unshow");
    document.getElementById("playerPage").classList.add("unshow");
  }
};
// console.log(going);
let colorarray = new Array();
let countFillingArray = 0;
const fillingArray = () => {
  let playerName = document.getElementById("playername").value;
  console.log(go);
  if (countFillingArray < Number(go)) {
    // console.log(nameArray.includes(playerName) + "  " + countFillingArray);
    if (playerName === "") {
      document.getElementById("nonumber").classList.remove("unshow");
      document.getElementById("player_naming").classList.add("unshow");
      document.getElementById("uppara1").textContent = "Invalid Player number";
    } else if (nameArray.includes(playerName)) {
      document.getElementById("nonumber").classList.remove("unshow");
      document.getElementById("player_naming").classList.add("unshow");
      document.getElementById("uppara1").textContent =
        "No two player can have same name";
    } else {
      nameArray.push(playerName);
      document.getElementById("playername").value = "";
      countFillingArray++;
      let radioAnswer = document.getElementsByName("fav_color");
      for (let i = 0; i < 6; i++) {
        if (radioAnswer[i].checked) {
          console.log("the radio button answer is " + radioAnswer[i].value);
          colorarray.push(radioAnswer[i].value);
        }
      }
      if (countFillingArray === Number(go)) {
        fillingArray();
        // countFillingArray = countFillingArray + 2;
      }
    }
    console.log(nameArray.includes(playerName) + "  " + countFillingArray);
  } else {
    // nameArray.push(playerName);
    let c1 = colorarray[0];
    let c = colorobj[c1];
    document.body.style.backgroundColor = c;
    let tableform = document.getElementById("formingtable");
    // let tbl = document.createElement("table");

    let tbl = document.getElementById("formedtable");
    let tblBody = document.createElement("tbody");
    console.log("the length of the array " + nameArray.length);
    let row = document.createElement("th");
    let cell = document.createElement("td");
    let cellText = document.createTextNode("Player Name ");
    cell.appendChild(cellText);
    row.appendChild(cell);
    tblBody.appendChild(row);
    row = document.createElement("th");
    cell = document.createElement("td");
    cellText = document.createTextNode("Score");
    cell.appendChild(cellText);
    row.appendChild(cell);
    tblBody.appendChild(row);
    row = document.createElement("th");
    cell = document.createElement("td");
    cellText = document.createTextNode("Player Color ")
    // cell.setAttribute('id' , 'colorcolumn');;
    cell.appendChild(cellText);
    row.appendChild(cell);
    tblBody.appendChild(row);
    for (let i = 0; i < nameArray.length; i++) {
      // creates a table row
      console.log("for loop is working");
      let row = document.createElement("tr");
      cell = document.createElement("td");
      cellText = document.createTextNode(nameArray[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      cell = document.createElement("td");
      cellText = document.createTextNode("0");
      cell.appendChild(cellText);
      row.appendChild(cell);
      cell = document.createElement("td");
      cellText = document.createTextNode(colorarray[i]);
      cell.appendChild(cellText);
      row.appendChild(cell);
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    tableform.appendChild(tbl);
    tbl.setAttribute("border", "2", "white");
    document.getElementById("player_naming").classList.add("unshow");
    // countFillingArray = 0;
    console.log(nameArray);
    console.log(colorarray);
    for (let i = 0; i < nameArray.length; i++) {
      points.push(0);
    }
  }
};
// let radioAnswer = document.getElementsByClassName("playcolor").value;
// console.log(radioAnswer);
