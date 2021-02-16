const submit = document.getElementById('submitButton');
const input = document.getElementById('userInput');
let ip = "8.8.8.8";
let api_key = "at_A2hg6w4veqrY2FddQRLU4aaREDvfm";


// Request API 
// $.ajax({
//     url: "https://geo.ipify.org/api/v1",
//     data: {apiKey: api_key, ipAddress: ip},
//     success: function(data) {
//         $("body").append("<pre>"+ JSON.stringify(data,"",2)+"</pre>");
//     }
// });