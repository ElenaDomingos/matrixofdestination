jQuery(document).ready(function($){
    function calcMatrix(){
        var day = $('#day').val();
        var month = $('#month').val();
        var year = $('#year').val();
        if(day>22){
            var days = day.split('').map(Number);
            day = days.reduce((a,b)=>b+a);
         
        }
            $('#n1 span').empty();
            $('#n1 span').append(day);
            $('#n33').empty();
            $('#n33').append(day);
        
            $('#n3 span').empty();
            $('#n3 span').append(month);
            $('#n34').empty();
            $('#n34').append(month);
        
            var totaln35 =  parseInt(day) + parseInt(month);
             
            if(parseInt(totaln35) > 22){
                var numstring = totaln35.toString();
                 
                var totals = numstring.split('').map(Number);
                totaln35 = totals.reduce((a,b)=>b+a);
                 
            }
            $('#n35').empty();
            $('#n35').append(totaln35);
        
            // year
                
                
                while(parseInt(year)>22){
                    var totalyears = year.toString().split('').map(Number);
                    year = totalyears.reduce((a,b)=>b+a);
                }			    
                
                console.log(year);
        
                $('#n5 span').empty();
                $('#n5 span').append(year);
                $('#n51').empty();
                $('#n51').append(year);
                
                 // Рассчитываем нижнюю главную точку красного цвета
                 var n7 = parseInt(day) + parseInt(month) + parseInt(year);
                 if(n7 > 22){
                     var totaln7 = n7.toString().split('').map(Number);
                     n7 = totaln7.reduce((a,b)=>b+a);
                 }
                 $('#n7 span').empty();
                 $('#n7 span').append(n7);
                 $('#n52').empty();
                 $('#n52').append(n7);
        
                 var n53 = parseInt(year) + parseInt(n7);
                 if(n53>22){
                     var totaln53 = n53.toString().split('').map(Number);
                     n53 = totaln53.reduce((a,b)=>b+a);
                 }
                 $('#n53').empty();
                 $('#n53').append(n53);
        
                 // желтая точка Д
                 var D = parseInt(day) + parseInt(month) + parseInt(year) + parseInt(n7);
                  
                 while(parseInt(D)>22){
                     var totalnD = D.toString().split('').map(Number);
                     D = totalnD.reduce((a,b)=>b+a);
                 }			    
        
                 $('#n30 span').empty();
                 $('#n30 span').append(D);
                 
                 // Добавляем в таблицу эти данные
                 $('#n45').empty();
                 $('#n45').append(D);
                 $('#n46').empty();
                 $('#n46').append(D);
        
                 var dobron46 = parseInt(D)*2;
                 if (parseInt(dobron46)>22){
                     var totaldobron46 = dobron46.toString().split('').map(Number);
                     dobron46 = totaldobron46.reduce((a,b)=>b+a);
                 }
                 $('#n47').empty();
                 $('#n47').append(dobron46);
        
                 // Рассчитываем поле n17
                 var n17 = parseInt(day) + parseInt(D);
                 if(n17>22){
                     var totaldobron17 = n17.toString().split('').map(Number);
                     n17 = totaldobron17.reduce((a,b)=>b+a);
                 }
                 $('#n17 span').empty();
                 $('#n17 span').append(n17);
                 $('#n39').empty();
                 $('#n39').append(n17);
                
        
                 var n19 = parseInt(month)+ parseInt(D);
                 if(n19 > 22){
                     var totaldobron19 = n19.toString().split('').map(Number);
                     n19 = totaldobron19.reduce((a,b)=>b+a);
                 }
                 $('#n19 span').empty();
                 $('#n19 span').append(n19);
                 $('#n40').empty();
                 $('#n40').append(n19);
        
                 var n41 = parseInt(n19) + parseInt(n17);
                 if(n41 > 22){
                     var totaldobron41 = n41.toString().split('').map(Number);
                     n41 = totaldobron41.reduce((a,b)=>b+a);
                 }
                 $('#n41').empty();
                 $('#n41').append(n41);
                  //Расcчитываем n21
                 var n21 = parseInt(year) + parseInt(D);
                 if(n21 > 22){
                     var totaldobron21 = n21.toString().split('').map(Number);
                     n21 = totaldobron21.reduce((a,b)=>b+a);
                 }
                 $('#n21 span').empty();
                 $('#n21 span').append(n21);
                 $('#n48').empty();
                 $('#n48').append(n21);
        
                 // Рассчитываем нижнюю точку n23
                  var n23 = parseInt(n7) + parseInt(D);
                 if(n23 > 22){
                     var totaldobron23 = n23.toString().split('').map(Number);
                     n21 = totaldobron21.reduce((a,b)=>b+a);
                 }
                 $('#n23 span').empty();
                 $('#n23 span').append(n23);
                 $('#n49').empty();
                 $('#n49').append(n23);
        
                 var n50 = parseInt(n23) + parseInt(n21);
                  if(n50 > 22){
                     var totaldobron50 = n50.toString().split('').map(Number);
                     n50 = totaldobron50.reduce((a,b)=>b+a);
                 }
                 $('#n50').empty();
                 $('#n50').append(n50);
                 // рассчитаем точку n9
                 var n9 = parseInt(day) + parseInt(n17);
                 if(n9 > 22){
                     var totaldobron9 = n9.toString().split('').map(Number);
                     n9 = totaldobron9.reduce((a,b)=>b+a);
                 }
                 $('#n9 span').empty();
                 $('#n9 span').append(n9);
                 $('#n36').empty();
                 $('#n36').append(n9);
                //n11
                var n11 = parseInt(month) + parseInt(n19);
                if(n11 > 22){
                     var totaldobron11 = n11.toString().split('').map(Number);
                     n11 = totaldobron11.reduce((a,b)=>b+a);
                 }
                 $('#n11 span').empty();
                 $('#n11 span').append(n11);
                 $('#n37').empty();
                 $('#n37').append(n11);
        
                 var n38 = parseInt(n9)+parseInt(n11);
                 if(n38 > 22){
                     var totaldobron38 = n38.toString().split('').map(Number);
                     n38 = totaldobron38.reduce((a,b)=>b+a);
                 }
                 $('#n38').empty();
                 $('#n38').append(n38);
                 // n13
                 var n13 = parseInt(year)+ parseInt(n21);
                  if(n13 > 22){
                     var totaldobron13 = n13.toString().split('').map(Number);
                     n13 = totaldobron13.reduce((a,b)=>b+a);
                 }
                 $('#n13 span').empty();
                 $('#n13 span').append(n13);
        
                  // n15
                  var n15 = parseInt(n7)+ parseInt(n23);
                    if(n15 > 22){
                     var totaldobron15 = n15.toString().split('').map(Number);
                     n15 = totaldobron15.reduce((a,b)=>b+a);
                 }
                 $('#n15 span').empty();
                 $('#n15 span').append(n15);
        
                 //n2
                 var n2 = parseInt(day) + parseInt(month);
                 
                    if(n2 > 22){
                     var totaldobron2 = n2.toString().split('').map(Number);
                     n2 = totaldobron2.reduce((a,b)=>b+a);
                 }
                 $('#n2 span').empty();
                 $('#n2 span').append(n2);
        
        
                 //n4
                 var n4 = parseInt(year) + parseInt(month);
                 
                    if(n4 > 22){
                     var totaldobron4 = n4.toString().split('').map(Number);
                     n4 = totaldobron4.reduce((a,b)=>b+a);
                 }
                 $('#n4 span').empty();
                 $('#n4 span').append(n4);
        
                  //n6
                 var n6 = parseInt(year) + parseInt(n7);
                 
                    if(n6 > 22){
                     var totaldobron6 = n6.toString().split('').map(Number);
                     n6 = totaldobron6.reduce((a,b)=>b+a);
                 }
                 $('#n6 span').empty();
                 $('#n6 span').append(n6);
        
                 //n8
                 var n8 = parseInt(day) + parseInt(n7);
                 
                    if(n8 > 22){
                     var totaldobron8 = n8.toString().split('').map(Number);
                     n8 = totaldobron8.reduce((a,b)=>b+a);
                 }
                 $('#n8 span').empty();
                 $('#n8 span').append(n8);
        
                  //n18
                 var n18 = parseInt(n2) + parseInt(D);
                 
                    if(n18 > 22){
                     var totaldobron18 = n18.toString().split('').map(Number);
                     n18 = totaldobron8.reduce((a,b)=>b+a);
                 }
                 $('#n18 span').empty();
                 $('#n18 span').append(n18);
        
                  //n20
                 var n20 = parseInt(n4) + parseInt(D);
                 
                    if(n20 > 22){
                     var totaldobron20 = n20.toString().split('').map(Number);
                     n20 = totaldobron20.reduce((a,b)=>b+a);
                 }
                 $('#n20 span').empty();
                 $('#n20 span').append(n20);
        
                   //n22
                 var n22 = parseInt(n6) + parseInt(D);
                 
                    if(n22 > 22){
                     var totaldobron22 = n22.toString().split('').map(Number);
                     n22 = totaldobron22.reduce((a,b)=>b+a);
                 }
                 $('#n22 span').empty();
                 $('#n22 span').append(n22);
        
                   //n24
                 var n24 = parseInt(n8) + parseInt(D);
                 
                    if(n24 > 22){
                     var totaldobron24 = n24.toString().split('').map(Number);
                     n24 = totaldobron24.reduce((a,b)=>b+a);
                 }
                 $('#n24 span').empty();
                 $('#n24 span').append(n24);
        
                 //n10
                 var n10 = parseInt(n2) + parseInt(n18);
                 
                    if(n10 > 22){
                     var totaldobron10 = n10.toString().split('').map(Number);
                     n10 = totaldobron10.reduce((a,b)=>b+a);
                 }
                 $('#n10 span').empty();
                 $('#n10 span').append(n10);
        
                   //n12
                 var n12 = parseInt(n4) + parseInt(n20);
                 
                    if(n12 > 22){
                     var totaldobron12 = n12.toString().split('').map(Number);
                     n12 = totaldobron12.reduce((a,b)=>b+a);
                 }
                 $('#n12 span').empty();
                 $('#n12 span').append(n12);
        
                 //n14
                 var n14 = parseInt(n6) + parseInt(n22);
                 
                    if(n14 > 22){
                     var totaldobron14 = n14.toString().split('').map(Number);
                     n14 = totaldobron14.reduce((a,b)=>b+a);
                 }
                 $('#n14 span').empty();
                 $('#n14 span').append(n14);
            
                 //n16
                 var n16 = parseInt(n8) + parseInt(n24);
                 
                    if(n16 > 22){
                     var totaldobron16 = n16.toString().split('').map(Number);
                     n16 = totaldobron16.reduce((a,b)=>b+a);
                 }
                 $('#n16 span').empty();
                 $('#n16 span').append(n16);
        
        
                 // n26
                  var n26 = parseInt(n19) + parseInt(D);
                 
                    if(n26 > 22){
                     var totaldobron26 = n26.toString().split('').map(Number);
                     n26 = totaldobron26.reduce((a,b)=>b+a);
                 }
                 $('#n26 span').empty();
                 $('#n26 span').append(n26);
                 $('#n43').empty();
                 $('#n43').append(n26);
                 // n25
                  var n25 = parseInt(n17) + parseInt(D);
                 
                    if(n25 > 22){
                     var totaldobron25 = n25.toString().split('').map(Number);
                     n25 = totaldobron26.reduce((a,b)=>b+a);
                 }
                 $('#n25 span').empty();
                 $('#n25 span').append(n25);
                 $('#n42').empty();
                 $('#n42').append(n25);
        
                 var n44 = parseInt(n25) + parseInt(n26);
                 if(n44 > 22){
                     var totaldobron44 = n44.toString().split('').map(Number);
                     n44 = totaldobron44.reduce((a,b)=>b+a);
                 }
                 $('#n44').empty();
                 $('#n44').append(n44);
                 
                  // n28
                  var n28 = parseInt(n23) + parseInt(n21);
                 
                    if(n28 > 22){
                     var totaldobron28 = n28.toString().split('').map(Number);
                     n28 = totaldobron28.reduce((a,b)=>b+a);
                 }
                 $('#n28 span').empty();
                 $('#n28 span').append(n28);
        
                  // n27
                  var n27 = parseInt(n28) + parseInt(n21);
                 
                    if(n27 > 22){
                     var totaldobron27 = n27.toString().split('').map(Number);
                     n27 = totaldobron27.reduce((a,b)=>b+a);
                 }
                 $('#n27 span').empty();
                 $('#n27 span').append(n27);
        
                  // n29
                  var n29 = parseInt(n28) + parseInt(n23);
                 
                    if(n29 > 22){
                     var totaldobron29 = n29.toString().split('').map(Number);
                     n29 = totaldobron29.reduce((a,b)=>b+a);
                 }
                 $('#n29 span').empty();
                 $('#n29 span').append(n29);
                 
                 // Небо
                 var sky = parseInt(month) + parseInt(n7);
                 if(sky > 22){
                     var totaldobronsky = sky.toString().split('').map(Number);
                     sky = totaldobronsky.reduce((a,b)=>b+a);
                 }
                 $('#n57').empty();
                 $('#n57').append(sky);
                 // Земля
                 var terra = parseInt(day) + parseInt(year);
                 if(terra > 22){
                     var totaldobronterra = terra.toString().split('').map(Number);
                     terra = totaldobronterra.reduce((a,b)=>b+a);
                 }
                 $('#n59').empty();
                 $('#n59').append(terra);
        
                 var n58 = parseInt(sky) + parseInt(terra);
                  if(n58 > 22){
                     var totaldobron58 = n58.toString().split('').map(Number);
                     n58 = totaldobron58.reduce((a,b)=>b+a);
                 }
                 $('#n58').empty();
                 $('#n58').append(n58);
        
                 // мужское
                 var n60 = parseInt(n2) + parseInt(n6);
                  if(n60 > 22){
                     var totaldobron60 = n60.toString().split('').map(Number);
                     n60 = totaldobron60.reduce((a,b)=>b+a);
                 }
                 $('#n60').empty();
                 $('#n60').append(n60);
         
                   // женское
                 var n62 = parseInt(n4) + parseInt(n8);
                  if(n62 > 22){
                     var totaldobron62 = n62.toString().split('').map(Number);
                     n62 = totaldobron62.reduce((a,b)=>b+a);
                 }
                 $('#n62').empty();
                 $('#n62').append(n62);
        
                 // общее
                 var n61 = parseInt(n60) + parseInt(n62);
                  if(n61 > 22){
                     var totaldobron61 = n61.toString().split('').map(Number);
                     n61 = totaldobron61.reduce((a,b)=>b+a);
                 }
                 $('#n61').empty();
                 $('#n61').append(n61);
        
                 
              
    }
    $('#form').on('submit', function(e){
    
        e.preventDefault();
        calcMatrix();
    });
    calcMatrix();
});