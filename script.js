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

submit.addEventListener("click", (e) => {
    e.preventDefault();
    error.innerText = "";
    if(input.value == ""){
        error.innerText = "Error: Please enter a valid IP address";
    }else{
        ip = input.value;
        input.value = "";
        $.get({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: api_key, ipAddress: ip},
            success: function(data) {
                // $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
                ip_addr.innerText = data.ip;
                loc.innerText = data.location.city + ", " + 
                data.location.region + " " + data.location.postalCode;
                timezone.innerText = "UTC " + data.location.timezone;
                isp.innerText = data.isp;
            }
        }).fail(function (){
            // invalid IP address case 
            error.innerText = "Error: Please enter a valid IP address";
        })
    }
})


