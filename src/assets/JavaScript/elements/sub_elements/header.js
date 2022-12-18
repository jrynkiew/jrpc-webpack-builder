// Import all assets which will be used in the head section 
import favicon from '../../../images/ico/favicon.ico';

export class Header {
    constructor() {
        this.name = 'Header';
        this.head = document.querySelector('head');
        this.title = document.createElement('title');

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