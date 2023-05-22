window.addEventListener('DOMContentLoaded', function() {
    setupCopyButtons();
});

const setupCopyButtons = function() {
    const buttons = document.querySelectorAll('[data-copy-text');
    
    buttons.forEach(function(button) {
        const text = button.dataset.copyText;
        button.addEventListener("click", function(e) {
            e.preventDefault();
            copyToClipboard(text, function() {
                new Toast("Copied to clipboard")
            })
        })

        return false;
    })
}
function copyToClipboard(text, successCallback) {
    if (window.clipboardData && window.clipboardData.setData) {
        // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
        return window.clipboardData.setData("Text", text);

    }
    else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in Microsoft Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        }
        catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return prompt("Copy to clipboard: Ctrl+C, Enter", text);
        }
        finally {
            document.body.removeChild(textarea);
            if (successCallback) {
                successCallback();
            }
        }
    }
}


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