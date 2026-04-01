 // 1. Loader Logic
        window.addEventListener('load', () => {
            const bar = document.getElementById('progress');
            bar.style.width = '100%';
            setTimeout(() => {
                document.getElementById('loader').style.transform = 'translateY(-100%)';
            }, 1200);
        });

        // 2. Mobile Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('mobile-nav');
            menu.classList.toggle('open');
        }

        // 3. Live Clock (Updated to target both desktop and mobile clocks)
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-IN', { hour12: false });
            
            const desktopTime = document.getElementById('live-time');
            const mobileTime = document.getElementById('live-time-mobile');
            
            if (desktopTime) desktopTime.innerText = timeString;
            if (mobileTime) mobileTime.innerText = timeString;
        }
        setInterval(updateClock, 1000);
        updateClock();

        // 4. Highlight Active Link on Scroll
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.hidden.md\\:flex a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('nav-active');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('nav-active');
                }
            });
        });

        // 5. Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px', 
            threshold: 0.15 
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });