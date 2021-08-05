
import { Map } from "../shared/map";
import { Page } from "../page";

export class MainPage extends Page {
  private map: Map;
  
  constructor () {
    super('http://localhost:3000/', 'main-page');
    this.map = new Map();
  }

  getCurrentCityOnMap () {
    this.map.determineCurrentCity();
  }

  getCurrentStudySpotsInViewOnMap () {
    return this.map.getSpotsInView();
  }

  useDefaultMapLocation () {
    this.map.setLocation('Toronto');
  }

  setMapLocation (location: string) {
    this.map.setLocation('San Francisco')
  }

}
