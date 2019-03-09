export const addClass = (obj, className) => {
    if (obj.className !== '') {
        obj.className = obj.className + ' ' + className;
    } else {
        obj.className = className;
    }
};

export const removeClass = (obj, className) => {
    let objClass = ' ' + obj.className + ' ';
    objClass = objClass.replace(/(\s+)/gi, ' ');
    let removed = objClass.replace(' ' + className + ' ', ' ');
    removed = removed.replace(/(^\s+)|(\s+$)/g, '');
    obj.className = removed;
};

export const hasClass = (obj, className) => {
    let classList = obj.className.split(/\s+/);
    classList = classList || [];
    if (classList.indexOf(className) >= 0) {
        return true;
    }
    return false;
};

export const getWindowSize = (function () {
    let func;
    if (window.innerHeight !== undefined) {
        func = () => {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
            };
        };
    } else if (document.compatMode === 'CSS1Compat') {
        func = () => {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
            };
        };
    } else {
        func = () => {
            return {
                width: document.body.clientWidth,
                height: document.body.clientHeight,
            };
        };
    }
    return func;
}());
