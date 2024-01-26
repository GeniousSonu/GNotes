const Container = document.querySelector(".container");
const btnHead = document.querySelector(".manBtn");
const textBtn = document.querySelector("#cr-note-btn1");

textBtn.addEventListener("click", () => {
    let textBox = document.createElement("input");
    textBox.type = "text";
    textBox.placeholder = "Enter your note here...";
    textBox.id = "text-box"; 
    

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Clear";
    deleteBtn.type = "button";
    deleteBtn.id = "cr-note-btn2"; 


    Container.appendChild(textBox);
    btnHead.appendChild(deleteBtn);

 
    deleteBtn.addEventListener("click", () => {
        Container.removeChild(textBox);
        btnHead.removeChild(deleteBtn);
    });
});
