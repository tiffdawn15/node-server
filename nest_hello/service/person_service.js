const PersonDAO = require("../controller/dao/Person");

class PersonService {
  constructor() {
    this.persons = [];
  }

  addPerson(personDto) {
    const { first_name, last_name, email } = personDto;
    return PersonDAO.addPerson(first_name, last_name, email);
  }

  getPersons() {
    return this.persons;
  }
}

module.exports = new PersonService();
