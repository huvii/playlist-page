document.addEventListener('DOMContentLoaded', () => {
    // Note: Using document.getElementById('spotify-link') is more robust than
    // document.querySelector('.spotify-button') if you've added the ID as recommended.
    const button = document.querySelector('.spotify-button'); 

    if (button) { // Check if the button exists before adding listeners
        // Add a click event listener to the button
        button.addEventListener('click', () => {
            // Check if the Meta Pixel function is loaded
            if (typeof fbq === 'function') {
                
                fbq('track', 'Lead', {
                    content_name: 'Spotify Link Click',
                    content_category: 'Outbound Link'
                });
                console.log('Meta Pixel: Lead event tracked for Spotify button click.');
            }
            // The browser will then follow the link (go to Spotify)
        });

        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = '#1ed760';
            button.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = '#1db954';
            button.style.transform = 'translateY(0)';
        });
    }
});