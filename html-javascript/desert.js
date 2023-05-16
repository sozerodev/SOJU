document.getElementById("addItemBtn").onclick = function (e) {
  document.getElementById("modalBg").style.display = "block";
};

document.getElementById("closeModal").onclick = function (e) {
  document.getElementById("modalBg").style.display = "none";
  //document.getElementById("addItemForm").style.display = "none";
};

const addDesert = (e) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const imgElement = document.createElement("img");
  imgElement.src = document.getElementById("image").value;
  imgElement.alt = document.getElementById("name").value;

  const contentElement = document.createElement("span");
  contentElement.textContent = document.getElementById("content").value;

  cardElement.appendChild(imgElement);
  cardElement.appendChild(contentElement);

  document.querySelector("section").appendChild(cardElement);

  document.querySelector("#name").value = "";
  document.querySelector("#image").value = "";
  document.querySelector("#content").value = "";
  document.getElementById("modalBg").style.display = "none";
};
document.getElementById("submit").onclick = () => {
  addDesert();
};
