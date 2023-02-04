const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/$users`;
//se le puso . ya que son clases
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');
//la funcion que contenga await tiene que ser asyn se le agrego

async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  //se cambiaron comillas simples
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log.error();
  n.textContent = `Algo salió mal: ${err}`
}

displayUser(`stolinski`).catch(handleError);

