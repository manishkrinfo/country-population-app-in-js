const country = 'india';
const container = document.querySelector('#container');

// using promise method
const fetchCountryPopulation = () => {

  const setHeader = {
    headers: {
      Accept : 'application/json'
    }
  }

  fetch('https://restcountries.com/v2/name/'+country, setHeader)
  .then((res) => res.json() )
  .then( (data) => {
    //console.log(data);
    const htmlData = `
        <div class="card card-center">
            <img src="${data[1].flag}" style="width:150px;">
            <h1>${data[1].name}</h1>
            <p class="title">Capital : ${data[1].capital}</p>
            <p>Language: ${data[1].nativeName}</p>
            <p>Population: ${data[1].population}</p>
            <p>Demonym: ${data[1].demonym}</p>
        </div>
    `;
    container.insertAdjacentHTML('beforeend',htmlData)
  })
  .catch((error) => {
    console.log(error);
  })

}

fetchCountryPopulation();