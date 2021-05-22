/* ------------------------------------------------- Monster finder ---------------------------------------------------------------------------------------------
- Way to Solve:
                (1) Step 1: Create new Monster with virtual DOM from a monster info base(monsters.js)
                   
                    <div class="monster" >
                        <img src="https://robohash.org/6?set=set2" alt="MD. Sakib Khan" />
                        <p class="name">MD. Sakib Khan</p>
                        <p class="email">programmingwithsakib@gmail.com</p>
                    </div>

                (2) Step 2: Create a 'monster not found' error messege with virtual DOM
                    
                    <div class="p-5 not-found" style="display: none">
                        <span>404</span>
                        <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
                    </div>

                (3) Step 3: Filter the monsters - Work with search button (add event listener to handle corresponding task)
                
------------------------------------------------------------------------------------------------------------------------------------------------------------*/

import {monsters} from './monsters.js'
const allMonster = document.querySelector('.monsters')

// Call for showMonsters() function
for (const monster of monsters) {
    showMonsters(monster)
}

// Call for notFound() function
notFound()

// (1) Step 1: Create new Monsters with virtual DOM from a monster info base(monsters.js)
function showMonsters(monster) {
    const monsterDiv = document.createElement('div')
    monsterDiv.setAttribute('class', 'monster')

    const monsterImg = document.createElement('img')
    monsterImg.setAttribute('src', `https://robohash.org/${monster.id}?set=set2`)
    monsterDiv.append(monsterImg)

    const pName = document.createElement('p')
    pName.setAttribute('class', 'name')
    pName.textContent = `${monster.name}`
    monsterDiv.append(pName)

    const pEmail = document.createElement('p')
    pEmail.setAttribute('class', 'email')
    pEmail.textContent = `${monster.email}`
    monsterDiv.append(pEmail)

    allMonster.append(monsterDiv)
}

// (2) Step 2: Create a 'monster not found' error messege with virtual DOM
function notFound() {
    const notFoundDiv = document.createElement('div')
    notFoundDiv.setAttribute('class', 'p-5 not-found')

    const span = document.createElement('span')
    span.textContent = '404'
    

    const h1 = document.createElement('h1')
    h1.textContent = '🧟‍♂️ No Monster Found 🧟‍♂️'

    notFoundDiv.append(span, h1)
    allMonster.append(notFoundDiv)
}

// (3) Step 3: Filter the monsters - Work with search button (add event listener to handle corresponding task)
document.querySelector('#search-monster').addEventListener('keyup', e =>{
    const keyword = e.target.value.toLowerCase()
    const monsters = document.querySelectorAll('.monster')
    let notFound = true
    monsters.forEach(monster => {
        const name = monster.children[1].textContent.toLowerCase()
        const email = monster.children[2].textContent.toLowerCase()
        
        if (name.includes(keyword) || email.includes(keyword)){
            monster.style.display = 'block'
            notFound = false
        }else{
            monster.style.display = 'none'
        }
    })
    if(notFound){
        document.querySelector('.not-found').style.display = 'block'
    } else {
        document.querySelector('.not-found').style.display = 'none'
    }
})
 

