

window.profile = null;

async function loadProfile() {
    try {
        const response = await fetch('data/profile.json');
        window.profile = await response.json();
        initCommands();
    } catch (error) {
        console.error('Failed to load profile:', error);
        initCommands();
    }
}

loadProfile();