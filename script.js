document.addEventListener('DOMContentLoaded', () => {
    // Check Area Button
    const checkAreaBtn = document.querySelector('.btn');
    checkAreaBtn.addEventListener('click', () => {
        alert('Memeriksa area Anda...');
    });

    // Report Incident Button
    const reportBtn = document.querySelector('.btn-report');
    reportBtn.addEventListener('click', () => {
        alert('Memulai pelaporan kejadian...');
    });

    // Logout Button
    const logoutBtn = document.querySelector('.btn-logout');
    logoutBtn.addEventListener('click', () => {
        alert('Anda akan keluar dari aplikasi');
    });
});