Feature:  View all study spots 

  I want to see study spots
  
  Scenario: View all study spots in Toronto by default
    Given I'm on the main page
    And location is disabled
    When the page loads
    Then I should see the map of Toronto with at least one spot displayed

  Scenario: View spots based on my location
    Given I'm on the main page
    And location is set to San Francisco
    When the page loads 
    Then I should see the map of San Francisco with at least one spot displayed