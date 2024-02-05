/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/*   Define Global Variables */

const menu_list = document.querySelector('#navbar__list');
const main_sections = document.querySelectorAll('section');

/* End Global Variables*/

/* Changing title content */

const title = document.querySelector('.heading_title').innerHTML = 'Eat Well';

/* End changing title content */

/* Create the navigation bar links */

function createNav() {
    main_sections.forEach(section => {
        const nav_lists = document.createElement('li');
        nav_lists.insertAdjacentHTML("afterbegin", `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        menu_list.appendChild(nav_lists);

        //Calling the ScrollEvent function

        scrollEvent(section, nav_lists);
    });
}
createNav();

/* End creating the navigation bar links */



//Scroll to anchor ID using scrollTO event

function scrollEvent(section, nav_lists) {
    nav_lists.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth"
        });
    });
}

// End of Scroll to anchor ID using scrollTO event



// Add class 'active' to section when near top of viewport

function addActiveClass() {
    const select_links = document.querySelectorAll(".menu__link")
    main_sections.forEach((section) => {
        const element_position = section.getBoundingClientRect();
        if (element_position.top <= 420 && element_position.bottom >= 200) {

            section.classList.add("your-active-class");

        } else {
            section.classList.remove("your-active-class");
        }
    })
}

//Calling the addActiveClass function

window.addEventListener('scroll', (event) => {
    addActiveClass();
})

// End class 'active' to section when near top of viewport



// Updating the footer

const select_footer = document.querySelector('footer');
select_footer.style.textAlign = 'center';
const add_current_year = document.createElement('span');
select_footer.appendChild(add_current_year);
add_current_year.innerHTML = new Date().getFullYear();

// End of updating the footer
