const shopContentDos = document.getElementById("shopContentDos");
const pantalla = document.getElementById("pantalla");

const obtenerPelis = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    
    data.forEach((pelis) => {
        let content = document.createElement("div");
        content.className = "cardVdos";
        content.innerHTML = `
        <img class="imgPelis" src="${pelis.img}">
        <h3 class="tituloP">${pelis.nombre}</h3>
        <p class="descripcion"> ${pelis.desc}</p>
        `;
        shopContentDos.append(content);

    })

}



obtenerPelis();

const infoNasa = document.getElementById("pantalla");

const nasa = async () => {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=7rM5wvwzMYuwMh0sngzNh4WfM5ckdOOUvKu8DV4h");
    const data = await response.json();
    console.log(data);

    const spaceInfo = document.createElement("div");
    spaceInfo.innerHTML = `
    <h5>Info NASA</h5>
    <img src="${data.url}"</img>
    <h4>${data.title}</h4>
    <p>${data.explanation}</p>
    `
    infoNasa.append(spaceInfo);
}


nasa();
