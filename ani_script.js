// JavaScript Document



$('.sli class="list-items"der').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});



    // IMAGE SLIDES & CIRCLES ARRAYS, & COUNTER
    var imageSlides = document.getElementsByClassName('imageSlides');
    var circles = document.getElementsByClassName('circle');
    var leftArrow = document.getElementById('leftArrow');
    var rightArrow = document.getElementById('rightArrow');
    var counter = 0;

    // HIDE ALL IMAGES FUNCTION
    function hideImages() {
      for (var i = 0; i < imageSlides.length; i++) {
        imageSlides[i].classList.remove('visible');
      }
    }

    // REMOVE ALL DOTS FUNCTION
    function removeDots() {
      for (var i = 0; i < imageSlides.length; i++) {
        circles[i].classList.remove('dot');
      }
    }

    // SINGLE IMAGE LOOP/CIRCLES FUNCTION
    function imageLoop() {
      var currentImage = imageSlides[counter];
      var currentDot = circles[counter];
      currentImage.classList.add('visible');
      removeDots();
      currentDot.classList.add('dot');
      counter++;
    }

    // LEFT & RIGHT ARROW FUNCTION & CLICK EVENT LISTENERS
    function arrowClick(e) {
      var target = e.target;
      if (target == leftArrow) {
        clearInterval(imageSlideshowInterval);
        hideImages();
        removeDots();
        if (counter == 1) {
          counter = (imageSlides.length - 1);
          imageLoop();
          imageSlideshowInterval = setInterval(slideshow, 10000);
        } else {
          counter--;
          counter--;
          imageLoop();
          imageSlideshowInterval = setInterval(slideshow, 10000);
        }
      } 
      else if (target == rightArrow) {
        clearInterval(imageSlideshowInterval);
        hideImages();
        removeDots();
        if (counter == imageSlides.length) {
          counter = 0;
          imageLoop();
          imageSlideshowInterval = setInterval(slideshow, 10000);
        } else {
          imageLoop();
          imageSlideshowInterval = setInterval(slideshow, 10000);
        }
      }
    }

    leftArrow.addEventListener('click', arrowClick);
    rightArrow.addEventListener('click', arrowClick);


    // IMAGE SLIDE FUNCTION
    function slideshow() {
      if (counter < imageSlides.length) {
        imageLoop();
      } else {
        counter = 0;
        hideImages();
        imageLoop();
      }
    }

    // SHOW FIRST IMAGE, & THEN SET & CALL SLIDE INTERVAL
    setTimeout(slideshow, 1000);
    var imageSlideshowInterval = setInterval(slideshow, 10000);

