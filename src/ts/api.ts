interface ICard {
  readonly name: string,
  readonly description: string,
  readonly homepage: string,
  readonly html_url: string,
}
  
const res = await fetch(`https://api.github.com/users/jolonte/repos`)
export const api: ICard[] = await res.json()
