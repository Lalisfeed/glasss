"use strict";

// function for the glass morphism

function glasscss (options) {
    let pieces = document.querySelectorAll(".glasscss");
    
    if (!options.BACKGROUND || !(options.BACKGROUND).length) {
        BACKGROUND = `rgba(225,255,255, 0.25)`;        
    } else {
        BACKGROUND = `${options.BACKGROUND}`; // rgba recomended with transparancy limit 0 - 0.25
    }

    if (parseFloat(options.BACKDROPFILTER) > 0 && parseFloat(options.BACKDROPFILTER) < 20) {
        BACKDROPFILTER = `blur(${options.BACKDROPFILTER})`; // 0 - 20 px
    } else {
        BACKDROPFILTER = `blur(4px)`;
    }

    if (!options.BORDERRADIUS || !(options.BORDERRADIUS).length) {
        BORDERRADIUS = `10px`;
    } else {
        BORDERRADIUS = `${options.BORDERRADIUS}`;
    }

    if (options.BORDER === true) {
        BORDER = `1px solid rgba( 255, 255, 255, 0.18 )`;
    } else {
        BORDER = `0px`;
    }

    
    pieces.forEach((piece) => {
        piece.style.background = BACKGROUND;
        piece.style.boxShadow = `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`;
        piece.style.backdropFilter = BACKDROPFILTER;
        piece.style.borderRadius = BORDERRADIUS;
        piece.style.border = BORDER;
    })
}

module.exports = {glasscss : glasscss}