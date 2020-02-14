var app = {
	settings: {
		container: $('.calendar'),
		calendar: $('.front'),
		days: $('.weeks span'),
		form: $('.back'),
		input: $('.back input'),
		buttons: $('.back button'),
		submit: $('.save')
	},

	init: function() {
		instance = this;
		settings = this.settings;
		this.bindUIActions();
	},

	swap: function(currentSide, desiredSide) {
		settings.container.toggleClass('flip');

		currentSide.fadeOut(900);
		currentSide.hide();

		desiredSide.show();
	},

	bindUIActions: function() {
		settings.days.on('click', function(){
			let data = document.getElementsByClassName('info-date')
			data[0].innerText = `Date: Feb ${ids}, 2020`

			instance.swap(settings.calendar, settings.form);
			settings.input.focus();
		});

		settings.submit.on('click', function(){
			document.getElementById(`${ids}`).className = "event";
		});

		settings.buttons.on('click', function(){
			instance.swap(settings.form, settings.calendar);
		});
	}
}



function setdate(){

  var dateHead = document.getElementsByClassName('current-date')
  let curDate = document.createElement("h1")
  let curMonth = document.createElement("h1")

  months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  days = ["Sunday","Moday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  date = new Date().getDate()
  month = months[new Date().getMonth()]
  day = days[new Date().getDay()]
  year = new Date().getFullYear()

  curDate.innerText = `${day} ${date}th`
  curMonth.innerText = `${month} ${year}`

  dateHead[0].appendChild(curDate)
  dateHead[0].appendChild(curMonth)

  curDate = document.getElementById(`${date}`)
  curDate.className = "active"
}

app.init();
setdate();
var ids;
function giveId(id){
	ids = id;
}
