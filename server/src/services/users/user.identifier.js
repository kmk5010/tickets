module.exports = async (context) => {
  const { data } = context;
  data.identifier = Buffer.from(`${data.username}@${data.roles}`).toString('base64');
};