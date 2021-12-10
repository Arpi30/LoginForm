
let container = document.getElementById('container')
let time = 1000;

container.style.transition = 'all ' + time + 'ms';
window.onmouseover = function(){
    container.style.opacity = 1;
}

//adat objektum

let data = {
    firstName: document.getElementById('fname'),
    lastName: document.getElementById('lname'),
    password: document.getElementById('pass'),
    form: document.getElementById('container'),
    button: document.getElementById('button'),
    loginData: {
        fName: 'Arpad',
        lName: 'Acs',
        password: 'matrix'
    }
}





data.form.addEventListener('submit', function(e){
    e.preventDefault();
    function load(){
            location.href = 'https://www.google.hu/'
        }
    if(data.firstName.value === data.loginData.fName &&
       data.lastName.value === data.loginData.lName &&
       data.password.value === data.loginData.password){
        load();
    }
}) 



























