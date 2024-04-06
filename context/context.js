import indexPageContext from './indexPage';
import galeriaPageContext from './galleryPage';
import cardsPage from './cardsPage';

const pageContext = {
    "/index.html": indexPageContext,
    "/pages/gallery.html": galeriaPageContext,
    "/pages/nosotros.html": cardsPage,
}

const globalContext = {
    "tittle": "ONG - MASEO"
}

const getContext = (contextKey) => {
    const _pageContext = pageContext[contextKey] || {};
    return Object.assign({}, globalContext, _pageContext);
}

export default getContext;