const genUid = (size = 16) => {
  let str = '';

  while (str.length < size) {
    str += Math.random().toString(36).slice(2);
  }

  return str.slice(0, size);
};

export default genUid;

