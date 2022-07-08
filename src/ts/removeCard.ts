export function removeCard(): void {
  const main = document.querySelector('main') as HTMLElement;
  const allCards = document.querySelectorAll('.card') as NodeListOf<HTMLDivElement> | undefined;

  if(allCards) {
    allCards.forEach(element => {
      main.removeChild(element)
    });
  }
}