import React from 'react'
import { BigHead } from '@bigheads/core'
export  function Faces({character,width}) {
//console.log("character:"+JSON.stringify(character));

  return (
    <BigHead   alt='imagen' width={width}
    accessory={(character.gafas===1)?'roundGlasses':'none'}
    body={(character.pelo_largo===0)?'chest':'breasts'}
    circleColor="blue"
    clothing="shirt"
    clothingColor={character.color_camiseta}
    eyebrows="serious"
    eyes="normal"
    facialHair={(character.barba===1)?'mediumBeard':'none'}
    graphic="none"
    hair={(character.calvo)?'balding':character.pelo_largo===0?'short':'long'}
    hairColor={character.color_pelo}
    hat={(character.gorro===1)?'beanie':'none'}
    hatColor={(character.color_gorro)?character.color_gorro:'black'}
    lashes="true"
    lipColor="green"
    mouth="openSmile"
    skinTone={character.color_piel}
      />
  )
}
