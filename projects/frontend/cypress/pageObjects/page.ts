
export abstract class Page {
  protected url: string;
  protected pageId: string;

  constructor (url: string, pageId: string) {
    this.url = url;
    this.pageId = pageId;
  }

  load () {
    cy.visit(this.url);
  }

  waitUntilLoaded () {
    cy.get(`#${this.pageId}`);
  }
}