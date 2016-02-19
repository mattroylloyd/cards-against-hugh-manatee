$(function() {
    var uuid = guid();

    $.get("register/" + uuid)
     .done(function () {
     })
     .error(function() {
        alert('There was an error please reload the page!');
     });

     $.get('/draw/answer/8').done(function (results) {
         $.each(results, function (_, result) {
             $('.hand').append('<div class="card">' + result.title + '</div>');
         });
     });

    startRound();
});

Pusher.log = function(message) {
    if (window.console && window.console.log) {
        window.console.log(message);
    }
};

var pusher = new Pusher('84e4a1b554378879fa22', {
    encrypted: true
});

var user_channel = pusher.subscribe('users')
, answer_pool  = pusher.subscribe('answer_pool')
, hand  = pusher.subscribe('hand')
;

hand.bind('play_card', function(data) {
   alert(data.message);
});

answer_pool.bind('submit_answer', function (data) {
   alert(data.message);
});

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function applyOnClickEvents() {
    // $( ".card" ).each(function( index ) {
    //     $( this ).off("click").click(function () {
    //         $.post( "play/" + $( this ).id, { cardid: $( this ).id } )
    //          .done(function () {
    //             $( this ).remove();
    //             $.get( "/draw/answer/1" )
    //              .done(function (data) {
    //                 $("body").append("<div id='" + data[0].id + "' class='card'><p>" + data[0].title + "</p></div>");
    //                 applyOnClickEvents();
    //              })
    //              .error(function () {
    //                 alert('There was an error please reload the page!');
    //              });
    //
    //          })
    //          .error(function () {
    //             alert('There was an error please reload the page!');
    //          });
    //     });
    // });
}

function startRound() {
    $.get("draw/phpazar/")
     .done(function (data) {
        $( "#phpazarCard p" ).text(data.statement.replace('_', '_____'));
     })
     .error(function () {
        alert('There was an error please reload the page!');
     });
}
