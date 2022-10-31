const items = [
  {
    img: "https://images.unsplash.com/photo-1602674809970-89073c530b0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Ahmed Ciftci",
  },
  {
    img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    title: "Fabio Torpedaro",
  },
  {
    img: "https://images.unsplash.com/photo-1610736342165-4eeb4aef66ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    title: "Lukas Himmel",
  },
  {
    img: "https://images.unsplash.com/photo-1551280857-2b9bbe52acf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Cristiano Ronaldo Jr.",
  },
  {
    img: "https://images.unsplash.com/photo-1602339786708-26ad0b0aeedb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Marcelo Dos Santos",
  },
  {
    img: "https://images.unsplash.com/photo-1607079714592-f5b3bbbcba6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Abi Dudunasari",
  },
  {
    img: "https://images.unsplash.com/photo-1569921052084-9e82f06682d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Nikolas Steinmeier",
  },
  {
    img: "https://images.unsplash.com/photo-1623932157789-e746bc75823a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Tommy Plattenberg",
  },
  {
    img: "https://images.unsplash.com/photo-1576164464597-ec90f38d6853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Ernest Bouaziz",
  },
  {
    img: "https://images.unsplash.com/photo-1641280173256-0ac1b2f4cd78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Romedu Nasusu",
  },
  {
    img: "https://images.unsplash.com/photo-1420316078344-6149cb82b2c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Diego Romano",
  },
  {
    img: "https://images.unsplash.com/photo-1614632537227-82427b4584c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Marco Luzianni",
  },
  {
    img: "https://images.unsplash.com/photo-1646326477577-3c56e29dccbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Nakatuma Kawasaki",
  },
  {
    img: "https://images.unsplash.com/photo-1610472517915-cc2dda1a9416?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "John Bricker",
  },
  {
    img: "https://images.unsplash.com/photo-1573040329771-9509f318b6ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
    title: "Luiz San Morales",
  },
  {
    img: "https://images.unsplash.com/photo-1512073915056-e9bf21be8890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1629&q=80",
    title: "Josh Donutstester",
  },
  {
    img: "https://images.unsplash.com/photo-1580976702079-5eb3c1d8db16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Mathias Dübel",
  },
  {
    img: "https://images.unsplash.com/photo-1510597026538-da2e86b8588a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=847&q=80",
    title: "Sadu Nikokoko",
  },
  {
    img: "https://images.pexels.com/photos/3787832/pexels-photo-3787832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Muhammad Adu",
  },
  {
    img: "https://images.pexels.com/photos/5247133/pexels-photo-5247133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Paul Chakincici",
  },
  {
    img: "https://images.pexels.com/photos/159555/soccer-football-athlete-player-159555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Robert Buster",
  },
  {
    img: "https://images.pexels.com/photos/9367714/pexels-photo-9367714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Tarkan Korkmaz",
  },
];
const itemsContaines = document.querySelector(".items-container");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const pageStand = document.querySelector(".page-stand");

console.log(nextBtn, prevBtn);

const itemsInBox = 6;
let currentIndex = 1;

function nextPage() {
  if (currentIndex < numberOfPages) {
    currentIndex++;
    showItems(currentIndex);
  }
  console.log(currentIndex);
}

function prevPage() {
  if (currentIndex > 0) {
    currentIndex--;
    showItems(currentIndex);
  }
  console.log(currentIndex);
}

const numberOfPages = Math.ceil(items.length / itemsInBox);

function showItems(page) {
  if (page < 1) {
    page = 1;
  }
  if (page > numberOfPages) {
    page = numberOfPages;
  }

  itemsContaines.innerHTML = ``;

  for (
    let index = (page - 1) * itemsInBox;
    index < items.length && index < page * itemsInBox;
    index++
  ) {
    const img = items[index].img;
    const title = items[index].title;

    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
    <div class="img-control">
    <img
      src="${img}"
    />
  </div>
  <h2 class="item-title">${title}</h2>`;
    itemsContaines.append(div);
  }
  pageStand.innerText = `${page}/${numberOfPages}`;

  if (page === 1) {
    prevBtn.style.display = "none";
  } else {
    prevBtn.style.display = "block";
  }

  if (page === numberOfPages) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}

showItems(1);

nextBtn.addEventListener("click", () => {
  nextPage();
});
prevBtn.addEventListener("click", () => {
  prevPage();
});
