function validateForm() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
    window.location.href = "thankyou.html"; 
    return false; 
}
