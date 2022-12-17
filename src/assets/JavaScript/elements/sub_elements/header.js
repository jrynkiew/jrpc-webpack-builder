// Import all assets which will be used in the head section 
import favicon from '../../../images/ico/favicon.ico';

export class Header {
    constructor() {
        this.name = 'Header';
        this.head = document.querySelector('head');
        this.title = document.createElement('title');

        let metaOptions = [
            { charset: 'UTF-8' },
            { name: 'Viewport', content: 'width=device-width, initial-scale=1.0' },
            { httpEquiv: 'X-UA-Compatible', content: 'ie=edge' }
        ]

        let favIcons = [
            { rel: 'apple-touch-icon' },
            { rel: 'apple-touch-startup-image' },
            { rel: 'shortcut icon' }
        ]

        favIcons.forEach(function(favIcon){
            let setFavicon = document.createElement('link');
            setFavicon.rel = favIcon.rel;
            setFavicon.href = favicon;
            
            this.head.appendChild(setFavicon);
        }, this);

        metaOptions.forEach(function(meta){
            let metaOption = document.createElement('meta');
            
            if (metaOption.charset)
                metaOption.charset = meta.charset;
            if (metaOption.name)
                metaOption.name = meta.name;
            if (metaOption.content)
                metaOption.content = meta.content;
            if (metaOption.httpEquiv)
                metaOption.httpEquiv = meta.httpEquiv;
            
            this.head.appendChild(metaOption);
        }, this);

        this.title.innerText = 'JRPC Alpha Main Page';
        this.head.appendChild(this.title);
    }
    
    getHead() {
        return this.head;
    }
    getTitle() {
        return this.title;
    }
  }