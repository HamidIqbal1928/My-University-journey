window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });



  // const cards = document.querySelectorAll('.testimonial-card');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// let currentIndex = 0;

// function updateCarousel() {
//   cards.forEach((card, index) => {
//     card.classList.remove('active');
//     if (index === currentIndex) {
//       card.classList.add('active');
//     }
//   });
// }

// prevBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + cards.length) % cards.length;
//   updateCarousel();
// });

// nextBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % cards.length;
//   updateCarousel();
// });

// // Auto-slide every 5 seconds
// setInterval(() => {
//   currentIndex = (currentIndex + 1) % cards.length;
//   updateCarousel();
// }, 5000);





// const btn = document.querySelector('.form-btn');

// document.getElementById('memoryForm')
//   .addEventListener('submit', function(event) {
//     event.preventDefault();

//     btn.textContent = 'Sending...'; // Change the button text while sending

//     const serviceID = 'default_service';
//     const templateID = 'template_y1uriy7';

//     // Prepare form data (including the image file)
//     const formData = new FormData(this);

//     // Append additional fields if necessary
//     formData.append("user_name", document.querySelector('input[name="user_name"]').value);
//     formData.append("user_email", document.querySelector('input[name="user_email"]').value);
//     formData.append("message", document.querySelector('textarea[name="message"]').value);
    
//     // Handle image upload (converting to base64)
//     const memoryImage = document.getElementById('memoryImage').files[0];
//     if (memoryImage) {
//       const reader = new FileReader();
//       reader.onloadend = function () {
//         // Append image as base64 string
//         formData.append("memory_image", reader.result);
        
//         // Send the email with form data
//         emailjs.sendForm(serviceID, templateID, formData)
//           .then(() => {
//             btn.textContent = 'Submit Memory'; // Reset button text on success
//             alert('Your memory has been submitted successfully!');
//           }, (err) => {
//             btn.textContent = 'Submit Memory'; // Reset button text on error
//             alert('Error: ' + JSON.stringify(err));
//           });
//       };
//       reader.readAsDataURL(memoryImage); // Read the image file as base64
//     } else {
//       // Send without image if no image is selected
//       emailjs.sendForm(serviceID, templateID, formData)
//         .then(() => {
//           btn.textContent = 'Submit Memory'; // Reset button text on success
//           alert('Your memory has been submitted successfully!');
//         }, (err) => {
//           btn.textContent = 'Submit Memory'; // Reset button text on error
//           alert('Error: ' + JSON.stringify(err));
//         });
//     }
//   });






// for navbar js code

  // document.addEventListener("DOMContentLoaded", () => {
  //   const menuIcon = document.querySelector(".menu-icon");
  //   const dropdownMenu = document.querySelector(".dropdown-menu");
  
  //   menuIcon.addEventListener("click", () => {
  //     const isVisible = dropdownMenu.style.display === "flex";
  //     dropdownMenu.style.display = isVisible ? "none" : "flex";
  //   });
  
  //   // Optional: Close the menu when clicking outside
  //   document.addEventListener("click", (event) => {
  //     if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
  //       dropdownMenu.style.display = "none";
  //     }
  //   });
  // });


  document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    menuIcon.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent click propagation
      const isVisible = dropdownMenu.style.display === "flex";
      dropdownMenu.style.display = isVisible ? "none" : "flex";
    });
  
    // Optional: Close the menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon1");
    const dropdownMenu = document.querySelector(".dropdown-menu1");
  
    menuIcon.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent click propagation
      const isVisible = dropdownMenu.style.display === "flex";
      dropdownMenu.style.display = isVisible ? "none" : "flex";
    });
  
    // Optional: Close the menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
      }
    });
  });
  


  