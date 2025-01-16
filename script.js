function bookRoom(roomType) {
    const toast = document.createElement('div');
    toast.textContent = `You have selected the ${roomType}. Thank you for booking!`;
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.background = '#333';
    toast.style.color = '#fff';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '5px';
    toast.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
    toast.style.animation = 'fadeInOut 3s forwards';

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}