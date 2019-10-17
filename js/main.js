/* Calcolo prezzo biglietto del treno
DESCRIZIONE:
Il programma dovrà chiedere all’utente il numero di chilometri e l’età e dovrà calcolare il prezzo
totale del viaggio. Il prezzo del biglietto è definito in base ai km (0.21 €cent al km) ma c’è uno
sconto del 20% per i minorenni e del 40% per gli over 65 */

var kms, age, price, str;

// the user is asked the kms' number
kms = prompt("Enter the kms' number");
// the user is asked its age
age = prompt("Enter your age");
// the ticket's base price is calculated
price = kms * 0.21;
// the discount is applyed, if possible
if (age <= 18)
{
  price = (price - (price / 100 * 20));
}
else if (age > 65)
{
  price = (price - (price / 100 * 40))
}
// the price is rounded at two decimals and printed with the currency symbol
document.writeln("The ticket's price is " + (Math.round(price * 100) / 100) + "€");
