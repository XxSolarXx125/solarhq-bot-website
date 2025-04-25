// Music selector fetch from GitHub
const musicSelect = document.getElementById("music-select");

// Fetch music list from GitHub repository
fetch('https://api.github.com/repos/XxSolarXx125/solarhq-bot-website/contents/NO')
    .then(response => response.json())
    .then(data => {
        data.forEach(file => {
            if (file.type === 'file') {
                let option = document.createElement("option");
                option.value = file.name;
                option.textContent = file.name;
                musicSelect.appendChild(option);
            }
        });
    })
    .catch(error => console.log(error));

// Play music function
function playMusic() {
    let selectedMusic = musicSelect.value;
    if (selectedMusic) {
        alert(`Playing: ${selectedMusic}`);
        // Add logic to play the selected music here (e.g., integrate a music player API)
    }
}

// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    // Update button text based on theme
    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "Switch to Light Mode";
    } else {
        themeToggle.textContent = "Switch to Dark Mode";
    }
});
