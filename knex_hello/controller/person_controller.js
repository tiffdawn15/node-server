const person_service = require("../service/person_service");

class PersonController {
    // Don't have data layer in your controller. Put it in a service layer
  async createPerson(req, res) {
    try {
      const id = await person_service.createPerson(req.body);
      res.status(201).json(id); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

module.exports = new PersonController();
