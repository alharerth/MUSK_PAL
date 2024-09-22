



const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');
const mail = document.getElementById('mail');
const pn = document.getElementById('pn');

var pho = document.getElementById('pho')
const originalStylepho = pho.style.cssText;
const originalInnerHTMLpho = pho.innerHTML;

var rep = document.getElementById('rep')
const originalStyle = rep.style.cssText;
const originalInnerHTML = rep.innerHTML;

var em = document.getElementById('em')
const originalStyleem = em.style.cssText;
const originalInnerHTMLem = em.innerHTML;

const loginButton = document.getElementById('loginButton')

function storeDataAndRedirect() {
    pho.style.cssText = originalStylepho;
    pho.innerHTML = originalInnerHTMLpho;

    rep.style.cssText = originalStyle;
    rep.innerHTML = originalInnerHTML;

    em.style.cssText = originalStyleem;
    em.innerHTML = originalInnerHTMLem;
    const userData = {
        fName: document.getElementById('fName').value,
        lName: document.getElementById('lName').value,
        mail: document.getElementById('mail').value,
        pass: document.getElementById('pass1').value,
        stName: document.getElementById('stn').value,
        addinfo: document.getElementById('inf').value,
        city: document.getElementById('ci').value,
        phoneNumber: document.getElementById('pn').value
    };

    // Perform some checking logic (example: check if email is valid)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(mail.value)) {
        
    } else {
        em.innerHTML="please enter you're email"
        em.style.color='red'
        return
    }
    const phonePattern = /^07\d{8}$/;
    if (phonePattern.test(pn.value)) {
        
    } else {
        pho.innerHTML="please enter a valid phone number"
        pho.style.color='red'
        return
    }
    if (pass1.value != pass2.value) {
        rep.innerHTML='password does not match<br>please enter same password'
        rep.style.color='red'
        return
    }
    // Get existing data from local storage or create a new array
    let existingData = JSON.parse(localStorage.getItem('userSubmissions')) || [];
    
    // Add the new submission
    existingData.push(userData);
    
    // Save the updated array back to local storage
    localStorage.setItem('userSubmissions', JSON.stringify(existingData));
    
    // Redirect to another page (e.g., success.html)
    window.location.href = 'home.html'; // Change this to your desired page
}

// Event listener for the submit button
loginButton.addEventListener('click', storeDataAndRedirect);