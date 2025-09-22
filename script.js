document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.spotify-button');

    // Add a click event listener to the button
    button.addEventListener('click', () => {
        // Track a custom event named 'SpotifyClick'
        fbq('track', 'Click'); 
        // Or you can use a more specific custom event name like:
        // fbq('trackCustom', 'SpotifyButton_Click', { content_name: 'Epic Music Playlist' });
        // You would uncomment and use one of the above lines.
    });

    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#1ed760';
        button.style.transform = 'translateY(-2px)';
    });

    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#1db954';
        button.style.transform = 'translateY(0)';
    });
});
