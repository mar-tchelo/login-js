const init = ()=>{

    const validateEmail = (event)=>{
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const emailTest = regex.test(input.value);

        if (emailTest) {
            SubmitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.classList.add('error');
        }else{
            SubmitButton.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error')
        }
    }


    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const SubmitButton = document.querySelector('.login-submit')

    inputEmail.addEventListener('input', validateEmail)

    if (SubmitButton) {
        SubmitButton.addEventListener('click', (event) => {
            event.preventDefault();

            fetch('https://reqres.in/api/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputPassword.value
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
            })
        })
    }
}

window.onload = init;