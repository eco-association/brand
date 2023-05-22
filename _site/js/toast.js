

class Toast {
    constructor(text) {
        this.toast = document.createElement("div");
        this.toastContainer = document.querySelector(".toast-container");
        this.toast.classList.add("toast")
        this.toast.append(text);

        this.showToast();
    }

    showToast() {
        this.toastContainer.appendChild(this.toast)
        var that = this;

        setTimeout(function() {
            that.toast.classList.add("is-visible")
        }, 1)

        setTimeout(function() {
            that.toast.classList.remove("is-visible");

            setTimeout(function() {
                that.toastContainer.removeChild(that.toast);
            }, 200)
        }, 5000)
    }
}