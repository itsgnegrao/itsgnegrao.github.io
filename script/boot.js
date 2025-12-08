

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

function showWelcomeModal() {
    const popup = document.createElement('div');
    popup.className = 'terminal-popup';
    popup.innerHTML = `<div class='popup-content' style='display: flex; flex-direction: column; align-items: center; width: 50vw;'>
        <p>Este ambiente funciona como meu portfólio/currículo interativo, e o terminal exibido é apenas uma simulação.
        <br/>Utilize os comandos disponíveis para navegar pela interface em linha de comando.</p>
        <p>Bem Vindo!</p>
        <button class='popup-close'>OK</button>
    </div>`;
    document.body.appendChild(popup);
    document.querySelector('.popup-close').onclick = () => {
        popup.remove();
        startBoot();
    };
}

function startBoot() {
    bootScreen.style.display = 'block';
    loadAscii();
    setTimeout(printBootLine, 1000);
}

window.addEventListener('load', () => {
    showWelcomeModal();
});