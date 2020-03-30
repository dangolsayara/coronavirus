let list=document.createElement('div')
fetch('https://nepalcorona.info/api/v1/data/world')
.then(function(response){
    return response.json()
})

.then(function(data){

    data.forEach(function(info){
        const box=document.createElement('div')
        box.style.backgroundColor='#a0b6ba'
        box.style.margin='5%'
        box.style.padding='2%'



        const wrapper=document.createElement('div')
        wrapper.innerHTML=info.country
        wrapper.style.padding='10px'
      
        
        const container= document.createElement('div')
        container.innerHTML=info.totalCases
        container.style.float='right'
        container.style.marginLeft  ='50px'

        document.body.appendChild(box)
        box.appendChild(wrapper)
      
        wrapper.appendChild(container)
    });
})