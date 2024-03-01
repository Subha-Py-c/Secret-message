function showHomeScreen() {
    hideAllScreens();
    document.getElementById('initialScreen').style.display = 'block';
}

function showEncodeDecodeOptions() {
    hideAllScreens();
    document.getElementById('encodeDecodeScreen').style.display = 'block';
}

function showEncodeScreen() {
    hideAllScreens();
    document.getElementById('encodeScreen').style.display = 'block';
}

function showDecodeScreen() {
    hideAllScreens();
    document.getElementById('decodeScreen').style.display = 'block';
}

function encodeMessage() {
    var message = document.getElementById('encodeInput').value;
    if (message.trim() !== "") {
        var encodedMessage = btoa(message);
        document.getElementById('encodedMessage').innerText = 'Encoded Message: ' + encodedMessage;
    } else {
        alert("Please enter a message to encode.");
    }
}

function decodeMessage() {
    var encodedMessage = document.getElementById('decodeInput').value;
    if (encodedMessage.trim() !== "") {
        var decodedMessage = atob(encodedMessage);
        document.getElementById('decodedMessage').innerText = 'Decoded Message: ' + decodedMessage;
    } else {
        alert("Please enter an encoded message to decode.");
    }
}

function hideAllScreens() {
    var screens = document.querySelectorAll('.screen');
    screens.forEach(function (screen) {
        screen.style.display = 'none';
    });
}

function goBack() {
    var currentScreen = getCurrentScreen();
    if (currentScreen === 'initialScreen') {
        // Do nothing or handle as needed for the initial screen
    } else {
        // Hide the current screen
        hideScreen(currentScreen);

        // Show the previous screen
        var previousScreen = getPreviousScreen(currentScreen);
        showScreen(previousScreen);
    }
}

// Function to get the current visible screen
function getCurrentScreen() {
    var screens = document.querySelectorAll('.screen');
    for (var i = 0; i < screens.length; i++) {
        if (screens[i].style.display === 'block') {
            return screens[i].id;
        }
    }
    return null;
}

// Function to hide a screen
function hideScreen(screenId) {
    var screen = document.getElementById(screenId);
    if (screen) {
        screen.style.display = 'none';
    }
}

// Function to show a screen
function showScreen(screenId) {
    var screen = document.getElementById(screenId);
    if (screen) {
        screen.style.display = 'block';
    }
}

// Function to get the previous screen
function getPreviousScreen(currentScreen) {
    switch (currentScreen) {
        case 'encodeScreen':
        case 'decodeScreen':
            return 'encodeDecodeScreen';
        case 'encodeDecodeScreen':
            return 'initialScreen';
        default:
            return null;
    }
}
