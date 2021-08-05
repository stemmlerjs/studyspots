
export abstract class PageComponent {

}

export class Map extends PageComponent {

  determineCurrentCity () {
    
  }

  getSpotsInView () {
    return cy.get('.spot')
  }

  setLocation (location: string) {

  }

}