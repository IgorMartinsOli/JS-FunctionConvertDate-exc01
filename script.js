window.addEventListener('load', init);

function init(){
   document.querySelector("#botao").addEventListener("click", converter);
}

function converter(){
   let data = document.querySelector("#data").value;
   let vetorMeses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
                     'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

   let mapMeses = {
      01: 'Janeiro',
      02: 'Fevereiro',
      03: 'Março',
      04: 'Abril', 
      05: 'Maio', 
      06: 'Junho', 
      07: 'Julho', 
      08: 'Agosto',
      09: 'Setembro', 
      10: 'Outubro', 
      11: 'Novembro', 
      12: 'Dezembro'
   }

   let vetorData = data.split('-');

   let ano = vetorData[0];
   let mes = vetorMeses[vetorData[1]-1];
   
   //let mes = mapMeses[vetorData[1]];

   let dia = vetorData[2];

   
   // if(vetorData[1] == 01) mes = 'Janeiro';
   // else if(vetorData[1] == 02) mes = 'Fevereiro';
   // else if(vetorData[1] == 03) mes = "Março";
   // else if(vetorData[1] == 04) mes = 'Abril';
   // else if(vetorData[1] == 05) mes = "Maio";
   // else if(vetorData[1] == 06) mes = 'Junho';
   // else if(vetorData[1] == 07) mes = "Julho";
   // else if(vetorData[1] == 08) mes = 'Agosto';
   // else if(vetorData[1] == 09) mes = "Setembro";
   // else if(vetorData[1] == 10) mes = 'Outubro';
   // else if(vetorData[1] == 11) mes = 'Novembro';
   // else if(vetorData[1] == 12) mes = "Dezembro";

   // switch(vetorData[1]){
   //    case 01: 
   //       mes = 'Janeiro'; 
   //       break;
   //    case 02: 
   //       mes = 'Fevereiro'; 
   //       break;
   // }



   document.querySelector("#resultado").innerHTML = `${dia} de ${mes} de ${ano}`;
}