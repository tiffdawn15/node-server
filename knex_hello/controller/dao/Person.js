const db = require("../db/db");

class PersonDAO {
  async createPerson(first_name, last_name, email) {
    const[id] = await db("person")
      .insert({
        first_name: first_name,
        last_name: last_name,
        email,
      })
      .returning("id");

      return id;
  }
}
