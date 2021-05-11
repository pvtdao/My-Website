const Toast = {
  init() {
    // Thời gian để toast tự hide
    this.hideTimeout = null;

    //Create toast div
    this.toast = document.createElement("div");
    this.toast.className = "toast";
    document.body.appendChild(this.toast);

    //Create icon in a toast
    this.icon = document.createElement("i");
    this.icon.className = "toast__icon";
    this.toast.appendChild(this.icon);

    // Nội dung của toast
    this.content = document.createElement("span");
    this.toast.appendChild(this.content);
  },
  // Hàm show, truyền vào content và status của toast là thành cong hay thất bại
  show(message, state) {
    clearTimeout(this.hideTimeout);

    document.querySelector(".toast").onclick = () => {
      this.toast.classList.remove("toast--visible");
    }

    this.toast.className = "toast toast--visible";

    if (state) {
      this.toast.classList.add(`toast--${state}`);
      this.content.innerHTML = message;

      if (state == "success") {
        this.icon.classList.add("fa", "fa-check-circle");
      } else {
        this.icon.classList.add("fa", "fa-times-circle");
      }
    }

    // Sau 3s thì tự tắt toast
    this.hideTimeout = setTimeout(() => {
      this.toast.classList.remove("toast--visible");
    }, 3000);
  },
};

Toast.init();

function hideToast() {}
