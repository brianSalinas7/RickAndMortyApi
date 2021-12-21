
const cards = document.querySelector('.characters')
const loading = document.querySelector('#spinner')


const fetch_characters= async () => {
    
    
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const personajes = await res.json();
    cards.innerHTML=''
    const {results} = personajes
    

    
    loading.classList.remove('d-none')

    setTimeout(()=>{

        results.forEach(character => {
            
            cards.innerHTML += `
            
                <div class="card text-white col-lg-12 ms-3 mb-3 bg-dark" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src=" ${character.image} " class="img-fluid  px-2 py-3  rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body ps-3">
                            <h5 class="card-title"> ${character.name} </h5>
                            <p class="card-text">status: ${character.status}</p>
                            <p class="card-text">Species: ${character.species}</p>
                            <p class="card-text">Origen: ${character.origin.name}</p>
                            <p class="card-text"><small class="text-muted">Location: ${character.location.name}</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            
            `
        });
        loading.classList.add('d-none')
    },1000)
    
    
}



const fetch_episodes = async () =>{

    const response_episodes = await fetch(`https://rickandmortyapi.com/api/episode`)
    const episodes = await response_episodes.json();

    const {results} = episodes
    cards.innerHTML=''

    loading.classList.remove('d-none')


    setTimeout(()=>{
            
        results.forEach(episodes =>{
    
            
            cards.innerHTML += `
    
            <div class="card col-5 mb-3 ms-5 bg-image">
                <div class="card-body">
                    <h5> ${episodes.name} </h5>
                </div>
                <div class="card-body ">
                    ${episodes.air_date}
                   <p class="text-white"> Episode:  ${episodes.id} </p>
                </div>
                
            </div>
                
            `   
    
        })
        loading.classList.add('d-none')

    },1000)
}


 const btnCharacters = document.querySelector('#btn-characters')
 const btnEpisodes = document.querySelector('#btn-episodes') 

 btnCharacters.addEventListener("click", fetch_characters)
 btnEpisodes.addEventListener("click", fetch_episodes)
