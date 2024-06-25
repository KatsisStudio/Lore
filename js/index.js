window.addEventListener("load", _ => {
    for (let c of document.getElementsByClassName("character")) {
        const img = c.querySelector(".image-container");
        img.style.backgroundImage = `url('https://gallery.katsis.net/data/images/${ img.dataset.sfw }')`;
        img.style.backgroundSize = `${ img.dataset.sfwSize }px`;
    
        c.addEventListener("mouseover", _ => {
            img.style.backgroundImage = `url('https://gallery.katsis.net/data/images/${ img.dataset.nsfw }')`;
            img.style.backgroundSize = `${ img.dataset.nsfwSize }px`;
        });
        c.addEventListener("mouseout", _ => {
            img.style.backgroundImage = `url('https://gallery.katsis.net/data/images/${ img.dataset.sfw }')`;
            img.style.backgroundSize = `${ img.dataset.sfwSize }px`;
        });
    }
});