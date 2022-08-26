import React from "react";
import {motion} from 'framer-motion'


export default function SvgSlingy(){
    
    return(
        <motion.div animate={{x:-80,y:30}} transition={{type:"tween", duration: 4}}>
        <svg width="266" className='slingy' height="216" viewBox="0 0 266 216" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="258.925" height="88.6113" transform="matrix(-0.839587 0.543225 0.543225 0.839587 217.444 0.266113)" fill="url(#pattern4)"/>
<defs>
<pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_26_20" transform="translate(0 -0.321821) scale(0.000520833 0.00152189)"/>
</pattern>
</defs>
</svg>
</motion.div>

    )
}