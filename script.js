document.addEventListener("DOMContentLoaded", () => {
  // Fetch dynamic features content from data.json
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const featuresContent = document.getElementById("features-content");
      featuresContent.innerHTML = data.featuresHTML;
    })
    .catch((error) => {
      console.error("Error fetching features:", error);
      document.getElementById("features-content").innerHTML =
        "<p>Sorry, we couldn't load the features at this time.</p>";
    });

  // Waitlist form submission handling
  const waitlistForm = document.getElementById("waitlist-form");
  waitlistForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    alert(
      `Thanks for signing up, ${email}! We'll notify you when Stride is ready.`
    );
    waitlistForm.reset();
  });
});
