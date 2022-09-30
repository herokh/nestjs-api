let d = new Date();
let filename = `${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}.log`;
module.exports = {
  filter(data) {
    return true;
  },
  output: {
    path: filename, // name of file
    options: {
      path: '/logs', // path to write files to
      size: '10M', // max file size
      rotate: 5, // keep 5 rotated logs
    },
  },
};
