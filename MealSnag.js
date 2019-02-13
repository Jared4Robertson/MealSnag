
$(document).ready(()=>{
    
     yup   = document.getElementById('pop');
    $(document).on("click",".login_button",function(){
        build_login_page();
      });
    $(document).on("click",".yuh_button",function(){
        build_pilot_page();
      });
    $(document).on("click",".home_button",function(){
        build_home_page();
      });
    $(document).on("click",".pass_log",function(){
        build_passenger_page();
      });
    $(document).on("click",".pilot_log",function(){
        build_pilot_page();
      });
    $(document).on("click",".twitter_log",function(){
        build_twitter_page();
      });
    $(document).on("click","#login_btn",function(){
        check_login();
      });
    $(document).on("click","#Search_btn",function(){
        show_results();
      });
    $(document).on("click",".flight_div",function(){
        book_flight(this);
    });
})
login_name = "guest";
let pilot_boolean = false;
let logged_in = true;
let log_label = "Log in";

function build_home_page (){
    $("body").empty();
    add_navbar();
    add_homepage();   
    $("body").append(yup);
}
function build_passenger_page(){
    $('body').empty();
    add_navbar();
    add_passpage();
}    
function build_pilot_page(){
    $("body").empty();
    add_navbar();
    add_pilotpage();
}
function build_twitter_page(){
    $("body").empty();
    add_navbar();
    add_twitterpage();
}
function build_login_page(){
    $('body').empty();
    log_label="Log in";
    login_name="guest";
    logged_in=false;
    add_navbar();
    add_loginpage();
}
function add_twitterpage() {
    $('body').append('<div class = background_div></div>');
    $('.background_div').append('<div class = base_div_pilot></div>');
    $('.base_div_pilot').append('<div class="">\
    <div class = "title2">Popular Tweets</div><br>\
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Fluber is a great company!<br>..and deserves an A :)</p>&mdash; Austin Redenbaugh (@aredenbaugh11) <a href="https://twitter.com/aredenbaugh11/status/1072213457502646275?ref_src=twsrc%5Etfw">December 10, 2018</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\
    </div>');
}
function add_navbar(){
    $('body').append('<div id="navbar_div">\
    <a class = "home_button">MealSnag</a>\
    <a class = "pass_log">Meal Plans</a>\
    <a class = "pilot_log">Cookin Time</a>\
    <a class = "twitter_log"></a>\
    <a class = "login_button">Log in</a>\
    <a class = "user">guest</a>\
')
}

function add_homepage(){
    $('body').append('</div>\
        <div id="Passenger_login_div">\
        <div class = "Advertisement"><br>Cook the Way <br> You Want</div>\
    <div class="button_holder1">Order Meal Plan<br><br><br><br>\
        \
    <div class = "blue_button pass_log">Meals</div></div>\
    <div class = "button_holder2">Lets Get Cookin<br><br><br><br>\
        \
    <div class = "blue_button pilot_log">Cookbook</div></div>\
  </div>\
  <div id="mesg_div"></div>\
  <div id="Pilot_login_div">')
}

function add_passpage(){
    if(logged_in){
        pilot_boolean=false;
        add_pass_div();
    }
    else{
        pilot_boolean = false;
        build_login_page();
    }
}

function add_pilotpage(){
    if(logged_in){
        pilot_boolean=true;
        add_pilot_div();
        
    }
    else{
        pilot_boolean=true;
        build_login_page();
    }
}

function add_loginpage(){
    $('body').append('<div class = "background_div3"></div>')
    $('.background_div3').append('<div class="login_div">Log into MealSnag<br>\
    <input type="text" tabindex="3" class = "textbox" id="login_user" placeholder = "Username"><br>\
    <input type="password" tabindex="2" class = "textbox" id="login_pass" placeholder = "Password"><br>\
    <button tabindex="1" id="login_btn">Log in</button>\
    <div id ="mesg_div"</div>\
  </div>')
}
function check_login(){
    let user = $('#login_user').val();
    let pass = $('#login_pass').val();
    if(user.toLowerCase()=="jaredrob"){
        if(pass.toLowerCase()=="7"){
            login_name="Jared";
            logged_in = true;
            first_name = "Jared";
            last_name ="Robertson";
            age=21;
            flight_num=0;

        }
    }
    else if(user.toLowerCase()=="tin"){
        if(pass.toLowerCase()=="730093313"){
            login_name="Tin";
            logged_in=true;
            first_name = "Austin";
            last_name ="Redenbaugh";
            age=20;
        }
    }
    else{
        $('#mesg_div').html("Login failed. Try again.");
    }
    if(logged_in){
    log_label = "Log out";    
    console.log(user);
    if(pilot_boolean){
        build_pilot_page();
    }
    else{
        build_passenger_page();
    }
}
}
function add_pilot_div(){
    
    $('body').append('<div class = background_div></div>');
    $('.background_div').append('<div class = base_div_pilot></div>');
    $('.base_div_pilot').append('<div class="">\
    <div class = "title">Choose Your Menu</div><br>\
  </div>');
  autocomplete(document.getElementById("from"), airport_names);
  autocomplete(document.getElementById("to"), airport_names);
}
function add_pass_div(){
    $('body').append('<div class = background_div2></div>');
    $('.background_div2').append('<div class = base_div_passenger></div>');
    $('.base_div_passenger').append('<div class = meal>3 meal week  only $3.85 per serving!! -<br> ---Barbeque Chicken Cornbread Skillet -- 4 servings <br>\
     ---Chicken Breasts with Chipotle Green Onion Gravy - 4 servings <br> \
     ---Szechwan Shrimp - 4 meals-- 4 servings</div>');
     $('.base_div_passenger').append('<div class="meal">\
     ---Click here\
     <a href="https://grocery.walmart.com/?&adid=22222222420331719495&wmlspartner=wmtlabs&wl0=e&wl1=g&wl2=c&wl3=294099343363&wl4=aud-300526414947:kwd-667579415&wl5=1021047&wl6=&wl7=9060502&wl8=&wl9=&wl10=&wl11=&wl12=&wl13=&veh=sem_br&gclid=Cj0KCQiAnY_jBRDdARIsAIEqpJ06UDnkm7U9Q8VDYuE5PFsM27okslVLe5GVJfUQzFTzODqyYNNDnrkaArRZEALw_wcB">link</a>\
   </div>')
    
    
   

}
function create_pilot_shit() {
    let d_time = $('.d_time')[0].value;
    let a_time = $('.a_time')[0].value;
    let d_date = $('.d_date')[0].value;
    let depart_from = document.getElementById("from").value;
    let arrive_to = document.getElementById("to").value;
    let d_id = 0;
    let a_id = 0;
    let bool = false;
    let existing_flight_id;

    for(i=0;i<airports.length;i++){
        if(airport_names[i].toUpperCase()==arrive_to.toUpperCase()){
            a_id =airports[i].id;
        }
        if(airport_names[i].toUpperCase()==depart_from.toUpperCase()){
           d_id =airports[i].id;
        }
    }

    for (i=0; i<flights.length; i++) {
        if (flights[i].departs_at.slice(11,16) == d_time) {
            if (flights[i].arrives_at.slice(11,16) == a_time) {
                if (flights[i].departure_id == d_id) {
                    if (flights[i].arrival_id == a_id) {
                        bool = true;
                        existing_flight_id=flights[i].id;
                        existing_flight_num=flights[i].number;
                    }
                }
            }
        }
    }
    if (bool) {
        $.ajax(root_url + '/instances',
        {
            type: 'POST',
            xhrFields: {withCredentials: true},
            data:{
                "instance":
                {"flight_id":existing_flight_id,
                "date":d_date,
                "is_cancelled":true,
                "info":null,"user_id":null,
                "created_at":null,
                "updated_at":null
                }

            
            },
                success: (response) => {
                    create_confirm_pilot_flight_div();
                },
            error: () => {
                alert('this error');
            }
         });
    
    }
    else {
        $.ajax(root_url + '/flights',
	       {
		   type: 'POST',
           xhrFields: {withCredentials: true},
           data:{
            "flight": {
                "departs_at":   d_time,
                "arrives_at":   a_time,
                "number":       flight_num,
                "departure_id": d_id,
                "arrival_id":   a_id,
                "info": "Captain " + login_name
            }},
		   success: (response) => {
                existing_flight_num=flight_num;
               create_instance(response,d_date);
               create_confirm_pilot_flight_div();
               
            },
		   error: () => {
		       alert('that error');
		   }
        });
        
    }
}
function create_instance(response,d_date){
    $.ajax(root_url + '/instances',
	        {
		    type: 'POST',
            xhrFields: {withCredentials: true},

            data:{
                "instance":
                {
                "flight_id":response.id,
                "date":d_date,
                "is_cancelled":true,
                "info":null,"user_id":null,
                "created_at":null,
                "updated_at":null
                }

            
            },
		    success: (response) => {
                
                flight_num++;
                
            },
		    error: () => {
		        alert('those error');
		    }
        });
}
function create_confirm_pilot_flight_div() {
    let d_pid = "ABC";
    let a_pid = "123";
    // let d_lat = 0;
    // let d_long = 0;
    // let a_lat = 0;
    // let a_long = 0;
    let d_time = $('.d_time')[0].value;
    let a_time = $('.a_time')[0].value;
    let d_date = $('.d_date')[0].value;
    let depart_from = document.getElementById("from").value;
    let arrive_to = document.getElementById("to").value;
    for(i=0;i<airports.length;i++){
        if(airport_names[i].toUpperCase()==arrive_to.toUpperCase()){
            a_pid = airports[i].code;
            // a_lat = airports[i].latitude;
            // a_long = airports[i].longitude;
        }
        if(airport_names[i].toUpperCase()==depart_from.toUpperCase()){
            d_pid = airports[i].code;
            // d_lat = airports[i].latitude;
            // d_long = airports[i].longitude;
        }
    }

    body = $(".background_div");
    body.empty();
    $('body').append('<div class = background_div></div>');
    $('.background_div').append('<div class = base_div_pilot></div>');
    $('.base_div_pilot').append('<div class="">\
    <div class = "title">Have a nice flight captain.</div><br>\
    <div class = base_div_pilot2>\
    <br><text class="depart_text2">Flight #'+existing_flight_num+'</text><br><br>\
    <text class="depart_text2">'+d_pid+' to '+a_pid+'</text><br>\
    <text class="depart_text2">'+d_date+'</text><br>\
    <text class="depart_text2">Depart: '+d_time+'</text><br>\
    <text class="depart_text2">Arrive: '+a_time+'</text><br>\
    <text class="depart_text2">Flight Confirmed.</text>\
    </div>\
    <br><button class = "yuh_button">Add Another Flight</button>\
    </div>');
}

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        $(this).after(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
          /*check if the item starts with the same letters as the text field value:*/
          if (arr[i].toUpperCase().indexOf(val.toUpperCase())> -1) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = arr[i].substr(0,arr[i].toUpperCase().indexOf(val.toUpperCase()));
            b.innerHTML += "<strong>" + arr[i].substr(arr[i].toUpperCase().indexOf(val.toUpperCase()), val.length) + "</strong>";
            b.innerHTML += arr[i].substr(arr[i].toUpperCase().indexOf(val.toUpperCase())+val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function(e) {
                /*insert the value for the autocomplete text field:*/
                inp.value = this.getElementsByTagName("input")[0].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          /*If the arrow DOWN key is pressed,
          increase the currentFocus variable:*/
          currentFocus++;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 38) { //up
          /*If the arrow UP key is pressed,
          decrease the currentFocus variable:*/
          currentFocus--;
          /*and and make the current item more visible:*/
          addActive(x);
        } else if (e.keyCode == 13) {
          /*If the ENTER key is pressed, prevent the form from being submitted,*/
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  function convert_time(time){

    time = time.split(':'); // convert to array

    // fetch
    var hours = Number(time[0]);
    var minutes = Number(time[1]);
    var seconds = Number(time[2]);

    // calculate
    var timeValue;

    if (hours > 0 && hours <= 12) {
    timeValue= "" + hours;
    } else if (hours > 12) {
    timeValue= "" + (hours - 12);
    } else if (hours == 0) {
    timeValue= "12";
    }
    
    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
    timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM
    return timeValue.slice(0,4)+timeValue.slice(7,13);
  }

  function book_flight(flight_div){
    $.ajax(root_url + '/tickets',
    {
    type: 'POST',
    xhrFields: {withCredentials: true},
    data:{
            "ticket": {
              "first_name":   first_name,
              "middle_name":  "",
              "last_name":    last_name,
              "age":          age,
              "gender":       "male",
              "is_purchased":  true,
              "price_paid":   "290.11",
            },
    success: (response) => {
        build_confirm_ticket(flight_div)
     },

 },
    error: () => {
        alert('error');
    }
});
  }
function build_confirm_ticket(flight){
    body = $(".background_div2");
    body.empty();
    $('body').append('<div class = background_div></div>');
    $('.background_div2').append('<div class = base_div_pilot></div>');
    $('.base_div_pilot').append('<div class="">\
    <div class = "title">Booking Confirmed.</div><br>\
    <div class = base_div_pass2>\
    </div>\
    <br><button class = "pass_log yup">Book Another Flight</button>\
    </div>');
    $(".base_div_pass2").append('<div class = "ticket"><strong>Ticket</strong><br>\
        First Name:   '+first_name+'<br>\
        Last Name:    '+last_name+'<br>\
        Age:          '+age+'<br>\
        Gender:       Male<br>\
        Date:         '+$(flight).find( ".flight_date_div").text()+'<br>\
        Time:         '+$(flight).find( ".flight_time_div").text()+'<br>\
        '+$(flight).find( ".flight_number_div").text()+'<br>\
        From-To:         '+$(flight).find( ".flight_from-to_div").text()+'<br>\
        </div>');



}