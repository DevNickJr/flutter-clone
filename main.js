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

