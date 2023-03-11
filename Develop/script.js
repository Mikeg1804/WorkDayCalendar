// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var rootEl = $('.container-lg');
var html =""
var currentHour = dayjs().hour()
for(let i=9;i<=17;i++){
  let hour =""
  if(i > 12){
    hour = (i-12)+" PM"
  }else if(i === 12){
    hour = i+ "PM"
  }else{
    hour = i+"AM"
  }
  let className =""
  if( i <currentHour){
    className="past"
  }else if(i === currentHour){
    className = "present"
  }else{
    className = "future"
  }
  var plan = localStorage.getItem(`hour-${i}`) || ""
  html += ` <div id="hour-${i}" class="row time-block ${className}">
  <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
  <textarea class="col-8 col-md-10 description" rows="3">${plan} </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>
</div>`
}
rootEl.append(html)
//Event Bubbling
$(rootEl).on("click",".saveBtn",function(){
  var userDayPlan = $(this).siblings("textarea").val()
  var id = $(this).parent().attr("id")
  localStorage.setItem(id,userDayPlan)
})
// var hourOneEl = $('<div>');
// //rootEl.append(hourOneEl)
// hourOneEl.attr('id', 'hourone');
// var oneAmEl = $('#hourone');
// hourOneEl.text("One AM")


// var hourTwoEl = $('<div>');
// hourTwoEl.attr('id', 'hour2');
// var twoAmEl = $('#hour2');

// var hourThreeEl = $('<div>');
// hourThreeEl.attr('id', 'hour3');
// var threeAmEl = $('#hour3');

// var hourFourEl = $('<div>');
// hourFourEl.attr('id', 'hour4');
// var fourAmEl = $('#hour4');


// var hourFiveEl = $('<div>');
// hourFiveEl.attr('id', 'hour5');
// var fiveAmEl = $('#hour5');

// var hourSixEl = $('<div>');
// hourSixEl.attr('id', 'hour6');
// var sixAmEl = $('#hour6');

// var hourSevenEl = $('<div>');
// hourSevenEl.attr('id', 'hour7');
// var SevenAmEl = $('#hour7');

// var hourEightEl = $('<div>');
// hourEightEl.attr('id', 'hour8');
// var eightAmEl = $('#hour8');

// var hourNineEl = $('<div>');
// hourNineEl.attr('id', 'hour9');
// var nineAmEl = $('#hour9');

// var hourTenEl = $('<div>');
// hourTenEl.attr('id', 'hour10');
// var tenAmEl = $('#hour10');

// var hourElevenEl = $('<div>');
// hourElevenEl.attr('id', 'hour11');
// var elevenAmEl = $('#hour11');

// var hourTwelveEl = $('<div>');
// hourTwelveEl.attr('id', 'hour12');
// var twelvePmEl = $('#hour12');

// var hourThirteenEl = $('<div>');
// hourThirteenEl.attr('id', 'hour13');
// var onePM = $('hour13')

// var hourFourteenEl = $('<div>');
// hourFourteenEl.attr('id', 'hour14');
// var twoPM = $('hour14')

// var hourFifteenEl = $('<div>');
// hourFifteenEl.attr('id', 'hour15');
// var threePM = $('hour15')

// var hourSixteenEl = $('<div>');
// hourSixtenEl.attr('id', 'hour16');
// var fourPM = $('hour16')

// var hourSeventeenEl = $('<div>');
// hourSeventeenEl.attr('id', 'hour17');
// var fivePM = $('hour17')

// var hourEighteenEl = $('<div>');
// hourEighteenEl.attr('id', 'hour18');
// var sixPM = $('hour18')

// var hourNineteenEl = $('<div>');
// hourNineteenEl.attr('id', 'hour19');
// var sevenPM = $('hour19')

// var hourTwentyEl = $('<div>');
// hourTwentyEl.attr('id', 'hour20');
// var eightPM = $('hour20')

// var hourTwentyOneEl = $('<div>');
// hourTwentyOneEl.attr('id', 'hour21');
// var ninePM = $('hour21')

// var hourTwentyTwoEl = $('<div>');
// hourTwentyTwoEl.attr('id', 'hour22');
// var tenPM = $('hour22')

// var hourTwentyThreeEl = $('<div>');
// hourTwentyThreeEl.attr('id', 'hour23');
// var elvenPM = $('hour23')

// var hourTweentyFourEl = $('<div>');
// hourTweentyFourEl.attr('id', 'hour24');
// var Midnight = $('hour24')



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future id to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
