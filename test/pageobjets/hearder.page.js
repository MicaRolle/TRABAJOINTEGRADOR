class HeaderPage {

    get burgerMenu () { return $('#react-burger-menu-btn') }
    get wrapMenu () { return $('.bm-menu-wrap') }
    get inventorySidebar () { return $('#inventory_sidebar_link') }
    get aboutSidebar () { return $('#about_sidebar_link') }
    get logoutSidebar () { return $('#logout_sidebar_link') }
    get resetSidebar () { return $('#reset_sidebar_link') }
    get crossbtn () { return $('#react-burger-cross-btn') }
    get cartbtn () { return $('.shopping_cart_link') }
    get shoppingCart () { return $('.shopping_cart_badge') }

}
module.exports = new HeaderPage();