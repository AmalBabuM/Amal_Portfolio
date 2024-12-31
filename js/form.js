var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var numberError = document.getElementById('number-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName() {
    var name=document.getElementById('contact-name').value.trim(); 

    if (name.length==0) {
        nameError.innerHTML='Name is Required';
        nameError.style.color='red'
        document.getElementById('contact-name').style.borderColor='red'
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write a Full Name';
        nameError.style.color='red'
        document.getElementById('contact-name').style.borderColor='red'
        return false;
    }

    if (name.length<3){
        nameError.innerHTML='Enter Minimum 3 charactors';
        nameError.style.color='red'
        document.getElementById('contact-name').style.borderColor='red'
        return false;
    }
    
    nameError.innerHTML='Name is valid';
    nameError.style.color='green'
    document.getElementById('contact-name').style.borderColor='green'
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value.trim();
    if (email.length==0) {
        emailError.innerHTML='Email is Required';
        emailError.style.color='red'
        document.getElementById('contact-email').style.borderColor='red'
        return false;
    }

    if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML='Email is Invalid';
        emailError.style.color='red'
        document.getElementById('contact-email').style.borderColor='red'
        return false;
    }
    emailError.innerHTML='Email is valid';
    emailError.style.color='green'
    document.getElementById('contact-email').style.borderColor='green'
    return true;
}

function validateMessage() {
    var message =document.getElementById('contact-message').value.trim();
    var Required=15;
    var left=Required - message.length;


    if(message.length==0 || message.length<10){
        messageError.innerHTML ='More Character Required';
        messageError.style.color='red'
        document.getElementById('contact-message').style.borderColor='red'
        
        return false;
    }
    messageError.innerHTML='Message is valid';
    messageError.style.color='green'
    document.getElementById('contact-message').style.borderColor='green'
    return true;    
    
}

function validateNumber(){
	var phone = document.getElementById("contact-number").value.trim();
	if (phone.length == 0) {
		numberError.innerHTML = 'Phone Number is Required';
		numberError.style.color = 'red'
		document.getElementById('contact-number').style.borderColor='red'
		return false;
	}
	if (phone.length != 10) {
		numberError.innerHTML = "Enter valid phone number"
		numberError.style.color = "red"
		document.getElementById('contact-number').style.borderColor='red'
		return false

	}
	if (!phone.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)) {
		numberError.innerHTML = "Phone Number Must be digits"
        document.getElementById('contact-number').style.borderColor='red'
		return false;
    }
    numberError.innerHTML = ""
    numberError.innerHTML='Number is valid';
    numberError.style.color='green'
	document.getElementById('contact-number').style.borderColor='green'
	return true;
}