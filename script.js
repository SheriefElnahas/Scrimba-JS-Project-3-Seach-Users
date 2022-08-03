const inputElement = document.querySelector('#search-input');
const users = document.querySelectorAll('.user');


inputElement.addEventListener('keyup', (e) => {
        users.forEach((user) => {
            if(user.textContent.toLocaleLowerCase().includes(inputElement.value.toLocaleLowerCase())) {
                user.style.display = "block";
            } else {
                user.style.display = "none";
            }
        })  
})


