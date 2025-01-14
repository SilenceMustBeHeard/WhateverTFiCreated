let likeCount = 0;

document.querySelector('.like-button').addEventListener('click', function () {
    const counterElement = document.getElementById('counter');

    
    this.classList.toggle('liked');

    if (this.classList.contains('liked')) {
        likeCount++;
        this.innerHTML = '<span class="thumb-icon">👍</span> Liked';
        this.style.backgroundColor = '#4CAF50'; 
    } else {
        likeCount--;
        this.innerHTML = '<span class="thumb-icon">👎</span> Like';
        this.style.backgroundColor = '#ff4d4d'; 
    }

    
    counterElement.textContent = likeCount;
});