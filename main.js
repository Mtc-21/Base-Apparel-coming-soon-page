 const email = document.querySelector("#email");
    const error = document.querySelector(".error");
    const submit = document.querySelector("#submit");

    const validate = email => {
      return /^[a-z0-9_-]+(\.|[a-z0-9_-])+@[a-z]+(\.[a-z]+$|\.[a-z]+\.[a-z]+$)/ig.test(email)
    }

    const removeAlert = () => {
      email.parentNode.classList.remove("alert");
      error.textContent = "";
      error.classList.add("success");
    }

    const addAlert = () => {
      error.textContent = "Please provide a valid email";
      email.parentNode.classList.add("alert");
      error.classList.remove("success");
    }

    email.addEventListener("keyup", () => {
      if (!email.value) removeAlert();
    });

    email.addEventListener("input", () => {
      validate(email.value) ? removeAlert() : addAlert();
    });

    submit.addEventListener("click", (e) => {
      e.preventDefault();
      if (validate(email.value)) {
        error.textContent="Successfully";
        setTimeout(() => {
          error.textContent = ""
          email.value = "";
        }, 500);
      } else {
        error.classList.remove("success");
        addAlert();
      }
    });
