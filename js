function updateVars(){

    let currDate = new Date();
    let currYear = currDate.getFullYear();

    let lastUpdated = "Last Updated: " + document.lastModified;

    document.getElementById('currYear').textContent = currYear;
    document.getElementById('lastUpdated').innerHTML = lastUpdated;

}