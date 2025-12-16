// Team Recruitment Popup System
class RecruitmentPopup {
    constructor() {
        this.popupId = 'teamRecruitmentPopup';
        this.storageKey = 'izGimnastik_recruitmentPopup_lastShown';
        this.popup = null;
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.popup = document.getElementById(this.popupId);
        if (!this.popup) {
            console.warn('Recruitment popup element not found');
            return;
        }

        // Check if popup should be shown
        if (this.shouldShowPopup()) {
            // Show popup after a short delay
            setTimeout(() => {
                this.showPopup();
            }, 2000); // 2 second delay after page load
        }

        // Add event listeners
        this.addEventListeners();
    }

    shouldShowPopup() {
        try {
            const lastShown = localStorage.getItem(this.storageKey);

            if (!lastShown) {
                return true; // Never shown before
            }

            const lastShownDate = new Date(lastShown);
            const today = new Date();

            // Reset time to start of day for accurate date comparison
            lastShownDate.setHours(0, 0, 0, 0);
            today.setHours(0, 0, 0, 0);

            // Show if last shown date is before today
            return lastShownDate < today;
        } catch (error) {
            console.error('Error checking popup display condition:', error);
            return false;
        }
    }

    showPopup() {
        if (!this.popup) return;

        // Add show class with animation
        this.popup.classList.add('show');
        document.body.classList.add('popup-open');

        // Update last shown date
        this.updateLastShownDate();

        // Track popup view (optional analytics)
        this.trackPopupView();
    }

    closePopup() {
        if (!this.popup) return;

        // Add closing animation
        this.popup.classList.add('closing');

        setTimeout(() => {
            this.popup.classList.remove('show', 'closing');
            document.body.classList.remove('popup-open');
        }, 300); // Match CSS animation duration
    }

    updateLastShownDate() {
        try {
            const today = new Date().toISOString();
            localStorage.setItem(this.storageKey, today);
        } catch (error) {
            console.error('Error updating last shown date:', error);
        }
    }

    trackPopupView() {
        // Optional: Add analytics tracking here
        console.log('Recruitment popup viewed at:', new Date().toISOString());
    }

    addEventListeners() {
        if (!this.popup) return;

        // Close button
        const closeBtn = this.popup.querySelector('.recruitment-popup-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.closePopup();
            });
        }

        // Overlay click to close
        this.popup.addEventListener('click', (e) => {
            if (e.target === this.popup) {
                this.closePopup();
            }
        });

        // ESC key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.popup.classList.contains('show')) {
                this.closePopup();
            }
        });

        // Track button clicks
        const actionButtons = this.popup.querySelectorAll('.recruitment-btn');
        actionButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.classList.contains('recruitment-btn-primary') ? 'phone' : 'contact';
                console.log(`Recruitment popup action clicked: ${action}`);
                this.closePopup();
            });
        });
    }

    // Public method to manually close popup
    static closePopup() {
        const popup = document.getElementById('teamRecruitmentPopup');
        if (popup && popup.classList.contains('show')) {
            // Find the instance and close it
            if (window.recruitmentPopupInstance) {
                window.recruitmentPopupInstance.closePopup();
            }
        }
    }

    // Public method to manually show popup (for testing)
    static showPopup() {
        if (window.recruitmentPopupInstance) {
            window.recruitmentPopupInstance.showPopup();
        }
    }

    // Reset popup display condition (for testing)
    static resetPopupCondition() {
        try {
            localStorage.removeItem('izGimnastik_recruitmentPopup_lastShown');
            console.log('Popup display condition reset');
        } catch (error) {
            console.error('Error resetting popup condition:', error);
        }
    }
}

// Global function for onclick handlers
function closeRecruitmentPopup() {
    RecruitmentPopup.closePopup();
}

// Initialize popup system
window.recruitmentPopupInstance = new RecruitmentPopup();

// Expose methods for testing/debugging
window.RecruitmentPopup = RecruitmentPopup;