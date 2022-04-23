titles = document.querySelectorAll('.footer-head')
for (title of titles) {
    title.addEventListener('click', function() {
        if (this.nextElementSibling.className== 'off') {
            this.nextElementSibling.className= 'on';
            this.classList+= ' footer-head1'

        } else {
            this.nextElementSibling.className= 'off'
            this.className = 'footer-head'
        }
        
    });
}

function nav() {
    navStatus = document.getElementById('nav-bar')
    if (Array.from(navStatus.classList).includes('show-nav')) {
        navStatus.classList.remove('show-nav');
        document.getElementById('line1').classList.remove('line1');
        document.getElementById('line2').classList.remove('line2')
    }
    else {
        navStatus.classList +=' show-nav'
        document.getElementById('line1').classList += ' line1'
        document.getElementById('line2').classList += ' line2'
    }
}

function shuffle() {
    let card1 = document.getElementById('atm1');
    let card2 = document.getElementById('atm2');
    let card3 = document.getElementById('atm3');
    let card4 = document.getElementById('atm4');
    let ids = [card1.id, card2.id, card3.id, card4.id]
    let container = document.getElementById('atm-container');

    // setInterval(() => {
    //     card1.style.transform= 'scale(.8)';
    //     card2.style.transform= 'scale(.8)';
    //     card3.style.transform= 'scale(.8)';
    //     card4.style.transform= 'scale(.8)';
    // },2000)
    // setInterval(() => {card2.style.transform= 'scale(1)'}, 700)
    card1.id = ids[3]
    card2.id= ids[0]
    card3.id = ids[1]
    card4.id = ids[2]
    // container.style.transform= 'translateX(10px)'
    
}

setInterval(shuffle, 2500)

