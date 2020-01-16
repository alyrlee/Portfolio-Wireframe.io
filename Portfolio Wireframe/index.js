// function show define

function showDefine() {
    $('.main-content .content-wrap').children().hide();
    $('#define').fadeIn();
    $('.main-content').addClass("align-center");
    $('.main-content').removeClass("clear-padding");
    $('#projects-button').click(function() {
      navAnimation('#1');
      showProjects();
    })
  }

//function show projects

function showProjects() {
    $('.main-content .content-wrap').children().hide();
    $('.projects-wrap').fadeIn();
    $('.main-content').addClass("clear-padding");
    $('.main-content').removeClass("align-center");
  }

//function show about

function showAbout() {
    $('.main-content .content-wrap').children().hide();
    $('#about').fadeIn();
    $('.main-content').removeClass("clear-padding");
    $('.main-content').addClass("align-center");
  }

//function create nav

function createNav() {
    var content = ["Ashley Lee", "Projects", "About"];
    content.forEach(function(i) {
      var liItem = $("<li><a id='" + content.indexOf(i) +
        "' class='nav-link'>" + i + "</a></li>");
      $('.nav-list').append(liItem);
      liItem.click(function() {
        navRouter(liItem);
      });
    });
  }
  
//function nav router

function navRouter(i) {
    if (i.text() === "Ashley Lee") {
      navAnimation('#0');
      showDefine();
    } else if (i.text() === "Projects") {
      navAnimation('#1');
      showProjects();
    } else {
      navAnimation('#2');
      showAbout();
    }
  }
  
// animates and handles show/hide of content

function navAnimation(selection) {
    if (selection === '#0') {
      $('#0').addClass('nav-link-open');
      $('#1, #2').removeClass('nav-link-open');
    } else if (selection === '#1') {
      $('#1').addClass('nav-link-open');
      $('#0, #2').removeClass('nav-link-open');
    } else {
      $('#2').addClass('nav-link-open');
      $('#0, #1').removeClass('nav-link-open');
    }
  }
//function footer date copyright

$(function() {
    var year = new Date().getFullYear()
    document.querySelector('footer p').innerHTML = '&copy; Ashley Lee ' + year
    createNav();
    navAnimation('#0');
    showDefine();
    $('body').fadeIn().css({
      'display': 'block'
    });
  });
  