// alert('Hello world');
// prompt('nama: ');
// confirm('are you sure?');

//suit
repeat = true;
while(repeat){
var person = prompt('Pilih: Kertas, Gunting, atau Batu');
var angka = Math.random();
// console.log(person);

if(angka <= 0.33){
    computare = "Kertas";
}else if(angka <= 0.66){
    computare = "Gunting";
}else{
    computare = "Batu";
}

//console.log(angka + computare);

if(person == computare){
    result = 'Sama!';
}else if(person == 'kertas'){
    if(computare == 'gunting'){
        result = 'Kalah';
    }else{
        result = 'menang'
    }
}else if(person == 'gunting'){
    if(computare == 'kertas'){
        result = 'Menang';
    }else{
        result = 'Kalah';
    }
}else if(person == 'batu'){
    if(computare == 'kertas'){
        result = 'Kalah';
    }else{
        result = 'Menang';
    }
}else{
    result = 'Suit yang kamu masukkan salah';
}


var repeat = confirm('Hasilnya, kamu memilih ' + person + ' dan komputer memilih '+ computare + '. Hasilnya, kamu: ' + result + '. Main lagi?');
}