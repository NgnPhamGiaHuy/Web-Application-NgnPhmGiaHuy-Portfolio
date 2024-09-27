/** @type {import("tailwindcss").Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        flex: {
            "custom-100": "1 0 0",
        },
        extend: {
            colors: {
                primary: "#FD853A",
                secondary: "#FEB273",
                accent: "#171717",
                surface: "#FFFFFF",
                background: "#FFFFFF",
                "secondary-background": "#F2F4F7",
            },
        },
    },
    plugins: [
        plugin(({ addVariant, e }) => {
            addVariant("rem", ({ container, separator }) => {
                const rootFontSize = 19.2;
                container.walkRules((rule) => {
                    rule.selector = `.${e(`rem${separator}`)}${rule.selector.slice(1)}`;
                    rule.walkDecls((decl) => {
                        if (decl.value.includes("px")) {
                            const value = decl.value.replace(/(\d+)px/g, (match, p1) => `${p1 / rootFontSize}rem`);
                            decl.value = value;
                        }
                    });
                });
            });
        }),
        plugin(({ addVariant, e }) => {
            addVariant("ratio", ({ container, separator }) => {
                container.walkRules((rule) => {
                    rule.selector = `.${e(`ratio${separator}`)}${rule.selector.slice(1)}`;
                    rule.walkDecls((decl) => {
                        const ratioValues = decl.value.split(" ");
                        if (ratioValues.length === 2) {
                            const num1 = parseInt(ratioValues[0]);
                            const num2 = parseInt(ratioValues[1]);
                            if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
                                const percentage = `${(num1 / num2) * 100}%`;
                                decl.value = `${percentage}`;
                            }
                        }
                    });
                });
            });
        }),
    ],
};
