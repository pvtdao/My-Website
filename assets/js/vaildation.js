function validEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

function sendMail(fromEmail, fromName, toName, message) {
  //Khi send mail thì khởi tạo toast
  Toast.init();

  // Mấy params này thì key của obj phải trùng với tên ở trong emailjs template
  var tempParams = {
    from_email: fromEmail,
    from_name: fromName,
    to_name: toName,
    message: message,
  };

  // hàm gửi của emailjs
  emailjs
    .send("service_xq7nrus", "template_65dpjov", tempParams)
    .then((res) => {
      console.log(res);

      // Thành công
      // Khi ấn send mail thì loader quay
      let loader = document.querySelector(".loading-dots");
      // Và body cannot scroll
      var body = document.getElementsByTagName("body");
      var form = document.getElementById("form");

      if (res.status == 200) {
        // Khi thành công thì body scroll được và loader mất
        loader.style.display = "none";
        body[0].classList.remove("can-not-scroll");
        //Đồng thời hiện toast lên
        Toast.show("I got your message!", "success");

        form.reset();
      }
    })
    .catch(() => {
      //Thất bại
      let loader = document.querySelector(".loading-dots");
      var body = document.getElementsByTagName("body");

      console.log("false");

      loader.style.display = "none";
      body[0].classList.remove("can-not-scroll");
      Toast.show("Something goes wrong. Try again!", "error");
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

  // Khi ấn send mail thì loader quay
  let loader = document.querySelector(".loading-dots");
  loader.style.display = "flex";

  // Và body cannot scroll
  var body = document.getElementsByTagName("body");
  body[0].classList.add("can-not-scroll");

  sendMail(mail, name, "Neil", message);

  erro_mesage.style.padding = "0 0";
  erro_mesage.innerHTML = "";

  return true;
}
