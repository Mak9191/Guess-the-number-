"use strict";
const turnerpage =document.getElementById("turnerpage");
const turner = document.getElementById("turner");
const guessing = document.getElementById("guessing");
const numPlayer = document.getElementById("numPlayer");
const playerPage = document.getElementById("playerPage");
const player_naming = document.getElementById("player_naming");
const nonumber = document.getElementById("nonumber");
// const playername = document.getElementById("playername");
const uppara1 = document.getElementById("uppara1");
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
  turnerpage.classList.add("unshow");
  turner.textContent = "Plese enter the number !";
};
const checking = () => {
  let newGuess = Math.floor(Math.random() * 5 + 1);
  // for (let i = 0; i < nameArray.length; i++) {
  //   points.push(0);
  // }
  let num = document.getElementById("checkinput").value;

  document.querySelector(".number").textContent = newGuess;
  if (num === "") {
    turner.textContent = "Plese enter the number!";
    turnerpage.classList.remove("unshow");
    return;
    // document.getElementById("player_naming").classList.add("unshow");
  } else if (0 > Number(num) || Number(num) > 5) {
    turner.textContent =
      "Plese enter the number between 1 to  5";
    turnerpage.classList.remove("unshow");
    return;
  }

  if (total < nameArray.length * 5) {
    let i = Math.trunc(total / 5);
    if (number <= 5) {
      if (newGuess === Number(num)) {
        guessing.textContent =
          "Wow ,Your guess is correct :D";

        points[i] = points[i] + 1;
        let scoew = points[i];
        document.getElementById("formedtable").rows[i].cells[1].textContent =
          scoew;
        total++;
        number++;
        // myTable.rows[0].cells[1].innerHTML = 'Hello';
      } else {
        guessing.textContent =
          "Oops ,Your guess is Incorrect :( ";
        total++;
        number++;
      }
    }
    if (number % 5 == 0 && total < nameArray.length * 5) {
      guessing.textContent = "PLease Guess ";
      turnerpage.classList.remove("unshow");
      document.querySelector(".number").textContent = '?'
      turner.innerHTML = number =
        "Player " + (i + 2) + " turns";
      number = 0;
      let c = colorobj[colorarray[i + 1]];
      document.body.style.backgroundColor = c;
    }
    if (total === nameArray.length * 5) {
      checking();
      let index = 0;
      let winner = 0;
      for (let i = 0; i < points.length; i++) {
        if (winner < points[i]) {
          winner = points[i];
          index = i;
        }
      }
      document.getElementById("winner").classList.remove("unshow");
      document.getElementById("winpage").innerHTML =
        number = `Congratulation ! Player ${index + 1} is winner `;
      for (let i = 0 ;i < points.length ;i++){
        document.getElementById(`scoreshowing${i+1}`).innerHTML = `Player ${i+1} score is ${points[0]}`;
      }
    }
    document.getElementById("checkinput").value = "";
  }
};

const ohkaying = () => {
  const a1 = numPlayer.value;
  const playerName = document.getElementById("playername");
  if (Number(a1) <= 0 || a1 === "" || Number(a1) > 5) {
    playerPage.classList.remove("unshow");
    player_naming.classList.add("unshow");
    numPlayer.value = "";
    nonumber.classList.add("unshow");
  } else if (playerName.value === "" || nameArray.includes(playerName.value)) {
    player_naming.classList.remove("unshow");
    playerPage.classList.add("unshow");
    playerName.value = "";
    nonumber.classList.add("unshow");
  }
  document.querySelector(".upshow").classList.add("unshow");
};
let go;
const going = () => {
  go = numPlayer.value;
  if (Number(go) <= 0 || go === "" || Number(go) > 5) {
    uppara1.textContent = "Invalid Player number";
    playerPage.classList.add("unshow");
    nonumber.classList.remove("unshow");
  } else {
    player_naming.classList.remove("unshow");
    playerPage.classList.add("unshow");
  }
};
let colorarray = new Array();
let countFillingArray = 0;
const fillingArray = () => {
  let playerName = document.getElementById("playername");
  if (countFillingArray < Number(go)) {
    if (playerName.value === "") {
      nonumber.classList.remove("unshow");
      player_naming.classList.add("unshow");
      uppara1.textContent = "Invalid Player number";
    } else if (nameArray.includes(playerName.value)) {
      nonumber.classList.remove("unshow");
      player_naming.classList.add("unshow");
      uppara1.textContent =
        "No two player can have same name";
    } else {
      nameArray.push(playerName.value);
      playerName.value = "";
      countFillingArray++;
      let radioAnswer = document.getElementsByName("fav_color");
      for (let i = 0; i < 6; i++) {
        if (radioAnswer[i].checked) {
          colorarray.push(radioAnswer[i].value);
        }
      }
      if (countFillingArray === Number(go)) {
        fillingArray();
        // countFillingArray = countFillingArray + 2;
      }
    }
  } else {
    // nameArray.push(playerName);
    let c = colorobj[colorarray[0]];
    document.body.style.backgroundColor = c;
    let tableform = document.getElementById("formingtable");
    // let tbl = document.createElement("table");

    let tbl = document.getElementById("formedtable");
    let tblBody = document.createElement("tbody");
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

    for (let i = 0; i < nameArray.length; i++) {
      points.push(0);
    }
  }
};

