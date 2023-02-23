const url = 'wss://echo-ws-service.herokuapp.com';

const output = document.querySelector("#output");
const btnSendMessage = document.querySelector("#message-btn");
const input = document.querySelector("#message-input");
const btnSendGeo = document.querySelector('#geo-btn');

function pageLoaded() {

    let websocket = new WebSocket(url);

    websocket.onopen = function() {
        console.log("CONNECTED");
    };

    websocket.onmessage = (event) => {
        output.innerHTML += `<div class="response">${event.data}</div>`
    }

    function sendMessage() {
        if (input.value) {
            websocket.send(input.value);
            output.innerHTML += `<div class="message">${input.value}</div>`
        } else return;
    }

    btnSendMessage.addEventListener("click", sendMessage);





    btnSendGeo.addEventListener('click', () => {
        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(getGeo, rejectGeo);
          } else {
            console.log('ERROR(geo)')
          }
    });
    
    const rejectGeo = () => {
        console.log('ERROR(geo)');
    }
    
    const getGeo = (position) => {
    
        output.innerHTML += `
        <div class='geo-div'>
         <button class='output-geo'>
           <a id='mapLink'>Гео-локация</a>
          </button>
        </div>
        `;
    
        const mapLink = document.querySelector('#mapLink');
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
    
        mapLink.href = `https://yandex.ru/maps/?pt=${longitude},${latitude}&z=18&l=map`;
        mapLink.target = '_blank';
    }

};


document.addEventListener("DOMContentLoaded", pageLoaded);