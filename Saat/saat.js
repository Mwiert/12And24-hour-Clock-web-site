const saatAl= document.getElementById('saatVer');
const dakikaAl= document.getElementById('dakikaVer');
const saniyeAl= document.getElementById('saniyeVer');
const gunAl = document.getElementById('gunVer');
var gunbolAl = document.getElementById('gunBol');

const spanSaat= document.getElementById('spanSaat');
const spanDakika= document.getElementById('spanDakika');
const spanSaniye= document.getElementById('spanSaniye');

var dogrulama =true;

   document.getElementById('turkce').addEventListener('click',()=>{
        dogrulama=false;
        console.log(dogrulama);
   })

   document.getElementById('english').addEventListener('click',()=>{
        dogrulama=true;
        console.log(dogrulama);
   })
setInterval(genelSaat,1000); 

function genelSaat(){
    var Veri = new Date();
    const Saat = Veri.getHours();
    const Dakika = Veri.getMinutes();
    const Saniye = Veri.getSeconds();
    const Gun = Veri.getDay();
    var saatBol = Math.floor(Saat%12);

    var gunBol;
    if(dogrulama==false){
        var DegiskenTr;
    if(Gun ==1){
        DegiskenTr="PAZARTESI";
    }
    else if(Gun ==2){
        DegiskenTr="SALI";
    }
    else if(Gun ==3){
        DegiskenTr="CARSAMBA";
    }
    else if(Gun ==4){
        DegiskenTr="PERSEMBE";
    }
    else if(Gun ==5){
        DegiskenTr="CUMA";
    }
    else if(Gun ==6){
        DegiskenTr="CUMARTESI";
    }
    else if(Gun ==7){
        DegiskenTr="PAZAR";
    }
    
    spanSaat.innerHTML ="Saat";
    spanDakika.innerHTML ="Dakika";
    spanSaniye.innerHTML ="Saniye"; 

    saatAl.innerHTML = Saat;
    dakikaAl.innerHTML = Dakika;
    saniyeAl.innerHTML = Saniye;
    gunAl.innerHTML = DegiskenTr;
    gunbolAl.innerHTML = " ";
    }
    else{
        if(Saat<12){
            gunBol ="AM";
            
        }
        else{
            gunBol="PM";
        }
    
        var Degisken;
        if(Gun ==1){
            Degisken="MONDAY";
        }
        else if(Gun ==2){
            Degisken="TUESDAY";
        }
        else if(Gun ==3){
            Degisken="WEDNESDAY";
        }
        else if(Gun ==4){
            Degisken="THURSDAY";
        }
        else if(Gun ==5){
            Degisken="FRIDAY";
        }
        else if(Gun ==6){
            Degisken="SATURDAY";
        }
        else if(Gun ==7){
            Degisken="SUNDAY";
        }
        
        spanSaat.innerHTML ="Hour";
        spanDakika.innerHTML ="Minutes";
        spanSaniye.innerHTML ="Seconds";
    
        saatAl.innerHTML = saatBol;
        dakikaAl.innerHTML = Dakika;
        saniyeAl.innerHTML = Saniye;
        gunAl.innerHTML = Degisken;
        gunbolAl.innerHTML = gunBol;
    }
}