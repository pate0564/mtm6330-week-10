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

  /* AJAX */
  $('#content').load('./about.html')
  $('#contentNav .nav-link').click( function (e) {
    e.preventDefault() // To prevent onClick event on anchor tag which open page in new tab
    var page = $(this).attr('href')
    $('#contentNav .active').removeClass('active')
    $(this).addClass('active')
    $('#content').fadeOut(500, function () {
      $('#content').load(page)
    }).fadeIn(500)
  }) // Closing click event on the contentNav

  // $.ajax('./data/posts.json') // To get the json data
  // $.ajax({
  //   url: './data/posts.json',
  //   type: 'GET', // get request OR post request
  //   dataType: 'json'
  // }).done(function (data) {
  //   // console.log(data)
  //   var numPosts = data.posts.length
  //   for ( var i = 0; i < numPosts; i++ ) {
  //     var post = '<div class="col-sm-6 p-5"><h3>'
  //       post += (i+1) + '. ' + data.posts[i].title
  //       post += '</h3><p>'
  //       post += data.posts[i].body
  //       post += '</p></div>'
  //       $('#posts').append(post)
  //   }
  // })

  //$.ajax('./data/posts.json') // To get the json data

  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/posts',
    type: 'GET', // get request OR post request
    dataType: 'json'
  }).done(function (data) {
    // console.log(data)
    var numPosts = data.length
    for ( var i = 0; i < numPosts; i++ ) {
      var post = '<div class="col-sm-6 p-5"><h3>'
        post += (i+1) + '. ' + data[i].title
        post += '</h3><p>'
        post += data[i].body
        post += '</p></div>'
        $('#posts').append(post)
    }
  })// Closing the Ajax call for the remote server
  AOS.init();

}) // Closing the document.ready method  and the function