document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.trim();
  const resultsContainer = document.getElementById("results");

  resultsContainer.innerHTML = "<p>Loading...</p>";

  if (!query) {
    resultsContainer.innerHTML = "<p>Please enter a search term.</p>";
    return;
  }

  fetch(
    `https://forkify-api.herokuapp.com/api/search?q=${encodeURIComponent(
      query
    )}`
  )
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    })
    .then((data) => {
      const { recipes } = data;

      if (!recipes || recipes.length === 0) {
        resultsContainer.innerHTML = "<p>No results found.</p>";
        return;
      }

      resultsContainer.innerHTML = recipes
        .map(
          (recipe) => `
        <div class="card">
          <img src="${recipe.image_url}" alt="${recipe.title}" />
          <div class="card-body">
            <h3 class="card-title">${recipe.title}</h3>
            <p class="card-publisher">By ${recipe.publisher}</p>
          </div>
        </div>
      `
        )
        .join("");
    })
    .catch((error) => {
      console.error(error);
      resultsContainer.innerHTML =
        "<p>Error fetching data. Please try again.</p>";
    });
});
