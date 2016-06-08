// BACK END //

var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !==0) || (year % 400 === 0)) {
    return true;
  } else if (isNaN(year) === true) {
    return ("Please enter a number")
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

    $("#NaN-text").hide();
    $("#results").hide();

    $("#true-false").text(year);

    if (!result) {
      $("#not").text("not")
      $("#results").show();
    } else if (result === "Please enter a number") {
      $("#NaN-text").show();
    } else {
      $("#not").text("")
      $("#results").show();
    }
  });
});
