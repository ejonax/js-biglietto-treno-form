const submitButton = document.getElementById("submitButton");
const kmNumberInput = document.querySelector('#formGroupExampleInput').value;
const ageNumberInput = document.querySelector('#formGroupExampleInput2').value;

const priceResult = document.querySelector('h3');

console.log(kmNumberInput+' here1');
console.log(ageNumberInput+' here2');

submitButton.addEventListener('click', function(event){
     event.preventDefault();
     submitButton.disable = true;
     
    const kmNo = parseInt(kmNumberInput);
    const ageNo = parseInt(ageNumberInput);

    console.log(kmNo+' here3');
    console.log(ageNo+' here4');

     let total = 0;
     
     
     const priceKm=0.21;
     const discountMin=0.20;
     const discountMax=0.40;
            
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
        
            priceResult.innerHTML = 'Il prezzo calcolato: `${total}`';
   }
)