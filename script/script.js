(function () {
    const form = document.querySelector('.form');
    const emailUser = document.querySelector('#iemail');
    const p = document.querySelector('.error')

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        let email = emailUser.value

        if (!email) {
            emailUser.classList.add('alert');
            p.style.display = 'block'
        }

        if (email) {
            emailUser.classList.remove('alert');
            alert('Email enviado com sucesso ✅');
            p.style.display = 'none'
            emailUser.value = ''
            emailUser.focus()
        }

    })

})()