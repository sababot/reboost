const squares_vis = document.querySelector('.squares-vis');
for (var i = 1; i < 78; i++) {
  squares_vis.insertAdjacentHTML('beforeend', `<li data_level="1"></li>`);
}