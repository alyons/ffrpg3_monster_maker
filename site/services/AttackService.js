import firebase from '../firebase';

const db = firebase.ref('attacks');

const getAll = () => {
  return db;
}

export default {
  getAll
};
