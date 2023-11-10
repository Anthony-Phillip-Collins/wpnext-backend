const path = require('path');
const mysqldump = require('mysqldump');

const getDate = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const time = d.getTime();
  return `${year}-${month}-${day}-${time}`;
};

mysqldump({
  connection: {
    host: '127.0.0.1',
    user: 'wordpress',
    password: 'wordpress',
    database: 'wordpress',
  },
  dumpToFile: path.join(__dirname, `${getDate()}.sql`),
});
