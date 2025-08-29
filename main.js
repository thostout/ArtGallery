//favorites
let index = 0; // Keep track of which item is currently visible

const items = document.querySelectorAll('.switch-list li'); // All the <li>s
const images = document.querySelectorAll('.switch-list img');

images.forEach(img => {
  img.addEventListener('click', () => {
    items[index].classList.remove('visible');
    index = (index + 1) % items.length;
    items[index].classList.add('visible');
  });
});

//carousell
const carouselData = [
    {
        title: "Blue Tree",
        image: "https://i.redd.it/1p4pp2ckqh921.png",
        description: "Blue tree with orange backround. Inspired by nature"
    },
    {
        title: "artwork",
        image: "https://picsum.photos/200/300",
        description: "description"
    },
    {
        title: "pixles",
        image: "https://www.brightervision.com/wp-content/uploads/2018/11/200x300-example-sfw.png",
        description: "blue background with text labeling 200 by 300"
    },
    {
        title: "artwork",
        image: "https://picsum.photos/200/300",
        description: "description"
    },
    {
        title: "Fantasy Piece",
        image: "https://i.pinimg.com/236x/56/9f/39/569f397c05eaa20123304be109d973dd.jpg",
        description: "mysticle backround inspored by fantasy world"
    }
];

const carouselTrack = document.querySelector(".carousel-track"); //takes first HTML emement with class .carousell-container and stores it in variable container

//loop for every item in carouselData and helos us not repeat code
carouselData.forEach(item => {
    const figure = document.createElement("figure"); //creates new figure element not yet on page (like box of decoration not hung up yet)
    figure.classList.add("carousel-item"); //allows us to style with CSS or select with js by adding a class to it

    const img = document.createElement("img"); //create image element
    img.src = item.image; //points image to coret file path
    img.alt = item.title; //allows image title to also be image alt

    const caption = document.createElement("figcaption"); //hold title below image
    caption.textContent = item.title; //shows where to grab caption text from -- also .textcontent just desplays the text as whats exaxcly writin in the title 

    const desc = document.createElement("p");
    desc.textContent = item.description;
    desc.classList.add("hidden"); //This CSS class (which you define to display: none) hides this description initially.

    //adds img, caption, and desc inside figure tag in order
    figure.appendChild(img);
    figure.appendChild(caption);
    figure.appendChild(desc);

    //when user click on figure (img) runs function
    figure.addEventListener("click", () => {
        desc.classList.toggle("hidden"); //adds or removes hidden class weather its ther or not
    });

    carouselTrack.appendChild(figure);
});

