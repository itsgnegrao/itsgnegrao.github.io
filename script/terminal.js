

const terminalOutput = document.getElementById('terminal-output');
window.terminalOutput = terminalOutput;
const terminalInput = document.getElementById('terminal-input');

const promptHTML = '<span class="user">negrao.dev</span><span class="at">@</span><span class="host">terminal</span><span class="colon">:</span><span class="path">~</span><span class="dollar">$ </span>';

let commandHistory = [];
let historyIndex = -1;
let isFirstPrompt = true;

function initTerminal() {
    terminalOutput.innerHTML = '';
    addPromptLine();
    terminalInput.addEventListener('keydown', handleInput);
    document.addEventListener('click', () => {
        if (terminalInput) terminalInput.focus();
    });
}

function addPromptLine() {
    const line = document.createElement('div');
    line.innerHTML = promptHTML;
    line.appendChild(terminalInput);
    terminalOutput.appendChild(line);
    terminalInput.style.display = '';
    terminalInput.value = isFirstPrompt ? 'help' : '';
    isFirstPrompt = false;
    terminalInput.addEventListener('keydown', handleInput);
    setTimeout(() => terminalInput.focus(), 0);
}


window.addPromptLine = addPromptLine;

function handleInput(event) {
    if (event.key === 'Enter') {
        const command = terminalInput.value.trim();
        if (command) {
            commandHistory.push(command);
            historyIndex = commandHistory.length;
            
            const currentLine = terminalInput.parentElement;
            currentLine.innerHTML = promptHTML + command;
            currentLine.className = 'command';
            executeCommand(command).then(() => {
                
                addPromptLine();
            });
        }
    } else if (event.key === 'ArrowUp') {
        if (historyIndex > 0) {
            historyIndex--;
            terminalInput.value = commandHistory[historyIndex];
        }
        event.preventDefault();
    } else if (event.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            terminalInput.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            terminalInput.value = '';
        }
        event.preventDefault();
    }
}

function printLine(content, className = 'output', isHTML = false) {
    const line = document.createElement('div');
    if (isHTML) {
        line.innerHTML = content;
    } else {
        line.textContent = content;
    }
    line.className = className;
    terminalOutput.appendChild(line);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

function executeCommand(command) {
    
    if (window.commandsRegistry && window.commandsRegistry[command.split(' ')[0]]) {
        const handler = window.commandsRegistry[command.split(' ')[0]];
        const result = handler(command);
        if (result instanceof Promise) {
            return result;
        } else {
            return Promise.resolve();
        }
    } else {
        printLine(`Command not found: ${command}. Use 'help' to see available commands.`, 'error');
        return Promise.resolve();
    }
}