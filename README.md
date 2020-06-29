**Description**: API Testing with frisby.js & jest.

**Libraries used for this demo**: Frisby, jest, eslint, jest-html-reporter,faker 

**Pre-req**: Node v11+

**Setup**: 1) clone this repo 2) `Run npm install`

**Structure of test**: All the test (spec.js) dwell in the  __test__  directory.
The _utils_ directory is where the helpers are to help build the request / test and baseUrl definition. 

**How to run test** : Within the terminal run '`npm run test`' - this will kick off the test suite.
Also, good practice is to lint your code via '`npm run lint-me`'

**Viewing the Test Report**: Once the test has finished (pass or fail) -A report is generated in the _reports_/ directory 


**How to run these test via Docker**: Must have docker installl before proceeding.
After docker is already installed. 1) Run "`Docker build -t test-this:latest .`" 2) Run via the docker image tag "`docker run test-this:latest`"


**A few add-ons:** Parallel test execution - jest does it by default without specifying --runInBand, linting with eslint, reporting, gitlab ci/cd 

