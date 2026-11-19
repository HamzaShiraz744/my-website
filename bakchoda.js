
document.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("bgMusic");

    // Support both possible button IDs
    const musicControl =
        document.getElementById("musicControl") ||
        document.getElementById("musicBtn");

    if (!music) {
        alert("Audio element nahi mila!");
        return;
    }

    if (!musicControl) {
        alert("Music button nahi mila!");
        return;
    }

    music.volume = 0.5;

    musicControl.addEventListener("click", async function () {

        if (music.paused) {

            try {
                await music.play();
                musicControl.innerHTML = "🔊 Sound ON";

            } catch (error) {
                console.error("Music Error:", error);
                alert("Music play nahi ho raha. MP3 path check karo.");
            }

        } else {

            music.pause();
            musicControl.innerHTML = "🎵 Sound OFF";

        }

    });

});
