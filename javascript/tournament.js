const TournamentNames = localStorage.getItem('TournamentName') ? JSON.parse(localStorage.getItem("TournamentName")) :
[]
const GameModes = localStorage.getItem('GameMode') ? JSON.parse(localStorage.getItem("GameMode")) :
[]
const Dates = localStorage.getItem('Date') ? JSON.parse(localStorage.getItem("Date")) :
[]
const Prices = localStorage.getItem('Price') ? JSON.parse(localStorage.getItem("Price")) :
[]
const imagesFinal = localStorage.getItem('images') ? JSON.parse(localStorage.getItem("images")) :
[] 

//Create Date
let createdDate = new Date()
let date = createdDate.getDate()
let month = createdDate.getMonth()+1
let year = createdDate.getFullYear()
if(date == 1 && 21 && 31){
    date = date+'st'
}else if(date == 2 && 22){
    date = date+'nd'
}else if(date == 3 && 23){
    date = date+'rd'
}
else{
    date = date+'th'
}
//SETTING MONTHS
if(month == 1){
    month = 'Jan'
}else if(month == 2){
    month = 'Feb'
}else if(month == 3){
    month = 'Mar'
}
else if(month == 4){
    month= 'Apr'
}
else if(month == 5){
    month = 'May'
}
else if(month == 6){
    month = 'Jun'
}
else if(month == 7){
    month = 'Jul'
}
else if(month == 8){
    month = 'Aug'
}
else if(month == 9){
    month = 'Sep'
}
else if(month == 10){
    month = 'Oct'
}
else if(month == 11){
    month = 'Nov'
}
else if(month == 12){
    month = 'Dec'
}
let finalFullDate = date + ' ' + month + ' ' + year



let mainNavUserDetails = document.querySelector('.mainNavUserDetails')
mainNavUserDetails.addEventListener('click', ()=>{
    mainNavUserDetails.classList.toggle('mainNavUserDetailsactive')
})
// ADD BACKGROUND STEP 1
let background = document.getElementById('TournamentDetailsFormImageDisplayImage')
let backgroundInput = document.getElementById('TournamentDetailsFormImageSelected')
backgroundInput.addEventListener('change', function() {
    background.src = URL.createObjectURL(backgroundInput.files[0])

    const reader = new FileReader()
    reader.addEventListener('load',()=>{
        const imagesArray = localStorage.getItem('images');
        let images = [];
        if (imagesArray) {
            images = [...JSON.parse(imagesArray)];
            images.push(reader.result);
        } else {
            images.push(reader.result);
        }
        localStorage.setItem('images', JSON.stringify(images));
    });
    reader.readAsDataURL(this.files[0])
})
// DISABLE BUTTON IF TOURNAMENT NAME IS EMPTY
let continueStepOne = document.querySelector('.continueStepOne')
let tournamentName = document.getElementById('tournamentName')
continueStepOne.disabled = true
tournamentName.addEventListener('input',()=>{
    if(tournamentName.value == ''){
        tournamentName.classList.add('TournamentDetailsFormInfoActive')
        continueStepOne.disabled = true
    }else{
        tournamentName.classList.remove('TournamentDetailsFormInfoActive')
        continueStepOne.disabled = false
    }
})

//CREATE ACCOUNT
// ASSIGNING VARIABLES
let createTournamentButton = document.querySelector('.createTournamentButton')
let continueStepTwo = document.querySelector('.continueStepTwo')
let continueStepThree = document.querySelector('.continueStepThree')
let createTournamentStepOne = document.querySelector('.createTournamentStepOne')
let createTournamentStepTwo = document.querySelector('.createTournamentStepTwo')
let createTournamentStepThree = document.querySelector('.createTournamentStepThree')
let cancelI = document.querySelector('.cancelI')
let backI = document.querySelector('.backI')
let backII = document.querySelector('.backII')

//DISPLAYING CREATE ACCOUTNT STEP ONE
createTournamentButton.addEventListener('click', ()=>{
    createTournamentStepOne.classList.add('createTournamentStepOneActive')
})
//REMOVING CREATE ACCOUTNT STEP ONE
cancelI.addEventListener('click', ()=>{
    createTournamentStepOne.classList.remove('createTournamentStepOneActive')
})
//DISPLAYING CREATE ACCOUTNT STEP TWO
continueStepOne.addEventListener('click',()=>{
    createTournamentStepTwo.classList.add('createTournamentStepTwoActive')
    createTournamentStepOne.classList.remove('createTournamentStepOneActive')
})
//REMOVING CREATE ACCOUTNT STEP TWO
backI.addEventListener('click', ()=>{
    createTournamentStepTwo.classList.remove('createTournamentStepTwoActive')
    createTournamentStepOne.classList.add('createTournamentStepOneActive')
})
//DISPLAYING CREATE ACCOUTNT STEP THREE
continueStepTwo.addEventListener('click',()=>{
    createTournamentStepThree.classList.add('createTournamentStepThreeActive')
    createTournamentStepTwo.classList.remove('createTournamentStepTwoActive')
})
//REMOVING CREATE ACCOUTNT STEP THREE
backII.addEventListener('click', ()=>{
    createTournamentStepTwo.classList.add('createTournamentStepTwoActive')
    createTournamentStepOne.classList.remove('createTournamentStepOneActive')
})
//REMOVING STEP 3
continueStepThree.addEventListener('click', ()=>{
    window.location.reload();
    createTournamentStepThree.classList.remove('createTournamentStepThreeActive')
})
//CALCULATING PRICE POOL
createTournamentStepThree.addEventListener('change',()=>{
    
})

//TOGGLE THIRDMATCH OR ROUND ROBIN
let Check = document.getElementById('Check')
let Check2 = document.getElementById('Check2')
Check.addEventListener('click', ()=>{
    if(Check.checked == true){
        Check2.checked = false
    }
})
Check2.addEventListener('click', ()=>{
    if(Check2.checked == true){
        Check.checked = false
    }
})

//CREATEING NEW LIST
let finish = document.querySelector('.continueStepThree')
finish.addEventListener('click' , ()=>{
    let firstPrices = parseInt(document.getElementById('firstPrice').value)
    let secondPrices = parseInt(document.getElementById('secondPrice').value)
    let thirdPrices = parseInt(document.getElementById('thirdPrice').value)
    let fourthPrices = parseInt(document.getElementById('fourthPrice').value)
    let finalPoolPrice = firstPrices+secondPrices+thirdPrices+fourthPrices
    const list = document.getElementById('tournamentName')
    createList(list)
    const list2 = document.getElementById('gameMode')
    createList2(list2)
    let list3 = finalFullDate
    createList3(list3)
    let list4 = finalPoolPrice
    createList4(list4)
    let list5 = imagesFinal
    createList5(list5)
    window.location.reload();
})

function displayItems(){
    let finalItems = ""
    for(let i = 0 ; i < TournamentNames.length; i++){
        finalItems += `
        <div class="listOfCreatedTournamentDetail">
            <div class="listOfCreatedTournamentDetailImg">
                <img src=${imagesFinal[i]} alt="Image">
            </div>
            <div class="listOfCreatedTournamentDetailDate">
                <span class="dateCreateTournamnt">${Dates[i]}</span>
            </div>
            <div class="listOfCreatedTournamentDetailName">
                ${TournamentNames[i]}
            </div>
            <div class="listOfCreatedTournamentDetailPrice">
                $${Prices[i]}
            </div>
            <div class="listOfCreatedTournamentDetailMode">
                ${GameModes[i]}
            </div>
            <div class="listOfCreatedTournamentDetailStatus">
                <div class="listOfCreatedTournamentDetailStatusBody">
                    <p class="listOfCreatedTournamentDetailStatusPara">Ongoing</p>
                </div>
            </div>
            <div class="listOfCreatedTournamentDetailAction">
                <div class="listOfCreatedTournamentDetailActionEye"><i class="fa-solid fa-eye"></i></div>
                <div class="listOfCreatedTournamentDetailActionDel"><i class="fa-solid fa-trash-can"></i></div>
            </div>
        </div>
        `
    }
    document.querySelector('.listOfCreatedTournament').innerHTML = finalItems
    activateDeleteListener()
}

function activateDeleteListener(){
    let deleteBtn = document.querySelectorAll('.listOfCreatedTournamentDetailActionDel')
    deleteBtn.forEach((db, i) =>{
        db.addEventListener('click', () => { deleteItem(i) })
    })
}

function deleteItem(i){
    TournamentNames.splice(i ,1)
    Dates.splice(i ,1)
    Prices.splice(i ,1)
    GameModes.splice(i ,1)
    imagesFinal.splice(i ,1)
    localStorage.setItem('TournamentName', JSON.stringify(TournamentNames))
    localStorage.setItem('images', JSON.stringify(imagesFinal))
    localStorage.setItem('Date', JSON.stringify(Dates))
    localStorage.setItem('Price', JSON.stringify(Prices))
    localStorage.setItem('GameMode', JSON.stringify(GameModes))
    location.reload()
}


function createList(list){
    TournamentNames.push(list.value)
    localStorage.setItem('TournamentName', JSON.stringify(TournamentNames))
    location.reload
}
function createList2(list2){
    GameModes.push(list2.value)
    localStorage.setItem('GameMode', JSON.stringify(GameModes))
    location.reload
}

function createList3(list3){
    Dates.push(list3)
    localStorage.setItem('Date', JSON.stringify(Dates))
    location.reload
}
function createList4(list4){
    Prices.push(list4)
    localStorage.setItem('Price', JSON.stringify(Prices))
    location.reload
}
function createList5(list5){
    imagesFinal.push(list5)
    localStorage.setItem('images', JSON.stringify(imagesFinal))
    location.reload
}


window.onload = function(){
    displayItems()
}
