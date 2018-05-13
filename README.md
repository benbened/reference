# Reference Project

##task
Completing 2 of 4 KATAS in a TDD-way in javascript

* http://ccd-school.de/coding-dojo/function-katas/from-roman-numerals/
* http://ccd-school.de/coding-dojo/application-katas/bankocr/ 
* http://ccd-school.de/coding-dojo/function-katas/russische-bauernmultiplikation/
* http://ccd-school.de/coding-dojo/application-katas/loc-count/

I chose the first two Katas.

##important points of code
####banking-OCR 
https://bitbucket.org/benbened/reference/src/60a8b5e301848d1b3ede3cbb4af412fa0540cb0e/_src/js/modules/bankOCR.js?at=master&fileviewer=file-view-default
####banking-OCR test
https://bitbucket.org/benbened/reference/src/60a8b5e301848d1b3ede3cbb4af412fa0540cb0e/_src/tests/ocr-mocha-cli.js?at=master&fileviewer=file-view-default
####roman numerals
https://bitbucket.org/benbened/reference/src/60a8b5e301848d1b3ede3cbb4af412fa0540cb0e/_src/js/modules/roman_numerals.js?at=master&fileviewer=file-view-default
####roman numerals test
https://bitbucket.org/benbened/reference/src/60a8b5e301848d1b3ede3cbb4af412fa0540cb0e/_src/tests/roman_numerals-mocha-cli.js?at=master&fileviewer=file-view-default
####simple frontend
https://bitbucket.org/benbened/reference/src/60a8b5e301848d1b3ede3cbb4af412fa0540cb0e/app/index.html?at=master&fileviewer=file-view-default


##dependencies
for the full frontend-stack:
####Node.js und NPM
[https://nodejs.org/en/]
####Rubyinstaller 
[https://rubyinstaller.org/downloads/]
####Jekyll
a ruby bundler used by bootstrap
 
`gem install jekyll bundler`
####Grunt
taskrunner for tests and frontend 

`npm install -g grunt-cli`
####SASS
CSS-preprocessor using ruby

`npm install -g sass`
####http-server
a lightweight http-server for grunt and tests

`npm install http-server -g`
####mocha
a test-framework

`$ npm install --global mocha`
####npm-dependencies
installing dependencies as specified in package.json

`npm install`

##important Commands
`grunt watch`

starts different watchers looking for changes in js/img/scss/tests and kicking off appropriate taks like bundling, minifing, testing, copying,
                                                                                                                                            includes **grunt watch:test** 

`grunt watch:test`

starts a watcher looking for changes in modules or tests and starting tests automatically

`grunt connect:server`

starts a basic server for the Webfrontend. opens up app/index.html

`mocha --reporter spec _src/tests/*.js`

single testrun

`mocha --reporter nyan _src/tests/*.js`

single testrun with motivating Nyan-cat.
