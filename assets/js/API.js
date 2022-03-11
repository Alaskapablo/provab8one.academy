
const API_URL_products= "https://test-final.b8one.academy/products/more-sold";
async function fetchData() {
    const response = await fetch(API_URL_user);
    const responseJson = await response.json();
    return responseJson;
}


function populateProducts(products){
    const productsblock = document.querySelector(".product-area")
    const productsHtmlArray = (products =>{
        return`

    <div class="block-product">
        <div class="product__info">
            <div class="number-product__block">
                <span class="number-text">
                    ${products.name}
                </span>
            </div>
            <img src="./images/pc-img.png" alt="">
            <div class="product-name">
                <span class="name-product">
                    Computador Gamer Completo Fácil Intel i5 (Terceira Geração) 8GB Placa de Vídeo GT 730 2GB...
                </span>
            </div>
        </div>
        <div class="block-product__description">
            <div class="product-description">
                <span class="number-code__description">
                    #912304817412-3
                </span>
            </div>
            <div class="product-category__description">
                <span class="department__description">
                    Eletrônicos
                </span>
            </div>
            <div class="product-value__description">
                <span class="value__description">
                    R$ 2.999,00
                </span>
            </div>
        </div>
    </div>
                       
        `
    })
    console.log({productsHtmlArray})
    productsblock.insertAdjacentHTML("beforeend", `
    
    
    
    `)
}


const API_URL_company= "https://test-final.b8one.academy/user";
async function fetchData() {
    const response = await fetch(API_URL_user);
    const responseJson = await response.json();
    return responseJson;
}

function populateCompany(organization){
    const companyblock = document.querySelector(".header")
    const organizationHtmlArray = (company =>{
        return`
            <span class="header-my-company">
                Minha Empresa
            </span>
        `
    })
    console.log({organizationHtmlArray})
    companyblock.insertAdjacentHTML("beforeend", `
    
        
    `)
}




const API_URL_user= "https://test-final.b8one.academy/user";
async function fetchData() {
    const response = await fetch(API_URL_user);
    const responseJson = await response.json();
    return responseJson;
}

function populateUser(username){
    const avatarblock = document.querySelector(".block-avatar")
    const usernameHtmlArray = (user =>{
        return`
            <button class="avatar-profile-image__button">
                <img class="avatar-profile__image" src="./images/Avatar-profile-desktop.png">  
                <span class="avatar-profile__name">
                    Gustavo Silva
                </span> 
            </button> 
        `
    })
    console.log({usernameHtmlArray})
    avatarblock.insertAdjacentHTML("beforeend", `
        <div class="block-avatar">
            <button class="avatar-profile-image__button">
                <img class="avatar-profile__image" src="./images/Avatar-profile-desktop.png">  
                <span class="avatar-profile__name">
                    Gustavo Silva
                </span> 
            </button> 
            <div class="dropdown-avatar">
                <div class="first-block-avatar">
                    <span class="avatar-dropdown__title">
                        Olá, <a href="#" class="avatar-dropdown__title--link">Gustavo 👋</a>
                    </span>
                </div>
                <div class="second-block-avatar">
                    <a href="#" class="avatar-title">
                        Minha Conta
                    </a>
                    <a href="#" class="avatar-title__exit">
                        Sair
                    </a>
                </div>
            </div>    
        </div>
    `)
}


const API_URL= "https://test-final.b8one.academy/menu";
async function fetchData() {
    const response = await fetch(API_URL);
    const responseJson = await response.json();
    return responseJson;
}

function populateMenu(menuTree){
    const menuGroup = document.querySelector(".menu-group__item")
    const menuTreeHtmlArray = menuTree.map(menu =>{
        return`
        <div class="menu-group__item">
             <svg class="menu-group__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 3.75H3.75V10.5H10.5V3.75Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.25 3.75H13.5V10.5H20.25V3.75Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M20.25 13.5H13.5V20.25H20.25V13.5Z" fill="#425DC7" stroke="#425DC7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.5 13.5H3.75V20.25H10.5V13.5Z" fill="#CDD2EB" stroke="#CDD2EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span class="menu-group__title--active">
                ${menu.name}
            </span>
        </div>
        `
    })
    console.log({ menuTreeHtmlArray });
    menuGroup.insertAdjacentHTML("beforeend", ``)
}

async function main(){ 
    const data = await fetchData();
    populateProducts(data.products);
    populateCompany(data.organization);
    populateMenu(data.menuTree);
    populateUser(data.username);
    console.log({ data });
}
main()