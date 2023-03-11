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





