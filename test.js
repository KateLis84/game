//LOAD
let sound = document.getElementById('gameSound')
class Card {
    constructor(id, image){
        this.id=id;
        this.image = image;
        this.count = 2;
    }
    Minus(){
        this.count = this.count - 1;
    }
}
const obj1 = new Card(1, 'https://m.media-amazon.com/images/M/MV5BNjFiNDk5MGItNGY1Yy00NGRkLTg5Y2ItZjZlYmUzODQwZjAwXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_.jpg');
const obj2 = new Card(2, 'https://cdn.vox-cdn.com/thumbor/KMNpzLu5QHEptygyPPMUpb6yVcY=/0x0:1280x720/1200x675/filters:focal(538x258:742x462)/cdn.vox-cdn.com/uploads/chorus_image/image/70654334/Follies_at_the_Coven_Day_Parade___10.0.jpg');
const obj3 = new Card(3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXvr-EnMTHn1LZVnCokxhLyARuDFli9RWdaqgXIzbwqZCOoY5WrF64br3D1TazGUmM8Y&usqp=CAU');
const obj4 = new Card(4, 'https://cdn.vox-cdn.com/thumbor/NvQNEsI3AToeWU_szleK9L2S--k=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23435963/Hollow_Mind___1176.jpg');
const obj5 = new Card(5, 'https://www.pluggedin.com/wp-content/uploads/2020/04/owl-house-large-1024x587.jpg');
const obj6 = new Card(6, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7oNwvw852bMbnWVEnMS8miovuHYbyWaG_WA&usqp=CAU')
let recordList = JSON.parse(localStorage.getItem('recordList'))
function confirmA(replay = false){
    if(!replay){
        document.getElementById('confirm').style.display = 'none';
    }
    document.getElementById('all').innerHTML = `
    <div id="menu" class="menu">
            <p>Choose your character</p>
            <div id="forBtn">
            <button class="fill" onClick="ChoseCharacter('M3')")>Макс 3</button>
            <button class="fill" onClick="ChoseCharacter('YR')")>Юра</button>
            <button class="fill" onClick="ChoseCharacter('H')")>Христя</button>
            <button class="fill" onClick="ChoseCharacter('T')")>Тонік</button>
            <button class="fill" onClick="ChoseCharacter('M')")>Макс</button>
            <button class="fill" onClick="ChoseCharacter('K')")>Катя</button>
            <button class="fill" onClick="ChoseCharacter('Y')")>Уляна</button>
            <button class="fill" onClick="ChoseCharacter('AM')")>Анна-Марія</button>
            </div>
    </div>
    <audio id="beep" preload="auto">
        <source src="hoverSound.wav">
    </audio>
    `

    
    let beepOne = document.getElementById('beep')
    var arr = [...document.getElementsByClassName('fill')]
    arr.map((e)=>{
        e.addEventListener('mouseover', ()=>{
        beepOne.pause();
        beepOne.play();
    })
    })
    document.getElementById('menu').style.display = 'block'
}
function ChoseCharacter(character){
    switch(character){
    case 'H':
            obj1.image = '/images/H/first.jpg'
            obj2.image = '/images/H/second.jpg'
            obj3.image = '/images/H/third.jpg'
            obj4.image = '/images/H/fourth.jpg'
            obj5.image = '/images/H/fifth.jpg'
            obj6.image = '/images/H/sixth.jpg'
            break;
    case 'M3':
        obj1.image = '/images/M3/first.jpg'
        obj2.image = '/images/M3/second.jpg'
        obj3.image = '/images/M3/third.jpg'
        obj4.image = '/images/M3/fourth.jpg'
        obj5.image = '/images/M3/fifth.jpg'
        obj6.image = '/images/M3/sixth.jpg'
        break;
    case 'Y':
        obj1.image = '/images/Y/first.jpg'
        obj2.image = '/images/Y/second.jpg'
        obj3.image = '/images/Y/third.jpg'
        obj4.image = '/images/Y/fourth.jpg'
        obj5.image = '/images/Y/fifth.jpg'
        obj6.image = '/images/Y/sixth.jpg'
        break;
    case 'K':
        obj1.image = '/images/K/first.jpg'
        obj2.image = '/images/K/second.jpg'
        obj3.image = '/images/K/third.jpg'
        obj4.image = '/images/K/fourth.jpg'
        obj5.image = '/images/K/fifth.jpg'
        obj6.image = '/images/K/sixth.jpg'
        break;
    case 'YR':
        obj1.image = '/images/YR/first.jpg'
        obj2.image = '/images/YR/second.jpg'
        obj3.image = '/images/YR/third.jpg'
        obj4.image = '/images/YR/fourth.jpg'
        obj5.image = '/images/YR/fifth.jpg'
        obj6.image = '/images/YR/sixth.jpg'
        break;
    case 'T':
        obj1.image = '/images/T/first.jpg'
        obj2.image = '/images/T/second.jpg'
        obj3.image = '/images/T/third.jpg'
        obj4.image = '/images/T/fourth.jpg'
        obj5.image = '/images/T/fifth.jpg'
        obj6.image = '/images/T/sixth.jpg'
        break;
    case 'AM':
        obj1.image = '/images/AM/first.jpg'
        obj2.image = '/images/AM/second.jpg'
        obj3.image = '/images/AM/third.jpg'
        obj4.image = '/images/AM/fourth.jpg'
        obj5.image = '/images/AM/fifth.jpg'
        obj6.image = '/images/AM/sixth.jpg'
        break;
    case 'M':
        obj1.image = '/images/M/first.jpg'
        obj2.image = '/images/M/second.jpg'
        obj3.image = '/images/M/third.jpg'
        obj4.image = '/images/M/fourth.jpg'
        obj5.image = '/images/M/fifth.jpg'
        obj6.image = '/images/M/sixth.jpg'
        break;
    default:
        break;
}
    document.getElementById('chosen').play()
    document.getElementById('all').innerHTML = `<div class="arc">
    </div>
    <h1><span>LOADING</span></h1>
    `
    sound.play();
    if(recordList == null){
        window.setTimeout(()=>{
            document.getElementById('all').innerHTML = `
            <div id="field"></div> 
            <div id="info">
             <div id="score"></div>
             <div id="timeList">
                <div id='resultLabel'>Results</div>
                <div id="records"></div>
             </div>
            </div>
            `
            StartGame();
         }, 3000);
    }
    else{
        window.setTimeout(()=>{
            document.getElementById('all').innerHTML = `
            <div id="field"></div> 
            <div id="info">
             <div id="score"></div>
             <div id="timeList">
                <div id='resultLabel'>Results</div>
                <div id="records"></div>
             </div>
            </div>
            
            `
            StartGame();
         }, 2000);
    }
    

}

// RESULTS
function Calculate(result = false){
    if(recordList == null){
        if(result != false){
            recordList = [result]  
            localStorage.setItem('recordList', JSON.stringify(recordList)) 
        }
    }
    else{
        
        if(result != false){
          recordList.push(result)  
        }
        recordList.sort(function(a, b) {
            return a - b;
        });
        let list = document.getElementById('records')
        list.innerHTML = ``;

        let temp = [...new Set(recordList)];

        recordList.map((e, index)=>{
            list.innerHTML += `<p>#${index+1} ${e}s</p>`
        })
        localStorage.setItem('recordList', JSON.stringify(recordList))
    }
    
}
function Defeat(){
    clearInterval(x);
    readyToClick = false;

    document.getElementById('all').innerHTML += `
    <div class="menu logo" id="defeatLabel"> 
        <span>D</span>
        <span>e</span>
        <span>f</span>
        <span>e</span>
        <span>a</span>
        <span>t</span>

        <div class="defeatDescription">You've tried your best, but it wasn't enough </div>

        <div class="choseAgain">
            <button class="fill" onClick="ChoseCharacter()">Try Again</button>
            <button class="fill" onClick="confirmA(true)">Change character</button>
        </div>
    </div>`

    document.getElementById('timeList').style.display = 'block'
}
function Won(){
    document.getElementById('timer').pause()
    clearInterval(x);
    let results = 20 - seconds;
    Calculate(results);
    document.getElementById('all').innerHTML += `
    <div class="menu logo" id="victoryLabel"> 
        <span>V</span>
        <span>i</span>
        <span>c</span>
        <span>t</span>
        <span>o</span>
        <span>r</span>
        <span>y</span>

        <div class="defeatDescription">
            Well done! I'm proud of you :)
            <p>You're score: ${results}s</p>
        </div>

        <div class="choseAgain">
            <button class="fill" onClick="ChoseCharacter()">Try Again</button>
            <button class="fill" onClick="confirmA(true)">Change character</button>
        </div>
    </div>`
    document.getElementById('timeList').style.display = 'block'
}

//GAME
//VARIABLES
let Origmass = [obj1, obj2, obj3, obj4, obj5, obj6] 
let state = 'init'
let compare = [];
let readyToClick = true;
let guessedCount = 0;
cardFlip = document.getElementById('cardFlip')
var seconds;
var x;
function initializeMass(){
    obj1.count = 2;
    obj2.count = 2;
    obj3.count = 2;
    obj4.count = 2;
    obj5.count = 2;
    obj6.count = 2;
    Origmass = [obj1, obj2, obj3, obj4, obj5, obj6] 
}

//FUNCTIONS
function Compare(cards){
    readyToClick = false;
    if(cards[0].obj.id == cards[1].obj.id){
        guessedCount += 1;
        document.getElementById(cards[0].mainId).classList.add('cardSuccess')
        document.getElementById(cards[1].mainId).classList.add('cardSuccess')
        cardFlip.play()
        readyToClick = true;
    }
    else{
        window.setTimeout(()=>{
            cards[0].cardObj.style.display = 'block'
            cards[1].cardObj.style.display = 'block'
            readyToClick = true;
        }, 500);
    }
    state = 'init';
    if(guessedCount == 6){
        Won();
    }
}
function Clicked(id){
    if(readyToClick){
    
    let chosen = document.getElementById(id).childNodes[1]
    chosen.style.display = 'none'
    let card = '';
    for(i in Origmass){
        if(Origmass[i].id==id[0]){
            card = Origmass[i]
        }
    }
    switch(state){
        case 'init':
            state = 'turn1'
            compare = [];
            compare.push({obj: card, cardObj: chosen, mainId: id})
            // break;
        case 'turn1':
            state = 'turn2'
            break;
        case 'turn2': 
            if(compare[0].cardObj.id != chosen.id){
                compare.push({obj: card, cardObj: chosen, mainId: id})
                Compare(compare)
            }
            break;
        default:
            break;
    } 
    }
}
function initField(){
    const field = document.getElementById('field');
    initializeMass()
    let mass = Origmass
    field.innerHTML = ``
    let length = mass.length*2

    for(i=0; i<length; i++){
        let currentL = mass.length - 1
        let rand = Math.floor(Math.random() * (currentL - 0 + 1)) + 0
        field.innerHTML += `
            <div class="card" id="${mass[rand].id}_${i}" onclick=Clicked(this.id)>
                <div class='blackout' id="ID${mass[rand].id}_${i}"></div>
                <img class='cardImg' src="${mass[rand].image}"/>
            </div>`


        mass[rand].Minus();

        if(mass[rand].count <= 0){
            let temp=[]
            for(j in mass){
                if(mass[j].id != mass[rand].id){
                    temp.push(mass[j])
                }
            }
            mass = temp;
        }

    }
}
function StartGame(){
    guessedCount = 0;
    document.getElementById('timeList').style.display = 'none'
    readyToClick = true;
    state = 'init';
    seconds = 20;
    x = setInterval(function() {
        document.getElementById("score").innerHTML = `
        <span class="time">Time Left: </span> 
        <span class = "time" id="seconds">${seconds}s</span>`;

        seconds = seconds - 1;
        if(seconds == 4){
            document.getElementById('timer').play()
        }
        if(seconds < 5){
            document.getElementById('seconds').style.color = 'red'
        }
        if (seconds < 0) {
          Defeat();
        }
      }, 1000);
      Calculate();
      initField();
}