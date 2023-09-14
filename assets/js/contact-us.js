const ourIframe = document.getElementById('iframe-container');
            setTimeout(() => {
            const ourIframe = 
            `<iframe 
                src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9655054271157!2d71.9157354145998!3d30.29504361364653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b554b068b1b21%3A0x7517d8adc887c625!2sDigital%20Applications!5e0!3m2!1sen!2s!4v1677411866697!5m2!1sen!2s'
                width = '600' 
                height = '450' 
                style.border = '0' 
                title = 'Our Location' 
                allowfullscreen = true 
                referrerpolicy = 'no-referrer-when-downgrade' >
            </iframe>`
            ourIframe.innerHTML = ourIframe;
            }, 7000);


// send email 
let messageButton = document.querySelector('#sendmess');
messageButton.addEventListener('click', function (event) {
    event.preventDefault();
    fetch("https://formspree.io/f/mrgwkoer", {
        method: 'POST',
        body: JSON.stringify({
            Subject: document.getElementById('subject').value,
            Name: document.getElementById('name').value,
            Email: document.getElementById('email').value,
            Message: document.getElementById('message').value
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(() => {
        document.getElementById('subject').value = ''
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('message').value = ''
        alert("Message Sent Successfully")
    })
})


changepic()
window.addEventListener('resize', changepic)
function changepic(){
    let pic = document.querySelector('.information img')
    if(innerWidth < 1150 && innerWidth >= 500){
        let newSrc = pic.getAttribute('orig-img2')
        pic.src = newSrc;
    }
    else{
        let oldSrc = pic.getAttribute('orig-img')
        pic.src = oldSrc;
    }
}
