

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
    const bannerLines = ascii.split('\n');
    bootOutput.innerHTML = bannerLines.map(line => `<div class='boot-banner-line'>${line}</div>`).join('') + '<br>';
    bootOutput.classList.add('boot-ascii');
}

function printBootLine() {
    if (currentLine < bootLines.length) {
        const lineDiv = document.createElement('div');
        lineDiv.className = 'boot-normal-line';
        lineDiv.textContent = bootLines[currentLine];
        bootOutput.appendChild(lineDiv);
        currentLine++;
        setTimeout(printBootLine, 500);
    } else {
        bootPrompt.style.display = 'block';
        document.addEventListener('keydown', handleBootEnter);
        bootScreen.addEventListener('click', handleBootEnter);
    }
}

function handleBootEnter(event) {
    if (event.key === 'Enter' || event.type === 'click') {
        bootScreen.classList.add('hidden');
        terminalScreen.classList.remove('hidden');
        document.removeEventListener('keydown', handleBootEnter);
        bootScreen.removeEventListener('click', handleBootEnter);
        initTerminal();
    }
}

window.addEventListener('load', () => {
    loadAscii();
    setTimeout(printBootLine, 1000);
});