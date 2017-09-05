var app = function(){

  var addCat = function(nameText, favFoodText, link){

    var listItem_name = document.createElement("li");
    listItem_name.innerText = nameText;

    var listItem_favFood = document.createElement("li");
    listItem_favFood.innerText = favFoodText;

    var listItem_image = document.createElement("img");
    listItem_image.src = link;

    var unorderedList = document.createElement('ul');
    unorderedList.classList.add('cat');

    unorderedList.appendChild(listItem_name);

    unorderedList.appendChild(listItem_favFood);

    unorderedList.appendChild(listItem_image);

    var cats = document.querySelector('#cats');
    cats.appendChild(unorderedList);
  };

  addCat("Frank", "Fish with onions", "https://yt3.ggpht.com/-0ReutDvrI00/AAAAAAAAAAI/AAAAAAAAAAA/pBMFoiFQxpM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg")

  // var addCat = function(nameText, favFoodText, link){

  //   var listItem_name = document.createElement("li");
  //   listItem_name.innerText = nameText;

  //   var listItem_favFood = document.createElement("li");
  //   listItem_favFood.innerText = favFoodText;

  //   var listItem_image = document.createElement("img");
  //   listItem_image.src = link;

  //   var unorderedList = document.createElement('ul');
  //   unorderedList.classList.add('cat');

  //   unorderedList.appendChild(listItem_name);

  //   unorderedList.appendChild(listItem_favFood);

  //   unorderedList.appendChild(listItem_image);

  //   var cats = document.querySelector('#cats');
  //   cats.appendChild(unorderedList);
  // };

  // addCat("Frank", "Fish with onions", "https://yt3.ggpht.com/-0ReutDvrI00/AAAAAAAAAAI/AAAAAAAAAAA/pBMFoiFQxpM/s900-c-k-no-mo-rj-c0xffffff/photo.jpg")
};

window.onload = app;