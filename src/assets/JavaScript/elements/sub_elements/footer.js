// Import helper functions, like addImage, etc
import helpers from '../../helpers/helpers.js'

// Import all assets which will be used in the body section 
import logo from '../../../images/png/logo.png';
  
export class Footer {
  constructor() {
    this.helpers = new helpers();
    this.name = 'Footer';
    this.body = document.querySelector('body');
    this.footer = this.generateFooter();
    this.body.appendChild(this.footer);
  }
  
  generateFooter() {
    let footerContainer = this.helpers.createContainerElement('footer-container');
    let container = this.helpers.createContainerElement('container');

    // Order of appending is important, as it will define the order of the items on the page
    footerContainer.appendChild(container);

    let link = document.createElement('a');
    link.setAttribute('href', '#');

    link.appendChild(
        this.helpers.renderImage(logo, 'logo', 'logo')
    );

    container.appendChild(link);

    container.appendChild(
        this.helpers.renderText('Jeremi Rynkiewicz<br />Kobierzyńska 168A/9, Kraków, Poland, 30-382', null)
    );

    container.appendChild(
        this.helpers.createUnorderedList('footer-links')
    );

    return footerContainer;
  }

}