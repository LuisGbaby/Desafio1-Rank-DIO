
let Heroi = "Rasta";

let xpHeroi = 3000;

let rankHeroi = "";


if(xpHeroi < 1000){
    rankHeroi = "Ferro";

}else if(xpHeroi <= 2000){
    rankHeroi = "Bronze";

}else if(xpHeroi <= 5000){
    rankHeroi = "Prata";

}else if(xpHeroi <= 7000){
    rankHeroi = "Ouro";

}else if(xpHeroi <= 8000){
    rankHeroi = "Platina";

}else if(xpHeroi <= 9000){
    rankHeroi = "Ascendente";

}else if(xpHeroi <= 10000){
    rankHeroi = "Imortal";

}else{
    rankHeroi = "Radiante";
}


console.log("O Herói " + Heroi + " tem " +  xpHeroi + " de Xp e está ranking " + rankHeroi + " !");
