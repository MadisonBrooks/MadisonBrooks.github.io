document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("alertMe");
    const dropdown = document.getElementById("dropdownBox");
  
    button.addEventListener("click", function () {
      if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
      } else {
        dropdown.style.display = "none";
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("hoverButton");
    const imageContainer = document.getElementById("hoverImageContainer");
  
    button.onmouseover = function () {
      imageContainer.style.display = "block";
    };
  
    button.onmouseleave = function () {
      imageContainer.style.display = "none";
    };
  
  });
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("buttonCounter");
    const counterDisplay = document.getElementById("counter");
  
    let count = 0;
  
    button.addEventListener("click", function () {
      count++;
      counterDisplay.textContent = count;
  
      // Check if the number is even or odd using modulus operator
      if (count % 2 === 0) {
        counterDisplay.style.color = "blue"; // Even
      } else {
        counterDisplay.style.color = "red"; // Odd
      }
    });
  });

 document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  container.addEventListener("click", function () {
    container.textContent = ""; // Clear existing text if needed

    for (let i = 0; i < 5; i++) {
      container.append("Wait!? ");
    }
  });
});