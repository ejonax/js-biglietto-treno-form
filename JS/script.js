submitButton.addEventListener('click', function(event){
// di value inseriti nella forma si devovo selezionare doppo il click nella forma
const submitButton = document.getElementById("submitButton");
const kmNumberInput = document.querySelector('#formGroupExampleInput').value;
const ageNumberInput = document.querySelector('#formGroupExampleInput2').value;

const priceResult = document.querySelector('h3');

event.preventDefault();
submitButton.disable = true;

let total = 0;
     
const priceKm=0.21;
const discountMin=0.20;
const discountMax=0.40;

// controlliamo se il primo text input è vuoto            
if((kmNumberInput)===''){
    priceResult.innerHTML = 'Inserisci un numero per favore per i chilometri che si devono fare !';
}
// controlliamo se il secondo text input è vuoto  
else if ((ageNumberInput)===''){
    priceResult.innerHTML = 'Inserisci un numero per favore per la tua età';

} else{
        //convertiamo in numeri i valori selezionati da tutte due gli input della forma
        const kmNo = parseInt(kmNumberInput);
        const ageNo = parseInt(ageNumberInput);
      
        // se il valore inserito nell'input dei km non è un numero allora avisa l'utente
        if (isNaN(kmNo)){
            priceResult.innerHTML = 'Inserisci un numero per favore per i chilometri';
        }
        // se il valore inserito nell'input dell'età non è un numero allora avisa l'utente
        else if (isNaN(ageNo)){
            priceResult.innerHTML = 'Inserisci un numero per favore per la tua età';
        }
        else {
                //controllo se il valore inserito per i chilometri è negativo oppure 0
                //avvisa l'utente che i chilometri devono essere >0
                if (kmNo<=0)
                {
                    priceResult.innerHTML = 'Inserisci un numero più grande di 0 per i chilometri che devi fare!';
                }
                else 
                {
                //controllo se il valore inserito per l'età è negativo
                //avviso l'utente che l'età deve essere >=0
                    if (ageNo<0){
                        priceResult.innerHTML = 'Inserisci un numero >=0 per la tua età';
                    }
                    else 
                    {
                    if (ageNo<18)
                        { 
                        // se l'età inserita è meno di 18 allora si usa il discount di 20%
                        total=kmNo*priceKm-(discountMin*(kmNo*priceKm));
                        //total=0.8*kmNo*priceKm
                        }else if (ageNo>=18 && ageNo<=65)
                            {
                            total=kmNo*priceKm;
                            }
                        else{ 
                            //se l'età inserita è più grande di 65 allora si usa il discount di 40%
                            total=kmNo*priceKm-(discountMax*(kmNo*priceKm));
                            //total=0.6*kmNo*priceKm
                            }
                            //stampo il risultato sotto la <h3>
                            priceResult.innerHTML = `Il prezzo calcolato: ${total.toFixed(2)}`;
                    }
                }
     
            }
       }  
    }
)