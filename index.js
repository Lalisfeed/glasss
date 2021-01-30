const glasscss = (options) => { 
    options = JSON.stringify(options)
    let pieces = document.querySelectorAll(".glasscss");
    
    if (!options.back_ground || !(options.back_ground).length) {
        back_ground = `rgba(225,255,255, 0.25)`;        
    } else {
        back_ground = `${options.back_ground}`; // rgba recomended with transparancy limit 0 - 0.25
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

    if (options.border_width === true) {
        border_width = `1px solid rgba( 255, 255, 255, 0.18 )`;
    } else {
        border_width = `0px`;
    }
    
    pieces.forEach((piece) => {
        piece.style.boxShadow = `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`;
        piece.style.background = back_ground;
        piece.style.backdropFilter = backdrop_filter;
        piece.style.borderRadius = border_radius;
        piece.style.border = border_width;
        piece.style.color = color_value;
        piece.style.margin = margin_value;
        piece.style.padding = padding_value;
    })
}

// exporting values
module.exports.glasscss = glasscss;