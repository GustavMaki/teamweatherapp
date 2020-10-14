document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    let inputCityValue = document.getElementById("txtCity").value;
  
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCityValue}&appid=d54db95837a99766a279927c50b6fde1&units=metric`)
     .then(response => response.json())
     .then(data => {
        const { main, name, sys, weather } = data;
  
        const li = document.createElement("li");
        li.classList.add("city");
  
        const markup = `
          <div>
              <h2>
                  <span>${name}</span>
                  <sup>${sys.country}</sup>
              </h2>
              <div>${main.temp}<sup>°C</sup></div>
          </div>
        `;
  
        li.innerHTML = markup;
        document.getElementById("cities").appendChild(li);
      })
     .catch(() => {
      console.log("something went wrong, sorry");
    });
  
  });