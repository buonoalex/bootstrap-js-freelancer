// Questo è il file che contiene tutto il codice JS della pagina web

//Lista variabili sconti
const sconto1 = "YHDNU32";
const sconto2 = "JANJC63";
const sconto3 = "PWKCN25";
const sconto4 = "SJDPO96";
const sconto5 = "POCIE24";

//Inserisci gli sconti in un Array
let discountArray = [sconto1,sconto2,sconto3,sconto4,sconto5];
let usedDiscountArray = [];

//Lista variabili prezzi
const backEndPrizeForHour = 20.50;
const frontEndPrizeForHour = 15.30;
const designAnalysisPrizeForHour = 33.60;


//Prendere dati dal form
const elementoConsulenza = document.getElementById("formConsulenza");
elementoConsulenza.addEventListener("submit",function(event){
    event.preventDefault();

    //Prendere Input dal form 
    let discountCode = document.getElementById("inputDCode").value;
    let choiceWorktoDo = document.getElementById("selezioneConsulenzaLavoro").value;
    let hourstoWork = document.getElementById("inputHours").value;

    switch(choiceWorktoDo){
        case "1":
            if(discountArray.includes(discountCode)){
                usedDiscountArray.push(discountCode);
            }else{
                totalprize = sumForHours(hourstoWork,backEndPrizeForHour);
            }
    }



});

/*function findMatchArrayReturnPosition(array , stringaToFind){
    let position = 0;
    for(let i =0;i<array.length;i++){
        if(stringaToFind == array[i]){
            position = i;
            return position;
        }

    }
}*/

function sumForHours(hourswork,prizeWork){
    let total = hourswork * prizeWork;
    return total;
}