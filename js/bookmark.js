function add_favorite(a) {
    title=document.title;
    url=document.location;
    try {
// Internet Explorer
        window.external.AddFavorite(url, title);
    }
    catch (e) {
        try {
// Mozilla 
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
// Opera 
            if (typeof(opera)=="object") {
                a.rel="sidebar";
                a.title=title;
                a.url=url;
                a.href=url;
                return true;
            }
        }
    }
}