document.querySelector('#myForm').addEventListener('submit', function(e){
    e.preventDefault(); // stop form from submitting

    const email = document.querySelector('#email').value.trim();
    const error = document.querySelector('#error');

    if(email === ""){
        error.textContent = "Email is required!";
        return;
    }

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(email)){
        error.textContent = "Invalid email format!";
        return;
    }

    error.textContent = "";
    alert("Form submitted successfully!");
});