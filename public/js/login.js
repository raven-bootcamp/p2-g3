// log user in and go to dashboard

const logUserIn = async (event) => {
  event.preventDefault();

  const getUserData = (form) => {
    const textInputsEls = form.querySelectorAll("input");
    const result = [...textInputsEls].reduce((acc, input) => {
      const key = input.getAttribute("name");
      const value = input.value.trim();
      return value ? { ...acc, [key]: value } : { ...acc };
    }, {});
    return result;
  };

  const form = event.target.closest("form");
  const userData = getUserData(form);

  const response = await fetch(`/api/users/login`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    console.log("Sucessful log in!");
    // document.location.replace("/"); /////  NOT SURE WHERE TO GO
  } else {
    alert("Fail to log in ");
  }
};

document.getElementById("loginForm").addEventListener("submit", logUserIn);