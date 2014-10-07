# ABC app 

This is a little app I'm buiding to help my kids learn their ABCs

![Screenshot of my ABC app](http://imgur.com/EwRsEsz)

##Install
```bash
git clone https://github.com/kevintame/abc.git
```
## Dependencies
Make sure you have all dependencies installed:

Node.js (includeing npm)
```bash
brew install node
```
ruby and the Compass gem
```bash
gem install compass
```
Yeoman
```bash
npm install -g yo
```
Grunt
```bash
npm install -g grunt-cli
```
Bower
```bash
npm install -g grunt-cli
```
## Update project
Once you have add all of the depencenies you need to add the node modules and the bower commonents. Since the repo already has  package.json file and the .bowerrc file all you need to do is run the following commands. 

```bash
npm install
```
```bash
bower update
```
##Build and Preview

Run `grunt` for building and `grunt serve` for preview

I'm using the angular generator from Yeoman to scafold out this app. If you need more info about adding routes, directives, filters, and any other info visit their [github repo](https://github.com/yeoman/generator-angular) and review the README.md 

## Credits

This app is build using angular.js. Check out their work: [Angular.js](https://angularjs.org/)
I'm using Yeoman to scafold out the app. Check out their work: [Yeoman](http://yeoman.io/)
