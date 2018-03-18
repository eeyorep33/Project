
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('dealers').del()
    .then(function () {
      // Inserts seed entries
      return knex('dealers').insert([
        { id: 1, make: 'Ford', city: 'San Diego', state: 'California', zip: '92126', street: 'Aries Rd.' },
        { id: 2, make: 'Honda', city: 'San Antonio', state: 'Texas', zip: '78633', street: 'Potranco' },
        { id: 3, make: 'Nissan', city: 'Houston', state: 'Texas', zip: '77539', street: 'St. Lucia' },
      ]);
    });
};
