export const people = [
  {
    id: "0",
    name: "gilmu",
    age: 23,
    gender: "male"
  },
  {
    id: "1",
    name: "asdf",
    age: 230,
    gender: "male"
  },
  {
    id: "2",
    name: "sdfg",
    age: 33,
    gender: "dfgh"
  },
  {
    id: "3",
    name: "fghj",
    age: 2,
    gender: "female"
  },  
  {
    id: "4",
    name: "ghjk",
    age: 23,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};