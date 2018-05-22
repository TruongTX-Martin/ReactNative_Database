import Realm from 'realm';

const Person = 'Person';

const PersonSchema = {
  name: Person,
  properties: {
    name: 'string',
    address: 'string'
  }
};

let repository = new Realm({
  schema: [PersonSchema]
});

let realmService = {
  savePerson: function (person) {
    try {
      repository.write(() => {
        repository.create(Person, person);
      })
    } catch (error) {
      console.log('Save person error:', error);
    }
  },
  getPerson: function () {
    let result;
    try {
      result = repository.objects(Person);
    } catch (error) {
      console.log('Get person error:', error);
    }
    return result;
  }
};

module.exports = realmService;