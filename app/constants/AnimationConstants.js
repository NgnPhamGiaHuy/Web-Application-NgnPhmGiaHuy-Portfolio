"use client"

import Group01 from "@/app/components/Group/Group01";
import Group02 from "@/app/components/Group/Group02";
import Group03 from "@/app/components/Group/Group03";
import Group04 from "@/app/components/Group/Group04";
import Group05 from "@/app/components/Group/Group05";
import Group06 from "@/app/components/Group/Group06";
import Group07 from "@/app/components/Group/Group07";
import Group08 from "@/app/components/Group/Group08";
import Group09 from "@/app/components/Group/Group09";
import Group10 from "@/app/components/Group/Group10";
import Group11 from "@/app/components/Group/Group11";
import Group12 from "@/app/components/Group/Group12";
import Group13 from "@/app/components/Group/Group13";
import Group14 from "@/app/components/Group/Group14";
import Group15 from "@/app/components/Group/Group15";
import Group16 from "@/app/components/Group/Group16";

export const ABOUT_ANIMATION_COVER = [
    { Component: Group01, className: "left-[180px] top-[220px]", animatePos: { x: 180, y: 80 } },
    { Component: Group02, className: "left-[210px] bottom-[30px]", animatePos: { x: 160, y: 20 } },
    { Component: Group03, className: "left-[300px] top-[180px]", animatePos: { x: 120, y: 80 } },
    { Component: Group04, className: "left-[780px] top-[420px]", animatePos: { x: -280, y: 0 } },
    { Component: Group05, className: "right-[210px] bottom-[120px]", animatePos: { x: -120, y: 40 }, isRight: true },
    { Component: Group06, className: "left-[725px] top-[260px]", animatePos: { x: -120, y: 60 } },
    { Component: Group07, className: "left-[660px] top-[180px]", animatePos: { x: -100, y: 80 } },
    { Component: Group08, className: "left-[10px] top-[360px]", animatePos: { x: 300, y: 40 } },
    { Component: Group09, className: "left-[284px] top-[78.42px]", animatePos: { x: 160, y: 80 } },
    { Component: Group10, className: "left-[620px]", animatePos: { x: -140, y: 80 } },
    { Component: Group11, className: "right-[200px] bottom-[250px]", animatePos: { x: -120, y: 40 }, isRight: true },
    { Component: Group12, className: "left-[130px] bottom-[80px]", animatePos: { x: 200, y: 10 } },
    { Component: Group12, className: "left-[195px] top-[185px]", animatePos: { x: 220, y: 80 } },
    { Component: Group13, className: "left-[20px] bottom-[10px]", animatePos: { x: 320, y: 0 } },
    { Component: Group14, className: "right-0 top-[270px]", animatePos: { x: -320, y: 50 }, isRight: true },
    { Component: Group15, className: "left-[160px] bottom-[280px]", animatePos: { x: 200, y: 60 } },
    { Component: Group15, className: "right-[250px] bottom-[220px]", animatePos: { x: -80, y: 40 }, isRight: true },
    { Component: Group15, className: "right-[180px] bottom-[80px]", animatePos: { x: -140, y: 20 }, isRight: true },
    { Component: Group16, className: "top-[-80px] right-1/2", animatePos: { x: 40, y: 120 }, isRight: true },
];

export const CIRCLES_DIAMETER_ANIMATION = [
    { diameter: 314, diameterScale: 624 },
    { diameter: 294, diameterScale: 590 },
    { diameter: 270, diameterScale: 552 },
    { diameter: 244, diameterScale: 506 },
    { diameter: 218, diameterScale: 460 },
    { diameter: 192, diameterScale: 410 },
];

export const PORTFOLIO_CARD_STYLES = {
    BACKGROUND_IMAGE: (imageUrl) => `linear-gradient(207deg, rgba(0, 0, 0, 0.00) 47.41%, rgba(0, 0, 0, 0.36) 76.39%, rgba(0, 0, 0, 0.50) 89.23%), url(${imageUrl})`,
    BACKGROUND_COLOR: "lightgray",
    BACKGROUND_POSITION: "50%",
    BACKGROUND_SIZE: "cover",
    BACKGROUND_REPEAT: "no-repeat",
    FALLBACK: "var(--white, #FFF)",
};

export const PORTFOLIO_CARD_BACKGROUND_VARIANTS = {
    hidden: {
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
        opacity: 0,
        borderRadius: 24,
        transition: { duration: 0.5 },
    },
    visible: {
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(12.5px)",
        opacity: 1,
        borderRadius: 24,
        transition: { duration: 0.5 },
    },
};

export const PORTFOLIO_CARD_CONTENT_VARIANTS_VISIBLE = {
    hidden: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.5 },
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export const PORTFOLIO_CARD_CONTENT_VARIANTS_HIDDEN = {
    hidden: {
        opacity: 0,
        y: -60,
        x: 0,
        transition: { duration: 0.3 },
    },
    visible: {
        opacity: 1,
        y: 0,
        x: -10,
        transition: { duration: 0.3 },
    },
};
