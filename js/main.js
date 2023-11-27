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

    //View Screen
    document.getElementById("contenitorePrezzoFinale").classList.remove("d-none");

    //Inizio Somma e controllo
    switch(choiceWorktoDo){

        case "1":
            if(discountArray.includes(discountCode)){

                //Inserimento in sconti gia usati per futura verifica
                usedDiscountArray.push(discountCode);

                //Verifica Inserimento in Array
                console.log(usedDiscountArray);

                //Applicare lo sconto del 25 %
                totalprize = sumForHours(hourstoWork,backEndPrizeForHour);
                let totalPrizeWithDiscount = applyDiscount(totalprize,25);
                document.getElementById("totaleSommaLavoro").innerHTML = totalPrizeWithDiscount;

            }else{
                
                //Applicare somma normale 
                totalprize = sumForHours(hourstoWork,backEndPrizeForHour);
                document.getElementById("totaleSommaLavoro").innerHTML = totalprize;
            }
        break;

        case "2":
            if(discountArray.includes(discountCode)){

                //Inserimento in sconti gia usati per futura verifica
                usedDiscountArray.push(discountCode);

                //Verifica Inserimento in Array
                console.log(usedDiscountArray);

                //Applicare lo sconto del 25 %
                totalprize = sumForHours(hourstoWork,frontEndPrizeForHour);
                let totalPrizeWithDiscount = applyDiscount(totalprize,25);
                document.getElementById("totaleSommaLavoro").innerHTML = totalPrizeWithDiscount;

            }else{

                //Applicare somma normale 
                totalprize = sumForHours(hourstoWork,frontEndPrizeForHour);
                document.getElementById("totaleSommaLavoro").innerHTML = totalprize;
            }
        break;

        case "3":
            if(discountArray.includes(discountCode)){

                //Inserimento in sconti gia usati per futura verifica
                usedDiscountArray.push(discountCode);

                //Verifica Inserimento in Array
                console.log(usedDiscountArray);

                //Applicare lo sconto del 25 %
                totalprize = sumForHours(hourstoWork,designAnalysisPrizeForHour);
                let totalPrizeWithDiscount = applyDiscount(totalprize,25);
                document.getElementById("totaleSommaLavoro").innerHTML = totalPrizeWithDiscount;

            }else{

                //Applicare somma normale 
                totalprize = sumForHours(hourstoWork,designAnalysisPrizeForHour);
                document.getElementById("totaleSommaLavoro").innerHTML = totalprize;
            }
        break;

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
    return total.toFixed(2);
}

function applyDiscount(numbertoApplyDiscount , howMuchDiscounttoApply){
    let finalTotalafterDicount = numbertoApplyDiscount - ((numbertoApplyDiscount * howMuchDiscounttoApply) / 100);
    return finalTotalafterDicount;
}