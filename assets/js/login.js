(async () => {
    const rawResponse = await fetch('https://test-final.b8one.academy/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"email": "academy@b8one.com","password":"Academy2022"})
    }); 
    if("email" == "academy@b8one.com" && "password" == "Academy2022"){ 
      window.location.href = "file:///C:/Users/pablo/OneDrive/%C3%81rea%20de%20Trabalho/PROVA%20B8/assets/dashboard.html"
    }
  
    const content = await rawResponse.json();
    console.log(content)
})();


 
