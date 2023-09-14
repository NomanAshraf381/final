// Get a reference to the iframe element by its title attribute
const mapIframe = document.querySelector('iframe[title="Our location"]');

if (mapIframe) {
  mapIframe.addEventListener('touchmove', touchMoveHandler, { passive: true });
  mapIframe.addEventListener('wheel', wheelHandler, { passive: true });
}



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
