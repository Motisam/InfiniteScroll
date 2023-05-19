// getting pictures from unsplash API
const count = 10;
const apiKey = 'R91v3HL09tj_a4OUL4tlBsjiZIVGVY2OqbglkDe3kcU';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// On Load

getPhotos();
