let bandInfo;

// Add your code here
const myFavoriteBand = {
  name: "Coldplay",
  nationality: "British",
  genre: "Alternative Rock",
  members: 4,
  formed: 1996,
  split: false,
  albums: [
    { name: "Parachutes", released: 2000 },
    { name: "A Rush Of Blood To The Head", released: 2002 },
    { name: "X&y", released: 2005 },
    { name: "Viva La Vida Or Death And All His Friends", released: 2008 },
    { name: "Mylo Xyloto", released: 2011 },
    { name: "Ghost Stories", released: 2014 },
    { name: "A Head Full Of Dreams", released: 2015 },
    { name: "Everyday Life", released: 2019 },
    { name: "Music Of The Spheres", released: 2021 },
  ],
};

bandInfo = `${myFavoriteBand.name} is a ${myFavoriteBand.nationality} ${myFavoriteBand.genre} band formed in ${myFavoriteBand.formed}.Their first album ${myFavoriteBand.albums[0].name} was released on ${myFavoriteBand.albums[0].released}.`;
// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement("p");
para1.textContent = bandInfo;
section.appendChild(para1);
