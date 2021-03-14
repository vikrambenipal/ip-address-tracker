// form variables
const submit = document.getElementById('submitButton');
const input = document.getElementById('userInput');
const error = document.getElementById('error');
// output variables
const ip_addr = document.getElementById('ip-addr');
const loc = document.getElementById('location');
const timezone = document.getElementById('timezone');
const isp = document.getElementById('isp');
// api key 
const api_key = "at_A2hg6w4veqrY2FddQRLU4aaREDvfm";
let ip = "";

// Default Leaflet JS Position
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

var myicon = L.icon({
    iconUrl: 'images/icon-location.svg',
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([51.5, -0.09], {icon: myicon}).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidnVrMTM2IiwiYSI6ImNrbDlsYTM5MjA3c3cyd254ZTkxbWxwdGsifQ.pOK_bWvgJzN18TwSeJSY5A'
}).addTo(mymap);

submit.addEventListener("click", (e) => {
    e.preventDefault();
    error.innerText = "";
    if(input.value == ""){
        error.innerText = "Please enter a valid IP address";
    }else{
        ip = input.value;
        input.value = "";
        $.get({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: api_key, ipAddress: ip},
            success: function(data) {
                // $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
                console.log(data);
                ip_addr.innerText = data.ip;
                loc.innerText = data.location.city + ", " + 
                data.location.region + " " + data.location.postalCode;
                timezone.innerText = "UTC " + data.location.timezone;
                isp.innerText = data.isp;

                // modify map state
                mymap.panTo(new L.LatLng(data.location.lat, data.location.lng));
                L.marker([data.location.lat, data.location.lng], {icon: myicon}).addTo(mymap);
            }
        }).fail(function (){
            // invalid IP address case 
            error.innerText = "Please enter a valid IP address";
        })
    }
})


