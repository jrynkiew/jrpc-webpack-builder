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

    renderText(text, _class) {
        var paragraph = document.createElement('p');
        if (_class !== null)
            paragraph.classList.add(_class);
        paragraph.innerHTML = text;

        return paragraph;
    }

    createTopSection(sectionImage_path, scrollImage_path, headerText) {
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
        
        sectionHeader.innerHTML = headerText;

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
            if (String(item) === 'home')
                currentItemLinkElement.setAttribute('href', '3d/index.html');
            else
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

    createContainerElement(containerClass) {
        const container = document.createElement('div');
        container.classList.add(containerClass);

        return container;
    }

    generateTable(generatedItemList) {
        const table = document.createElement('table');
        const tableHeader1 = document.createElement('th');
        const tableHeader2 = document.createElement('th');

        table.appendChild(tableHeader1);
        table.appendChild(tableHeader2);

        tableHeader1.innerHTML = 'generated files';
        tableHeader2.innerHTML = 'file information';

        let itemList = [
            { link: 'iotex-desktop-wallet-1.0.23.AppImage', description: '-rwxrwxrwx 1 jeremi jeremi 4695 Oct 29 22:55' },
            { link: 'iotex-desktop-wallet-1.0.23.AppImage', description: '-rwxrwxrwx 1 jeremi jeremi 4695 Oct 29 22:55' },
            { link: 'iotex-desktop-wallet-1.0.23.AppImage', description: '-rwxrwxrwx 1 jeremi jeremi 4695 Oct 29 22:55' },
            { link: 'iotex-desktop-wallet-1.0.23.AppImage', description: '-rwxrwxrwx 1 jeremi jeremi 4695 Oct 29 22:55' },
            { link: 'iotex-desktop-wallet-1.0.23.AppImage', description: '-rwxrwxrwx 1 jeremi jeremi 4695 Oct 29 22:55' },
            { link: 'iotex-desktop-wallet-1.0.23.AppImage', description: '-rwxrwxrwx 1 jeremi jeremi 4695 Oct 29 22:55' }
        ]

        itemList.forEach(function(generatedItem){
            let setGeneratedItem = document.createElement('tr');
            let link = document.createElement('a');
            let linkDescription = document.createElement('td');
            let fileInfo = document.createElement('td');

            link.href = 'iotex-desktop-wallet-1.0.23.AppImage';
            link.innerHTML = generatedItem.link
            linkDescription.appendChild(link);
            fileInfo.innerHTML = generatedItem.description;

            setGeneratedItem.appendChild(linkDescription);
            setGeneratedItem.appendChild(fileInfo);

            table.appendChild(setGeneratedItem);
        }, table);

        return table;
    }

    generateTableInfoParagraph(container, currencyImage) {
        container.appendChild(document.createElement('br'));
        let info = document.createElement('p');
        info.innerHTML = 'Cost 1 <img src=' + currencyImage + ' alt="JRPC" class="logo-small" /> JRPC per file. Scroll down to bottom of page to buy JRPC.';

        container.appendChild(info);
    }

    createUnorderedList(_class, _object) {
        let list = document.createElement('ul');
        
        if (_class !== null)
            list.classList.add(_class);

        if (_object !== null)  
        {
            _object.forEach(element => {
                if (element !== null)
                    list.appendChild(element);
            }, list);
        }  

        return list;
    }

    createOrderedList(_class, innerHTML) {
        let element = document.createElement('li');
        
        if (_class !== null)
            element.classList.add(_class);

        element.innerHTML = innerHTML;

        return element;
    }

    populateUnorderedList(object) {
        let list = this.createUnorderedList(null, null);

        object.forEach(function(item){
            let currentItem = document.createElement('li');
            let subItem = document.createElement('figure');

            let image = document.createElement('img');
            image.setAttribute('src', item.img);

            let text = document.createElement('blockquote');
            text.innerHTML = item.blockquote;

            let figcaption = document.createElement('figcaption');
            figcaption.innerHTML = item.figcaption;

            currentItem.appendChild(subItem);
            subItem.appendChild(image);
            subItem.appendChild(text);
            subItem.appendChild(figcaption);           
            
            list.appendChild(currentItem);           
        }, list);

        return list;
    }
}
