/// <reference types="cypress" />

import { 
  And,
  Given, Then, When,
} from "cypress-cucumber-preprocessor/steps";
import { MainPage } from "../../pageObjects/main/mainPage";

let mainPage = new MainPage();

/**
 * Scenario: View all study spots in Toronto by default
 */

Given(`I'm on the main page`, () => {
  mainPage.load();
})

And(`location is disabled`, () => {
  mainPage.useDefaultMapLocation()
})

When('the page loads', () => {
  mainPage.waitUntilLoaded();
})

Then(`I should see the map of Toronto with at least one study spot displayed`, () => {
  let city = mainPage.getCurrentCityOnMap();
  expect(city).to.eq('Toronto');
  
  let spots = mainPage.getCurrentStudySpotsInViewOnMap();
  expect(spots.its.length).to.be.greaterThan(0);
})

/**
 * View spots based on my location
 */

Given(`I'm on the main page`, () => {
  mainPage.load();
})

And(`location is set to San Francisco`, () => {
  mainPage.setMapLocation('San Francisco')
})

When('the page loads', () => {
  mainPage.waitUntilLoaded();
})

Then('I should see the map of San Francisco with at least one spot displayed', () => {
  let city = mainPage.getCurrentCityOnMap();
  expect(city).to.eq('Toronto');
  
  let spots = mainPage.getCurrentStudySpotsInViewOnMap();
  expect(spots.its.length).to.be.greaterThan(0);
})
    
