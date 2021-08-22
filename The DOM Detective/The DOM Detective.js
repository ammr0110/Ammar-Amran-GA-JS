// The DOM Detective
// Visit General Assembly's website in Google Chrome, and open up the JavaScript console.

// You'll have to do this all in the JavaScript console, so keep track of what you have written!

// Using DOM access methods, such as document.querySelector and document.querySelectorAll, find the following parts of the page:

// The title of the page
let title = document.querySelector("title");
title.textContent;

// The logo in the nav
let logo = document.querySelector(".navi_banner_logo");
logo.textContent;

// The "Find Your Course" button in the nav
let FindYourCourse = document.querySelectorAll(".navi_menu_item_link")[3];
FindYourCourse.textContent;

// The heading that says "Learning Today, Leading Tomorrow"
let heading = document.querySelector("h1");
heading.textContent;

// All the DOM nodes that contain course names (such as "Software Engineering", "UX Design Immersive" etc.)
let ListOfCourses = document.querySelectorAll("span.course-name");
ListOfCourses;

// The amount of campuses around the world
let AmountOfCampuses = document.querySelector("a[href='/locations']");
AmountOfCampuses.textContent

// The number of instructors
let NumberOfInstructors = document.querySelector("a[href='/how-we-work/teach-at-general-assembly']");
NumberOfInstructors.textContent

// The logos of GA's featured clients and hiring partners
let logoClients = document.querySelectorAll(".Employers__list___1cuG_ > div");
logoClients;

// GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)
let socialLinks = document.querySelectorAll(".navi_footer-grid-one-half.navi_footer-main-col > a");
socialLinks;

// The input where you add your email to sign up for the newsletter (in the footer)
let email = document.querySelector(".navi_footer-signup-email-input");
email;

// A few hints
// Look up the documentation on MDN for document.querySelector and document.querySelectorAll
// Rely heavily on "Inspect Element" in the DevTools
// You are going to need all sorts of CSS selectors to get this done (such as descendent selectors, direct descendent selectors, sibling selectors etc.)
// If you aren't feeling comfortable with the CSS selectors - visit https://flukeout.github.io/ to get used to them
// Don't be concerned if you find this very difficult, it is a tough one!
// If you get really stuck:
// "Inspect" the element you are trying to select
// In the DevTools, right click the DOM node that "Inspect" found:
// Copy -> Selector
// Don't just blindly copy it though! Try to see how it works, and if possible - reduce the specificity as much as possible
