const button = document.querySelector("button");
const output = document.querySelector(".output");
console.log(button);
button.addEventListener("click",function(){
    const cost = document.querySelector(".cost");
    const tip = document.querySelector(".tip");
    console.log(cost.value * (tip.value / 100));
    let tipAmount = (cost.value * (tip.value / 100)).toFixed(2);
    let temp = `<h1>You should tip $${tipAmount} on $${cost.value}.</h1><br><iframe class="gif"src="https://giphy.com/embed/0IHMMHCBJkfOCbqZC3" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
    output.innerHTML = temp;
})