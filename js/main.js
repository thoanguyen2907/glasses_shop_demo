let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
    status: true,
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
    status: true,
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    status: true,
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
    status: true,
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
    status: true,
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    status: true,
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
    status: true,
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
    status: true,
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
    status: true,
  },
];

import {Glasses} from "./glasses.js";
import {GlassesList} from "./glassesList.js";

let glassesList = new GlassesList();
//show the array of GlassesList
//create function show the array of glassesList
//transform each object in data into Glasses object
//push the Glasses object into the array of glassesList

const showGlassesList = () => {
  dataGlasses.map((item) => {
    let gl = new Glasses(
      item.id,
      item.src,
      item.virtualImg,
      item.brand,
      item.name,
      item.color,
      item.price,
      item.description,
      item.status
    );
    glassesList.addGlasses(gl);
  });
  let divGlassesList = document.getElementById("vglassesList");
  divGlassesList.innerHTML = glassesList.renderGlassesForEach();
};

showGlassesList();
const tryOnGlasses = (event) => {
  //which glasses is being clicked
  let gID = event.target.getAttribute("data-id");
  let gObject = {};
  //seach for target glasses in the array of glasses
  for (let value of glassesList.glassesList) {
    if (value.id == gID) {
      gObject = value;
    }
  }
  console.log("gID", gID);
  console.log("gObject", gObject);
  showInfo(gObject);
};
window.tryOnGlasses = tryOnGlasses;
const showInfo = (gObject) => {
  let divAvatar = document.getElementById("avatar");
  let divInfo = document.getElementById("glassesInfo");
  divAvatar.innerHTML = `
    <img id="glasses" src="${gObject.virtual_Img}">
`;
  let status = "";
  if (gObject.status) {
    status = "Stocking";
  } else {
    status = "Sold Out";
  }
  divInfo.innerHTML = `
  <h5>${gObject.name} - ${gObject.brand} (${gObject.color})</h5>
  <p class="card-text"> 
      <span class="btn btn-danger btn-sm mr-2">$${gObject.price}</span>
      <span class="text-success">${status}</span>
  </p>
  <p class="card-text"> 
      ${gObject.description}
  </p>
`;
  divInfo.style.display = "block";
};
