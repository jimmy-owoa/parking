// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require materialize
//= require_tree .

// $(document).ready(function(){
//   $('input.autocomplete').autocomplete({
//     data: gon.plates,
//     limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
//     onAutocomplete: function(val) {
//        // Callback function when value is autcompleted.
//        location.href = gon.path;
//
//     },
//     minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
//   });
// });


$(document).ready(function(){
  $('input.autocomplete').autocomplete({
    data: gon.plates,
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
      // Callback function when value is autcompleted
      window.location.href = '/cars/'+ gon.car_ids[val]
    },
    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
  });
  $('.button-collapse').sideNav({
    menuWidth: 200
  });
});
