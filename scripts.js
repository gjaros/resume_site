function main() {
  $('p').hide();
  $('p').fadeIn(2000);
  $('li').find('p').hide();

  $('li')
    .mouseenter(function() {
      switch($(this).find('p').text()) {
        case 'beginner':
          $(this).find('i').css({'color':'#80dfff', 'transition':'ease 1s'});
          break;
        case 'intermediate':
          $(this).find('i').css({'color':'#bfff80', 'transition':'ease 1s'});
          break
        case 'advanced':
          $(this).find('i').css({'color':'#ff9f80', 'transition':'ease 1s'});
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
    odometer.innerHTML = 707;
  }, 500);
}

$(document).ready(main);
