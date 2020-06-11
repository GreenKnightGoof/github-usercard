/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "kdneldor",
];
const cards = document.querySelector(".cards");

followersArray.forEach((user) => {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then((response) => {
      const userComponent = cardMaker(response.data);
      cards.appendChild(userComponent);
      console.log(response.data);
    })

    .catch((error) => {
      console.log("The data did not return successfully", error);
    });
});
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function cardMaker(object) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const userIMG = document.createElement("img");
  userIMG.src = `${object.avatar_url}`;
  cardElement.appendChild(userIMG);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  cardElement.appendChild(cardInfo);

  const nameElement = document.createElement("h3");
  nameElement.classList.add("name");
  nameElement.textContent = `${object.name}`;
  cardInfo.appendChild(nameElement);

  const userName = document.createElement("p");
  userName.classList.add("username");
  userName.textContent = `${object.login}`;
  cardInfo.appendChild(userName);

  const locationElement = document.createElement("p");
  locationElement.textContent = `Location: ${object.location}`;
  cardInfo.appendChild(locationElement);

  const profile = document.createElement("p");
  profile.textContent = `Profile: `;
  cardInfo.appendChild(profile);

  const anchorElement = document.createElement("a");
  anchorElement.href = `${object.html_url}`;
  anchorElement.textContent = `${object.html_url}`;
  profile.appendChild(anchorElement);

  const followersElement = document.createElement("p");
  followersElement.textContent = `Followers: ${object.followers}`;
  cardInfo.appendChild(followersElement);

  const followingElement = document.createElement("p");
  followingElement.textContent = `Following: ${object.following}`;
  cardInfo.appendChild(followingElement);

  const bioElement = document.createElement("p");
  bioElement.textContent = `Bio: ${object.bio}`;
  cardInfo.appendChild(bioElement);

  return cardElement;
}
