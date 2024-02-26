document
  .getElementById("signupForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const fullname = document.getElementById("Fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    const response = await fetch("http://localhost:3000/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, password, role }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      document.getElementById("errorMessage").textContent = errorMessage;
    } else {
      if(role =="parent"){
        window.location.href = "parent.html";
      }else if(role =="children"){
        window.location.href = "list-of-expenses.html";
      }
    }
  });
