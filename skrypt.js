let je = document.getElementById("je");
let dw = document.getElementById("dw");
let tr = document.getElementById("tr");
let cz = document.getElementById("cz");
let pi = document.getElementById("pi");
let sz = document.getElementById("sz");
let si = document.getElementById("si");
let os = document.getElementById("os");
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let a5 = document.getElementById("a5");
let a6 = document.getElementById("a6");
let a7 = document.getElementById("a7");
let a8 = document.getElementById("a8");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");


const random = () => {
    const randomNumber = Math.floor(Math.random()*6000+4000).toString(16);
    hexCode2.innerHTML = randomNumber;
    const randomNumber2 = Math.floor(Math.random()*6000+4000).toString(16);
    hexCode3.innerHTML = randomNumber2;
    const randomNumber3 = Math.floor(Math.random()*6000+4000).toString(16);
    hexCode4.innerHTML = randomNumber3;
    const randomNumber4 = Math.floor(Math.random()*6000+4000).toString(16);
    hexCode5.innerHTML = randomNumber4;
        const randomNumber5 = Math.floor(Math.random()*99+20).toString(16);
        txt1.value = randomNumber5;
        const randomNumber6 = Math.floor(Math.random()*99+20).toString(16);
        txt2.value = randomNumber6;
        const randomNumber7 = Math.floor(Math.random()*99+20).toString(16);
        txt3.value = randomNumber7;
        const randomNumber12 = Math.floor(Math.random()*99+20).toString(16);
        txt4.value = randomNumber12;
        const randomNumber8 = Math.floor(Math.random()*99+20).toString(16);
        txt5.value = randomNumber8;
        const randomNumber9 = Math.floor(Math.random()*99+20).toString(16);
        txt6.value = randomNumber9;
        const randomNumber10 = Math.floor(Math.random()*99+20).toString(16);
        txt7.value = randomNumber10;
        const randomNumber11 = Math.floor(Math.random()*99+20).toString(16);
        txt8.value = randomNumber11;
}

function reset() {
    hexCode2.innerHTML = "0000";
    hexCode3.innerHTML = "0000";
    hexCode4.innerHTML = "0000";
    hexCode5.innerHTML = "0000";
    txt1.value = "00"
    txt2.value = "00"
    txt3.value = "00"
    txt4.value = "00"
    txt5.value = "00"
    txt6.value = "00"
    txt7.value = "00"
    txt8.value = "00"
 };

 reset();


 function MOV ()
 {
    let pom;
  
    if(je.checked ==  true)
    {
        
        pom=hexCode2.textContent;
    }

    if(dw.checked ==  true)
    {
        
        pom=hexCode3.textContent;
    }

    if(tr.checked ==  true)
    {
       
        pom=hexCode4.textContent;
    }

    if(cz.checked ==  true)
    {
       
        pom=hexCode5.textContent;
    }

    if(pi.checked ==  true)
    {
        hexCode2.innerHTML = pom;
    }

    if(sz.checked ==  true)
    {
        hexCode3.innerHTML = pom;
    }

    if(si.checked ==  true)
    {
        hexCode4.innerHTML = pom;
    }
    if(os.checked ==true)
    {
        hexCode5.innerHTML = pom;
    }



//druga kolumna

if(a1.checked ==  true)
    {
        
        pom=txt1.value;
    }

    if(a2.checked ==  true)
    {
        pom=txt2.value;
    }

    if(a3.checked ==  true)
    {
       
        pom=txt3.value;
    }

    if(a4.checked ==  true)
    {
       
        pom=txt4.value;
    }


    if(a5.checked ==  true)
    {
        txt1.value = pom;
    }

    if(a6.checked ==  true)
    {
        txt2.value = pom;
    }

    if(a7.checked ==  true)
    {
        txt3.value = pom;
    }
    if(a8.checked ==true)
    {
        txt4.value = pom;
    }

    
//TRZECIA KOLUMNA

if(b1.checked ==  true)
    {
        
        pom=txt5.value;
    }

    if(b2.checked ==  true)
    {
        pom=txt6.value;
    }

    if(b3.checked ==  true)
    {
       
        pom=txt7.value;
    }

    if(b4.checked ==  true)
    {
       
        pom=txt8.value;
    }


    if(b5.checked ==  true)
    {
        txt5.value = pom;
    }

    if(b6.checked ==  true)
    {
        txt6.value = pom;
    }

    if(b7.checked ==  true)
    {
        txt7.value = pom;
    }
    if(b8.checked ==true)
    {
        txt8.value = pom;
    }
 }

function check()
{
    let pom;
    if(pi.checked ==  true)
    {
        pom=hexCode2;
        
    }

    if(sz.checked ==  true)
    {
        pom=hexCode3;
    }

    if(si.checked ==  true)
    {
        pom=hexCode4;
    }
    if(os.checked ==true)
    {
        pom=hexCode5;
    }
return pom;

}

function check2(){
    let pom;
    if(a5.checked ==  true)
       {
           pom=txt1;
       }
   
       if(a6.checked ==  true)
       {
         pom=txt2;
       }
   
       if(a7.checked ==  true)
       {
        pom=txt3;
       }
       if(a8.checked ==true)
       {
        pom=txt4;
       }
      
    return pom;
}

function check3(){
     //TRZECIA KOLUMNA
     if(b5.checked ==  true)
     {
      pom=txt5;
     }
 
     if(b6.checked ==  true)
     {
      pom=txt6;
     }
 
     if(b7.checked ==  true)
     {
      pom=txt7;
     }
     if(b8.checked ==true)
     {
      pom=txt8;
     }
     return pom;

    }










 function XCHG(){
    
    {
       let pom,pom2;
  
     
       if(je.checked ==  true)
       {
           pom2=hexCode2.textContent;
           hexCode2.innerHTML=check().textContent;
           check().innerHTML=pom2;

       }
   
       if(dw.checked ==  true)
       {
           
        pom2=hexCode3.textContent;
        hexCode3.innerHTML=check().textContent;
        check().innerHTML=pom2;
       }
   
       if(tr.checked ==  true)
       {
          
        pom2=hexCode4.textContent;
           hexCode4.innerHTML=check().textContent;
           check().innerHTML=pom2;
       }
   
       if(cz.checked ==  true)
       {
          
        pom2=hexCode5.textContent;
        hexCode5.innerHTML=check().textContent;
        check().innerHTML=pom2;
       }
   
     
   
   
   
   //druga kolumna
   
   if(a1.checked ==  true)
       {
           pom2=txt1.value;
           txt1.value=check2().value;
           check2().value=pom2; 
       }
   2
       if(a2.checked ==  true)
       {
        pom2=txt2.value;
        txt2.value=check2().value;
        check2().value=pom2; 
       }
   
       if(a3.checked ==  true)
       {
          
        pom2=txt3.value;
        txt3.value=check2().value;
        check2().value=pom2; 
       }
   
       if(a4.checked ==  true)
       {
          
        pom2=txt4.value;
        txt4.value=check2().value;
        check2().value=pom2; 
       }
   
   
       
   
       
   //TRZECIA KOLUMNA
   
   if(b1.checked ==  true)
       {
           
        pom2=txt5.value;
        txt5.value=check3().value;
        check3().value=pom2;
       }
   
       if(b2.checked ==  true)
       {
        pom2=txt6.value;
        txt6.value=check3().value;
        check3().value=pom2;
       }
   
       if(b3.checked ==  true)
       {
          
        pom2=txt7.value;
        txt7.value=check3().value;
        check3().value=pom2;
       }
   
       if(b4.checked ==  true)
       {
        pom2=txt8.value;
        txt8.value=check3().value;
        check3().value=pom2;
       }
   
   
      
    }
   
 }