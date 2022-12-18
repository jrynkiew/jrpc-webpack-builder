export default class helpers {
    constructor() {

    }

    renderImage(path_to_image, alt_text, class_name) {
        var img = new Image();
        img.src = path_to_image;
        img.alt = alt_text;
        img.classList.add(class_name);

        return img;
    }

    createSVGlogoText(width_percent, text_string, textX_percent, textY_percent) {
        var xmlns ='http://www.w3.org/2000/svg';

        var svg = document.createElementNS(xmlns, 'svg');
        svg.setAttributeNS(null, 'version', '1.1');
        svg.setAttributeNS(null, 'width', width_percent);

        var txt = document.createElementNS(xmlns, 'text');
        txt.innerHTML = text_string;
        txt.setAttributeNS(null, 'x', textX_percent);
        txt.setAttributeNS(null, 'y', textY_percent);
        txt.classList.add('stroke-text');

        svg.appendChild(txt);

        return svg;
    }

    createTopSection(sectionImage_path, scrollImage_path) {
        var section = document.createElement('section');
        var sectionImage = document.createElement('img');
        var sectionHeader = document.createElement('h1');
        var sectionParagraph = document.createElement('p');
        var scrollImage = document.createElement('img');

        section.appendChild(sectionImage);
        section.appendChild(sectionHeader);
        section.appendChild(sectionParagraph);
        section.appendChild(scrollImage);

        sectionImage.classList.add('server');
        sectionImage.setAttribute('src', sectionImage_path);
        sectionImage.setAttribute('alt', 'server graphic');
        
        sectionHeader.innerHTML = 'Your files are ready for download!';

        sectionParagraph.classList.add('subhead');
        sectionParagraph.innerHTML = 'Scroll down for the list of your generated files.';

        scrollImage.classList.add('scroll');
        scrollImage.classList.add('hide-mobile');
        scrollImage.classList.add('show-desktop');
        scrollImage.setAttribute('src', scrollImage_path);
        scrollImage.setAttribute('alt', 'scroll down');

        return section;
    }

    createNavigation(openNavImage, closeNavImage, menuItemList) {
        var nav = document.createElement('nav');
        
        var toggleMenu = document.createElement('a');
        
        var toggleMenuImage = document.createElement('img');
        
        var menuItems = document.createElement('ul');
        
        var closeButton = document.createElement('img');
        
        let closeMenuItemList = document.createElement('li');

        // a
        toggleMenu.classList.add('hide-desktop');
        toggleMenu.setAttribute('href', '#');
        
        // img
        toggleMenuImage.classList.add('menu');
        toggleMenuImage.setAttribute('src', openNavImage);
        toggleMenuImage.setAttribute('alt', 'toggle menu');
        toggleMenuImage.setAttribute('id', 'menu');
        
        toggleMenu.appendChild(toggleMenuImage);

        // ul
        menuItems.classList.add('show-desktop');
        menuItems.classList.add('hide-mobile');
        menuItems.setAttribute('id', 'nav');

        // exit li
        closeMenuItemList.setAttribute('id', 'exit');
        closeMenuItemList.classList.add('exit-btn');
        closeMenuItemList.classList.add('hide-desktop');
        
        closeButton.setAttribute('src', closeNavImage);
        closeButton.setAttribute('alt', 'exit menu');
        
        closeMenuItemList.appendChild(closeButton);

        menuItems.appendChild(closeMenuItemList);

        menuItemList.forEach(function(item){
            let currentItemListElement = document.createElement('li');
            let currentItemLinkElement = document.createElement('a');
            currentItemLinkElement.setAttribute('href', '#');
            currentItemLinkElement.innerHTML = String(item);
            currentItemListElement.appendChild(currentItemLinkElement);
            menuItems.appendChild(currentItemListElement);
        });

        nav.appendChild(toggleMenu);
        nav.appendChild(menuItems);

        toggleMenuImage.addEventListener("click", function(e) {
            menuItems.classList.toggle("hide-mobile");
            e.preventDefault();
        });

        closeMenuItemList.addEventListener("click", function(e) {
            menuItems.classList.add("hide-mobile");
            e.preventDefault();
        });

        return nav
    }
}
