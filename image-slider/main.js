




// IMAGE SLIDER

let img=["image/img1.JPG","image/img3.JPG" ,"image/img2.JPG" ],
next_img=document.getElementById("imag"),
i=0;
document.getElementById("next").addEventListener('click',nextcal)
function nextcal(){
    i++;
    if(i<=img.length){
        if(i==img.length){
            i=0;
        }
        next_img.src=img[i];
    }
}
document.getElementById("prv").addEventListener('click',prvcal)
function prvcal(){
    i--;
    if(i<=img.length){
        if(i==-1){
            i=2;    
        }
        next_img.src=img[i];
    }
   
}
