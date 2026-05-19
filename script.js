window.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animate-name');
    
    if (textElement) {
        const text = textElement.innerText;
        textElement.innerHTML = ''; // Kosongkan teks asli terlebih dahulu

        // Pecah teks menjadi huruf-huruf individu
        [...text].forEach((char, index) => {
            const span = document.createElement('span');
            
            // Jika karakter adalah spasi, gunakan kode spasi HTML agar tidak dempet
            if (char === ' ') {
                span.innerHTML = '&nbsp;';
            } else {
                span.innerText = char;
            }
            
            // Berikan class dasar untuk animasi CSS
            span.classList.add('animated-letter');
            
            // Berikan jeda (delay) muncul yang berbeda untuk setiap huruf
            span.style.animationDelay = `${index * 0.08}s`;
            
            textElement.appendChild(span);
        });
    }
});
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
