window.addEventListener('DOMContentLoaded', function() {
    setupCopyButtons();
});

const setupCopyButtons = function() {
    const buttons = document.querySelectorAll('[data-copy-text]');
    
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