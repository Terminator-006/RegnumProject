document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('vid');
    video.playbackRate = 0.5; // Slow motion effect

    document.getElementById('waitlistForm').addEventListener('submit', function(event) {
        console.log("Form submitted");
        event.preventDefault(); 
        const email = document.getElementById('email').value;
        document.getElementById('email').value = "";

        fetch("https://regnum-backend-bice.vercel.app/join-waitlist", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
        .then(response => {
            if (response.status === 200) {
                window.location.href = "./email/index.html";
            } else if (response.status === 400) {
                document.getElementById('popup-message').style.display = 'block';
            }
            return response.json(); // Optional, if you need to handle response data
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});