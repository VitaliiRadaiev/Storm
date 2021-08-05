{
    let servicesTitles = document.querySelectorAll('.services-b-card__title');
    setSameHeight(servicesTitles)
}

function setSameHeight(items) {
    if(!items.length) return;

    let maxHeight = Math.max(...Array.from(items).map(i => i.clientHeight));
    items.forEach(i => i.style.minHeight = maxHeight + 'px');
}