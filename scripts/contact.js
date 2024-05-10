const inputEmail = document.getElementById('email');
const errorEmail = document.getElementById('emailError');
const inputPhone = document.getElementById('phone');
const errorPhone = document.getElementById('phoneError');

//check the validitiy of the input
inputEmail.addEventListener('input', function(){
  if(!inputEmail.checkValidity()){
    //if there us no value
    if (inputEmail.validity.valueMissing){
      errorEmail.innerHTML = 'Email required';
    }
    //if the value doesn't match with the email 
    else if(inputEmail.validity.typeMismatch){
      errorEmail.innerHTML = `The input doesn't match with the email format`;
    }
  }
  else{
    errorEmail.innerHTML = "";
  }
})

inputPhone.addEventListener('input', function(){
  if(!inputPhone.checkValidity()){
    //if there is a mismatch
    if(inputPhone.validity.patternMismatch){
      errorPhone.innerHTML = `The input doesn't match with          the phone format`;
    }
  }
  else{
    errorPhone.innerHTML = "";
  }
})
