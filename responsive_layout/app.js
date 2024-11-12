var container=document.getElementById("contain");
var aside1=document.getElementById("aside");
var aside2=document.getElementById("asiide");
var center=document.getElementById("body");
 const array=[aside1,aside2,center];

setInterval(()=>{
let width=window.getComputedStyle(container).getPropertyValue("width");
let widthValue = parseFloat(width); 

if(widthValue<=1000){
array.forEach(element => {
    element.classList.add("col-span-4","row-span-1");
    
});





}
else{
    array.forEach(element => {
        element.classList.remove("col-span-4","row-span-1");
        
    });
    


}





},100)