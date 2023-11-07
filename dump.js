// import mysqldump from 'mysqldump';
const mysqldump = require('mysqldump');

const getDate = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const time = d.getTime();
  return `${year}-${month}-${day}-${time}`;
};

// dump the result straight to a file
mysqldump({
  connection: {
    host: '127.0.0.1',
    user: 'wordpress',
    password: 'wordpress',
    database: 'wordpress',
  },
  dumpToFile: `./dump/wpnext.dev.db.${getDate()}.sql`,
});
