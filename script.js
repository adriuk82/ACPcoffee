// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // 1. Simple Cart Counter Functionality
    let cartCount = 0;
    const cartCountElement = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
            
            // Temporary bounce effect or alert behavior
            button.textContent = "Added!";
            button.style.backgroundColor = "#4a3728";
            button.style.color = "white";
            
            setTimeout(() => {
                button.textContent = "Add to Order";
                button.style.backgroundColor = "transparent";
                button.style.color = "#4a3728";
            }, 1000);
        });
    });

    // 2. Email Newsletter Form Submission
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page from refreshing
        
        const emailValue = document.getElementById('emailInput').value;
        
        if (emailValue) {
            // Display success message
            formFeedback.textContent = `Thank you! Your 10% discount code has been sent to ${emailValue}.`;
            formFeedback.style.color = "#c7a17a";
            formFeedback.classList.remove('hidden');
            
            // Clear input field
            contactForm.reset();
        }
    });
});