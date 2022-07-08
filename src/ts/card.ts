import ScrollReveal from 'scrollreveal'

export class Card {
  readonly title?: string
  readonly desc?: string
  readonly demo?: string
  readonly repo?: string

  constructor(title: string, desc: string, demo: string, repo: string) {
    this.title = title;
    this.desc = desc;
    this.demo = demo
    this.repo = repo;
  }

  createCard() {
    const main = document.querySelector('main')

    const card = document.createElement('div')
    card.classList.add('card')
    main?.appendChild(card)

    ScrollReveal({ reset: true, duration: 1300, interval: 100 }).reveal('.card')

    const banner = document.createElement('div')
    banner.classList.add('card__banner')
    card.appendChild(banner)

    const texts = document.createElement('div')
    texts.classList.add('card__texts')
    card.appendChild(texts)

    if(this.title) {
      const h2 = document.createElement('h2')
      h2.textContent = this.title
      texts.appendChild(h2)
    }

    if (this.desc) {
      const p = document.createElement('p')
      p.textContent = this.desc
      texts.appendChild(p)
    }

    const btns = document.createElement('div')
    btns.classList.add('card__btns')
    card.appendChild(btns)

    if (this.demo) {
      const a1 = document.createElement('a')
      a1.classList.add('button', 'button--sm--fill')
      a1.textContent = 'demo'
      a1.href = this.demo
      a1.target = '_blank'
      a1.rel = 'noopener noreferrer'
      btns.appendChild(a1)
    }

    if (this.repo) {
      const a2 = document.createElement('a')
      a2.classList.add('button', 'button--sm')
      a2.textContent = 'github'
      a2.href = this.repo
      a2.target = '_blank'
      a2.rel = 'noopener noreferrer'
      btns.appendChild(a2)
    }
  }
}