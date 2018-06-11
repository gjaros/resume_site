function main() {
  $('p').hide();
  $('p').fadeIn(2000);
  $('li').find('p').hide();

  $('li')
    .mouseenter(function() {
      switch($(this).find('p').text()) {
        case 'beginner':
          $(this).find('i').css({'color':'#1ac6ff', 'transition':'ease 0.5s'});
          break;
        case 'intermediate':
          $(this).find('i').css({'color':'#8cff1a', 'transition':'ease 0.5s'});
          break
        case 'advanced':
          $(this).find('i').css({'color':'#ff531a', 'transition':'ease 0.5s'});
      }
    });

  $('#leave')
    .mouseleave(function() {
      if($(this).find('i').first().text() === 'label_important') {
        $('i').addClass('animated flash').css({'color':'#ffc15e', 'transition':'ease 1s'});
      }
      setTimeout(function() {
        $('i').removeClass('animated flash');
      }, 1000);
    });

  setTimeout(function() {
    odometer.innerHTML = 735;
  }, 500);
}

$(document).ready(main);
