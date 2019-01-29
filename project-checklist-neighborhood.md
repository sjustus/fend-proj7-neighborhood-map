⬥ Project 7 —— Neighborhood Map - React

Checked Box: [x]

╭── <Dev Strategy>
[x]  -Obtain Google Maps API Key
[x]  -Add a full-screen map to your page using the Google Maps API
[x]  -Write the code required to display map markers identifying at least 5 locations
[x]    -Those locations should be displayed by default when page is loaded
[x]  -Implement a list view of the set of locations you have defined
[]  -Provide a filter option (e.g. text field or dropdown menu) that uses an input to filter both
  [x]  -The list view
  []  -The map markers
[x]  -Add functionality using third-party APIs to provide information when a map marker or list view entry is clicked
[x]  -Be sure that all application components render on-screen in a responsive manner

╭── <How to Approach Complex Projects>
[x]  -Make sure you clearly  understand the requirements and make note of anything you're not sure how to implement
      -Things I need to research:
        -How to set up Google map, add markers and infoWindow
        -How to use Google Maps with React
        -How to animate markers
        -How to use Create-React App
        -Learn about key restrictions
[x]  -Draw a diagram of what your completed application might look like
[x]    -You may need a couple versions, depending on the behavior you're trying to implement
[x]  -Break your diagram into a structure of React components
[x]  -Research a few candidates for third-part API integrations and choose one that makes sense for the project
        -Yelp
[x]  -Obtain developer credentials for Google Maps (and your chosen API, if required)
[x]  -Test the API and build a static Google Map.
[x]    -Make sure to understand how to query your chosen API and successfully receive JSON data from the response
[x]    -Make sure to understand how the Google Maps JavaScript API works and be able to initialize a map and add map markers without React

╭── <Start Building>
  -Commit early, commit often.
  -Build one thing at a time. Make sure it works, then build the next one.
  -First make it work. Then make it better. Once you get it working then you can focus on improving the code quality

╭── <Rubric>
[x] Interface Design
[x]    Responsiveness: All app components render on-screen in a responsive manner
[x]    Usability: Usable across modern desktop, tablet, and phone browsers

[]  Application Functionality
[]    Location Filter
[]      Includes text field or input that filers map markers and list items to matching locations
[]        Filter function runs error free
[]    List View
[x]        A list-view of location names is provided and displays all locations and by default
[x]        Displays the filtered subset of locations when filter is applied
[x]        Clicking a location on the list displays unique information about the location - [Use infoWindow]
[]          Clicking on a location also animates its associated map marker (e.g. bouncing or changing color) - [Review how to do this in videos]
[]        List functionality is responsive and runs error free
[]    Map and Markers
[x]      Map displays all location markers by default
[]        Map also displays the filter subset of location markers when filter is applied - [Learn how to filter map markers]
[x]        Clicking a marker displays unique information about a location (modal, separate dive, inside an info window)
[]      Any additional functionality provided in the app runs error-free

[]  Asynchronous Data Usage
[x]    Asynchronous API Requests
[x]      Application utilizes the Google Maps API
[x]      All utilizes at least one other non-Google third party API
[]    Error Handling
[x]      Data requests that fail are handled gracefully using common fallback techniques -- meaning user isn't left wondering why a component isn't working
[]      There is a visual indication on the page that it didn't load

[]  Documentation
[]    README
[]      A README me file is includes detailing all steps required to run the project
[]    Comments
[]      Comments are present and effectively explain longer code procedures

[]  Location Details Functionality
[]    Additional Location Data
[x]      Functionality providing additional data about a location is provided and sourced from a third party API (in the marker's infoWindow or a sidebar, list view, modal)
[]      Provide attribution for the source of additional data

[]  Error free
[]    Application runs without console errors

[x]  Usability
[x]    Functionality is presented in a usable and responsive manner

[]  Accessibility
[]    Focus
[]      Focus is appropriately manages allowing users to noticeably tab through each of the important elements of the page
[]      Modal or interstitial windows appropriately lock focus
[]    Site elements are defined semantically - [See how to do this in React]
[]      Elements on the page use appropriate semantic elements
[]      For those elements in which a semantic element is not available, appropriate ARIA roles are defines
[]  Accessible Images
[]    All content-relates images include appropriate alt text that clearly describes the content of the image

[]  Offline Use
[]    Service Worker
[]      When available in the browser, the site uses a service worker to cache responses to request for site assets
[]      Visited pages are rendered when there is no network access

[]  Application Architecture
[]    Proper Use of React
[]      React code follows a reasonable component structure
[]      State control is manage appropriately
[]        Event handlers are passed as props to child components
[]        State is manages by parent component functions when appropriate
[x]      There are at least 5 locations in the model (hard-coded or retrieved from a data API)
[]      There no errors
[]      There are no warnings that resulted from no following the best practices listed in the documentation, such as using key for list items
[]      All code is functional and formatted properly
