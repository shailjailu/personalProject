/* Write your code below. Good luck! 🙂 */

let calcTip = (bills)=> {
    let billAr = bills;
    let tipA = [];
   for(let bill= 0; bill < billAr.length; bill++)
    {
        if (billAr[bill] > 50 && billAr[bill] < 300)
            {
               tipA.push((15/100)*billAr[bill]);
               
            }
        else
            {
               tipA.push((20/100)*billAr[bill]);
                
            }
    }
   
    return (tipA);
    
}
let calcTotal = (bills, tipA)=> 
{
     let totals = [];
    for (let i= 0; i < bills.length; i++ )
    {
        
        totals.push(bills[i] + tipA[i]);
    }
    return totals;  
}
let billA = [125,555,44];
let bills;
const calculate = calcTip(billA);
const tot = calcTotal(billA, calculate);
console.log(calculate);

