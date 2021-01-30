const glasscss = (options) => {
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

    if (options.border_size === true) {
        border_size = `1px solid rgba( 255, 255, 255, 0.18 )`;
    } else {
        border_size = `0px`;
    }

    
    pieces.forEach((piece) => {
        piece.style.background = back_ground;
        piece.style.boxShadow = `0 8px 32px 0 rgba( 31, 38, 135, 0.37 )`;
        piece.style.backdropFilter = backdrop_filter;
        piece.style.borderRadius = border_radius;
        piece.style.border = border_size;
    })
}

module.exports.glasscss = glasscss;