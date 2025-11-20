

const bootOutput = document.getElementById('boot-output');
const bootPrompt = document.getElementById('boot-prompt');
const bootScreen = document.getElementById('boot-screen');
const terminalScreen = document.getElementById('terminal-screen');


terminalScreen.classList.add('hidden');

let bootLines = [
    'Initializing negrao.dev Terminal...',
    'Loading kernel modules...',
    'Mounting file systems...',
    'Starting services...',
    'System ready.'
];

let currentLine = 0;

function loadAscii() {
    
    const ascii = ` _        _______  _______  _______  _______  _______     ______   _______          
( (    /|(  ____ \\(  ____ \\(  ____ )(  ___  )(  ___  )   (  __  \\ (  ____ \\|\\     /|
|  \\  ( || (    \\/| (    \\/| (    )|| (   ) || (   ) |   | (  \\  )| (    \\/| )   ( |
|   \\ | || (__    | |      | (____)|| (___) || |   | |   | |   ) || (__    | |   | |
| (\\ \\) ||  __)   | | ____ |     __)|  ___  || |   | |   | |   | ||  __)   ( (   ) )
| | \\   || (      | | \\_  )| (\\ (   | (   ) || |   | |   | |   ) || (       \\ \\_/ / 
| )  \\  || (____/\\| (___) || ) \\ \\__| )   ( || (___) | _ | (__/  )| (____/\\  \\   /  
|/    )_)(_______/(_______)|/   \\__/|/     \\|(_______)(_)(______/ (_______/   \\_/   
                                                                                    
`;
    bootOutput.textContent = ascii + '\n\n';
}

function printBootLine() {
    if (currentLine < bootLines.length) {
        bootOutput.textContent += bootLines[currentLine] + '\n';
        currentLine++;
        setTimeout(printBootLine, 500);
    } else {
        bootPrompt.style.display = 'block';
        document.addEventListener('keydown', handleBootEnter);
    }
}

function handleBootEnter(event) {
    if (event.key === 'Enter') {
        bootScreen.classList.add('hidden');
        terminalScreen.classList.remove('hidden');
        document.removeEventListener('keydown', handleBootEnter);
        initTerminal();
    }
}

window.addEventListener('load', () => {
    loadAscii();
    setTimeout(printBootLine, 1000);
});