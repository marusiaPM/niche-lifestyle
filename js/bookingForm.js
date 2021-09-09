// date pickers - jQuery 
$( function() {
   $( "#startDate" ).datepicker({ dateFormat: 'dd/mm/yy'});
   $( "#endDate" ).datepicker({ dateFormat: 'dd/mm/yy'});
} );


const bookingFormValidation = () => {
   const form = document.querySelector('.bookingForm');

   // inputs 
   const inputs = form.querySelectorAll('.bookingInput');
   const sDate = form.querySelector('input[name = "startDate"]');
   const eDate = form.querySelector('input[name = "endDate"]');
   const passengers = form.querySelector('select[name = "passengers"]');
   const name = form.querySelector('input[name = "bookingName"]');
   const email = form.querySelector('input[name = "bookingEmail"]');


   // error hints 
   const errorHints = form.querySelectorAll('.errorHint');
   const sDateError = form.querySelector('.errorHint--startDate');
   const eDateError = form.querySelector('.errorHint--endDate');
   const passangersError = form.querySelector('.errorHint--passangers');
   const nameError = form.querySelector('.errorHint--bookingName');
   const emailError = form.querySelector('.errorHint--bookingEmail');


   form.addEventListener('submit', (e) =>{

      let errors = 0;

      // remove invalid styling 
      inputs.forEach(input =>
         input.classList.remove('invalidFormInput')
      );

      errorHints.forEach(hint =>
         hint.innerHTML = ""
      );

      // start Date
      if(sDate.value === '' || sDate.value == null){
         errors ++;
         sDateError.innerHTML = "Please choose a start date";
         sDate.classList.add('invalidFormInput');
      }

      // end Date
      if(eDate.value === '' || eDate.value == null){
         errors ++;
         eDateError.innerHTML = "Please choose a start date";
         eDate.classList.add('invalidFormInput');
      }

      // passangers
      if(passengers.selectedIndex == 0){
         errors ++;
         passangersError.innerHTML = "Please choose a number of passengers";
         passengers.classList.add('invalidFormInput');
      }

      // name
      if(name.value === '' || name.value == null){
         errors ++;
         nameError.innerHTML = "Please enter your name";
         name.classList.add('invalidFormInput');
      }
      
      // emal validation 
      if(email.value === '' || email.value == null){
         errors ++;
         emailError.innerHTML = "Please enter a valid email";
         email.classList.add('invalidFormInput');
      }

      
      // if there are any errors don't submit form 
      if(errors > 0){
         console.log(errors);
         e.preventDefault();
      }
   })
};

bookingFormValidation();