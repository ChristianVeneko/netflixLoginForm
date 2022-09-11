var form = document.getElementById('sheetdb-form')
form.addEventListener("submit", e=>{
    e.preventDefault();
    fetch(form.action,{
        method : "POST",
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        Response => Response.json()
    ).then((html) =>{
        window.open('menu.html', '_blank');
    })

        

})