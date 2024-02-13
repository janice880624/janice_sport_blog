"use strict";

document.addEventListener("DOMContentLoaded", function() {
  // 當文檔加載完成後，設置按鈕的點擊事件


  document.getElementById('showAll').addEventListener('click', function() {
    var items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        item.style.display = ''; // 顯示所有文章
    });
  }); 

  document.getElementById('showBig').addEventListener('click', function() {
      // 顯示所有游泳類別的文章
      var items = document.querySelectorAll('.item');
      items.forEach(function(item) {
          if(item.classList.contains('big')) {
              item.style.display = ''; // 或者 "block"，根據你的需要
          } else {
              item.style.display = 'none';
          }
      });
  });

  document.getElementById('showSwim').addEventListener('click', function() {
     // 顯示所有游泳類別的文章
      var items = document.querySelectorAll('.item');
      items.forEach(function(item) {
          if(item.classList.contains('swim')) {
              item.style.display = ''; // 或者 "block"，根據你的需要
          } else {
              item.style.display = 'none';
          }
      });
  });

  document.getElementById('showBicycle').addEventListener('click', function() {
    // 顯示所有游泳類別的文章
    var items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        if(item.classList.contains('bicycle')) {
            item.style.display = ''; // 或者 "block"，根據你的需要
        } else {
            item.style.display = 'none';
        }
    });
  });

  document.getElementById('showRun').addEventListener('click', function() {
    // 顯示所有游泳類別的文章
    var items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        if(item.classList.contains('run')) {
            item.style.display = ''; // 或者 "block"，根據你的需要
        } else {
            item.style.display = 'none';
        }
    });
  });

  document.getElementById('showChange').addEventListener('click', function() {
    // 顯示所有游泳類別的文章
    var items = document.querySelectorAll('.item');
    items.forEach(function(item) {
        if(item.classList.contains('change')) {
            item.style.display = ''; // 或者 "block"，根據你的需要
        } else {
            item.style.display = 'none';
        }
    });
  });


});