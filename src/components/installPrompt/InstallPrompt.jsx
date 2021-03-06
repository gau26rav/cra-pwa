import React, { useState, useEffect } from 'react'
import './installPrompt.css';

function InstallPrompt(props) {
    const [showPrompt, setShowPrompt] = useState(false);
    let deferredPrompt;

    useEffect(() => {
        setListener();

    }, [])

    const setListener = () => {
        window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault();
            deferredPrompt = e;
            setShowPrompt(true)
        });
    }

    const installApp = async () => {
        if (!this.installPrompt) return false;
        this.installPrompt.prompt();
        let outcome = await this.installPrompt.userChoice;
        if (outcome.outcome == 'accepted') {
            console.log("App Installed")
        }
        else {
            console.log("App not installed");
        }
        // Remove the event reference
        this.installPrompt = null;
        // Hide the button
        this.setState({
            installButton: false
        })
    }
    const handlePrompt = (choice = {}) => {
        deferredPrompt && deferredPrompt.prompt()
        // set localStorage to true
        if (choice.outcome !== "accepted")
            console.log('Accepted');
        else
            console.log('Rejected')
        setShowPrompt(false);
        deferredPrompt = null;
    }

    return (
        <div id="install-prompt-container" className={showPrompt ? 'prompt-visible' : 'prompt-hidden'}>
            <div>
                Hey would you like to see us on home screen?
                <button onClick={() => handlePrompt(true)}>Yes</button>
                <button onClick={() => handlePrompt(false)}>No</button>
            </div>
        </div>
    )
}

export default InstallPrompt
