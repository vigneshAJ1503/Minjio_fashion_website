var sidenav=document.querySelector('.side-navbar')
function shownavbar()
{
    sidenav.style.left="0"
}

function closenavbar(){
    sidenav.style.left="-60%"
}

function subscribe(){
    alert("Subscribed");
}

function generateRandomCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '#';
    for (let i = 0; i < length - 1; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }
    return code;
}

document.addEventListener('DOMContentLoaded', function () {
    const productBoxes = document.querySelectorAll('.products-box');

    productBoxes.forEach(function (box) {
        const productIdElement = box.querySelector('.product-id');
        const randomProductId = generateRandomCode(6);
        productIdElement.textContent = randomProductId;
    });
});

function redirectToContactPage(element) {
    // Get the product code from the clicked product box
    var productCodeElement = element.querySelector('.product-id');
    if (productCodeElement) {
        var productCode = productCodeElement.textContent.trim().replace('Code: ', '');

        // Encode the product code to handle special characters in the URL
        var encodedProductCode = encodeURIComponent(productCode);

        // Redirect to contact page with product code as a URL parameter
        window.location.href = 'contact.html?productCode=' + encodedProductCode;
    }
}

// Function to extract URL parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Function to populate product code field in contact page if product code is present in URL
document.addEventListener('DOMContentLoaded', function () {
    // Function to extract URL parameters
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Get product code from URL parameters
    var productCode = getParameterByName('productCode');
    if (productCode) {
        // Populate the product code input field
        document.getElementById('productCode').value = productCode;
    }
});
