# sydney-temperature
The program is using Papaparse CSV library for parsing the CSV file

## Specs during setup
     `VS Code 1.44.2`
     `node 10.20.1`
     `npm 6.14.11`
     

## Test execution
1. Dependencies `npm install`
3. To run program locally, execute the following from the /src:

   -  `npm install http-server -g`
   -  `http-server`  
   
4. Go to testing-lowtemp-finder/cypress.json and replace the baseURL with url from the 'http-server', for example: http://127.0.0.1:8080/
5. To run the test on command line, go to the testing-lowtemp-finder on terminal and execute: npx cypress run
6. To open cypress and run the test, go to the testing-lowtemp-finder on terminal and execute: npx cypress open

