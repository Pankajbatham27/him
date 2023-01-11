exports.id = 965;
exports.ids = [965];
exports.modules = {

/***/ 1600:
/***/ ((module) => {

// Exports
module.exports = {
	"topNav": "Header_topNav__DnBQx",
	"headerMainText": "Header_headerMainText__J6_XN",
	"logoHeader": "Header_logoHeader__7pM2b"
};


/***/ }),

/***/ 9965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Body_Body)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Footer/Footer.js

const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "footer_stick",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "bg-dark pt-3 pb-3 mt-5",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-0 text-white",
                                children: "Copyright \xa9DIT. All Rights Reserved"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-0 text-white text-end",
                                children: "Designed & developed by HPSeDC"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./components/Header/Header.module.css
var Header_module = __webpack_require__(1600);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./public/him-logo.png
/* harmony default export */ const him_logo = ({"src":"/_next/static/media/him-logo.0d3db4f2.png","height":480,"width":520,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAj0lEQVR42k3KOw7DMAwDUFmWFEn+p+2QTkWA9v5HrD0EyAO4kISl+JCa92w2uJUnwV2rrzjLAhNFOZi2w7TVGYbFtaVkXQPAEwP+EMKJIb5Va4LFdETh1Of4iRhPivSd55PZc/IHwiJSrOSxIwISCTGZb1K6cFK4uHcVzltO++bWFVGQyCLcrSF57wAcru4PAWkGGWSfEWwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header/Header.js







const Header = ()=>{
    const router = (0,router_.useRouter)();
    const DynamicHeader = dynamic_default()(null, {
        loadableGenerated: {
            modules: [
                "..\\components\\Header\\Header.js -> " + "./Boostrapjs"
            ]
        },
        ssr: false
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
                onLoad: ()=>{
                    const googleTranslateElementInit = ()=>{
                        new window.google.translate.TranslateElement({
                            pageLanguage: "en"
                        }, "google_translate_element");
                    };
                    window.googleTranslateElementInit = googleTranslateElementInit;
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DynamicHeader, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-gray",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-6 d-flex align-items-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: (Header_module_default()).topNav,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#!",
                                                        children: "Screen Reader"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#serviceSection",
                                                        children: "Skip to Main Content"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#navigation",
                                                        children: "Skip to Navigation"
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-md-6 d-flex align-items-center justify-content-end",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: (Header_module_default()).topNav,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    id: "google_translate_element"
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "container pt-3 pb-3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-2 d-flex align-items-center justify-content-end",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: him_logo.src,
                                        className: `img-fluid ${(Header_module_default()).logoHeader}`,
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-8 d-flex justify-content-center align-items-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                className: (Header_module_default()).headerMainText,
                                                children: "H.P. STATE ELECTRONICS DEVELOPMENT CORPORATION LTD."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-center fw-bold",
                                                children: "A Government of HP Undertaking"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-md-2 d-flex align-items-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "https://hpsedc.in/wp-content/uploads/2021/08/hplogo.png",
                                        className: `img-fluid ${(Header_module_default()).logoHeader}`,
                                        alt: ""
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-primary",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                className: "navbar navbar-expand-lg navbar-dark",
                                id: "navigation",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "container-fluid",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "navbar-toggler",
                                            type: "button",
                                            "data-bs-toggle": "collapse",
                                            "data-bs-target": "#navbarNav",
                                            "aria-controls": "navbarNav",
                                            "aria-expanded": "false",
                                            "aria-label": "Toggle navigation",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "navbar-toggler-icon"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "collapse navbar-collapse",
                                            id: "navbarNav",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "navbar-nav m-auto",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "nav-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: `${"nav-link"} ${router.pathname == "/" ? "active" : ""}`,
                                                                "aria-current": "page",
                                                                children: "Home"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/about-us",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: `${"nav-link"} ${router.pathname == "/about-us" ? "active" : ""}`,
                                                                children: "About Us"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/services",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: `${"nav-link"} ${router.pathname == "/services" ? "active" : ""}`,
                                                                children: "Services"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/contact",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: `${"nav-link"} ${router.pathname == "/contact" ? "active" : ""}`,
                                                                children: "Contact Us"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./components/Body/Body.js



const Body = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                style: {
                    "min-height": "70vh"
                },
                children: props.children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    });
};
/* harmony default export */ const Body_Body = (Body);


/***/ })

};
;