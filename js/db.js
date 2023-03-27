/*initiates my database array*/
initDB();

/*assigns value of 'profile to const profile*/
const profile = JSON.parse(localStorage.getItem('profile'));

/*function to assign value of profile to const db. checks if db is false, if so create db array*/
function initDB(){
  let db = JSON.parse(localStorage.getItem('profile'));
  (!db)? localStorage.setItem('profile', JSON.stringify([])):null;
}

/*stores User construct to the profile array*/
function storeObjData(obj){
  profile.push(obj);
  localStorage.setItem('profile', JSON.stringify(profile));
}

/*initiates my session array*/
userSession();

/*assigns value of 'validInfo to let validInfo*/
let validInfo = JSON.parse(sessionStorage.getItem('validInfo'));

/*function to assign value of validInfo to let sessionDB. checks if sessionDB is false, if so create sessionDB array*/
function userSession(){
  let sessionDB = JSON.parse(sessionStorage.getItem('validInfo'));
  (!sessionDB)? sessionStorage.setItem('validInfo', JSON.stringify([])):null;
}  

/*stores User construct to the session array*/
function storeSessionInfo(obj){
  validInfo = [obj];
  sessionStorage.setItem('validInfo', JSON.stringify(validInfo));
}
