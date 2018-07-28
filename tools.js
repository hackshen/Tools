function getCookie(name) {
    if(document.cookie.length > 0) {
        var cookies = document.cookie.replace(/&/g, ';');
        c_start = cookies.indexOf(name + "=");
        if(c_start != -1) {
            c_start = c_start + name.length + 1;
            c_end = cookies.indexOf(";", c_start);
            if(c_end == -1) c_end = cookies.length;
            return decodeURI(cookies.substring(c_start, c_end));
        }
    }
    return "";
}