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
                    <li><span class="command-name">exit</span> - Exit the terminal</li>
                </ul>
            </div>
            <div class="help-section">
                <div class="help-subtitle">Others:</div>
                <ul class="help-list">
                    <li><span class="command-name">ls</span></li>
                    <li><span class="command-name">cd</span></li>
                    <li><span class="command-name">cat</span></li>
                </ul>
            </div>
        </div>`, 'output', true);
    });
    registerCommand('about', () => {
        if (window.profile) {
            printLine(`<span class="profile-key">Name:</span> <span class="profile-value">${window.profile.name}</span>`, 'output', true);
            printLine(`<span class="profile-key">Idade:</span> <span class="profile-value">${window.profile.idade}</span>`, 'output', true);
            printLine(`<span class="profile-key">Nacionalidade:</span> <span class="profile-value">${window.profile.nacionalidade}</span>`, 'output', true);
            printLine(`<span class="profile-key">Role:</span> <span class="profile-value">${window.profile.role}</span>`, 'output', true);
            printLine(`<span class="profile-key">Summary:</span> <span class="profile-value">${window.profile.summary}</span>`, 'output', true);
        
            Object.entries(window.profile.contacts).forEach(([key, value]) => {
                const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
                const isLink = typeof value === 'string' && (value.startsWith('http://') || value.startsWith('https://'));
                const valueHtml = isLink ? `<a href="${value}" class="profile-link" target="_blank">${value}</a>` : `<span class="profile-value">${value}</span>`;
                printLine(`  <span class="profile-key">${capitalizedKey}:</span> ${valueHtml}`, 'output', true);
            });
        } else {
            printLine('Profile not loaded.');
        }
    });
    registerCommand('projects', () => {
        if (window.profile && window.profile.projects) {
            window.profile.projects.forEach((project, index) => {
                printLine(`<span class="project-title">${index + 1}. ${project.title}</span>`, 'output', true);
                printLine(`<span class="project-desc">${project.desc}</span>`, 'output', true);
                printLine(`<span class="project-tags">Tags: ${project.tags.join(', ')}</span>`, 'output', true);
                printLine('', 'output', true); // empty line
            });
        } else {
            printLine('No projects found.');
        }
    });
    registerCommand('skills', () => {
        if (window.profile && window.profile.skills) {
            window.profile.skills.forEach(skill => {
                let levelClass = 'skill-basic';
                if (skill.level === 'avançado') levelClass = 'skill-advanced';
                else if (skill.level === 'intermediário') levelClass = 'skill-intermediate';
                printLine(`<span class="skill-name">${skill.name}</span> <span class="${levelClass}">(${skill.level})</span>`, 'output', true);
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
    registerCommand('exit', () => {
        const popup = document.createElement('div');
        popup.className = 'terminal-popup';
        popup.innerHTML = `<div class='popup-content'>
            <span style='color:#00ff00;font-weight:bold;'>Saindo da pagina do melhor dev que voce ja conheceu!</span>
            <button class='popup-close' style='margin-left:20px;'>OK</button>
        </div>`;
        document.body.appendChild(popup);
        document.querySelector('.popup-close').onclick = () => {
            window.location.href = 'https://www.google.com';
        };
    });
    registerCommand('ls', () => {
        printLine('<span style="color:#00ff00">segredo.txt</span>', 'output', true);
        printLine('<span style="color:#0000ff">/home</span>', 'output', true);
        printLine('<span style="color:#0000ff">/past</span>', 'output', true);
        printLine('<span style="color:#0000ff">/dev/null</span>', 'output', true);
        printLine('<span style="color:#0000ff">/home/negrao</span>', 'output', true);
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
                '###@!$%&* ERROR INVADED BY 1337 SYSTEM FAILURE ACCESS GRANTEDHACK THE PLANET NULL POINTER GLITCH DETECTED 404 NOT FOUND¯\\_(ツ)_/¯ 010101010101 Segredo revelado? Terminal corrompido!01010101010101010101##@!$%&##@!$%&##@!$%&10101010101010101010101###@!$%&* SYSTEM FAILURE GLITCH DETECTED HACK THE PLANETACCESS GRANTED 404 NOT FOUND INVADED BY 1337 NULL POINTERSegredo revelado? Terminal corrompido! ###@!$%&* 010101010101010101010101010101010101010101010101010101010101010101010101GLITCH DETECTED SYSTEM FAILURE HACK THE PLANET ACCESS GRANTEDINVADED BY 1337 404 NOT FOUND NULL POINTER ###@!$%&*010101010101010101010101010101010101010101##@!$%&##@!$%&101ERROR GLITCH DETECTED SYSTEM FAILURE HACK THE PLANETACCESS GRANTED 404 NOT FOUND INVADED BY 1337 NULL POINTER01##@!$%&##@!$%&1010101010101010101010101010101010101010101010101Segredo revelado? Terminal corrompido! ###@!$%&* 010101010101',
            ];
            if (window.triggerVisualGlitch) {
                window.triggerVisualGlitch(messages, 'Você não deveria mexer onde não deve!', 8000);
            } else {
                for (let i = 0; i < 80; i++) {
                    printLine(messages[Math.floor(Math.random() * messages.length)], 'error');
                }
                setTimeout(() => {
                    const popup = document.createElement('div');
                    popup.className = 'terminal-popup';
                    popup.innerHTML = `<div class='popup-content'>
                        <span style='color:#e53935;font-weight:bold;'>Você não deveria mexer onde não deve!</span>
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
