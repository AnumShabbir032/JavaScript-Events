// Ex 1

function functionOne(){
  alert("Welcome");
}

// Ex 2

function functionTwo(){
    alert("Thanks for purchasing a phone form us");
}

// Ex 3

function deleteRow(row){
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById("Table").deleteRow(i);
}


// Ex-4 

// function changeImg(toggle,e){
//   if (toggle == "img1") {
//     e.src = "./image/img1.jpg";
//   } else {
//     e.src = "./image/img2.jpg";
//   }
// }

function changeImg1(e) {
  e.src = "./image/img1.jpg"
}

function changeImg2(e) {
  e.src = "./image/img2.jpg"
}

// Ex-5

var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

function onClickDelete(){
  clicks = clicks -1
  document.getElementById("clicks").innerHTML = clicks;
}