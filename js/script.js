// BACK END //

var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !==0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}




// FRONT END //
$(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("#year").val());
    var result = leapYear(year);

    $("#true-false").text(result);
  });
});
