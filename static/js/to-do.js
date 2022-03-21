var n = 5;
var random_colors = ["#edef6e", "#c99f22", "#1a1ddb", "#771adb", "#cc458a0", "#cc4547", "#cc454c", "#101233", "#18ccc3", "#5de275", "#e2855d", "#66615f"];

const squares = document.querySelector('.squares');
for (var i = 0; i < n; i++) {
  squares.insertAdjacentHTML('beforeend', 
    `<button data_level="1" id="${i}" onclick="interact_box(id)" onchange="interact_box(id)">
    <input type="text" style="border: none; outline: none; color: black; background-color: transparent; width: 80%; text-align: center;" value="Topic">
    </button>`);
}

function color_code (){
  var colors = [];
  var real_colors = [];

  for (var i = 0; i < n; i++){
    var box = document.getElementById(i).children[0];
    for (var j = 0; j < n; j++){
      var exist = false;
      if (box.value == document.getElementById(j).children[0].value){
        for (var f = 0; f < colors.length; f++){
          if (colors[f] == box.value){
            exist = true;
          }
        }

        if (exist == false){
          colors.push(box.value);
        }
      }
    }
  }

  var exist = [];

  for (var i = 0; i < colors.length; i++){
    for (var j = 0; j < n; j++){
      if (document.getElementById(j).children[0].value == colors[i]){
        exist.push(colors[i]);
      }
    }
  }

  for (var i = 0; i < exist; i++){
    if (!colors.includes(exist[i])){
      colors.push(exist[i]);
    }
  }

  // Assign Colors
  for (var i = 0; i < colors.length; i++){
    real_colors.push(random_colors[Math.floor(Math.random() * random_colors.length) + 1]);
  }

  for (var i = 0; i < colors.length; i++){
    for (var j = 0; j < n; j++){
      if (colors[i] == document.getElementById(j).children[0].value){
        document.getElementById(j).style = "background-color: " + random_colors[i];
      }
    }
  }
}

function color_topic (){
  var colors = [];
  var real_colors = [];

  for (var i = 0; i < n; i++){
    var box = document.getElementById(i + "-topic").children[0];
    for (var j = 0; j < n; j++){
      var exist = false;
      if (box.innerHTML == document.getElementById(j + "-topic").children[0].innerHTML){
        for (var f = 0; f < colors.length; f++){
          if (colors[f] == box.innerHTML){
            exist = true;
          }
        }

        if (exist == false){
          colors.push(box.innerHTML);
        }
      }
    }
  }

  var exist = [];

  for (var i = 0; i < colors.length; i++){
    for (var j = 0; j < n; j++){
      if (document.getElementById(j + "-topic").children[0].innerHTML == colors[i]){
        exist.push(colors[i]);
      }
    }
  }

  for (var i = 0; i < exist; i++){
    if (!colors.includes(exist[i])){
      colors.push(exist[i]);
    }
  }

  // Assign Colors
  for (var i = 0; i < colors.length; i++){
    real_colors.push(random_colors[Math.floor(Math.random() * random_colors.length) + 1]);
  }

  for (var i = 0; i < colors.length; i++){
    for (var j = 0; j < n; j++){
      if (colors[i] == document.getElementById(j + "-topic").children[0].innerHTML){
        document.getElementById(j + "-topic").style = "background-color: " + random_colors[i];
      }
    }
  }
}

color_topic();

function interact_box (id){
  color_topic();
}