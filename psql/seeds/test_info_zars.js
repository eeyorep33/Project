
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, make: 'Ford', model: 'F-150', year: 2007, dealer_id: 1 },
        { id: 2, make: 'Honda', model: 'CR-V', year: 2017, dealer_id: 2 },
        { id: 3, make: 'Nissan', model: 'Altima', year: 2010, dealer_id: 3 }
      ]);
    });
};
