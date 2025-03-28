document
  .getElementById("changeColorBtn")
  .addEventListener("click", function () {
    let randomColor =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    document.body.style.backgroundColor = randomColor;
    document.getElementById("colorCode").textContent = randomColor;
    console.log("Color changed to:", randomColor);
  });
