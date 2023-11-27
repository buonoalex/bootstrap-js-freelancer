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

    //Conversioni
    parseInt(choiceWorktoDo);
    parseInt(hourstoWork);

    //View Screen
    document.getElementById("contenitorePrezzoFinale").classList.remove("d-none");

    //Inizio Somma e controllo
    switch(choiceWorktoDo){

        case "1":

            if(usedDiscountArray.includes(discountCode)){

                 //Applicare somma normale 
                 totalprize = sumForHours(hourstoWork,backEndPrizeForHour);
                 
                 document.getElementById("totaleSommaLavoro").innerHTML = totalprize;
                 alert("Furbetto hai gia inserito il codice ti verrà applicata la tariffa piena");
                 

            }else if(discountArray.includes(discountCode)){

                //Applicando sconto colore verde
                document.getElementById("inputDCode").classList.add("bg-success");

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

            if(usedDiscountArray.includes(discountCode)){

                //Applicare somma normale 
                totalprize = sumForHours(hourstoWork,frontEndPrizeForHour);
                
                document.getElementById("totaleSommaLavoro").innerHTML = totalprize;
                alert("Furbetto hai gia inserito il codice ti verrà applicata la tariffa piena");
                document.getElementById("inputDCode").classList.add("bg-danger");

            }else if(discountArray.includes(discountCode)){

               //Applicando sconto colore verde
               document.getElementById("inputDCode").classList.add("bg-success");

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

            if(usedDiscountArray.includes(discountCode)){

                 //Applicare somma normale 
                 totalprize = sumForHours(hourstoWork,designAnalysisPrizeForHour);
                 
                 document.getElementById("totaleSommaLavoro").innerHTML = totalprize;
                 alert("Furbetto hai gia inserito il codice ti verrà applicata la tariffa piena");
                 document.getElementById("inputDCode").classList.add("bg-danger");
                 

            }else if(discountArray.includes(discountCode)){

                //Applicando sconto colore verde
                document.getElementById("inputDCode").classList.add("bg-success");

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

//--------------------FUNCTION----------------------

function sumForHours(hourswork,prizeWork){
    let total = 0;
    total = parseFloat(hourswork) * parseFloat(prizeWork);
    return total.toFixed(2);
}

function applyDiscount(numbertoApplyDiscount , howMuchDiscounttoApply){
    let finalTotalafterDicount = numbertoApplyDiscount - ((numbertoApplyDiscount * howMuchDiscounttoApply) / 100);
    return finalTotalafterDicount.toFixed(2);
}

//--------------------FUNCTION clear form-------------------

const bottonClearForm = document.getElementById("bottonClearForm");
bottonClearForm.addEventListener("click",function(event){
    event.preventDefault();
    document.getElementById("formConsulenza").reset();
    document.getElementById("contenitorePrezzoFinale").classList.add("d-none");
    document.getElementById("inputDCode").classList.remove("bg-danger");
    document.getElementById("inputDCode").classList.remove("bg-success");
    document.getElementById("totaleSommaLavoro").innerHTML = "";
});

//-----------SUPERBONUS------------

let arrayCard = 
[
inizializesectionCard("Cabin Webside","./img/cabin.png"),
inizializesectionCard("Cake Webside","./img/cake.png"),
inizializesectionCard("Circus Webside","./img/circus.png"),
inizializesectionCard("Game Webside","./img/game.png"),
inizializesectionCard("Safe Webside","./img/safe.png"),
inizializesectionCard("Submarine Webside","./img/submarine.png")
];

printObjectArrayInDom(arrayCard);
console.log(arrayCard);

//------------------Function SuperBonus---------------------

function inizializesectionCard(TitoloCard,ImgCard){
    let card = {
        title : TitoloCard,
        img : ImgCard
    }
    return card;
}

function printObjectArrayInDom(arrayObject){
    arrayObject.forEach(function(card){

        let cardTotal = `
        <div class="col-12 col-md-5 col-lg-3">

            <div class="card">
            <img src=${card.ImgCard} class="card-img-top img-fluid" alt="...">

                <div class="card-body">

                <h5 class="card-title text-center">${card.TitoloCard}</h5>
                    <div class="d-flex justify-content-center gap-3">
                    <a href="#" class="btn btn-info">Preview</a>
                    <a href="#" class="btn btn-outline-info">Visit site</a>
                    </div>

                </div>
            </div>

        </div>
        `;

        document.getElementById("contenitoreCardDinamiche").innerHTML += cardTotal;
        
    });
}