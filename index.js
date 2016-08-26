/**
 * Created by pandachain on 2016-08-24.
 */

// filters

let filters = document.querySelectorAll('.filter p');
let frontEndProjects = document.querySelectorAll('.front-end');
let uxProjects = document.querySelectorAll('.ux');
let allProjects = [];

let addAllProjects = function(){
  for (let i =0; i < frontEndProjects.length; i++){
    allProjects.push(frontEndProjects[i])
  }

  for (let i =0; i < uxProjects.length; i++){
    allProjects.push(uxProjects[i])
  }
};



let addFilterEventListener = function(){
  for (let i = 0; i < filters.length; i++){
    filters[i].addEventListener('click', function(){
      removeHighlightAll();
      this.classList.add('selected');
      hideAll();
      filterProjects(this.textContent);
    })

  }
};

let filterProjects = function(name){

  if (name === 'all') {
    for(let i = 0; i < allProjects.length; i++) {
      allProjects[i].classList.remove('hide');
    }
  }

  if (name === 'front-end'){
    for (let i = 0; i < frontEndProjects.length; i++){
      frontEndProjects[i].classList.remove('hide');
    }
  }

  if (name === 'ux'){
    for (let i = 0; i < uxProjects.length; i++){
      uxProjects[i].classList.remove('hide');
    }
  }
};

addFilterEventListener();

let hideAll = function(){
  addAllProjects();
  for (let i = 0; i < allProjects.length; i++){
    allProjects[i].classList.add('hide');
  }
};

let removeHighlightAll = function(){
  for (let i = 0; i < filters.length; i++){
    filters[i].classList.remove('selected');
  }
};

// scroll and highlight

$(window).on("scroll", function() {

  var currentPos = $(window).scrollTop() + 63;

  $('.navigation li a:lt(3)').each(function() {
    var menu = $(this);
    var section = $(menu.attr('href'));
    if(section.position().top <= currentPos && menu.offset().top + section.height() > currentPos){
      $('.navigation li').removeClass('active');
      menu.parent().addClass('active');
    }
    else {
      menu.parent().removeClass('active');
    }
  });

});
