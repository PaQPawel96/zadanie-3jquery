$(document).ready(function(){
    console.log('Skrócony zapis document ready w jQuery');
});
/*
Zaprogramuj przycisk #count-sum aby po kliknięciu pobrał wypłaty wszystkich pracowników i je zsumował.
Uzyskany wynik wyświetl w elemencie o ID #sum.

Zadanie zrób z wykorzystaniem biblioteki jQuery.

Zadanie podsyłamy z użyciem https://repl.it

Podpowiedzi:
- oprogramuj zdarzenie "click" przycisku #count-sum
- pobierz wszystkie wypłaty i za pomocą pętli je zsumuj
- pobierz element o ID #sum i podmień mu treść na obliczoną sumę
*/

$('#count-sum').click(function(){
    let salaryClass = $('.salary');
    let sum = 0;
    for(i = 0; i < salaryClass.length ; i++)
    {   
        var number = parseInt(salaryClass[i].textContent);
       // console.log(number);
        sum = sum + number;
       // console.log(sum);
    }
    
    console.log(sum);
    $('#sum').append(sum);
});

