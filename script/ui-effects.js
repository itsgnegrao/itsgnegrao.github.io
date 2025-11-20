function triggerDevNullEffect() {
    const terminalScreen = document.getElementById('terminal-screen');
    const terminalInput = document.getElementById('terminal-input');
    
    if (terminalInput) terminalInput.style.display = 'none';
    let pixelOverlay = document.createElement('div');
    pixelOverlay.className = 'disintegration-effect';
    pixelOverlay.style.position = 'absolute';
    pixelOverlay.style.top = '0';
    pixelOverlay.style.left = '0';
    pixelOverlay.style.width = '100%';
    pixelOverlay.style.height = '100%';
    pixelOverlay.style.zIndex = '99998';
    pixelOverlay.style.pointerEvents = 'none';
    pixelOverlay.style.overflow = 'hidden';
    terminalScreen.appendChild(pixelOverlay);

    
    let gridSize = 36; 
    let screenW = terminalScreen.offsetWidth;
    let screenH = terminalScreen.offsetHeight;
    let cols = Math.ceil(screenW / gridSize);
    let rows = Math.ceil(screenH / gridSize);
    let total = cols * rows;
    let squares = [];
    
    let positions = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            positions.push({
                left: c * gridSize,
                top: r * gridSize
            });
        }
    }
    
    for (let i = positions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [positions[i], positions[j]] = [positions[j], positions[i]];
    }
    let placed = 0;
    function fillGridStep() {
        if (placed >= total) {
            
            
            const terminalModal = document.getElementById('terminal-modal');
            if (terminalModal) {
                
                Array.from(terminalModal.children).forEach(child => {
                    if (child !== pixelOverlay) child.style.display = 'none';
                });
            } else {
                
                Array.from(terminalScreen.children).forEach(child => {
                    if (child !== pixelOverlay) child.style.display = 'none';
                });
            }
            
            setTimeout(() => {
                let finished = 0;
                squares.forEach((sq, idx) => {
                    setTimeout(() => {
                        
                        const angle = Math.random() * 2 * Math.PI;
                        const distance = 80 + Math.random() * 120;
                        const dx = Math.cos(angle) * distance;
                        const dy = Math.sin(angle) * distance;
                        const rotate = (Math.random() - 0.5) * 120;
                        sq.style.left = (parseInt(sq.style.left) + dx) + 'px';
                        sq.style.top = (parseInt(sq.style.top) + dy) + 'px';
                        sq.style.transform = `rotate(${rotate}deg)`;
                        setTimeout(() => {
                            sq.style.opacity = '0';
                        }, 600);
                        finished++;
                        if (finished === squares.length) {
                            
                            setTimeout(() => {
                                showUniverse();
                            }, 500);
                        }
                    }, Math.random() * 600);
                });
            }, 350);
            return;
        }
        let pos = positions[placed];
        let sq = document.createElement('div');
        sq.className = 'glitch-square';
        sq.style.position = 'absolute';
        sq.style.width = gridSize + 'px';
        sq.style.height = gridSize + 'px';
        sq.style.left = pos.left + 'px';
        sq.style.top = pos.top + 'px';
        sq.style.transition = 'top 1.2s, opacity 1.2s';
        pixelOverlay.appendChild(sq);
        squares.push(sq);
        placed++;
        setTimeout(fillGridStep, 0); 
    }
    fillGridStep();

    function showUniverse() {
        terminalScreen.style.opacity = '0';
        let universeDiv = document.createElement('div');
        universeDiv.className = 'universe-effect';
        universeDiv.style.position = 'fixed';
        universeDiv.style.top = '0';
        universeDiv.style.left = '0';
        universeDiv.style.width = '100vw';
        universeDiv.style.height = '100vh';
        universeDiv.style.zIndex = '99999';
        universeDiv.style.background = "#000 url('https://i.gifer.com/I3uP.gif') center center / cover no-repeat";
        universeDiv.style.cursor = 'none';
        document.body.appendChild(universeDiv);

        
        

        
        function exitUniverseEffect() {
            if (window._devNullEffectCleanup) {
                window._devNullEffectCleanup();
                window._devNullEffectCleanup = null;
            }
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            window.removeEventListener('keydown', exitUniverseEffect);
        }
        window.addEventListener('keydown', exitUniverseEffect);

        window._devNullEffectCleanup = function() {
            universeDiv.remove();
            terminalScreen.style.opacity = '1';
            pixelOverlay.remove();
            if (terminalInput) terminalInput.style.display = '';
            
            const terminalModal = document.getElementById('terminal-modal');
            if (terminalModal) {
                Array.from(terminalModal.children).forEach(child => {
                    child.style.display = '';
                });
            } else {
                Array.from(terminalScreen.children).forEach(child => {
                    child.style.display = '';
                });
            }
        };
    }
}

function triggerPastEffect() {
    const terminalScreen = document.getElementById('terminal-screen');
    terminalScreen.classList.add('past-effect');
    
    let flickerInterval = setInterval(() => {
        terminalScreen.style.filter = `grayscale(1) brightness(${0.9 + Math.random() * 0.2})`;
    }, 120);
    
    let borderDiv = document.createElement('div');
    borderDiv.className = 'past-border';
    borderDiv.style.position = 'absolute';
    borderDiv.style.top = '0';
    borderDiv.style.left = '0';
    borderDiv.style.width = '100%';
    borderDiv.style.height = '100%';
    borderDiv.style.border = '12px solid #222';
    borderDiv.style.boxSizing = 'border-box';
    borderDiv.style.pointerEvents = 'none';
    borderDiv.style.zIndex = '998';
    terminalScreen.appendChild(borderDiv);

    
    window._pastEffectCleanup = function() {
        clearInterval(flickerInterval);
        terminalScreen.style.filter = '';
        terminalScreen.classList.remove('past-effect');
        borderDiv.remove();
    };
function typewriter(text, element, speed = 50) {
    let i = 0;
    element.textContent = '';
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
function setupAutocomplete() {
    const input = document.getElementById('terminal-input');
    input.addEventListener('keydown', function(event) {
        
        if (event.key === 'Tab') {
            const value = input.value;
            if (value === 'cat ' || value === 'cat s' || value === 'cat se' || value === 'cat seg' || value === 'cat segre' || value === 'cat segred' || value === 'cat segredo' || value === 'cat segredo.' || value === 'cat segredo.t' || value === 'cat segredo.tx') {
                event.preventDefault();
                input.value = 'cat segredo.txt';
            }
        }
    });
}


function addGlitch(element) {
    element.classList.add('glitch');
    setTimeout(() => {
        element.classList.remove('glitch');
    }, 300);
}





window.addEventListener('load', () => {
    setupAutocomplete();
});

function triggerVisualGlitch(messages, finalMessage) {
    const terminalScreen = document.getElementById('terminal-screen');
    const terminalInput = document.getElementById('terminal-input');
    
    let scanlineDiv = document.createElement('div');
    scanlineDiv.className = 'extra-scanlines';
    scanlineDiv.style.position = 'absolute';
    scanlineDiv.style.top = '0';
    scanlineDiv.style.left = '0';
    scanlineDiv.style.width = '100%';
    scanlineDiv.style.height = '100%';
    scanlineDiv.style.pointerEvents = 'none';
    scanlineDiv.style.zIndex = '999';
    scanlineDiv.innerHTML = `<div style="width:100%;height:100%;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,255,0,0.08) 3px,rgba(0,255,0,0.08) 6px);"></div>`;
    terminalScreen.appendChild(scanlineDiv);

    
    if (terminalInput) terminalInput.style.display = 'none';
    let count = 0;
    const maxCount = Math.floor(10000 / 60); 
    const filters = [
        'blur(2px) invert(1) brightness(1.5)',
        'none',
        'blur(1px) brightness(2)',
        'invert(0.7) brightness(1.2)',
        'none'
    ];
    const interval = setInterval(() => {
        
        terminalScreen.style.filter = filters[Math.floor(Math.random() * filters.length)];

        
        const scale = 1 + Math.random() * 0.08;
        const rotate = (Math.random() - 0.5) * 12;
        terminalScreen.style.transform = `scale(${scale}) rotate(${rotate}deg)`;

        
        let msg = messages[Math.floor(Math.random() * messages.length)];
        msg = glitchText(msg);
        printLine(msg, 'error');

        terminalScreen.classList.add('glitch');
        setTimeout(() => {
            terminalScreen.classList.remove('glitch');
            terminalScreen.style.transform = '';
        }, 80);
        count++;
        if (count > maxCount) {
            clearInterval(interval);
            terminalScreen.style.filter = 'none';
            if (scanlineDiv) scanlineDiv.remove();
            setTimeout(() => {
                showTerminalPopup(finalMessage, () => {
                    
                    if (window.terminalOutput) window.terminalOutput.innerHTML = '';
                    if (terminalInput) terminalInput.style.display = '';
                    if (window.addPromptLine) window.addPromptLine();
                });
            }, 300);
        }
    }, 60); 
}


function glitchText(text) {
    const glitchChars = ['@', '#', '$', '%', '&', '*', '!', '?', '0', '1', 'Ξ', '░', '▒', '▓', '█', '▄', '▀', '■', '▲', '●', '◼', '∆', '§', '¶', '†', '¥', '¢', '¤', '☠', '☢', '☣', '☯', '☭', '☮', '☾', '☽', '♠', '♣', '♥', '♦', '★', '☆', '✦', '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '✱', '✲', '✳', '✴', '✵', '✶', '✷', '✸', '✹', '✺', '✻', '✼', '✽', '✾', '✿', '❀', '❁', '❂', '❃', '❄', '❅', '❆', '❇', '❈', '❉', '❊', '❋', '⛧', '⛤', '⛥', '⛦', '⛧', '⛨', '⛩', '⛪', '⛫', '⛬', '⛭', '⛮', '⛯', '⛰', '⛱', '⛲', '⛳', '⛴', '⛵', '⛶', '⛷', '⛸', '⛹', '⛺', '⛻', '⛼', '⛽', '⛾', '⛿'];
    return text.split('').map(c => {
        if (Math.random() < 0.18) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        return c;
    }).join('');
}

function showTerminalPopup(message, onClose) {
    const popup = document.createElement('div');
    popup.className = 'terminal-popup';
    popup.innerHTML = `<div class='popup-content'>
        <span style='color:#e53935;font-weight:bold;'>${message}</span>
        <button class='popup-close' style='margin-left:20px;'>Fechar</button>
    </div>`;
    document.body.appendChild(popup);
    document.querySelector('.popup-close').onclick = () => {
        popup.remove();
        if (onClose) onClose();
    };
}