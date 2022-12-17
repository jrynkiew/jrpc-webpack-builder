export default class helpers {
    constructor() {

    }

    addImage(path_to_image, alt_text, class_name) {
        var img = new Image();
        img.src = path_to_image;
        img.alt = alt_text;
        img.classList.add(class_name);

        return img;
    }
}
