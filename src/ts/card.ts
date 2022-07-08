export class Card {
  readonly title: string
  readonly desc: string
  readonly demo: string
  readonly repo: string

  constructor(title: string, desc: string, demo: string, repo: string) {
    this.title = title;
    this.desc = desc;
    this.demo = demo
    this.repo = repo;
  }
}