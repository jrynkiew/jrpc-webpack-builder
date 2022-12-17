// Import helper functions, like addImage, etc
import helpers from '../../helpers/helpers.js'

// Import all assets which will be used in the body section 
import logo from '../../../images/png/logo.png';

export class Body {
    constructor() {
        this.name = 'Body';
        this.helpers = new helpers();
        this.body = document.querySelector('body');
        this.menu = this.menuSection();

        this.body.appendChild(this.menu);
    }
    
    menuSection() {
        let container = document.createElement('div');
        container.classList.add('container');
        container.appendChild(
            this.helpers.addImage(logo, 'logo', 'logo')
        );
    
        return container;
    }

    midSection() {

    }
    
    bottomSection() {

    }
  }