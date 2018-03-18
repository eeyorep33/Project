// Update with your config settings.

module.exports = {
  client:'pg',
  connection:process.env.DATABASE_URL ||{
    user:'postgres',
    password:'fergip33',
    database:'assignment'
  }
    
    
    
  
  };
