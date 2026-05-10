// SIGNUP

const signupForm = document.getElementById("signupForm");

if (signupForm) {

  signupForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const fullName =
      document.getElementById("fullName").value;

    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    const confirmPassword =
      document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

      alert("Passwords do not match!");

      return;

    }

    const userData = {
      name: fullName,
      email: email,
      password: password
    };

    try {

      const response = await apiRequest(
        "/auth/signup",
        "POST",
        userData
      );

      alert("Signup successful!");

      window.location.href = "login.html";

    } catch (error) {

      console.log(error);

    }

  });

}



// LOGIN

const loginForm = document.querySelector("form");

if (loginForm && window.location.pathname.includes("login.html")) {

  loginForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const email =
      document.querySelector('input[type="email"]').value;

    const password =
      document.querySelector('input[type="password"]').value;

    const loginData = {
      email,
      password
    };

    try {

      const response = await apiRequest(
        "/auth/login",
        "POST",
        loginData
      );

      // SAVE TOKEN

      localStorage.setItem(
        "token",
        response.token
      );

      // SAVE USER

      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      alert("Login successful!");

      // Check if user preferences exist, if not redirect to preferences page
      const userPreferences = localStorage.getItem("userPreferences");
      if (!userPreferences) {
        window.location.href = "preferences.html";
      } else {
        window.location.href = "dashboard.html";
      }

    } catch (error) {

      console.log(error);

    }

  });

}



// CHECK USER LOGIN

function checkAuth() {

  const token = localStorage.getItem("token");

  if (!token) {

    window.location.href = "login.html";

  }

}



// LOAD USER NAME

function loadUserData() {

  const user =
    JSON.parse(localStorage.getItem("user"));

  if (user) {

    const userName =
      document.getElementById("userName");

    if (userName) {

      userName.textContent = user.name;

    }

  }

}



// LOGOUT

function logoutUser() {

  localStorage.removeItem("token");

  localStorage.removeItem("user");

  alert("Logged out successfully!");

  window.location.href = "login.html";

}