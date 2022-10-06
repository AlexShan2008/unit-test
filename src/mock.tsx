import axios from "axios";

export function exec(callback) {
  callback("123");
  callback("456");
}

export function createInstance(ClassName) {
  return new ClassName();
}

export function getUsers() {
  return axios.get("/api/users");
}

export function delay(callback, delay) {
  setTimeout(() => {
    callback(delay);
  }, delay);
}
