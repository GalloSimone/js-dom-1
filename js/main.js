const turnOn = (light, button) => {
    light.setAttribute("src", "./img/yellow_lamp.png");
    light.classList = "accesa";
    button.innerText = "Spegni";
    button.classList.replace("btn-warning", "btn-dark");
  };

  const turnOff = (light, button) => {
    light.setAttribute("src", "./img/white_lamp.png");
    light.classList = "spenta";
    button.innerText = "accendi";
    button.classList.replace("btn-dark", "btn-warning");
  };
  const buttonEl = document.querySelector("button");

  const imgEl = document.querySelector("img");

  buttonEl.addEventListener("click", () => {

    let isOff = !imgEl.classList.contains("accesa");
    
    isOff ? turnOn(imgEl, buttonEl) : turnOff(imgEl, buttonEl);
  });


  

  