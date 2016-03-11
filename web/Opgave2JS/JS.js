$(document).ready(function ()
{
    var htmlString = "";
    var url = "http://localhost:8084/exam-preparation_REST_JSON/api/addresses/"; 
    $("#submitBtn").click(function ()
    {
        url = url.concat($("#num").val());
        url = url.concat("/")
        url = url.concat($("#fields").val());
        var ajaxRequest = new XMLHttpRequest();
        var fields = "";
        fields = $("#fields").val().toString();
        var fieldList = [];
        fieldList = fields.split(",");
        var myPersons = [];
        ajaxRequest.onreadystatechange = function ()
        {
            if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200)
            {
                htmlString = "<table>";
                myPersons = JSON.parse(ajaxRequest.responseText);
                for(i = 0; i < myPersons.length; i++)
                {
                    htmlString = htmlString.concat("<tr>");
                    htmlString = htmlString.concat("<td>" + myPersons[i].fName + "</td>");
                    htmlString = htmlString.concat("<td>" + myPersons[i].lName + "</td>");
                    htmlString = htmlString.concat("<td>" + myPersons[i].city + "</td>");
                    htmlString = htmlString.concat("<td>" + myPersons[i].address + "</td>");
                    htmlString = htmlString.concat("</tr>");
                }             

                htmlString = htmlString.concat("</table>");
                console.log(htmlString);
                $("#box").html(htmlString);
                url = "http://localhost:8084/exam-preparation_REST_JSON/api/addresses/";
                
            }
        };
        ajaxRequest.open("GET",url,true);
        ajaxRequest.send();
    });
});