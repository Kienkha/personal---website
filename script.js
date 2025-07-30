// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects for profile image
    const profileImg = document.getElementById('profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        profileImg.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Enhanced tooltip functionality
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        // Add touch support for mobile devices
        button.addEventListener('touchstart', function(e) {
            // Prevent default touch behavior
            e.preventDefault();
            
            // Show tooltip on touch
            this.style.setProperty('--tooltip-visible', '1');
        });
        
        button.addEventListener('touchend', function(e) {
            // Hide tooltip after a delay
            setTimeout(() => {
                this.style.setProperty('--tooltip-visible', '0');
            }, 2000);
        });
        
        // Add keyboard support
        button.addEventListener('focus', function() {
            this.style.setProperty('--tooltip-visible', '1');
        });
        
        button.addEventListener('blur', function() {
            this.style.setProperty('--tooltip-visible', '0');
        });
    });
});

// Add some interactive features
function updateProfileInfo() {
    // You can add dynamic content updates here
    console.log('Profile page loaded successfully!');
}

// Call the function when page loads
updateProfileInfo(); 