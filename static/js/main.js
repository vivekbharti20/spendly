// main.js — students will add JavaScript here as features are built

// ------------------------------------------------------------------ //
// Video modal                                                          //
// ------------------------------------------------------------------ //

(function () {
    const overlay = document.getElementById('video-modal');
    if (!overlay) return;

    const iframe = document.getElementById('video-iframe');
    const openBtn = document.getElementById('open-video-modal');
    const closeBtn = document.getElementById('close-video-modal');

    function openModal(e) {
        e.preventDefault();
        iframe.src = iframe.dataset.src;
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        // Stop the video by clearing src, then restore data-src for next open
        iframe.src = '';
    }

    openBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // Close on backdrop click (but not on the modal box itself)
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
    });
}());
