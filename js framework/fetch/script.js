const requisition = fetch ("https://ranekapi.origamid.dev/wp-json/api/produto").then(response =>{
    return response.json();
}).then(jsonBody => {
    console.log(jsonBody)
});

