// Import helper functions, like addImage, etc
import helpers from '../../helpers/helpers.js'

// Import all assets which will be used in the body section 
import logo from '../../../images/png/logo.png';
import currencySymbol from '../../../images/png/logo_small.png';
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
        this.itemList = this.itemListSection();
        
        this.body.appendChild(this.menu);
        this.body.appendChild(this.itemList);
    }
    
    menuSection() {
        let container = this.helpers.createContainerElement();
        let header = document.createElement('header');

        // Order of appending is important, as it will define the order of the items on the page
        container.appendChild(header);
        header.appendChild(
            this.helpers.renderImage(logo, 'logo', 'logo')
        );
        header.appendChild(
            this.helpers.createSVGlogoText('40%', 'Blockchain Services', '1%', '55%')
        )
        header.appendChild(
            this.helpers.createNavigation(openMenu, closeMenu, this.menuList)
        );

        container.appendChild(
            this.helpers.createTopSection(topSection, scroll)
        )

        return container;
    }

    itemListSection() {
        let itemListSectionContainer = document.createElement('div');
        let container = this.helpers.createContainerElement();
        itemListSectionContainer.classList.add('blue-container');

        itemListSectionContainer.appendChild(container);

        container.appendChild(
            this.helpers.generateTable({})
        );

        this.helpers.generateTableInfoParagraph(container, currencySymbol);
        
        return itemListSectionContainer;
    }
    
    bottomSection() {

    }
  }