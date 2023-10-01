const URL = 'https://jsonplaceholder.typicode.com/users';
const formulario = document.querySelector('#form');
const boton = document.querySelector('#btn');

const getData = () => {
  const datos = new FormData(formulario);
  return Object.fromEntries(datos.entries());
};

const postData = async () => {
  const newUser = getData();
  try {
    const response = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify(newUser),
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      console.log(response.status);
    } else {
      console.log('Error:', response.status);
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  postData();
});








