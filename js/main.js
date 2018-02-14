var list = document.getElementById('list');
var rockCount = document.getElementById('badge')
var paperCount = document.getElementById('badge-2')
var scissorCount = document.getElementById('badge-3')
var li = document.createElement('li')
var r = document.createElement('span')
var p = document.createElement('span')
var s = document.createElement('span')
var a = [];
var b = [];
var c = [];

function startGame(e) {

  var choice = e.target.id
  var ai = ["rock","paper","scissor"]
  var ai_choice = ai[Math.floor(Math.random() * ai.length)];
  console.log(ai_choice)
  switch(choice) {
    case "rock":
    if(ai_choice == "scissor"){
      var result = "You Win";
      li.innerHTML = result;
      list.appendChild(li);
      a.push("win");
      r.innerHTML = a.length;
      console.log(a.length);
      rockCount.appendChild(r);
    }
    else if (ai_choice == "rock") {
      var result = "Tie";
      li.innerHTML = result;
      list.appendChild(li);
    }else{
      var result = "You Lose";
      li.innerHTML = result;
      list.appendChild(li);
    }
    break;
    case "paper":
    if(ai_choice == "rock"){
      var result = "You Win";
      li.innerHTML = result;
      list.appendChild(li);
      b.push("win");
      p.innerHTML = b.length;
      console.log(b.length);
      paperCount.appendChild(p);
    }
    else if (ai_choice == "paper") {
      var result = "Tie";
      li.innerHTML = result;
      list.appendChild(li);
    }else{
      var result = "You Lose";
      li.innerHTML = result;
      list.appendChild(li);
    }
    break;
    case "scissor":
    if(ai_choice == "paper"){
      var result = "You Win";
      li.innerHTML = result;
      list.appendChild(li);
      c.push("win");
      s.innerHTML = c.length;
      console.log(c.length);
      scissorCount.appendChild(s);
    }
    else if (ai_choice == "scissor") {
      var result = "Tie";
      li.innerHTML = result;
      list.appendChild(li);
    }else{
      var result = "You Lose";
      li.innerHTML = result;
      list.appendChild(li);
    }
    break;
  }
}

var choices = document.getElementsByClassName('choice')
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}
