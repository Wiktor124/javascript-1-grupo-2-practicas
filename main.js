const container = document.getElementById('mainContainer')
const { data } = {
  "data": [
    {
      "id": 7,
      "email": "michael.lawson@reqres.in",
      "age": 30,
      "userAccount": "Premium",
      "first_name": "Michael",
      "last_name": "Lawson",
      "description": "Lorem ipsum"
    },
    {
      "id": 8,
      "email": "lindsay.ferguson@reqres.in",
      "age": 78,
      "userAccount": "Basic",
      "first_name": "Lindsay",
      "last_name": "Ferguson",
      "description": "Lorem ipsum"
    },
    {
      "id": 9,
      "email": "tobias.funke@reqres.in",
      "age": 23,
      "userAccount": "Basic",
      "first_name": "Tobias",
      "last_name": "Funke",
      "description": "Lorem ipsum"
    },
    {
      "id": 10,
      "email": "byron.fields@reqres.in",
      "age": 86,
      "userAccount": "Basic",
      "first_name": "Byron",
      "last_name": "Fields",
      "description": "Lorem ipsum"
    },
    {
      "id": 11,
      "email": "george.edwards@reqres.in",
      "age": 30,
      "userAccount": "Premium",
      "first_name": "George",
      "last_name": "Edwards",
      "description": "Lorem ipsum"
    },
    {
      "id": 12,
      "email": "rachel.howell@reqres.in",
      "age": 67,
      "userAccount": "Premium",
      "first_name": "Rachel",
      "last_name": "Howell",
      "description": "Lorem ipsum"
    },
    {
      "id": 13,
      "email": "adrian.bell@reqres.in",
      "age": 54,
      "userAccount": "Basic",
      "first_name": "Adrian",
      "last_name": "Bell",
      "description": "Lorem ipsum"
    },
    {
      "id": 14,
      "email": "adrian.bell@reqres.in",
      "age": 54,
      "userAccount": "",
      "first_name": "Adrian",
      "last_name": "Bell",
      "description": "Lorem ipsum"
    }
  ]
}

// Utilizando el siguiente objeto de usuarios, crear un programa que muestre en el browser la información de cada usuario, de manera que imprima una lista de elementos div, con los siguientes elementos:
// * h2 --> Id
// * h3 --> firstName y lastName
// * h4 --> userAccount
// * p --> email
// * p --> description

// ** Importante todos los elementos (div) de tipo usuario deben estar dentro de un div mainContainer


const imprimir_usuarios = (lista_usuarios) => {

  const usuarios = lista_usuarios.map((item) => {
    return `
    <h2>Id: ${item.id}</h2>
    <h3>First name: ${item.first_name}</h3>
    <h3>last name: ${item.last_name}</h3>
    <h4>User Account: ${item.userAccount}</h4>
    <p>Email: ${item.email}</p>
    <p>Age: ${item.age}</p>
    <p>Description: ${item.description}</p>
  `
  })

  container.innerHTML = usuarios;
}

imprimir_usuarios(data)




