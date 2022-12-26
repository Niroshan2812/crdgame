const cardOnjectDefinnitions =[
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-QueenDiamonds.png'},
    {id:4, imagePath:'/images/card-AceSpades.png'},

]
const cardBackImagePath ='/images/card-back-Blue.png'

const cardContannerElem = document.querySelector('.cardContanner')

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
    addIdToElement(cardElem, cardItem.id)

    //add class to inner card elemnt
    addCardToElement(cardInnerElem,'cardInner' )

    //add card to front card elemnt
    addCardToElement(cardFrontElem, 'cardFront')

    //add card to back card element
    addCardToElement(cardBackElem, 'cardBack')

    //add src attribute and appropriate value to img element - back card
    addSrcToImageElement(cardBackElem,cardBackImagePath)

    //add src attribute and appropriate value to img element - front card
    addSrcToImageElement(cardFrontElem, cardItem.imagePath)

    //assing class to front image element fro back card 
    addCardToElement(cardBackElem,'cardImg')

    //assing class to dront image element fro back card 
    addCardToElement(cardFrontElem,'cardImg')

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