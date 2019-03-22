$(document).ready(function ($) {
  $('p').css('border-bottom', '1px solid black')
  $('.first').css('border-color', 'red')
  $('#special').css('background-color', '#ffcc00')
  $('p.first small').css('background-color', 'lightgrey')

  //$('.first').text('Lets learn jQuery')
  $('.first').text('Lets learn jQuery<em>jQuery</em>')
  $('.first').prepend('<h2>Welcome</h2>')
  $('.first').after('<small>Make Webpages interactive</small>')

  //console.log($('#yourName').val())
  $('#yourName').val('Bob Builder')
  $('a[href="#1"]').css('background-color', 'tomato')
  $('a[href^="#"]').css('color', 'grey') // $ end with
  $('a[href*="google"]').css('font-weigh', 'bold')

  //$('.card:first').hide(400)
  // $('.card:first').delay(1000).hide(400).show(800, function() {
  //   alert('We\'re back')
  // });

  $('.card').animate({ borderRadius: '20px' }, 400)

  // Attribute method
  $('img:first').attr('src', './img/image-5.jpg')

  // Class methods
  console.log($('img:first').hasClass('special'))

  // $('img').addClass('special')
  $('img').toggleClass('special')

  // Events
  $('img').click(function () {
    console.log($(this).attr('src'))
    $(this).toggleClass('special')
  })
})
