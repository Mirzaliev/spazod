(function () {
var $2f537dd6a3caaf7d$var$liNodes = document.querySelectorAll('#navModuleList > li');
var $2f537dd6a3caaf7d$var$menu = [];
/**
 *
 * @param nodeChildren
 * @returns {{item: string, children: []}}
 */ function $2f537dd6a3caaf7d$var$getArrayWithChildren(nodeChildren) {
    var children = [];
    nodeChildren[1].querySelectorAll('a').forEach(function(t) {
        return children.push(t.textContent);
    });
    return {
        'item': nodeChildren[0].textContent,
        children: children
    };
}
function $2f537dd6a3caaf7d$var$renderMenu() {
    var _menu = $2f537dd6a3caaf7d$var$menu.reduce(function(html, link, index) {
        return html += $2f537dd6a3caaf7d$var$generateItem(link, index);
    }, '');
    document.querySelector('#headerMobileNav').innerHTML = $2f537dd6a3caaf7d$var$format(_menu);
    $2f537dd6a3caaf7d$var$addEventListener();
}
function $2f537dd6a3caaf7d$var$addEventListener() {
    var collapseOpenButton = document.querySelectorAll('.header-mobile-item-summary > span');
    collapseOpenButton.forEach(function(span) {
        span.addEventListener('click', function(e) {
            if (e.path[3].classList.contains('header-mobile-item_active')) {
                e.path[3].classList.remove('header-mobile-item_active');
                return false;
            }
            e.path[3].classList.add('header-mobile-item_active');
        });
    });
}
function $2f537dd6a3caaf7d$var$generateItem(link, index) {
    var size = Object.keys(link).length;
    return "\n        <div class=\"header-mobile-item\">\n            <div class=\"header-mobile-item-summary\">\n                <a href=\"\">".concat(link.item, "</a>\n                ").concat(size >= 2 ? "<span>\n                  <svg class=\"icon\">\n                     <use xlink:href=\"http://localhost:8000/themes/sp-azadogly/assets/images/icons.svg#arrow-bottom\"></use>\n                  </svg>\n                </span>" : "", "\n            </div>\n            ").concat(size >= 2 ? "\n              <div class=\"header-mobile-item-details\">\n                 ".concat($2f537dd6a3caaf7d$var$generateDetailsLink(link.children), "\n              </div>\n            ") : '', "\n        </div>\n    ");
}
function $2f537dd6a3caaf7d$var$generateDetailsLink(links) {
    return links.reduce(function(html, link, index) {
        return html += "\n      <a href=\"\" class=\"header-mobile-item__link\">".concat(link, "</a>\n    ");
    }, '');
}
function $2f537dd6a3caaf7d$var$format(html) {
    var tab = '\t';
    var result = '';
    var indent = '';
    html.split(/>\s*</).forEach(function(element) {
        if (element.match(/^\/\w/)) indent = indent.substring(tab.length);
        result += indent + '<' + element + '>\r\n';
        if (element.match(/^<?\w[^>]*[^\/]$/)) indent += tab;
    });
    return result.substring(1, result.length - 3);
}
/**
 *
 */ function $2f537dd6a3caaf7d$var$parse() {
    $2f537dd6a3caaf7d$var$liNodes.forEach(function(li, index) {
        if (li.classList.contains('nav-module__item_adaptive')) return false;
        if (li.children.length === 2) $2f537dd6a3caaf7d$var$menu.push($2f537dd6a3caaf7d$var$getArrayWithChildren(li.children));
        else $2f537dd6a3caaf7d$var$menu.push({
            "item": li.children[0].textContent
        });
    });
    $2f537dd6a3caaf7d$var$renderMenu();
}
function $2f537dd6a3caaf7d$export$2e2bcd8739ae039() {
    $2f537dd6a3caaf7d$var$parse();
}


var $aad85bcededfbff4$var$$mobileMenuOpen = document.querySelector('#headerMobileOpen');
var $aad85bcededfbff4$var$$mobileMenuClose = document.querySelector('#headerMobileClose');
var $aad85bcededfbff4$var$$hideTopBanner = document.querySelector('#hideTopBanner');
function $aad85bcededfbff4$var$addEvents() {
    $aad85bcededfbff4$var$$mobileMenuOpen.addEventListener('click', function() {
        document.documentElement.style.overflow = 'hidden';
        document.querySelector('#sectionHeaderMobile').classList.add('header-mobile_active');
    });
    $aad85bcededfbff4$var$$mobileMenuClose.addEventListener('click', function() {
        document.documentElement.style.overflow = '';
        document.querySelector('#sectionHeaderMobile').classList.remove('header-mobile_active');
    });
    $aad85bcededfbff4$var$$hideTopBanner.addEventListener('click', function() {
        document.querySelector('#topInfoBanner').style.display = 'none';
    });
}
function $aad85bcededfbff4$var$render() {
    $2f537dd6a3caaf7d$export$2e2bcd8739ae039();
}
function $aad85bcededfbff4$export$2e2bcd8739ae039() {
    $aad85bcededfbff4$var$addEvents();
    $aad85bcededfbff4$var$render();
}


function $6a0a4bb84acf5000$export$2e2bcd8739ae039() {
    var lists = document.querySelectorAll('ul.nav-module_only-desktop');
    if (lists) {
        var margin = parseFloat(window.getComputedStyle(lists[0].firstElementChild).marginBottom);
        var marginLeft = parseFloat(window.getComputedStyle(lists[0].lastElementChild).marginLeft);
        var li_h = lists[0].firstElementChild.clientHeight;
        var li_w = lists[0].firstElementChild.clientWidth;
        if (window.NodeList && !NodeList.prototype.forEach) NodeList.prototype.forEach = Array.prototype.forEach;
        lists.forEach(function(ul, index) {
            var ul_length = ul.children.length;
            var _h;
            var _w;
            if (ul_length <= 6) {
                _h = ul_length * (margin + li_h);
                _w = li_w;
            }
            if (ul_length > 6) {
                _h = 6 * (margin + li_h);
                var rowNumber = Math.ceil(ul_length / 6);
                _w = rowNumber * li_w + marginLeft;
            }
            if (!!window.MSInputMethodContext && !!document.documentMode) _h += 3;
            ul.style.height = _h + 'px';
            ul.style.width = _w + 'px';
        });
    }
    console.log('перерасчет');
}


var $937b6b42a7b909b1$var$$body = document.body;
function $937b6b42a7b909b1$var$changeFont(size) {
    console.log('Изменен шрифт');
    size = 16 + Number(size) * 2;
    $937b6b42a7b909b1$var$$body.style.fontSize = size + 'px';
    localStorage.setItem('vvi-font', size);
    $6a0a4bb84acf5000$export$2e2bcd8739ae039();
}
function $937b6b42a7b909b1$var$removeClassByPrefix(node, prefix) {
    var regx = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');
    node.className = node.className.replace(regx, '');
    return node;
}
function $937b6b42a7b909b1$var$changeTheme(theme) {
    console.log('Изменена тема', theme);
    $937b6b42a7b909b1$var$removeClassByPrefix($937b6b42a7b909b1$var$$body, 'theme--');
    $937b6b42a7b909b1$var$$body.classList.add(theme);
    localStorage.setItem('vvi-theme', theme);
}
function $937b6b42a7b909b1$var$closeVvi() {
    document.querySelector('.vvi').classList.remove('vvi_visible');
    $937b6b42a7b909b1$var$removeClassByPrefix($937b6b42a7b909b1$var$$body, 'theme--');
    localStorage.removeItem('vvi-theme');
    localStorage.removeItem('vvi-font');
    $937b6b42a7b909b1$var$$body.classList.add('theme--default');
    $937b6b42a7b909b1$var$$body.style.fontSize = '16px';
}
function $937b6b42a7b909b1$var$addEventsVvi() {
    document.querySelector('#showVVI').addEventListener("click", function() {
        document.querySelector('.vvi').classList.add('vvi_visible');
    });
    var allvvibtn = document.querySelectorAll(".vvi__btn");
    allvvibtn.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            if (event.target.dataset.change === 'font') $937b6b42a7b909b1$var$changeFont(event.target.dataset.value);
            if (event.target.dataset.change === 'theme') $937b6b42a7b909b1$var$changeTheme(event.target.dataset.value);
            if (event.target.dataset.change === 'close') $937b6b42a7b909b1$var$closeVvi();
        });
    });
}
function $937b6b42a7b909b1$export$2e2bcd8739ae039() {
    $937b6b42a7b909b1$var$addEventsVvi();
}



var $e6428584080c1389$var$vviTheme = localStorage.getItem('vvi-theme');
var $e6428584080c1389$var$vviFont = localStorage.getItem('vvi-font');
var $e6428584080c1389$var$$body = document.body;
$e6428584080c1389$var$vviTheme ? $e6428584080c1389$var$$body.classList.add($e6428584080c1389$var$vviTheme) : $e6428584080c1389$var$$body.classList.add('theme--default');
$e6428584080c1389$var$vviFont && ($e6428584080c1389$var$$body.style.fontSize = $e6428584080c1389$var$vviFont + 'px');
($e6428584080c1389$var$vviFont || $e6428584080c1389$var$vviTheme) && document.querySelector('.vvi').classList.add('vvi_visible');
document.addEventListener("DOMContentLoaded", function(event) {
    $6a0a4bb84acf5000$export$2e2bcd8739ae039();
    $aad85bcededfbff4$export$2e2bcd8739ae039();
    $937b6b42a7b909b1$export$2e2bcd8739ae039();
});
if (null) null.accept(function() {
    $6a0a4bb84acf5000$export$2e2bcd8739ae039();
});
var $c5833fa856004937$export$1c85ee430938967;
/*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */ var $c5833fa856004937$var$LEGACY_SUPPORT = false;
function $c5833fa856004937$var$embed(parent, svg, target, use) {
    // if the target exists
    if (target) {
        // create a document fragment to hold the contents of the target
        var fragment = document.createDocumentFragment();
        // cache the closest matching viewBox
        var viewBox = !svg.hasAttribute('viewBox') && target.getAttribute('viewBox');
        // conditionally set the viewBox on the svg
        if (viewBox) svg.setAttribute('viewBox', viewBox);
        // clone the target
        var clone = document.importNode ? document.importNode(target, true) : target.cloneNode(true);
        var g = document.createElementNS(svg.namespaceURI || 'http://www.w3.org/2000/svg', 'g');
        // copy the contents of the clone into the fragment
        while(clone.childNodes.length)g.appendChild(clone.firstChild);
        if (use) for(var i = 0; use.attributes.length > i; i++){
            var attr = use.attributes[i];
            if (attr.name === 'xlink:href' || attr.name === 'href') continue;
            g.setAttribute(attr.name, attr.value);
        }
        fragment.appendChild(g);
        // append the fragment into the svg
        parent.appendChild(fragment);
    }
}
function $c5833fa856004937$var$loadreadystatechange(xhr, use) {
    // listen to changes in the request
    xhr.onreadystatechange = function() {
        // if the request is ready
        if (xhr.readyState === 4) {
            // get the cached html document
            var cachedDocument = xhr._cachedDocument;
            // ensure the cached html document based on the xhr response
            if (!cachedDocument) {
                cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument('');
                cachedDocument.body.innerHTML = xhr.responseText;
                // ensure domains are the same, otherwise we'll have issues appending the
                // element in IE 11
                if (cachedDocument.domain !== document.domain) cachedDocument.domain = document.domain;
                xhr._cachedTarget = {
                };
            }
            // clear the xhr embeds list and embed each item
            xhr._embeds.splice(0).map(function(item) {
                // get the cached target
                var target = xhr._cachedTarget[item.id];
                // ensure the cached target
                if (!target) target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id);
                // embed the target into the svg
                $c5833fa856004937$var$embed(item.parent, item.svg, target, use);
            });
        }
    };
    // test the ready state change immediately
    xhr.onreadystatechange();
}
function $c5833fa856004937$var$svg4everybody(rawopts) {
    var opts = Object(rawopts);
    // create legacy support variables
    var nosvg;
    var fallback;
    // if running with legacy support
    if ($c5833fa856004937$var$LEGACY_SUPPORT) {
        // configure the fallback method
        fallback = opts.fallback || function(src) {
            return src.replace(/\?[^#]+/, '').replace('#', '.').replace(/^\./, '') + '.png' + (/\?[^#]+/.exec(src) || [
                ''
            ])[0];
        };
        // set whether to shiv <svg> and <use> elements and use image fallbacks
        nosvg = 'nosvg' in opts ? opts.nosvg : /\bMSIE [1-8]\b/.test(navigator.userAgent);
        // conditionally shiv <svg> and <use>
        if (nosvg) {
            document.createElement('svg');
            document.createElement('use');
        }
    }
    // set whether the polyfill will be activated or not
    var polyfill;
    var olderIEUA = /\bMSIE [1-8]\.0\b/;
    var newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/;
    var webkitUA = /\bAppleWebKit\/(\d+)\b/;
    var olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
    var edgeUA = /\bEdge\/.(\d+)\b/;
    //Checks whether iframed
    var inIframe = window.top !== window.self;
    if ('polyfill' in opts) polyfill = opts.polyfill;
    else if ($c5833fa856004937$var$LEGACY_SUPPORT) polyfill = olderIEUA.test(navigator.userAgent) || newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
    else polyfill = newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
    // create xhr requests object
    var requests = {
    };
    // use request animation frame or a timeout to search the dom for svgs
    var requestAnimationFrame = window.requestAnimationFrame || setTimeout;
    // get a live collection of use elements on the page
    var uses = document.getElementsByTagName('use');
    var numberOfSvgUseElementsToBypass = 0;
    function oninterval() {
        // if all <use>s in the array are being bypassed, don't proceed.
        if (numberOfSvgUseElementsToBypass && uses.length - numberOfSvgUseElementsToBypass <= 0) return void requestAnimationFrame(oninterval, 67);
        // if there are <use>s to process, proceed.
        // reset the bypass counter, since the counter will be incremented for every bypassed element,
        // even ones that were counted before.
        numberOfSvgUseElementsToBypass = 0;
        // get the cached <use> index
        var index = 0;
        // while the index exists in the live <use> collection
        while(index < uses.length){
            // get the current <use>
            var use = uses[index];
            // get the current <svg>
            var parent = use.parentNode;
            var svg = $c5833fa856004937$var$getSVGAncestor(parent);
            var src = use.getAttribute('xlink:href') || use.getAttribute('href');
            if (!src && opts.attributeName) src = use.getAttribute(opts.attributeName);
            if (svg && src) {
                // if running with legacy support
                if ($c5833fa856004937$var$LEGACY_SUPPORT && nosvg) {
                    // create a new fallback image
                    var img = document.createElement('img');
                    // force display in older IE
                    img.style.cssText = 'display:inline-block;height:100%;width:100%';
                    // set the fallback size using the svg size
                    img.setAttribute('width', svg.getAttribute('width') || svg.clientWidth);
                    img.setAttribute('height', svg.getAttribute('height') || svg.clientHeight);
                    // set the fallback src
                    img.src = fallback(src, svg, use);
                    // replace the <use> with the fallback image
                    parent.replaceChild(img, use);
                } else if (polyfill) {
                    if (!opts.validate || opts.validate(src, svg, use)) {
                        // remove the <use> element
                        parent.removeChild(use);
                        // parse the src and get the url and id
                        var srcSplit = src.split('#');
                        var url = srcSplit.shift();
                        var id = srcSplit.join('#');
                        // if the link is external
                        if (url.length) {
                            // get the cached xhr request
                            var xhr = requests[url];
                            // ensure the xhr request exists
                            if (!xhr) {
                                xhr = requests[url] = new XMLHttpRequest();
                                xhr.open('GET', url);
                                xhr.send();
                                xhr._embeds = [];
                            }
                            // add the svg and id as an item to the xhr embeds list
                            xhr._embeds.push({
                                parent: parent,
                                svg: svg,
                                id: id
                            });
                            // prepare the xhr ready state change event
                            $c5833fa856004937$var$loadreadystatechange(xhr, use);
                        } else // embed the local id into the svg
                        $c5833fa856004937$var$embed(parent, svg, document.getElementById(id), use);
                    } else {
                        // increase the index when the previous value was not "valid"
                        ++index;
                        ++numberOfSvgUseElementsToBypass;
                    }
                }
            } else // increase the index when the previous value was not "valid"
            ++index;
        }
        // continue the interval
        requestAnimationFrame(oninterval, 67);
    }
    // conditionally start the interval if the polyfill is active
    if (polyfill) oninterval();
}
function $c5833fa856004937$var$getSVGAncestor(node) {
    var svg = node;
    while(svg.nodeName.toLowerCase() !== 'svg'){
        svg = svg.parentNode;
        if (!svg) break;
    }
    return svg;
}
$c5833fa856004937$export$1c85ee430938967 = $c5833fa856004937$var$svg4everybody;


$c5833fa856004937$export$1c85ee430938967();

})();
//# sourceMappingURL=404.24a924f3.js.map
