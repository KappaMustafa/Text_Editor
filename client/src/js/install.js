const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    // butInstall.classList.add("hidden", false);
    butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const windowPrompt = window.deferredPrompt;
    if (!windowPrompt) {
        //this breaks it if false
        return}
        //prompts it
    windowPrompt.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    //takes away prompt
    window.deferredPrompt = null;
});
