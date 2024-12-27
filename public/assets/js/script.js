document.addEventListener("DOMContentLoaded", function () {
    const contentElement = document.getElementById("biographyContent");
    const readMoreBtn = document.querySelector(".read-more-btn");
  
    // Combine the content if it's in multiple paragraphs
    const originalText = contentElement.innerText;
    const words = originalText.split(" ");
  
    if (words.length > 200) {
      // Truncate text to 200 words
      const truncatedText = words.slice(0, 200).join(" ") + "...";
      contentElement.innerText = truncatedText;
  
      // Show the Read More button
      readMoreBtn.style.display = "block";
  
      // Toggle functionality
      readMoreBtn.addEventListener("click", function () {
        if (contentElement.innerText === truncatedText) {
          contentElement.innerText = originalText; // Show full text
          readMoreBtn.innerText = "Read Less";
        } else {
          contentElement.innerText = truncatedText; // Show truncated text
          readMoreBtn.innerText = "Read More";
        }
      });
    } else {
      // Hide the Read More button if the text is not long enough
      readMoreBtn.style.display = "none";
    }
  });
  