import '../scss/style.scss'
import ScrollReveal from 'scrollreveal'
import { removeCard } from './removeCard'
import { Card } from './card'

ScrollReveal({ reset: true, duration: 1500, interval: 100 }).reveal('.headline');

interface ICard {
  name: string,
  description: string,
  homepage: string,
  html_url: string,
}

const search = document.querySelector('#input') as HTMLInputElement
search.addEventListener('input', async () => {
  try {
    if(search.value !== '') {
      const res = await fetch(`https://api.github.com/users/${search.value}/repos`)
      const api: ICard[] = await res.json()
      let nmbr = 0;  

      removeCard()
  
      api.forEach(() => {
        nmbr++
        const card = new Card(api[nmbr].name, api[nmbr].description, api[nmbr].homepage, api[nmbr].html_url)
        card.createCard()
      });
    } 
    else {
      const main = document.querySelector('main') as HTMLElement;
      const allCards = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement> | undefined;
    
      if(allCards) {
        allCards.forEach(element => {
          main.removeChild(element)
        });
      }
    }
  } catch (error) {
    console.log(`deu um erro ai ó ${error}`);
  }
})
