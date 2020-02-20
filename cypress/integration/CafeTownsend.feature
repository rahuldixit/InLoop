Feature: Cafe Townsend

  #Tests chained into one test to reduce execution time. Separate tests will cause execution time to bloat up in CI runs.
  #The size of test allows for chained crud operations without multiple logins and recreation of user records.
  Scenario: CRUD Operations on Cafe Townsend
    Given I login
    When I create new profile
    Then the correct number of entries is displayed after: "create"
    Then profile is updated correctly 
    When I edit the new profile
    Then the correct number of entries is displayed after: "edit"     
    Then profile is updated correctly    
    When I edit and delete the new profile
    Then the correct number of entries is displayed after: "edit and delete"
    When I create new profile
    Then the correct number of entries is displayed after: "create"  
    When I delete the new profile
    Then the correct number of entries is displayed after: "delete"   
    When I logout
    Then I logout correctly
    