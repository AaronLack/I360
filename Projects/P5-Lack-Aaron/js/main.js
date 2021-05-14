//Aaron Lack ~ Project 5 ~ I360 ~ 4/19/21

//Js file for the map
var mymap = L.map('mapid').setView([39.166592, -86.534889], 13);

//Add the map
//I got the map from this website: https://leafletjs.com/examples/quick-start/
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(mymap);

//Adds a marker to Luddy
var marker = L.marker([39.172865, -86.523067]).addTo(mymap);
//Adds a popup message:
marker.bindPopup("Luddy School of <br><b>Informatics, Computing, and Engineering<b>").openPopup();

//Navigation
function openNav() {
    document.querySelector('#mySidenav').style.width = "250px"; 
    document.querySelector('.all-over-bkg').classList.add('is-visible');
  }
  
  function closeNav() {
    document.querySelector('#mySidenav').style.width = "0"; 
    document.querySelector('.all-over-bkg').classList.remove('is-visible');
  }
  
  document.querySelector('.openbtn').addEventListener('click', openNav);
  document.querySelector('.closebtn').addEventListener('click', closeNav);