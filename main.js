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

