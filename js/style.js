/*adds style to home page*/
$('document').ready(function() {
  /*listens to window size*/
  $(window).resize(function() {
    let width = $(window).width();
    /*if width is greater than 770px*/
    if( width > 770 ) {
      /*add class to element*/
      $('#rsBorder').addClass('border-right');
      $('#lsBorder').addClass('border-left');
      /*if width is lesser than 770px*/
    } else if( width < 770 ) {
      $('#rsBorder').removeClass('border-right');
      $('#lsBorder').removeClass('border-left');
    }
  })
})