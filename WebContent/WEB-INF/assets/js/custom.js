/* Slider Section  */

$(document).ready(function () {
  

    
  //  $(function() {
    //  $('.summernote').summernote({
        height: 200,
      //  "placeholder": " ",
    //  });
      // $('form').on('submit', function (e) {
      //   e.preventDefault();
      //   alert($('.summernote').summernote('code'));
      // });
  //  });


    $(function(){
      $('.summernote').summernote({
         height:260,
         "placeholder":" ",
      });
    });




    $("#showHide").click(function() {
      if ($(".login-field-password").attr("type") == "password") {
        $(".login-field-password").attr("type", "text");
        $("#showHide").text("Hide");
    
      } else {
        $(".login-field-password").attr("type", "password");
        $("#showHide").text("Show");
      }
    });
  
    
      $("#showHide1").click(function() {
        if ($(".login-field-password1").attr("type") == "password") {
          $(".login-field-password1").attr("type", "text");
          $("#showHide1").text("Hide");
      
        } else {
          $(".login-field-password1").attr("type", "password");
          $("#showHide1").text("Show");
        }
      });
   
    
        $("#showHide2").click(function() {
          if ($(".login-field-password2").attr("type") == "password") {
            $(".login-field-password2").attr("type", "text");
            $("#showHide2").text("Hide");
        
          } else {
            $(".login-field-password2").attr("type", "password");
            $("#showHide2").text("Show");
          }
        });
     


        $("#showHide4").click(function() {
          if ($(".login-field-password4").attr("type") == "password") {
            $(".login-field-password4").attr("type", "text");
            $("#showHide4").text("Hide");
        
          } else {
            $(".login-field-password4").attr("type", "password");
            $("#showHide4").text("Show");
          }
        });
      
        
          $("#showHide5").click(function() {
            if ($(".login-field-password5").attr("type") == "password") {
              $(".login-field-password5").attr("type", "text");
              $("#showHide5").text("Hide");
          
            } else {
              $(".login-field-password5").attr("type", "password");
              $("#showHide5").text("Show");
            }
          });
       
        
            $("#showHide6").click(function() {
              if ($(".login-field-password6").attr("type") == "password") {
                $(".login-field-password6").attr("type", "text");
                $("#showHide6").text("Hide");
            
              } else {
                $(".login-field-password6").attr("type", "password");
                $("#showHide6").text("Show");
              }
            });







            /* Date Picker js  */
        
            $(function () {
              var $now = moment();
              var $dateMin = $now.subtract(3, 'days');
        
        
              $('#datetimepicker').bootstrapMaterialDatePicker({
                format: 'MM/DD/YYYY HH:mm',
                shortTime: false,
                //minDate: $dateMin,
                //maxDate: null,
                //currentDate: $now,
                //disabledDays: [],
                date: true,
                time: true,
                monthPicker: false,
                year: true,
                clearButton: false,
                nowButton: false,
                switchOnClick: true,
                cancelText: 'Cancel',
                //okText: 'VALIDER',
                //clearText: 'EFFACER',
                //nowText: 'MAINTENANT',
                //triggerEvent: 'focus',
                //lang: 'en',
                //weekStart: 1,
              });
        
              $('#datetimepicker-fr').bootstrapMaterialDatePicker({
                format: 'DD/MM/YYYY HH:mm',
                shortTime: false,
                clearButton: false,
                nowButton: false,
                cancelText: 'annuler',
                //okText: 'valider',
                //clearText: 'effacer',
                nowText: 'maintenant',
                lang: 'fr',
                weekStart: 1,
              });
        
              $('#timepicker').bootstrapMaterialDatePicker({
                format: 'HH:mm',
                shortTime: false,
                date: false,
                time: true,
                monthPicker: false,
                year: false,
                switchOnClick: true
              });
        
              $('#datepicker').bootstrapMaterialDatePicker({
                format: 'DD/MM/YYYY',
                shortTime: false,
                date: true,
                time: false,
                monthPicker: false,
                year: false,
                switchOnClick: true,
              });
        
        
              $('#datepicker1').bootstrapMaterialDatePicker({
                format: 'DD/MM/YYYY',
                shortTime: false,
                date: true,
                time: false,
                monthPicker: false,
                year: false,
                switchOnClick: true,
              });
        
              $('#monthpicker').bootstrapMaterialDatePicker({
                format: 'MM',
                shortTime: false,
                date: false,
                time: false,
                monthPicker: true,
                year: false
              });
        
              $('#yearpicker').bootstrapMaterialDatePicker({
                format: 'YYYY',
                shortTime: false,
                date: false,
                time: false,
                monthPicker: false,
                year: true,
                switchOnClick: true,
              });
            });
        




        // manual carousel controls
        $('.next').click(function(){ $('.carousel').carousel('next');return false; });
        $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
   


        // $(".toggle-password").click(function() {

        //   $(this).toggleClass("fa-eye fa fa-eye");
        //   var input = $($(this).attr("toggle"));
        //   if (input.attr("type") == "password") {
        //     input.attr("type", "text");
        //   } else {
        //     input.attr("type", "password");
        //   }
        //   });


        



      
        
     

});



new WOW().init();






/* My Sidebar  */

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}




/* Chart   */


var trans = document.getElementById("transchart");
var transchart = new Chart(trans, {
type: 'pie',
data: {
 //labels: ['Pending', 'Sucess', 'Failed'],
datasets: [{


indexLabelFontSize: 12,
data: [97, 37, 432],
backgroundColor: [
'#6f42c2',
'#f10075',
'#00cccc'

],
borderColor: [
'#6f42c2',
'#f10075',
'#00cccc'
],
borderWidth: 1
}]
},
options: {
cutoutPercentage: 50,
responsive: false,

}
});


/* Time Chart  */


var timesc = document.getElementById("timechart");
var timechart = new Chart(timesc, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'March'],
    datasets: [{
    
      label: 'This Years',
      data: [7000, 5000, 9000],
      borderColor: '#007bff',
      backgroundColor: '#ff000000',
      borderWidth: 1,
    },
    {
      label: 'Last Years',
      data: [9000, 1700, 1500, 500, 2458, 4487, 4445],
      borderColor: "#f10075",
      backgroundColor: '#ff000000',
      borderWidth: 1,
    }
  
  
  ],
  },
  options: {
    cutoutPercentage: 100,
    responsive: true,
    
    }


});



var ctx = document.getElementById("totalrevenue").getContext('2d');
var totalrevenue = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'March','April','May','Jun','July'],
    datasets: [{
      label: 'Net',
      data: [10000, 1999, 2800, 1650, 5458, 5487, 8445],
      backgroundColor: "#560bd0"
    }, {
      label: 'Gross',
      data: [9000, 1700, 1500, 500, 2458, 4487, 4445],
      backgroundColor: "#00cccc"
    }]
  },
  options: {
    // cutoutPercentage: 100,
    // responsive: true,
    
    }
 
});





(function($){
	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
	  if (!$(this).next().hasClass('show')) {
		$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
	  }
	  var $subMenu = $(this).next(".dropdown-menu");
	  $subMenu.toggleClass('show');

	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
		$('.dropdown-submenu .show').removeClass("show");
	  });

	  return false;
	});
})(jQuery)





document.getElementById('b1').onclick = function(){
  swal("Here's a message!");
};

document.getElementById('b2').onclick = function(){
  swal("Here's a message!", "It's pretty, isn't it?")
};

document.getElementById('b3').onclick = function(){
  swal("Good job!", "You clicked the button!", "success");
};

document.getElementById('b4').onclick = function(){
  swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!',
      closeOnConfirm: false,
      //closeOnCancel: false
  },
  function(){
      swal("Deleted!", "Your imaginary file has been deleted!", "success");
  });
};

document.getElementById('b5').onclick = function(){
  swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: "No, cancel plx!",
      closeOnConfirm: false,
      closeOnCancel: false
  },
  function(isConfirm){
  if (isConfirm){
    swal("Deleted!", "Your imaginary file has been deleted!", "success");
  } else {
    swal("Cancelled", "Your imaginary file is safe :)", "error");
  }
  });
};

document.getElementById('b6').onclick = function(){
  swal({
      title: "Sweet!",
      text: "Here's a custom image.",
      imageUrl: 'https://i.imgur.com/4NZ6uLY.jpg'
  });
};




