const cursor = document.querySelector('.cursor');
const themeToggle = document.getElementById('theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('header nav');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .skills-list li, .card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursor.style.background = 'rgba(102, 126, 234, 0.8)';
    });
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.background = 'rgba(102, 126, 234, 0.5)';
    });
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });
}

document.querySelectorAll('.card, .skill-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

const profilePhoto = document.querySelector('.profile-photo');
const modal = document.createElement('div');
modal.className = 'photo-modal';
modal.innerHTML = '<img src="./Assets/image.jpeg" alt="Profile photo">';
document.body.appendChild(modal);

profilePhoto.addEventListener('click', () => {
    modal.classList.add('active');
});

modal.addEventListener('click', () => {
    modal.classList.remove('active');
<<<<<<< HEAD
});
=======
});
>>>>>>> d978fb7fbe4a0c6e074f33a3dde2c41eed3117fc
