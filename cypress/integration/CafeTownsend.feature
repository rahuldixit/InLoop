Feature: Cafe Townsend

  #Tests chained into one test to reduce execution time. Separate tests will cause execution time to bloat up in CI runs.
  #The size of test allows for chained crud operations without multiple logins and recreation of user records.
  Scenario: CRUD Operations on Cafe Townsend
    Given I login
    When I create new profile:
    |FirstName  |LastName   |StartDate  |Email                      |
    |Rahul      |Dixit      |today      |rahul.dixit.zero@gmail.com |
    #Then the correct number of entries is displayed    
    #asserts that an additional records is created
    #Then profile is updated correctly    
    When I edit the new profile:
    |FirstName  |LastName   |StartDate  |Email                      |
    |Tom        |Harry      |next week  |tom.harry.zero@gmail.com   |
    #Then profile is updated correctly
    When I edit and delete the new profile
    #Then the correct number of entries is displayed    
    #asserts that an additional records is deleted
    #Then profile is updated correctly
    When I create new profile:
    |FirstName  |LastName   |StartDate  |Email                      |
    |Rahul      |Dixit      |today      |rahul.dixit.zero@gmail.com |
    #Then the correct number of entries is displayed    
    #asserts that an additional records is created
    When I delete the new profile
    #Then the correct number of entries is displayed    
    #asserts that an additional records is deleted
    When I logout
    Then I logout correctly