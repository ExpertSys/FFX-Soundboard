const keys = document.querySelectorAll('.sound');
const instruments = document.querySelectorAll('#nav-menu li a, #nav-top-bar li a');

$('.spacing ul li a').click(function(e)
{
    e.preventDefault();
});

$(".nav-item-1").hide();
$(".nav-item-2").hide();
$(".nav-item-3").hide();

  $(document).ready(function() {
  	var timer = setInterval( firstSlide, 2000);
  	var start = $('.nav-item-1').first();
  	function firstSlide() {
  		start.fadeOut(function(){
  			if(start.next().length==0) {
  				start=$('.nav-item-1').first();
  				$('.nav-item-1').first().fadeIn();
  			} else {
  				start.next().fadeIn();
  				start=start.next();
  			}
  		});
  	}

    var timers = setInterval( secondSlide, 2000);
    var starts = $('.nav-item-2').first();
    function secondSlide() {
      starts.fadeOut(function(){
        if(starts.next().length==0) {
          starts=$('.nav-item-2').first();
          $('.nav-item-2').first().fadeIn();
        } else {
          starts.next().fadeIn();
          starts=starts.next();
        }
      });
    }

    var timersz = setInterval( thirdSlide, 2000);
    var startsz = $('.nav-item-3').first();
    function thirdSlide() {
      startsz.fadeOut(function(){
        if(startsz.next().length==0) {
          startsz=$('.nav-item-3').first();
          $('.nav-item-3').first().fadeIn();
        } else {
          startsz.next().fadeIn();
          startsz=startsz.next();
        }
      });
    }


  });




function clickSound(e){
    console.log("inside of clickSound");
    console.log(e.currentTarget);
    let soundKey = e.currentTarget.dataset['sound'];
    console.log(soundKey);
    let audio = document.querySelector(`audio[data-sound="${soundKey}"]`);
    console.log(audio);
    audio.currentTime =0;
    audio.play();
}

function switchInstrument(e){
  e.preventDefault();
   let inst1 = document.querySelector('#ff-1');
   let inst2 = document.querySelector('#ff-2');
   let inst3 = document.querySelector('#ff-3');
   let instrument = e.target.dataset['instrument'];
   if(instrument=="ff-1"){
     inst1.style.display = "block";
     inst2.style.display = "none";
     inst3.style.display = "none";
   }
   else if(instrument=="ff-2") {
     inst1.style.display = "none";
     inst2.style.display = "block";
     inst3.style.display = "none";
   }
   else{
     inst1.style.display = "none";
     inst2.style.display = "none";
     inst3.style.display = "block";
   }
 }

keys.forEach(function(key){
  key.addEventListener("click", clickSound);
});

instruments.forEach(function(instrument){
  instrument.addEventListener("click", switchInstrument);
});
