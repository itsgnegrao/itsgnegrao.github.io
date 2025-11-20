window.commandsRegistry = {};

function registerCommand(name, handler) {
    window.commandsRegistry[name] = handler;
}
function initCommands() {
    registerCommand('help', () => {
        printLine(`<div class="help-container">
            <div class="help-title">Available commands:</div>
            <div class="help-section">
                <div class="help-subtitle">Main Commands:</div>
                <ul class="help-list">
                    <li><span class="command-name">help</span> - Show this help</li>
                    <li><span class="command-name">about</span> - About me</li>
                    <li><span class="command-name">projects</span> - List projects</li>
                    <li><span class="command-name">skills</span> - List skills</li>
                    <li><span class="command-name">clear</span> - Clear terminal</li>
                    <li><span class="command-name">reboot</span> - Reboot system</li>
                </ul>
            </div>
            <div class="help-section">
                <div class="help-subtitle">Others:</div>
                <ul class="help-list">
                    <li><span class="command-name">ls</span></li>
                    <li><span class="command-name">cd</span></li>
                </ul>
            </div>
        </div>`, 'output', true);
    });
    registerCommand('about', () => {
        if (window.profile) {
            printLine(`Name: ${window.profile.name}`);
            printLine(`Role: ${window.profile.role}`);
            printLine(`Summary: ${window.profile.summary}`);
            printLine('Contacts:');
            Object.entries(window.profile.contacts).forEach(([key, value]) => {
                printLine(`  ${key}: ${value}`);
            });
        } else {
            printLine('Profile not loaded.');
        }
    });
    registerCommand('projects', () => {
        if (window.profile && window.profile.projects) {
            window.profile.projects.forEach(project => {
                printLine(`${project.id}: ${project.title}`);
            });
        } else {
            printLine('No projects found.');
        }
    });
    registerCommand('skills', () => {
        if (window.profile && window.profile.skills) {
            window.profile.skills.forEach(skill => {
                printLine(`${skill.name} (${skill.level})`);
            });
        } else {
            printLine('No skills found.');
        }
    });
    registerCommand('clear', () => {
        terminalOutput.innerHTML = '';
    });
    registerCommand('reboot', () => {
        if (window._pastEffectCleanup) {
            window._pastEffectCleanup();
            window._pastEffectCleanup = null;
        }
        if (window._devNullEffectCleanup) {
            window._devNullEffectCleanup();
            window._devNullEffectCleanup = null;
        }
        location.reload();
    });
    registerCommand('ls', () => {
        printLine('<span style="color:#00ff00">segredo.txt</span>', 'output', true);
    });
    registerCommand('cd', async (cmd) => {
        const arg = cmd.split(' ').slice(1).join(' ').trim();
        if (arg === '-h' || arg === '--help' || arg === '') {
            printLine(`<div class="help-container">
                <div class="help-title">cd - Navigation</div>
                <li><span class="command-name">cd [argument]</span></li>
                <ul class="help-list">
                    <li><span class="command-name">cd /home</span></li>
                    <li><span class="command-name">cd /past</span></li>
                    <li><span class="command-name">cd /dev/null</span></li>
                    <li><span class="command-name">cd /home/negrao</span></li>
                </ul>
            </div>`, 'output', true);
            return;
        }
        if (arg === '/home') {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                printLine(`Bem-vindo ao seu lar digital: ${data.ip}`, 'output');
            } catch (error) {
                printLine('Não foi possível encontrar seu lar digital.', 'error');
            }
        } else if (arg === '/past') {
            printLine('Bem-vindo ao passado: tudo era preto e branco!');
            if (window.triggerPastEffect) {
                window.triggerPastEffect(5000, () => {
                    printLine('De volta ao presente! O terminal voltou ao normal.', 'output');
                });
            }
        } else if (arg === '/dev/null') {
            if (window.triggerDevNullEffect) {
                window.triggerDevNullEffect();
            }
        } else if (arg === '/home/negrao') {
            printLine('Acesso negado. Você não tem permissão suficiente para vir a minha casa.', 'output');
        } else {
            printLine('Você já está onde deveria estar.', 'output');
        }
    });
    registerCommand('cat', (cmd) => {
        const arg = cmd.split(' ').slice(1).join(' ').trim();
        if (arg === 'segredo.txt') {
            const messages = [
                '###@!$%&* ERROR INVADED BY 1337 SYSTEM FAILURE ACCESS GRANTED',
                'HACK THE PLANET NULL POINTER GLITCH DETECTED 404 NOT FOUND',
                '¯\\_(ツ)_/¯ 010101010101 Segredo revelado? Terminal corrompido!',
                '###@!$%&* SYSTEM FAILURE GLITCH DETECTED HACK THE PLANET',
                'ACCESS GRANTED 404 NOT FOUND INVADED BY 1337 NULL POINTER',
                'Segredo revelado? Terminal corrompido! ###@!$%&* 010101010101',
                'GLITCH DETECTED SYSTEM FAILURE HACK THE PLANET ACCESS GRANTED',
                'INVADED BY 1337 404 NOT FOUND NULL POINTER ###@!$%&*',
                'ERROR GLITCH DETECTED SYSTEM FAILURE HACK THE PLANET',
                'ACCESS GRANTED 404 NOT FOUND INVADED BY 1337 NULL POINTER',
                'Segredo revelado? Terminal corrompido! ###@!$%&* 010101010101',
            ];
            if (window.triggerVisualGlitch) {
                window.triggerVisualGlitch(messages, 'Você não deveria mexer aqui');
            } else {
                for (let i = 0; i < 80; i++) {
                    printLine(messages[Math.floor(Math.random() * messages.length)], 'error');
                }
                setTimeout(() => {
                    const popup = document.createElement('div');
                    popup.className = 'terminal-popup';
                    popup.innerHTML = `<div class='popup-content'>
                        <span style='color:#e53935;font-weight:bold;'>Você não deveria mexer aqui</span>
                        <button class='popup-close' style='margin-left:20px;'>Fechar</button>
                    </div>`;
                    document.body.appendChild(popup);
                    document.querySelector('.popup-close').onclick = () => {
                        popup.remove();
                    };
                }, 12000);
            }
        } else {
            printLine('Arquivo não encontrado.', 'error');
        }
    });
}
