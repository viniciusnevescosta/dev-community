export class Card {
  title: string
  desc: string
  demo: string
  repo: string

  constructor(title: string, desc: string, demo: string, repo: string) {
    this.title = title;
    this.desc = desc;
    this.demo = demo
    this.repo = repo;
  }

  showTitle() {
    return this.title;
  }
}