const cardOnjectDefinnitions =[
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-QueenDiamonds.png'},
    {id:4, imagePath:'/images/card-AceSpades.png'},

]
const cardBackImagePath ='/images/card-back-Blue.png'

const cardContannerElem = document.querySelector('.cardContanner')

let cards =[]

const playGameButtonElemt =document.getElementById('play-game')

const collapsedGridAreaTemplate = '"a a" "a a"'
const cardCollectionCellClass = ".cardPosA"
loadGame()

function loadGame(){
    createCards()

    cards =document.querySelectorAll('.card')

    playGameButtonElemt.addEventListener('click',()=>startGame())

}
function startGame(){
    initializeGame()
    startRound()
}
function initializeGame(){

}
function startRound(){
    initializeNewRound()
    collectCards()
}
function initializeNewRound(){

}
function collectCards(){
    transformGridArea(collapsedGridAreaTemplate)
    addCardToGridCell(cardCollectionCellClass)
}
function transformGridArea(areas){
    cardContannerElem.getElementsByClassName.gridTemplateAreas =areas
}
function addCardsToGridAreaCell(cellPositionClassName){
    const cellPositionElem =document.querySelector(cellPositionClassName)

    cards.forEach((card,index)=>{
        addChiledElement(cellPositionElem,card)
    })
}

function createCards(){
    cardOnjectDefinnitions.forEach((cardItem) =>{
        createCard(cardItem)
    })
}

function createCard(cardItem){
    //Create div elements that make up a card
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    //create front and back images element for a card 
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    //add class and id to card element
    addCardToElement(cardElem,'card')
    addCardToElement(cardElem, 'fly-in')
    addIdToElement(cardElem, cardItem.id)

    //add class to inner card elemnt
    addCardToElement(cardInnerElem,'cardInner' )

    //add card to front card elemnt
    addCardToElement(cardFrontElem, 'cardFront')

    //add card to back card element
    addCardToElement(cardBackElem, 'cardBack')

    //add src attribute and appropriate value to img element - back card
    addSrcToImageElement(cardBackImg,cardBackImagePath)

    //add src attribute and appropriate value to img element - front card
    addSrcToImageElement(cardFrontImg, cardItem.imagePath)

    //assing class to front image element fro back card 
    addCardToElement(cardBackImg,'cardImg')

    //assing class to dront image element fro back card 
    addCardToElement(cardFrontImg,'cardImg')

    //addchild front elem
    addChiledElement(cardFrontElem, cardFrontImg)

    //addchild back elem
    addChiledElement(cardBackElem, cardBackImg)

    //addchild inner  elem front
    addChiledElement(cardInnerElem, cardFrontElem)

     //addchild inner  elem back
     addChiledElement(cardInnerElem, cardBackElem)


     //add inner card element as child element
     addChiledElement(cardElem,cardInnerElem)

     // add card element ss child element ro appropriate grid 
     
     addCardToGridCell(cardElem)



}

function createElement(elementType){
    return document.createElement(elementType)
}

function addCardToElement(elem, className){
    elem.classList.add(className)
}
function addIdToElement (elem ,id){
    elem.id = id
}

function addSrcToImageElement(imgElem, src){
    imgElem.src = src
}
function addChiledElement(parentElem, chiledElem){
    
    parentElem.appendChild(chiledElem)
}

function addCardToGridCell(card){
    const cardPositionClassName =mapCardIdToGridCell(card)
    const cardposElem = document.querySelector(cardPositionClassName)
    addChiledElement(cardposElem,card)
}
function mapCardIdToGridCell(card){
    if (card.id ==1){
        return '.cardPosA'
    }
    else if (card.id ==2){
        return '.cardPosB'
    }
    else if (card.id ==3){
        return '.cardPosC'
    }
    else if (card.id ==4){
        return '.cardPosD'
    }
}