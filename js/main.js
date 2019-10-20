/* Calcolo prezzo biglietto del treno
DESCRIZIONE:
Il programma dovrà chiedere all’utente il numero di chilometri e l’età e dovrà calcolare il prezzo 
totale del viaggio. Il prezzo del biglietto è definito in base ai km (0.21 €cent al km) ma c’è uno 
sconto del 20% per i minorenni e del 40% per gli over 65 */

var kms, age, price;

// the user is asked the kms' number
kms = prompt("Enter the kilometers' number");
// the user is asked his or her age
age = prompt("Enter your age");
// the ticket's base price is calculated
price = kms * 0.21;
// the discount is applied, if possible
if (age < 18)
{
  price *= 0.8;
}
else if (age > 65)
{
  price *= 0.6;
}
// the price is rounded at two decimals and the currency symbol is added
 price = (Math.round(price * 100) / 100) + "€";

// the appropriate strings are inserted in the document
document.getElementsByClassName("dear")[0].textContent = "Dear customer, your ticket's price is:";
document.getElementsByClassName("price")[0].textContent = price;