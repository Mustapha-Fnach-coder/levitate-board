const container = document.getElementById('container')
let colors = ['red','green',"yellow" , "blue" ,'pink','white',]
function colorColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}
function changecolor(element){
    let color = colorColor()
    element.style.background = color
}
function retour(element){
    element.style.background = "black"
}
for(let i= 0; i < 580 ; i++){
    const care = document.createElement('div')
    care.classList.add('care')
    care.addEventListener('mouseover',()=>{
        changecolor(care)
    })
    care.addEventListener('mouseout',()=>{
        retour(care)
    })
    container.appendChild(care)
}

