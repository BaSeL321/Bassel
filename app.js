fetch('https://api.covid19api.com/summary').then((data)=>{return data.json()}).then((data)=>{display(data)})
function display(data){
document.write("<link rel='styleSheet' href='css/index.css'")
document.write("<link rel= 'styleSheet' href='css/bootstrap.min.css'")

document.write("<!DOCTYPE html>")
document.write("<div class = 'container'>")
document.write("<h1>Corona Virus Cases: " + data.Global.TotalConfirmed + "</h1>")
document.write("<h1>Corona deathes: " + data.Global.TotalDeaths + "</h1>")

document.write("<table class='table-hover'>")

document.write("<th>Country</th>")
document.write("<th>Total cases</th>")
document.write("<th>New Cases</th>")
document.write("<th>Total Deaeths</th>")
document.write("<th class=''>New Deaths</th>")

for(i=0; i<data.Countries.length; i++) {
    document.write("<tr>")
    document.write("<td class='bg-light'>" + data.Countries[i].Country + "</td>")
    document.write("<td >" + data.Countries[i].TotalConfirmed + "</td>")
    document.write("<td>" + data.Countries[i].NewConfirmed + "</td>")
    document.write("<td class='bg-danger'>" + data.Countries[i].TotalDeaths + "</td>")
    document.write("<td class='bg-danger'>" + data.Countries[i].NewDeaths + "</td>")

    document.write("</tr>")
}

document.write("</table>")
document.write("</div>")
}