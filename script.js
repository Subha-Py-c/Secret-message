const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenSections = document.querySelectorAll('.hidden');
hiddenSections.forEach((section) => observer.observe(section));

// Function to encode a message
function encodeMessage() {
    var message = document.getElementById('encodeInput').value;
    if (message.trim() !== "") {
        var encodedMessage = btoa(message);
        document.getElementById('encodedMessage').innerText = encodedMessage;
    } else {
        alert("Please enter a message to encode.");
    }
}

// Function to decode an encoded message
function decodeMessage() {
    var encodedMessage = document.getElementById('decodeInput').value;
    if (encodedMessage.trim() !== "") {
        var decodedMessage = atob(encodedMessage);
        document.getElementById('decodedMessage').innerText = decodedMessage;
    } else {
        alert("Please enter an encoded message to decode.");
    }
}

// Function to copy encoded message to clipboard
function copyEncodedMessage() {
    var encodedMessageContainer = document.getElementById('encodedMessage');
    var encodedMessage = encodedMessageContainer.innerText.trim();

    copyToClipboard(encodedMessage);
}

// Function to copy decoded message to clipboard
function copyDecodedMessage() {
    var decodedMessageContainer = document.getElementById('decodedMessage');
    var decodedMessage = decodedMessageContainer.innerText.trim();

    copyToClipboard(decodedMessage);
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            alert("Message copied to clipboard!");
        }, function(err) {
            console.error('Could not copy text: ', err);
            alert("Failed to copy message to clipboard!");
        });
    } else {
        // Fallback for browsers that don't support Clipboard API
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("Message copied to clipboard!");
    }
}
