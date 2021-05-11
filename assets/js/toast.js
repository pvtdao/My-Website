const Toast = {
  init() {
    this.hideTimeout = null;

    //Create toast div
    this.toast = document.createElement("div");
    this.toast.className = "toast";
    document.body.appendChild(this.toast);

    //Create icon in a toast
    this.icon = document.createElement("i");
    this.icon.className = "toast__icon";
    this.toast.appendChild(this.icon);

    this.content = document.createElement("span");
    this.toast.appendChild(this.content);
  },
  show(message, state) {
    clearTimeout(this.hideTimeout);

    this.toast.className = "toast toast--visible";

    if (state) {
      this.toast.classList.add(`toast--${state}`);
      this.content.innerHTML = message;

      if ((state = "success")) {
        this.icon.classList.add("fa", "fa-check-circle");
      } else {
        this.icon.classList.add("fa", "fa-times-circle");
      }
    }

    this.hideTimeout = setTimeout(() => {
      this.toast.classList.remove("toast--visible");
    }, 3000);
  },
};
