const squares = document.querySelector('.squares');
for (var i = 1; i < 127; i++) {
  squares.insertAdjacentHTML('beforeend', `<button data_level="1" id="${i}" onclick="click_box(id)"></button>`);
}

function click_box (id){
  var box = document.getElementById(id);
  let level = box.getAttribute("data_level");

  if (level == "1"){
    box.setAttribute("data_level", "2");
  }

  else if (level == "2"){
    box.setAttribute("data_level", "1");
  }
}