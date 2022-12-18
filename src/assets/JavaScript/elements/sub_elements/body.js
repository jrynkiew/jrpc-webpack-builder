// Import helper functions, like addImage, etc
import helpers from '../../helpers/helpers.js'

// Import all assets which will be used in the body section 
import logo from '../../../images/png/logo.png';
import openMenu from '../../../images/svg/ham.svg';
import closeMenu from '../../../images/svg/exit.svg';
import topSection from '../../../images/svg/server.svg'; 
import scroll from '../../../images/svg/scroll.svg'; 



export class Body {
    constructor() {
        this.name = 'Body';
        this.helpers = new helpers();
        this.body = document.querySelector('body');
        this.menuList = ['home', 'services', 'about', 'contact'];
        this.menu = this.menuSection();
        
        this.body.appendChild(this.menu);
    }
    
    menuSection() {
        let container = document.createElement('div');
        let header = document.createElement('header');

        container.classList.add('container');

        // Order of appending is important, as it will define the order of the items on the page
        container.appendChild(header);
        header.appendChild(
            this.helpers.renderImage(logo, 'logo', 'logo')
        );
        header.appendChild(
            this.helpers.createSVGlogoText('40%', 'Hacking Group', '1%', '55%')
        )
        header.appendChild(
            this.helpers.createNavigation(openMenu, closeMenu, this.menuList)
        );

        container.appendChild(
            this.helpers.createTopSection(topSection, scroll)
        )

        return container;
    }

    midSection() {

    }
    
    bottomSection() {

    }
  }