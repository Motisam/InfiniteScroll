const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// a helper function to set attributes on DOM elements
function setAttributes(element, attributes){
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// getting pictures from unsplash API
const count = 10;
const apiKey = 'R91v3HL09tj_a4OUL4tlBsjiZIVGVY2OqbglkDe3kcU';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//create elements for links and photos and add to DOM
function displayPhotos() {
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        //create <a> to link to Unsplash
        const item = document.createElement("a");
        setAttributes(item,
            {href: photo.links.html, target: '_blank'}
        );
        //create <img> for photo
        const img = document.createElement('img');
        setAttributes(img,
            {src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description}
        );
        //put <img> inside <a> and put both inside imageContainer
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.log(error);
    }
}

// Check to see if near bottom of page, load more photos
window.addEventListener('scroll', () => {
    console.log('scrolled');
})

// On Load
getPhotos();
