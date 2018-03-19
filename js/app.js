let scoreMe = 0  
let scoreBot = 0
let valueMe = ""
let valueBot = ""

const allAnswer = ["rock", "paper", "scissors"]

const btnRock = document.querySelector('.button-rock')
const btnPaper = document.querySelector('.button-paper')
const btnScissors = document.querySelector('.button-scissors')

const resultMe = document.querySelector('.resultMe')
const resultBot = document.querySelector('.resultBot')

const scoreElementMe = document.querySelector('.scoreMe')
const scoreElementBot = document.querySelector('.scoreBot')

const resultForMe = document.querySelector('.resultForMe')

function buttonChoice(buttonName, elementName, winElementBot, looseElement) {
    buttonName.addEventListener('click', () => {
        valueMe = elementName
        valueBot = allAnswer[Math.floor(Math.random() * 3)]
        if(valueBot === valueMe) {
            resultBot.setAttribute('class', 'resultBot')
            resultMe.setAttribute('class', 'resultMe')

            resultBot.classList.add(elementName)
            resultMe.classList.add(elementName)
            resultForMe.innerHTML = "Egalité !"
        } else if (valueBot === winElementBot) {
            resultBot.setAttribute('class', 'resultBot')
            resultMe.setAttribute('class', 'resultMe')

            resultBot.classList.add(winElementBot)
            resultMe.classList.add(elementName)
            
            scoreBot++
            scoreElementBot.innerHTML = scoreBot
            resultForMe.innerHTML = "Perdu !"
        } else {
            resultBot.setAttribute('class', 'resultBot')
            resultMe.setAttribute('class', 'resultMe')

            resultBot.classList.add(looseElement)
            resultMe.classList.add(elementName)
            
            scoreMe++
            scoreElementMe.innerHTML = scoreMe
            resultForMe.innerHTML = "Gagné !"
        }
    })
}

buttonChoice(btnRock, "rock", "paper", "scissors")
buttonChoice(btnPaper, "paper", "scissors", "rock")
buttonChoice(btnScissors, "scissors", "rock", "paper")
