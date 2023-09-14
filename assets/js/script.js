// image loader 
carrdimg()
window.addEventListener('DOMContentLoaded', carrdimg, lcardimg)
window.addEventListener('resize', carrdimg)
function carrdimg() {
    if (innerWidth < 576 && innerWidth > 400) {
        let cardImages = document.querySelectorAll('.popular .card-img img')
        cardImages.forEach((cardimage) => {
            let loadimg = cardimage.getAttribute('src');
            let orig2 = cardimage.getAttribute('orig-img2');
            console.log(orig2)
            if (loadimg != orig2) {
                cardimage.src = orig2;
            }
        })
    }
    else {
        let cardImages = document.querySelectorAll('.popular .card-img img')
        cardImages.forEach((cardimage) => {
            let loadimg = cardimage.getAttribute('src');
            let orig = cardimage.getAttribute('orig-img');
            if (loadimg != orig) {
                cardimage.src = orig;
            }
        })

    }
}


lcardimg()
window.addEventListener('resize', lcardimg)
function lcardimg() {
    let lcardImages = document.querySelectorAll('.popular-1 .card-img img')
    lcardImages.forEach((lcardimage) => {
        if (innerWidth < 1200 && innerWidth > 800) {
            let loadimg = lcardimage.getAttribute('src');
            let orig3 = lcardimage.getAttribute('orig-img3');
            if (loadimg != orig3) {
                lcardimage.src = orig3;
            }
        }
        else if (innerWidth >= 500) {
            let loadimg = lcardimage.getAttribute('src');
            let orig = lcardimage.getAttribute('orig-img');
            if (loadimg != orig) {
                lcardimage.src = orig;
            }

        }
        else {
            let loadimg = lcardimage.getAttribute('src');
            let orig2 = lcardimage.getAttribute('orig-img2');
            if (loadimg != orig2) {
                lcardimage.src = orig2;
            }

        }
    })
}

// magic button js
magicButtonGo();
function magicButtonGo() {
    let magicButtons = document.querySelectorAll('.magicbutton3');

    magicButtons.forEach((magicbutton) => {
        let magicbuttonicon = magicbutton.querySelector('#btnicon')
        magicbutton.addEventListener('mouseover', () => {
            magicbuttonicon.classList.remove('fa-angle-right')
            magicbuttonicon.classList.add('fa-long-arrow-right')
            magicbutton.classList.add('btnact')
        })
        magicbutton.addEventListener('mouseout', () => {
            magicbuttonicon.classList.add('fa-angle-right')
            magicbuttonicon.classList.remove('fa-long-arrow-right')
            magicbutton.classList.remove('btnact')
        })
    })
}

// views
countviews()
function countviews() {
    let viewsCount = document.querySelectorAll('.card-view i+span+span')
    viewsCount.forEach((viewSec) => {
        let bhalue = parseInt(viewSec.innerHTML)
        let result = Number(bhalue.toFixed(0)).toLocaleString().split(' ').join(',').toLocaleString()
        viewSec.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = `Views:&nbsp${result}`;
        let viewseco = viewSec.previousElementSibling;
        let views = parseInt(viewSec.innerHTML);
        if (views >= 1000000000) {
            let value = views / 1000000000
            viewseco.innerHTML = `${Math.floor(value)}B`
        }
        else if (views >= 1000000) {
            let value = views / 1000000
            viewseco.innerHTML = `${Math.floor(value)}M`
        }
        else if (views >= 1000) {

            let value = views / 1000
            viewseco.innerHTML = `${Math.floor(value)}K`
        }
        else {

            let value = views
            viewseco.innerHTML = value;
        }
    })
}


// send email 
let subButton = document.querySelector('#subscribeButton');
subButton.addEventListener('click', function (event) {
    let data = document.getElementById("subscribe").value;
    event.preventDefault();
    fetch("https://formspree.io/f/mrgwkoer", {
        method: 'POST',
        body: JSON.stringify({
            Subject: "Subscribe to Jobistan.net",
            Address: data,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(() => {
            document.getElementById('subscribe').value = ''
            alert("Message Sent Successfully")
        })
})

