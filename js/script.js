$(document).ready(function(){
    // Function to toggle navbar visibility
    function toggleNavbar() {
        let navbarCollapse = $('#navbarNav');
        navbarCollapse.toggleClass('show');
    }

    // Attach the toggle function to the navbar-toggler button
    $('.navbar-toggler').on('click', function() {
        toggleNavbar();
    });

    // Additional code for skillbar animation and other functionalities
    jQuery(document).ready(function() {
        function animateSkillBars() {
            jQuery('.skillbar').each(function() {
                var elementPos = jQuery(this).offset().top;
                var topOfWindow = jQuery(window).scrollTop();
                var windowHeight = jQuery(window).height();

                if (elementPos < topOfWindow + windowHeight - 100) {
                    jQuery(this).find('.skillbar-bar').animate({
                        width: jQuery(this).attr('data-percent')
                    }, 2000);
                }
            });
        }

        jQuery(window).on('scroll', animateSkillBars);
        animateSkillBars(); // Call once to animate skill bars that are already in view
    });

    // Handle navigation link clicks
    document.querySelectorAll('.nav').forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent immediate navigation

            // Remove 'active' class from all links
            document.querySelectorAll('.nav').forEach(function(nav) {
                nav.classList.remove('active');
            });

            // Add 'active' class to the clicked link
            element.classList.add('active');

            // Scroll to the target section with an offset
            let targetId = element.getAttribute('href').substring(1);
            let targetSection = document.getElementById(targetId);
            let offsetTop = targetSection.offsetTop - 100;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Close the navbar in responsive mode
            if (window.innerWidth <= 576) {
                let navbarCollapse = document.querySelector('#navbarNav');

                if (navbarCollapse.classList.contains('show')) {
                    toggleNavbar();
                }
            }
        });
    });

    // Handle scroll events
    document.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const backToTopButton = document.getElementById("back-to-top");

        // Change navbar background color on scroll
        if (window.scrollY > 0) {
            navbar.style.backgroundColor = '#191919';
        } else {
            navbar.style.backgroundColor = 'transparent';
     
            
        }

        // Show or hide back to top button
        if (window.scrollY > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }

        // Highlight the active section in the navbar
        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('.navbar-nav .nav');

        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('.navbar-nav .nav[href*=' + id + ']').classList.add('active');
                });
            }
        });
    });

    // Scroll to top functionality
    document.getElementById("back-to-top").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Change navbar-nav background color on click
    let navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.addEventListener('click', function() {
        document.querySelector('.navbar-nav').classList.toggle('toggled');
    });

    // Close navbar when nav item is clicked in responsive mode
    document.querySelectorAll('.nav-item .nav').forEach(function(element) {
        element.addEventListener('click', function() {
            if (window.innerWidth <= 576) {
                let navbarCollapse = document.querySelector('#navbarNav');

                if (navbarCollapse.classList.contains('show')) {
                    toggleNavbar();
                }
            }
        });
    });
});
document.getElementById('download-cv').addEventListener('click', function(event) {
    event.preventDefault(); // ป้องกันการดำเนินการเริ่มต้นของลิงก์
    var url = this.href;
    // เปิดแท็บใหม่
    window.open(url, '_blank');

    // สร้างลิงก์ใหม่เพื่อดาวน์โหลดไฟล์
    var a = document.createElement('a');
    a.href = url;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
