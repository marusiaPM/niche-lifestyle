const contactFormValidation = () => {
   const contactForm = document.querySelector('.contactUsForm');

   // inputs 
   const inputs = contactForm.querySelectorAll('.contactFormInput');
   const fName = contactForm.querySelector('input[name = "f_name"]');
   const sName = contactForm.querySelector('input[name = "s_name"]');
   const email = contactForm.querySelector('input[name = "email"]');
   const location = contactForm.querySelector('input[name = "location"]');
   const message = contactForm.querySelector('textarea[name = "message"]');

   // error hints 
   const errorHints = contactForm.querySelectorAll('.errorHint');
   const fNameError = contactForm.querySelector('.errorHint--fname');
   const sNameError = contactForm.querySelector('.errorHint--sname');
   const emailError = contactForm.querySelector('.errorHint--email');
   const locationError = contactForm.querySelector('.errorHint--location');
   const messageError = contactForm.querySelector('.errorHint--message');


   contactForm.addEventListener('submit', (e) =>{

      let errors = 0;

      // remove invalid styling 
      inputs.forEach(input =>
         input.classList.remove('invalidFormInput')
      );

      errorHints.forEach(hint =>
         hint.innerHTML = ""
      );

      // f name validation 
      if(fName.value === '' || fName.value == null){
         errors ++;
         fNameError.innerHTML = "Please enter your first name";
         fName.classList.add('invalidFormInput');
      }

      // s name validation 
      if(sName.value === '' || sName.value == null){
         errors ++;
         sNameError.innerHTML = "Please enter your surname";
         sName.classList.add('invalidFormInput');
      }

      // emal validation 
      if(email.value === '' || email.value == null){
         errors ++;
         emailError.innerHTML = "Please enter a valid email";
         email.classList.add('invalidFormInput');
      }


      // location validation 
      if(location.value === '' || location.value == null){
         errors ++;
         locationError.innerHTML = "Please enter your location";
         location.classList.add('invalidFormInput');
      }

      // message validation 
      if(message.value === '' || message.value == null){
         errors ++;
         messageError.innerHTML = "Please enter your message";
         message.classList.add('invalidFormInput');
      }
      
      // if there are any errors don't submit form 
      if(errors > 0){
         console.log(errors);
         e.preventDefault();
      }
   })
};

contactFormValidation();

