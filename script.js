document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    // Menjalankan animasi setelah jeda sedikit agar terlihat halus
    setTimeout(() => {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = targetWidth;
        });
    }, 500);
});