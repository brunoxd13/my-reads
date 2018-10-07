[![Heroku](https://heroku-badge.herokuapp.com/?app=my-reads-bruno)]

<p align="center">
  <img src="https://raw.githubusercontent.com/brunoxd13/my-reads/master/public/favicon.ico" alt="logo" width="100" />
</p>
<br>

This is the first graduation project for the [React Nanodegree Program](https://br.udacity.com/course/react-nanodegree--nd019) from Udacity. 

My reads is a project to manage the reading of books between three types, being: want read, read and read. 

I opted to develop the project to create my layout from scratch and not use the layout provided by udacity.


## Demo
<a href="http://my-reads-bruno.herokuapp.com"><strong>🎮 Play with the demo</strong></a>

## Getting Started

### Prerequisites

The project can be built with npm or yarn, so choose one of the approach bellow in case you don't have any installed on your system. 

### Installing
```
git clone https://github.com/brunoxd13/my-reads.git
cd my-reads
```

Then install dependencies and run:

```
yarn install
yarn start
```

or 

```
npm install
npm run start
```
### Testing
To test the project in development you can use this comand:
```
npm test
```

To test coverage of tests in project you can use this comand:
```
npm test -- --coverage
```
The expect result is like this:
```
----------------------------|----------|----------|----------|----------|-------------------|
File                        |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
----------------------------|----------|----------|----------|----------|-------------------|
All files                   |    45.53 |    36.17 |    46.43 |    56.38 |                   |
 src                        |     7.84 |        0 |        0 |    15.38 |                   |
  index.js                  |        0 |        0 |        0 |        0 |    1,2,3,4,5,7,14 |
  registerServiceWorker.js  |        0 |        0 |        0 |        0 |... 36,137,138,139 |
  setupTests.js             |      100 |      100 |      100 |      100 |                   |
 src/components/book        |       50 |    83.33 |    33.33 |       50 |                   |
  index.js                  |       50 |    83.33 |    33.33 |       50 | 19,20,22,26,27,29 |
 src/components/bookShelf   |       75 |       75 |    66.67 |       75 |                   |
  index.js                  |       75 |       75 |    66.67 |       75 |                21 |
 src/components/bookShelves |      100 |      100 |      100 |      100 |                   |
  index.js                  |      100 |      100 |      100 |      100 |                   |
 src/components/searchInput |      100 |      100 |      100 |      100 |                   |
  index.js                  |      100 |      100 |      100 |      100 |                   |
 src/pages/main             |       68 |       75 |    64.71 |    69.57 |                   |
  index.js                  |       68 |       75 |    64.71 |    69.57 |... 33,53,56,62,63 |
 src/service                |       75 |       50 |    54.55 |       75 |                   |
  BooksAPI.js               |       75 |       50 |    54.55 |       75 |    16,17,18,26,33 |
----------------------------|----------|----------|----------|----------|-------------------|
```

## Packages
Packages used for the construction of the project:
* [Ant Design](https://www.npmjs.com/package/antd)
* [React Router](https://www.npmjs.com/package/react-router-dom)
* [Prop Types](https://www.npmjs.com/package/prop-types)
* [Babel Plugin Import](https://www.npmjs.com/package/babel-plugin-import)
* [React App Rewire Less](https://www.npmjs.com/package/react-app-rewire-less)
* [React App Rewired](https://www.npmjs.com/package/react-app-rewired)

Packages used for the development of the project:
* [Jest](https://www.npmjs.com/package/jest)
* [Enzyme](https://www.npmjs.com/package/enzyme)
* [Jest Fetch Mock](https://www.npmjs.com/package/jest-fetch-mock)


## Author
[Bruno Russi Lautenschlager](https://github.com/brunoxd13)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
