document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    const controlBtn = document.getElementById('videoControl');
    
    if (!video || !controlBtn) {
        console.error('Video or control button not found');
        return;
    }

    const controlIcon = controlBtn.querySelector('i');
    if (!controlIcon) {
        console.error('Control icon not found');
        return;
    }

    controlBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play()
                .then(() => {
                    controlIcon.classList.remove('fa-play');
                    controlIcon.classList.add('fa-pause');
                })
                .catch(error => {
                    console.error('Error playing video:', error);
                });
        } else {
            video.pause();
            controlIcon.classList.remove('fa-pause');
            controlIcon.classList.add('fa-play');
        }
    });

    const menuButtons = document.querySelectorAll('.mobile-menu, .desktop-menu');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const closeSidebarBtn = document.getElementById('closeSidebar');

    function openSidebar() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    menuButtons.forEach(button => {
        button.addEventListener('click', openSidebar);
    });

    closeSidebarBtn.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    document.querySelectorAll('.sidebar-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                closeSidebar();
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

$(document).ready(function(){
    $('.event-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsive:{
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: true
            },
            1024: {
                items: 3,
                nav: true
            }
        }
    });

    $('.festival-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsive:{
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
});