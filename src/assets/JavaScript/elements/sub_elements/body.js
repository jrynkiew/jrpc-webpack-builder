// Import helper functions, like addImage, etc
import helpers from '../../helpers/helpers.js'

// Import all assets which will be used in the body section 
import logo from '../../../images/png/logo.png';
import currencySymbol from '../../../images/png/logo_small.png';
import openMenu from '../../../images/svg/ham.svg';
import closeMenu from '../../../images/svg/exit.svg';
import topSection from '../../../images/svg/server.svg'; 
import scroll from '../../../images/svg/scroll.svg'; 
import ownerImage from '../../../images/png/JRPC.png'; 
import locationImage from '../../../images/png/locationImage.png'; 

const ownerName = 'Jeremi Rynkiewicz';

export class Body {
    constructor() {
        this.name = 'Body';
        this.helpers = new helpers();
        this.body = document.querySelector('body');
        this.menuList = ['home', 'services', 'about', 'contact'];
        this.bottomHTMLlist = [
            {img: locationImage, figcaption: 'Kobierzyńska 168A/9, Kraków, Poland', blockquote: 'For all eqnuires, please send mail to contact@jrpc.pl, or call +48 666 662 346'},
            {img: ownerImage, figcaption: ownerName, blockquote: 'Architect & owner of JRPC, a blockchain services & consulting company'}
        ]
        this.serviceList = [
            { key: 'Consulting', value: '$100 /hr' },
            { key: 'Blockchain Analysis', value: '$75 /hr' },
            { key: 'Web3 Programming', value: '$120 /hr' },
            { key: 'Infrastructure Development', value: '$140 /hr' },
            { key: 'Infrastructure Hosting', value: '$75 /month' },
            { key: 'Project Development', value: '$3000 /project*' }
        ]
        this.menu = this.menuSection();
        this.itemList = this.itemListSection();
        this.companyInfo = this.generateCompanyInfo(this.bottomHTMLlist);
        this.bottomSection = this.generateBottomSection()
        this.body.appendChild(this.menu);
        this.body.appendChild(this.itemList);
        this.body.appendChild(this.companyInfo);
        this.body.appendChild(this.bottomSection);
    }
    
    menuSection() {
        let container = this.helpers.createContainerElement('container');
        let header = document.createElement('header');

        // Order of appending is important, as it will define the order of the items on the page
        container.appendChild(header);
        header.appendChild(
            this.helpers.renderImage(logo, 'logo', 'logo')
        );

        let logoText = this.helpers.createSVGElement('http://www.w3.org/2000/svg', '27%');
        this.helpers.appendSVGElement(logoText, 'Blockchain', '1%', '47%')
        this.helpers.appendSVGElement(logoText, 'Services', '1%', '61%')

        header.appendChild(logoText);

        header.appendChild(
            this.helpers.createNavigation(openMenu, closeMenu, this.menuList)
        );

        container.appendChild(
            this.helpers.createTopSection(topSection, scroll, 'This page is still under construction!')
        )

        return container;
    }

    itemListSection() {
        let itemListSectionContainer = this.helpers.createContainerElement('blue-container');
        let container = this.helpers.createContainerElement('container');

        itemListSectionContainer.appendChild(container);

        container.appendChild(
            this.helpers.generateTable(this.serviceList)
        );

        this.helpers.generateTableInfoParagraph(container, currencySymbol);
        
        return itemListSectionContainer;
    }
    
    generateCompanyInfo(htmlList) {
        let link = this.helpers.createElement('a');
        this.helpers.setAttribute(link, 'name', 'contact');
        let infoSectionContainer = this.helpers.createContainerElement('grey-container');
        let container = this.helpers.createContainerElement('container');
        container.appendChild(link);

        container.appendChild(
            this.helpers.populateUnorderedList(htmlList)
        );

        infoSectionContainer.appendChild(container);

        return infoSectionContainer;
    }

    generateBottomSection() {
        let container = this.helpers.createContainerElement('container');
        let h2 = document.createElement('h2');
        h2.innerHTML = 'Get more tokens!';
        container.appendChild(h2);

        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.classList.add('cta');
        link.innerHTML = 'Buy JRPC';

        container.appendChild(link);

        return container;
    }
  }