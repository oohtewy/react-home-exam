import loggingCss from "../Components/logging.css";

const loginName = document.querySelector("#login-name");
const loginPass = document.querySelector("#login-pass");
const regName = document.querySelector("#reg-name");
const regPass = document.querySelector("#reg-pass");
const regConf = document.querySelector("#reg-conf");

const loginBtn = document.querySelector(".login-div button");
const regBtn = document.querySelector(".register-div button");

let users = localStorage.getItem("users") || "[]";
users = JSON.parse(users);
let alertEl = document.querySelector(".alert b");

function createUser() {
  if (regPass.value != regConf.value) {
    alertEl.innerHTML = "Password does not match";
    alertEl.style.color = "red";
    setAlert();
    return;
  }

  const userName = regName.value;
  const userPass = regPass.value;
  let user = {
    name: userName,
    password: userPass,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  alertEl.innerHTML = `User ${regName.value} has been created`;
  alertEl.style.color = "green";
  setAlert();

  regPass.value = "";
  regName.value = "";
}
function setAlert() {
  alertEl.style.display = "block";
  alertEl.style.textAlign = "center";
  alertEl.style.margin = "0 auto";
  alertEl.style.fontFamily = "sans-serif";
  alertEl.style.borderRadius = " 10px";

  setTimeout(() => {
    alertEl.style.display = "none";
  }, 3000);
}

function logIn() {
  const clientName = loginName.value;
  const clientPass = loginPass.value;

  if (!userExists(clientName, clientPass)) {
    alertEl.innerHTML = `User does not exist or password is incorrect`;
    alertEl.style.color = "white";
    alertEl.style.backgroundColor = "#dc3545";
  } else {
    alertEl.innerHTML = `${clientName} succesfully logged in`;
    alertEl.style.color = "white";
    alertEl.style.backgroundColor = "#28a745";
  }
  setAlert();
}

function userExists(clientName, clientPass) {
  return users.find(
    (user) => user.name == clientName && user.password == clientPass
  );
}

function Logging() {
  return (
    <div style={loggingCss}>
      <h1></h1>
      <div class="alert">
        <b></b>
      </div>
      <div class="main">
        <div class="login-div">
          <input id="login-name" type="text" placeholder="Name" />
          <input id="login-pass" type="password" placeholder="Password" />
          <hr />
          <button onclick="logIn()">Login</button>
        </div>
        <div class="register-div">
          <input id="reg-name" type="text" placeholder="Name" />
          <input id="reg-pass" type="password" placeholder="Confirm password" />
          <input id="reg-conf" type="password" placeholder="Password" />
          <hr />
          <button onclick="createUser()">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Logging;
