const Container1 = document.createElement("div");
Container1.setAttribute("class", "container");
Container1.setAttribute("id", "hidden");
document.body.append(Container1);

const Row1 = document.createElement("div");
Row1.classList.add("row");
Container1.append(Row1);

async function bobsburgers() {
  const all = await fetch("https://bobsburgers-api.herokuapp.com/characters");
  const data = await all.json();
  data.forEach((character) => {
    const Column1 = document.createElement("div");
    Column1.setAttribute(
      "class",
      "col-4 col-sm-6 col-md-4 col-lg-4 col-xl-4 g-5"
    );

    const card1 = document.createElement("div");
    card1.setAttribute("class", "card h-100 ");
    card1.setAttribute("style", "width: 18rem;");
    card1.innerHTML = ` 
       <div class="card-header">
           <h4 class="card-text">${character.name}</h4>
       </div>
       <img class="card-img-top" src="${character.image.jpg}" alt="Photo">
       <div class="card-body">
         <div class="card-text">
           <h6>Gender : ${character.gender}</h6>
           <h6>Occupation: ${character.occupation}</h6>
           <h6>Hair Color: ${character.hairColor}</h6>
           <h6>VoicedBy: ${character.voicedBy}</h6>
           <h6>First Epidsode: ${character.firstEpisode}</h6>
         </div>
       </div>`;

    const button = document.createElement("button");
    button.classList.add("btn", "btn-primary");
    button.textContent = "More Details";
    card1.append(button);
    Column1.append(card1);
    Row1.append(Column1);
  });
}
bobsburgers();
