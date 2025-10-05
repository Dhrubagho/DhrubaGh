const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const navLinkItems = document.querySelectorAll('.nav-links a'); // Select all nav links

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});


// Close the navbar when clicking outside
document.addEventListener('click', (event) => {
    if (navLinks.classList.contains('active') && !navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});




// Close the navbar on nav link click
navLinkItems.forEach(link => {
link.addEventListener('click', () => {
    navLinks.classList.remove('active'); // Hide nav menu
    menuToggle.classList.remove('active'); // Reset menu icon
});
});
const homeLink = document.getElementById('homeLink'); // Get Home link

// Function to remove the 'active' class from all links
function removeActiveLinks() {
    navLinkItems.forEach(link => {
        link.classList.remove('active');
    });
}

// Function to set the active class on a clicked link and scroll smoothly
function setActiveLink(event, link) {
    event.preventDefault(); // Prevent default link behavior

    // Smooth scroll to the linked section
    const targetId = link.getAttribute('href').substring(1); // Get target section ID
    const targetSection = document.getElementById(targetId);

    if (link.id === 'homeLink') {
        // Explicitly scroll to the top for "Home" button
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
    }

    // If the link is already active and is not "Home", reset to Home
    if (link.classList.contains('active') && link !== homeLink) {
        removeActiveLinks(); // Remove active class from all links
        homeLink.classList.add('active'); // Set Home link as active
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    } else {
        removeActiveLinks();
        link.classList.add('active'); // Add active class to clicked link
    }
}

// Set "Home" link as active on page load
document.addEventListener('DOMContentLoaded', () => {
    homeLink.classList.add('active'); // Set Home link as active
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
});

// Highlight active link on scroll
window.addEventListener('scroll', () => {
    navLinkItems.forEach(link => {
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const sectionTop = targetSection.offsetTop;
            const sectionHeight = targetSection.offsetHeight;
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                removeActiveLinks();
                link.classList.add('active');
            }
        }
    });
});


//footer
const AboutUsLink = document.getElementById('AboutUsLink');
const mainContent = document.getElementById('mainContent');
const AboutUsSection = document.getElementById('AboutUsSection');
const AboutMeLink = document.getElementById('AboutMeLink');
const AboutMe = document.getElementById('AboutMe');

const PlantInLink = document.getElementById('PlantInLink');
const Nav = document.getElementById('Nav');
const footer = document.getElementById('footer');
const homeLinkM = document.getElementById('homeLinkM');
const refreshButton = document.getElementById('refreshButton');


const closeBtna = document.getElementById('CloseBtna');
const welcome = document.getElementById('welcome');


//aboutus closebtn
closeBtna.addEventListener('click', function (event) {
  AboutUsSection.style.display = 'none';
  welcome.style.display = 'block';
  mainContent.style.display = 'block'; // Show the main content again when the "About Us" section is closed
  AboutMe.style.display = 'none'; // Show the About Me section if needed
  

});


//aboutme close btn//
const closeBtnam = document.getElementById('CloseBtnam');

closeBtnam.addEventListener('click', function (event) {
AboutMe.style.display = 'none';
welcome.style.display = 'block';
mainContent.style.display = 'block'; // Show the main content again when the "About Me" section is closed
});


// Function to show plant info and hide all other elements
function showPlantInfo() {
    // Hide all sections except mainContent and refreshButton
    AboutUsSection.style.display = 'none';
    AboutMe.style.display = 'none';
    Nav.style.display = 'none';
    footer.style.display = 'none';
    welcome.style.display = 'none';

    // Show main content and refresh button
    mainContent.style.display = 'block';
    refreshButton.style.display = 'block';
}

// Function to restore the page to the first view
function restoreLayout() {
    AboutUsSection.style.display = 'block';            // Restore visibility of all sections
    AboutMe.style.display = 'none';
    Nav.style.display = 'flex';  // Ensure Nav uses flexbox to keep it centered
    footer.style.display = 'block';
    AboutUsSection.style.display = 'none';
    welcome.style.display = 'block';

    // Hide main content and refresh button
    mainContent.style.display = 'block';
    refreshButton.style.display = 'none';
}

// Event listener for clicking the "Plant Information" link
PlantInLink.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default link behavior
    showPlantInfo(); // Show plant info and hide other sections
});

// Event listener for clicking the "Refresh" button
refreshButton.addEventListener('click', function () {
    restoreLayout(); // Restore the page to its default state
});



//AboutMe
AboutMeLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (AboutMe.style.display === 'none' || AboutMe.style.display === '') {
        AboutMe.style.display = 'block';
        AboutUsSection.style.display = 'none';
        mainContent.style.display = 'none';
        welcome.style.display = 'none';

    } else {
        AboutMe.style.display = 'none';
        mainContent.style.display = 'block';
        welcome.style.display = 'block';
    }
});

function openLink() {
    window.open("https://www.facebook.com/profile.php?id=61557112575756", "_blank");

}

//Aboutfuntion
AboutUsLink.addEventListener('click', function (event) {
    event.preventDefault();

    if (AboutUsSection.style.display === 'none' || AboutUsSection.style.display === '') {
        AboutUsSection.style.display = 'block';
        mainContent.style.display = 'none';
        AboutMe.style.display = 'none';
        welcome.style.display = 'none';
    } else {
        AboutUsSection.style.display = 'none';
        mainContent.style.display = 'block';
        welcome.style.display = 'block';

    }
});

const AboutUsLinkN = document.getElementById('AboutUsLinkN');
const ContactLink = document.getElementById('ContactLink');


// Show Main Content and hide About Us when "Home" is clicked
homeLink.addEventListener("click", function (event) {
    event.preventDefault();
    AboutUsSection.style.display = "none"; // Hide About Us
    AboutMe.style.display = "none";
    mainContent.style.display = "block"; // Show main content
});

// About Us Link click event
AboutUsLinkN.addEventListener('click', function (event) {
    AboutUsSection.style.display = "none"; // Hide About Us
    AboutMe.style.display = "none";
    mainContent.style.display = "block"; // Show main content
});

// Contact Link click event
ContactLink.addEventListener('click', function (event) {
    AboutUsSection.style.display = "none"; // Hide About Us
    AboutMe.style.display = "none";
    mainContent.style.display = "block"; // Show main content
});

//mainpage photo
function showDetails(name, botanicalName, commonName, genus, family, imageUrl) {
    // Set the content for the modal
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalBotanicalName").innerText = botanicalName;
    document.getElementById("modalCommonName").innerText = commonName;
    document.getElementById("modalGenus").innerText = genus;
    document.getElementById("modalFamily").innerText = family;
    document.getElementById("modalImage").src = imageUrl;

    // Display the modal
    document.getElementById("modal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }




 
  //Scearch
  function searchContent() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const plantCards = document.querySelectorAll('.plant-card');
    const noResultsMessage = document.getElementById('noResultsMessage');
    const footer = document.getElementById('footer');
    let found = false;

    plantCards.forEach((card) => {
        const plantName = card.querySelector('h2').textContent.toLowerCase();
        const botanicalName = card.querySelector('p').textContent.toLowerCase();

        if (plantName.includes(searchQuery) || botanicalName.includes(searchQuery)) {
            card.style.display = 'block';
            found = true;
        } else {
            card.style.display = 'none';
            welcome.style.display = 'none';
           

        }
    });

    if (searchQuery === '') {
        // If the search is cleared, reset everything
        noResultsMessage.style.display = 'none';
showPage(currentPage);
       next.style.display = 'block';
   

        welcome.style.display = 'block';
        footer.classList.remove('footer-fixed');
        footer.style.position = 'static'; // Reset footer to default
    } else if (found) {
        // Found matching results
        noResultsMessage.style.display = 'none';
        footer.classList.add('footer-fixed');
        footer.style.position = 'fixed'; // Fix footer at bottom
        next.style.display = 'none';
    } else {
        // No results found
        noResultsMessage.style.display = 'block';
        footer.classList.add('footer-fixed');
        footer.style.position = 'fixed'; // Fix footer at bottom
        next.style.display = 'none';
    }
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        searchContent();
    }
}





//nex button
const next =document.getElementById('next');
const cards = document.querySelectorAll('.plant-card');
let itemsPerPage = window.innerWidth <= 768 ? 6 : 24; // Items per page based on device type
let currentPage = 0;


// Function to display the current page
function showPage(page) {
const start = page * itemsPerPage;
const end = start + itemsPerPage;

// Hide all cards
cards.forEach((card, index) => {
card.style.display = index >= start && index < end ? 'block' : 'none';
});

// Enable or disable buttons
document.getElementById('prev-button').disabled = page === 0;
document.getElementById('next-button').disabled = end >= cards.length;
}

// Navigation functions
function nextPage() {
currentPage++;
showPage(currentPage);
}

function prevPage() {
currentPage--;
showPage(currentPage);
}

// Adjust itemsPerPage when resizing the window
window.addEventListener('resize', () => {
itemsPerPage = window.innerWidth <= 768 ? 6 : 24;


});
// Prevent resetting to the first page on scroll

showPage(currentPage);
