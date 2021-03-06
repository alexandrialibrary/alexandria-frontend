# Alexandria Frontend
This is a test repo that may potentially be the frontend of [Alexandria](https://github.com/alexandrialibrary/Alexandria).

[![Join the chat at https://gitter.im/alexandrialibrary/Alexandria](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/alexandrialibrary/Alexandria?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Codacy Badge](https://www.codacy.com/project/badge/b62c23efe3204e4d81532806eef62374)](https://www.codacy.com/app/alexandria/alexandria-frontend)

##Usage
To test the site locally you will need a simple server. Conveniently, there is a Node.js project called [Simple Server](https://github.com/balupton/simple-server) that does just this.

**Install Simple Server**
```shell
$ npm install -g simple-server
```

**Serve the current directory at port 3000**
```shell
$ simple-server ./ 3000
```
This will make the project available at [`http://localhost:3000/index.html`](http://localhost:3000/index.html).

##Gulp
[Gulp](http://gulpjs.com/) will automatically compile all of the SASS and Coffeescript to CSS and Javascript when files are modified.

```shell
$ npm install -g gulp
$ npm install
```
Once Gulp is installed, run `gulp watch`. Gulp will now watch for changes. This only has to be done once.
