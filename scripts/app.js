let element = document.querySelector("#numberinput");


element.addEventListener("input", function(){
    if (element.value <= -10 || element.value >= 10) {
        alert("The number should be between -10 and 10");
    
    }
    else{
        
        const fruit = {
        Name: "Apple",
        Color: 'Red',
        
        Taste: "Sweet",
    }
    let element1= document.querySelector("#fruitName")
    let element2= document.querySelector("#fruitColor") 
    let element3= document.querySelector("#fruitTaste")
    
    
    fruitName.innerHTML = `Name: ${fruit.Name}`;
    fruitColor.innerHTML = `Color: ${fruit.Color}`;
    fruitTaste.innerHTML = `Taste: ${fruit.Taste}`;

    

    }
});
 

