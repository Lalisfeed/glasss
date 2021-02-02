"use strict"
const glasscss = (options) => { 
    options = JSON.stringify(options)
    let pieces = document.querySelectorAll(".glasscss");
    
    if (!options.back_ground || !(options.back_ground).length) {
        back_ground = `rgba(225,255,255, 0.25)`;        
    } else {
        back_ground = `${options.back_ground}`; // rgba recomended with transparancy limit 0 - 0.50
    }

    if (parseFloat(options.backdrop_filter) > 0 && parseFloat(options.backdrop_filter) < 20) {
        backdrop_filter = `blur(${options.backdrop_filter})`; // 0 - 20 px
    } else {
        backdrop_filter = `blur(4px)`;
    }

    if (!options.border_radius || !(options.border_radius).length) {
        border_radius = `10px`;
    } else {
        border_radius = `${options.border_radius}`;
    }

    if (options.border_wide === true) {
        border_wide = `1px solid rgba( 255, 255, 255, 0.18 )`;
    } else {
        border_wide = `0px`;
    }
    
    color_value = options.color_value
    margin_value = options.margin_value
    padding_value = options.padding_value
    
    pieces.forEach((piece) => {
        piece.style.boxShadow = `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`;
        piece.style.background = back_ground;
        piece.style.backdropFilter = backdrop_filter;
        piece.style.borderRadius = border_radius;
        piece.style.border = border_wide;
        piece.style.color = color_value;
        piece.style.margin = margin_value;
        piece.style.padding = padding_value;
    })
}


const glassClass = (objects) => { 
    objects = JSON.stringify(objects);
    const classNames = Object.keys(objects);
    const classValues = Object.values(objects);
    classNames.forEach((className, classIndex) => {
        let newClasses = document.querySelectorAll(`.${className}`);
        let options = classValues[classIndex];
        
        if (!options.back_ground || !(options.back_ground).length) {
            back_ground = `rgba(225,255,255, 0.25)`;        
        } else {
            back_ground = `${options.back_ground}`; // rgba recomended with transparancy limit 0 - 0.50
        }
    
        if (parseFloat(options.backdrop_filter) > 0 && parseFloat(options.backdrop_filter) < 20) {
            backdrop_filter = `blur(${options.backdrop_filter})`; // 0 - 20 px
        } else {
            backdrop_filter = `blur(4px)`;
        }
    
        if (!options.border_radius || !(options.border_radius).length) {
            border_radius = `10px`;
        } else {
            border_radius = `${options.border_radius}`;
        }
    
        if (options.border_wide === true) {
            border_wide = `1px solid rgba( 255, 255, 255, 0.18 )`;
        } else {
            border_wide = `0px`;
        }
        
        color_value = options.color_value
        margin_value = options.margin_value
        padding_value = options.padding_value
        
        newClasses.forEach((newClass) => {
            newClass.style.boxShadow = `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`;
            newClass.style.background = back_ground;
            newClass.style.backdropFilter = backdrop_filter;
            newClass.style.borderRadius = border_radius;
            newClass.style.border = border_wide;
            newClass.style.color = color_value;
            newClass.style.margin = margin_value;
            newClass.style.padding = padding_value;
        })
    })
}

// exporting values
module.exports = {
    glasscss : glasscss,
    glassClass : glassClass
};