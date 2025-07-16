// Smoothie class 
class Smoothie {

    size;
  ingredients;
  base;

  // Constructor to initialize a new Smoothie object
  constructor(size, ingredients, base) {
    this.size = size;
    this.ingredients = ingredients;
    this.base = base;
  }
  serveIt() {
    const output = document.querySelector("#output");

    // Clear the output before new output
    output.innerHTML = "";

    const cup = document.createElement("img");

    // Set default smoothie image
    cup.setAttribute("src", "images/smoothie-cup.png");

    // Used switch statement to adjust the image sized 
    switch (this.size) {
      case "small":
        cup.setAttribute("height", "100");
        break;
      case "medium":
        cup.setAttribute("height", "150");
        break;
      case "large":
        cup.setAttribute("height", "200");
        break;
      default:
        cup.setAttribute("height", "150"); // default size
    }

    cup.setAttribute(
      "title",
      `A ${this.size} smoothie with ${this.ingredients.join(", ")} and ${this.base}.`
    );


    output.appendChild(cup);

    const description = document.createElement("p");
    description.textContent = `You ordered a ${this.size} smoothie with ${this.ingredients.join(", ")} and a ${this.base} base.`;
    output.appendChild(description);
  }
}


document.getElementById("smoothieForm").addEventListener("submit", function (e) {
  e.preventDefault(); // preventing the page  from refereshing

  // getting the selected sized
  let size = document.getElementById("size").value;

  // getting the selected base
  let base = document.getElementById("base").value;

  //   // getting those added and checked ingredients 
  let checkedBoxes = document.querySelectorAll('input[name="ingredients"]:checked');
  let ingredients = [];
  checkedBoxes.forEach(function (box) { /* loop through each check box so that to gets it value  */
    ingredients.push(box.value);
  });

  // Smoothie Object
  let smoothie = new Smoothie(size, ingredients, base);
  smoothie.serveIt(); /* called the method */
});
