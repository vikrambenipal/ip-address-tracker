// form variables
const submit = document.getElementById('submitButton');
const input = document.getElementById('userInput');
const error = document.getElementById('error');
// output variables
const ip_addr = document.getElementById('ip-addr');
//const location = document.getElementById('location');
const timezone = document.getElementById('timezone');
const isp = document.getElementById('isp');
// api key 
const api_key = "at_A2hg6w4veqrY2FddQRLU4aaREDvfm";
let ip = "";

submit.addEventListener("click", (e) => {
    e.preventDefault();
    ip = input.value;
    input.value = "";

    $.get({
        url: "https://geo.ipify.org/api/v1",
        data: {apiKey: api_key, ipAddress: ip},
        success: function(data) {
            // $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
            console.log(data.ip);
            console.log(data.location.country);
            console.log(data.location.region);
            console.log(data.location.postalCode);
            console.log(data.location.timezone);
            console.log(data.isp);
        }
    }).fail(function (){
        // invalid IP address case 
        console.log("error");
        error.innerText = "Error: Please enter a valid IP address";
    })
})


