const UserName = document.getElementById("UserName");
const UserBio = document.getElementById("UserBio");
const FlowersData = document.getElementById("Flowers");
const FlowingData = document.getElementById("Flowing");
const AllRepos = document.getElementById("Repos");
const UserImage = document.getElementById("UserImage");
const Repos = document.querySelector(".Repos");
const SearchButton = document.getElementById("Searchincon");

const ShowDataFromOne = (data) => {
  const { name, bio, followers, following, public_repos, avatar_url } = data;
  UserName.innerText = name;
  UserBio.innerText = bio;
  FlowersData.innerText = followers;
  FlowingData.innerText = following;
  AllRepos.innerText = public_repos;
  UserImage.src = avatar_url;
};

const Getdatafromapi = async (UserNameInput) => {
  try {
    const Response = await fetch(`https://api.github.com/users/${UserNameInput}`, {
      headers: {
        Authorization: "token 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",
      },
    });

    if (!Response.ok) {
      throw new Error("There was an Error in First Api !!");
    } else {
      const Responsedata = await Response.json();
      ShowDataFromOne(Responsedata);
    }
  } catch (err) {
    console.log(err);
  }
};

const getshowonseocnd = (name, clone_url) => {
  console.log(name);
  const CreateElment = document.createElement("a");
  CreateElment.classList.add("Repo");
  CreateElment.target = "_blank";
  CreateElment.innerText = name;
  CreateElment.href = clone_url;
  Repos.appendChild(CreateElment);
  
};

const GetdatafromapiSecond = (data) => {
  for (let idx = 0; idx < data.length; idx++) {
    const { name, clone_url } = data[idx];

    getshowonseocnd(name, clone_url);
  }
};
const GetFromApiSecond = async (UserNameInput) => {
  try {
    const Response = await fetch(`https://api.github.com/users/${UserNameInput}/repos`, {
      headers: {
        Authorization: "token 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",
      },
    });
    if (!Response.ok) {
      throw new Error("There was an Error in Second Api !!");
    } else {
      const Responsedata = await Response.json();
      GetdatafromapiSecond(Responsedata);
    }
  } catch (Err) {
    console.log(Err);
  }
};


const GetRemoveFromSearch = () => {
        const SearchBox = document.getElementById('SearchBox');
        SearchBox.value = " ";
}
SearchButton.addEventListener('click' , function(){
    const SearchInput = document.getElementById("SearchBox").value;
    Getdatafromapi(SearchInput);
    GetFromApiSecond(SearchInput);
    GetRemoveFromSearch();
})



