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
