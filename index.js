var _ = require('lodash');

const data1 = [
    {
      "age": 3,
      "name": "Curtis Greene",
      "email": "curtis.greene@zaj.ca",
    },
    {
      "age": 23,
      "name": "Nikki Lowe",
      "email": "nikki.lowe@darwinium.tv",
    },
    {
      "age": 39,
      "name": "Barr Copeland",
      "email": "barr.copeland@nipaz.me",
    },
  ];
  const data2 = [
    {
      "age": 29,
      "name": "Calhoun Woodward",
      "email": "calhoun.woodward@medmex.info",
    },
    {
      "age": 21,
      "name": "Leta Lee",
      "email": "leta.lee@qnekt.com",
    },
    {
      "age": 40,
      "name": "James Dinh",
      "email": "j.dink@erw.com",
    }
  ];

  //task 1

const indexUser = _.findIndex(data1, ["age", 23]);
console.log(indexUser);

  //task 2

const arrayUnion = _.concat(data1, data2)
console.log(arrayUnion.length)

  //task 3

const newArray = _.omit(data1[0], ["age"])
console.log(newArray);

  //task 4

  const cloneArr = Object.assign({}, {
    name: data1[1].name,
    email: data1[1].email,
  });
  console.log(cloneArr);