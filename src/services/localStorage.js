const get = (key) => {
  const data = localStorage.getItem(key);
  if (data === null) {
  } else {
    return JSON.parse(data);
  }
};
const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const objToExport = {
  get: get,
  set: set,
};

export default objToExport;
