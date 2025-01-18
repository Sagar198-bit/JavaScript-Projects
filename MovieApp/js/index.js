const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const GetMoviesData = async () => {
  try {
    const Response = await fetch(APIURL);
    if (!Response.ok) {
      throw new Error("This was an Error in Show Poular movie Api !!");
    } else {
      const data = await Response.json();
      showdata(data);
    }
  } catch (err) {
    console.log(err);
  }
};

GetMoviesData();

const ShowOnMoviesCard = (title, overview, poster_path) => {
  const CreateElement = document.createElement("div");
  CreateElement.classList.add("Movies-Card");
  CreateElement.innerHTML = `<img src="https://image.tmdb.org/t/p/w185/${poster_path}" alt="coupleimage">
                  <div class="Info-Contaier">
                      <h2>${title}</h2>
                      <p>
                          ${overview}
                      </p>
                  </div>`;
  document.querySelector(".Movies-Card-Container").appendChild(CreateElement);
};

function showdata(data) {
  const { results } = data;

  results.forEach((element) => {
    const { title, overview, poster_path } = element;

    ShowOnMoviesCard(title, overview, poster_path);
  });
}

const getSearchResult = async (Movies) => {
  try {
    const Response = await fetch(
      `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${Movies}`
    );
    if (!Response.ok) {
      throw new Error("This was an Error In Search Api !!");
    } else {
      const data = await Response.json();
      showdata(data);
    }
  } catch (err) {
    console.log(err);
  }
};

const SearchButton = document.getElementById("SearchBox");
SearchButton.addEventListener("input", (e) => {
  const dataa = SearchButton.value;
  if (dataa === "") {
    RemoveChildNodes();
    GetMoviesData();
  } else {
    getSearchResult(dataa);
    RemoveChildNodes();
  }
});

function RemoveChildNodes() {
  const AllElements = document.querySelector(".Movies-Card-Container");
  AllElements.innerHTML = "";
  console.log(AllElements);
}
