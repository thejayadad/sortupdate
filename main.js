
const players = [
    { name: "Michael Jordan", championships: 6},
    { name: "Kobe Bryant", championships: 5},
    { name: "LeBron James", championships: 4},
    { name: "Tim Duncan", championships: 5},

]
players.forEach((player) => {
    let option = document.createElement("option")
    option.text = player.name;
    option.value = player.championships;
    options.appendChild(option);
})

options.onchange = function(){
    result.innerText = options.value + " championships"
}