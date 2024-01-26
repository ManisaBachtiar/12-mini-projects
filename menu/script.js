const foodItems = [
  {
    id: 1,
    name: "Sushi Roll",
    description: "Delicious assortment of sushi in a roll.",
    price: 12.99,
    img: "img/1.jpg",
    category: "food",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato, mozzarella, and basil.",
    price: 9.99,
    img: "img/2.jpg",
    category: "food",
  },
  {
    id: 3,
    name: "Chicken Pad Thai",
    description: "Stir-fried noodles with chicken, peanuts, and vegetables.",
    price: 8.49,
    img: "img/3.jpg",
    category: "food",
  },

  {
    id: 4,
    name: "Vegetarian Curry",
    description: "Flavorful curry with assorted vegetables and spices.",
    price: 7.99,
    img: "img/4.jpg",
    category: "food",
  },
  {
    id: 5,
    name: "Iced Coffee",
    description: "Chilled coffee served with ice cubes.",
    price: 4.99,
    img: "img/5.jpg",
    category: "drink",
  },
  {
    id: 6,
    name: "Fresh Orange Juice",
    description: "Refreshing orange juice made from freshly squeezed oranges.",
    price: 5.49,
    img: "img/6.jpg",
    category: "drink",
  },
];
let filterBtn = document.querySelectorAll('.filterBtn');
let container = document.querySelector(".container");
window.addEventListener("DOMContentLoaded", function () {
  displayFood(foodItems);
});

filterBtn.forEach(function(btn) {
    btn.addEventListener('click', function(e)
    {
        const category = e.currentTarget.dataset.id;
        const menuCat = foodItems.filter(function(menuItem){
            
            if(menuItem.category === category)
            return menuItem;
        });
        
        if(category === 'all'){
            displayFood(foodItems)
        }
        else{
            displayFood(menuCat);
        }
    }
    )
})
function displayFood(foodItems) {
  let display = foodItems.map(function (item) {
    return ` 
        <div class="item">
            <img src="${item.img}" alt="">
            <h3>${item.name}</h3>
            <p>${item.price}$</p>
            <p>${item.description}</p>
        </div>`;
  });

  display = display.join("");
  container.innerHTML = display;
}
