let PhoneError = document.getElementById("phone-error")
let EmailError = document.getElementById("email-error")
let NameError = document.getElementById("name-error")
let MessageError = document.getElementById("message-error")
let SubmitError = document.getElementById("submit-error")

function ValidateName() {
    let Name = document.getElementById('Contactname').value
    if (Name.length === 0) {
        NameError.innerHTML = "Name is required"
        return false;
    }
    if(!Name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){

        NameError.innerHTML = 'Write full name';
        
        return false;
    }
    
    NameError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true;
}
function Validatephone(){
    let Phone = document.getElementById("Contactphone").value
    if (Phone.length==0) {
        PhoneError.innerHTML = 'Phone no is required'
        return false  
    }
    if (Phone.length === !10 || Phone.length > 10) {
        PhoneError.innerHTML = 'Phone must be 10 digits'
        return false
    }
    if(!Phone.match(/^((([0-9]{1})*[- .(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4})+)*$/)){

        PhoneError.innerHTML = 'Only digits are allowed'
        return false
    }
    PhoneError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true

} 
function Validatemail() {
    let Email = document.getElementById('Contactmail').value
    if (Email.length==0) {
        EmailError.innerHTML = 'Email is required'
        return false  
    }
    if(!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        EmailError.innerHTML = 'Email invalid'
        return false
    }
    
    EmailError.innerHTML = '<i class="fas fa-check-circle"></i>'
    return true
}
function Validatemessage() {
    let Message = document.getElementById('Contacttext').value
    let required = 20
    let left = required - Message.length
    if (Message.length==0) {
        MessageError.innerHTML = 'Message is required'
        return false
    }
    if (Message.length > 20) {
        MessageError.innerHTML = 'Exceeded limit'
        return false

        
    }
    if (left > 0) {
        MessageError.innerHTML = left + 'more characters required'
        return false
        
    }
    if (Message.length === 20) {
        MessageError.innerHTML = "<i class='fas fa-check-circle'></i>"   
    return true
    }
    
    
}
function Validateform() {
    if(!ValidateName() || !Validatephone() || !Validatemail() ||!Validatemessage()){

        SubmitError.style.display = 'block';
        
        SubmitError.innerHTML = 'Missing information,please fix error!';
        
        setTimeout(function(){SubmitError.style.display = 'none';}, 3000);
        
        return false
    
    }

    
}


    

        
    

    
