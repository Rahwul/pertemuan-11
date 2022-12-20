let Kertas = document.querySelector("#kertas");
let gunting = document.querySelector("#gunting");
let batu = document.querySelector("#batu");
let computerChoice = document.querySelector("#computerChoice");

// function untuk Komputer memilih
const selectChoice = () => {
    const options = ["kertas", "gunting", "batu"];
    const result = options[Math.floor(Math.random() * 3)];

    return result;
}

batu.addEventListener('click', ()=>{
    let choice = selectChoice()
    computerChoice.innerHTML = choice;


    setTimeout (() => {
        switch (choice) {
            case "batu":
                alert("seri");
                break;
    
            case "gunting":
                alert("Kamu menang!!!")
                break;
    
            default:
                alert("komputer Menang!!!")
                break;
        }



    }, 300)
    

});


gunting.addEventListener('click', ()=>{
    let choice = selectChoice()
    computerChoice.innerHTML = choice;


    setTimeout (() => {
        switch (choice) {
            case "batu":
                alert("Komputer menang!!!");
                break;
    
            case "gunting":
                alert("seri")
                break;
    
            default:
                alert("kamu menang")
                break;
        }



    }, 300)
    

});


kertas.addEventListener('click', ()=>{
    let choice = selectChoice()
    computerChoice.innerHTML = choice;


    setTimeout (() => {
        switch (choice) {
            case "batu":
                alert("kamu menang!!!");
                break;
    
            case "gunting":
                alert("komputer menang!")
                break;
    
            default:
                alert("seri")
                break;
        }



    }, 300)
    

});
    