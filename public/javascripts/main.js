var searched = [];
document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    let inputCityValue = document.getElementById("txtCity").value;

  var n = searched.includes(inputCityValue);  
  
  url =`https://api.openweathermap.org/data/2.5/weather?q=${inputCityValue}&appid=d54db95837a99766a279927c50b6fde1&units=metric`;
  
  

  if(n === false){
  searched.push(inputCityValue);
  document.getElementById("alert").innerHTML= " "
  fetch(url)
     .then(response => response.json())
     .then(data => {
        const { main, name, sys, weather } = data;
  
        const li = document.createElement("li");
        li.classList.add("city");
  
        const markup = `
          <div id= "result">
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
      document.getElementById("alert").innerHTML= "Doesnt exist!"
    });
    
  }
  else{
    
  }
  });