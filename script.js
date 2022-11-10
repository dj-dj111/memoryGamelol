//create the data. everything will be done in the dom event listener
document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'annoyednorth',
            img: 'images/annoyednorth.jpg'
        },
        {
            name: 'annoyednorth',
            img: 'images/annoyednorth.jpg'
        },
        {
            name: 'blackmarge',
            img: 'images/blackmarge.png'
        },
        {
            name: 'blackmarge',
            img: 'images/blackmarge.png'
        },
        {
            name: 'jigglyblink',
            img: 'images/jigglyblink.gif'
        },
        {
            name: 'jigglyblink',
            img: 'images/jigglyblink.gif'
        },
        {
            name: 'teehee',
            img: 'images/teehee.jpg'
        },
        {
            name: 'teehee',
            img: 'images/teehee.jpg'
        },
        {
            name: 'lookgif',
            img: 'images/lookgif.gif'
        },
        {
            name: 'lookgif',
            img: 'images/lookgif.gif'
        },
        {
            name: 'cynthia',
            img: 'images/cynthia.png'
        },
        {
            name: 'cynthia',
            img: 'images/cynthia.png'
        },
        {
            name: 'shyshy',
            img: 'images/shyshy.gif'
        },
        {
            name: 'shyshy',
            img: 'images/shyshy.gif'
        },
        {   name: 'smuggirl',
            img: 'images/smuggirl.png'
        },
        {   name: 'smuggirl',
            img: 'images/smuggirl.png'
        },


    ]
    //-------------------------------------setup----------------------------------------------
   /*step 1*/ 
//randomize the cards
   cardArray.sort(() => 0.5 - Math.random())
   
   const grid = document.querySelector('.grid')
   const resultDisplay = document.querySelector('#result')
    let cardsChosen =  [] //empty array of cards chosen
    let cardsChosenId = []
    let cardsWon = []


    //-------------------------------------------create your board------------------------------------------
   /*step 2*/
    function createBoard() {
        for (let i =0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/questionmarkimage2.png') //set as an attribute linking it to the image with relative path pinkbackground.jpg
            card.setAttribute('data-id', i) //loop over each one that gives them a total
            card.addEventListener('click', flipCard)
            grid.appendChild(card) //append them to the section with the class name "grid"
        }
    }
    
    //---------------------------------flip your card----------------------------------------------------
    /*step 3*/ 
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name) 
        //use push to push cards from card array based on card id.
        // if card Id is 4, it will match the 5th card in the card array
        cardsChosenId.push(cardId) //same idea as above
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) { //we only want to put two cards in our card's chosen array
            //if this card's chosen array = 2, we want to invoke the function for checkformatch
            setTimeout(checkForMatch, 500) 
            //check for a match after exactly 500 milliseconds
        }
    }
    
    //--------------------------------check for matches------------------------------------------
    /*step4*/
    function checkForMatch(){ 
        let cards = document.querySelectorAll('img') //pick out all of the images we created
        // in the first function using query selector all and call them cards
        //we have 2 values in our card's chosen array as well as our card's chosen id array at this point
        const optionOneId = cardsChosenId[0] //i want the first value in my array and i want to assign it to the const optionOneId
        const optionTwoId = cardsChosenId[1] // same
        if (cardsChosen[0] === cardsChosen[1]) {  //using the same logic, check that the first item in the array deeply equals
            // the second item in my card's chosen array). 
            alert('YAS!') //IF the answer is true i want an alert to pop up. 
            cards[optionOneId].setAttribute('src', 'images/pinkbackground.jpg')
            cards[optionTwoId].setAttribute('src', 'images/pinkbackground.jpg')
            cardsWon.push(cardsChosen) //push the cards into an array to be stored
        }else { 
            //if the cards dont match flip them over to be played again
            cards[optionOneId].setAttribute('src', 'images/questionmarkimage2.png')
            cards[optionTwoId].setAttribute('src', 'images/questionmarkimage2.png')
            alert('nnnnope, try again')
        
        }
        
        //------------------------------------win condition-----------------------------------
        //if either of these two things happen i still want to clear the cards chosen array and the cardschosenId array
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        /*we can pass through exactly how many times we have stored something in our cardsWon array.
        (1point for every match)
        if the card won deeply equal the length of our cards array / 2 we know we have collected all the possible cards
        in our cards array*/
        if(cardsWon.length === cardArray.length/2) { 
            resultDisplay.textContent = " you ate that"
        }
        
    }
    
    //invoke function to see everything
  
    createBoard()

})


/*-----------------------------------------issues: ------------------------
-can't hardstop game
-if you continue to click past the you win, it flips the cards again 
-if you click 3+ times it keeps the last card you have flipped over but doesnt recognize that it needs to
be flipped back down. (this can lead to multiple cards being flipped over at the same time with no matches being recognized)
(the game thinks it's flipped back over but doesnt show? idk)
*/
