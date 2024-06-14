const formJs = document.getElementById('form')
const h2 = document.querySelector('h2')
const inputPassword = document.getElementById('password')
formJs.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = event.target //obtengo el formulario
    // form ->user ? -> value
    const username = Number(formData.user?.value) // obtengo cada input
    const password = Number(formData.pwd?.value) // obtengo cada input
    const role = Number(formData.role?.value) // obtengo cada input

    // segunda forma con arrays
    // const username = formData[0].value // obtengo cada input
    // const password = formData[1].value // obtengo cada input['inputErro', 'inputSolid', ]

    if (!password && !inputPassword.classList.contains('inputError')) {
        inputPassword.classList.add('inputError')
        inputPassword.style.border = "solid 1px red"
    } else {
        inputPassword.classList.remove('inputError')
    }

    const suma = username + password + role;
    const credenciales = "pepito_12345"

    const credencialesIngresadas = `${username}${password}${role}`

    if (suma == 10) {
        h2.innerText = 'Password correcto #1'
        // alert('Password correcto #1')
    } else if (!password) {

        // alert('Password debe ser escrito')
    } else if (credencialesIngresadas == credenciales) {
        alert('Login con éxito')
    } else {
        alert('Credenciales erróneas')
    }

})