Feature: CarNext Search

    Scenario: Make & Model Search
        When user opens base page
        And user selects something in make and model dropdowns
        And user clicks search button
        Then only cars with selected make and model are displayed

    Scenario: Price and Transmission Filters + Sorting
        When user opens cars page
        And I wait for 3 seconds
        And user applies transmission filter
        And user applies price filter
        And I wait for 5 seconds
        # And user applies sorting by price (asc)
        Then correct filters are applied
        # And corrected sorting is applied
