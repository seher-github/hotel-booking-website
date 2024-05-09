//Toggle Menu 
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-menu');
    const toggleMenu = document.querySelector('.toggle-menu');

    toggleButton.addEventListener('click', function () {
        toggleMenu.classList.toggle('active');
    });
});

//pop up form on book now button
document.addEventListener('DOMContentLoaded', function () {
    const bookNowBtn = document.getElementById('book-now-btn');
    const popupForm = document.getElementById('popup-form');

   
    bookNowBtn.addEventListener('click', function (event) {
        event.preventDefault(); 
        
        popupForm.classList.toggle('active');
    });

    
    window.addEventListener('click', function (event) {
        if (!popupForm.contains(event.target) && event.target !== bookNowBtn) {
            popupForm.classList.remove('active');
        }
    });

   
    popupForm.addEventListener('click', function (event) {
        event.stopPropagation(); 
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const counts = document.querySelectorAll('.count');
    const speed = 500;

    counts.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;

        const updateCount = () => {
            const increment = target / speed;
            count += increment;

            if (count < target) {
                counter.innerText = Math.ceil(count)+"+";
                setTimeout(updateCount, 1);
            } else {
                counter.innerText =target + "+" ;
            }
        };

        updateCount();
    });
});









