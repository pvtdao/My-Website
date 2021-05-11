function validEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

function sendMail(fromEmail, fromName, toName, message) {
  Toast.init();

  var tempParams = {
    from_email: fromEmail,
    from_name: fromName,
    to_name: toName,
    message: message,
  };

  emailjs
    .send("service_xq7nrus", "template_65dpjov", tempParams)
    .then((res) => {
      console.log(res.status);

      if (res.status == 200) {
        Toast.show("I got your message!", "success");
      } else {
        Toast.show("Something goes wrong. Try again!", "error");
      }
    });
}

function validation(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var mail = document.getElementById("mail").value;
  var message = document.getElementById("message").value;
  var erro_mesage = document.querySelector(".contact__form-error");
  var text;

  if (name.length == 0) {
    erro_mesage.style.padding = "10px 0";

    text = "Your name please!";
    erro_mesage.innerHTML = text;

    return false;
  }
  if (mail.length != 0) {
    if (!validEmail(mail)) {
      erro_mesage.style.padding = "10px 0";

      text = "Your email is not valid!";
      erro_mesage.innerHTML = text;

      return false;
    }
  } else {
    erro_mesage.style.padding = "10px 0";

    text = "Your email please!";
    erro_mesage.innerHTML = text;

    return false;
  }

  if (message.length == 0) {
    erro_mesage.style.padding = "10px 0";

    text = "Say something please!";
    erro_mesage.innerHTML = text;

    return false;
  }

  var form = document.getElementById("form");

  sendMail(mail, name, "Neil", message);

  form.reset();
  erro_mesage.style.padding = "0 0";
  erro_mesage.innerHTML = "";

  return true;
}
