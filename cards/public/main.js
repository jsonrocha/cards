const suits = [' of Clubs', ' of Diamonds', ' Of Hearts', ' Of Spades']
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']
const combine = suits.length * ranks.length

let wholedeck = new Array(combine)

const dealDeck = () => {
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      wholedeck[i * ranks.length + j] = { suit: suits[i], rank: ranks[j] }
    }
  }

  for (let i = combine - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const k = wholedeck[j]
    wholedeck[j] = wholedeck[i]
    wholedeck[i] = k
  }
}

const dealCard = () => {
  const card = wholedeck.pop()
  const list = document.querySelector('div')
  const item = document.createElement('span')
  item.textContent = `${card.rank}${card.suit}`
  item.className = card.suit
  list.appendChild(item)
}

const main = () => {
  dealDeck()
  document.querySelector('button').addEventListener('click', dealCard)
}

document.addEventListener('DOMContentLoaded', main)
