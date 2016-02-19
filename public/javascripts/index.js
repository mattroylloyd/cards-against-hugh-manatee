$(function() {
    var uuid = guid();

    var hand = [];

    function updateHand()
    {
        $('.hand').empty();

        $.each(hand, function (_, result) {
            $('.hand').append('<div class="card" data-hand="'+_+'" data-card="' + result.id + '">' + result.title + '</div>');
        });

        $('.card').off('click').click(function () {
            console.log(this);
            var handIndex = $(this).attr('data-hand');
            hand.splice(handIndex, 1);
            // draw a card
            //
            $.get('/draw/answer/').done(function (results) {
                card = results[0];
                hand.push(card);
                updateHand();
            });
            updateHand();
        });
    }

    $.get("register/" + uuid)
     .done(function () {
     })
     .error(function() {
        alert('There was an error please reload the page!');
     });

     $.get('/draw/answer/8').done(function (results) {
         hand = results;
         updateHand();
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
;

answer_pool.bind('card_played', function(data) {
    // Remove from hand, add too answer pool
   alert(data.message);
});

// hand.bind('update_hand', function (data) {
//     updateHand();
// });

answer_pool.bind('submit_answer', function (data) {
   alert(data.message);
});

// user_channel.bind('add_user', function(data) {
//   $.each(data.cards, function (_, card) {
//     $('.hand').append('<div class="card">' + card.title + '</div>');
//   });
// });

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
