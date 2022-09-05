
// compare two string to get which one have more vowels







// if(ab>bc){
// console.log("a have a more vowels");
// }
// else if(ab==bc){
// console.log("a and b have equal vowels");
// }
// else{
// console.log("b have a more vowels");
// }

let a=prompt("give a first string"),
b=prompt("give a second string"),
res_a,res_b,
c=["a","e","i","o","u","A","E","I","O","U"];


function aclick(ax,cx){
    ab=0,bc=0;
    for(i=0;i<a.length;i++){
        for(j=0; j<c.length; j++){
            if(ax[i]==cx[j]){
                ab++;
                
            }
        
        }
    return ab;
}
console.log(ab);
}
res_a=aclick(a,c);
res_b=aclick(b,c);
// console.log(res_a);
// console.log(res_b);

if(res_a>res_b){
    console.log("a have a more vowels");
    }
// else if(res_b==res_a){
//     console.log("a and b have equal vowels");
//     }
else{
    console.log("b have a more vowels");
    }

    // function bclick(b,c) 

    

// for(i=0;i<b.length;i++){
//     for(j=0; j<c.length; j++){
//         if(b[i]==c[j]){
//             bc++;
            
//         }
       
//     }
    
// }
// console.log(bc);

// }
// bclick(b,c);





































