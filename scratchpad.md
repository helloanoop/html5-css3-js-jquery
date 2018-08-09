CSS3
Colors
Gradients
Text Shadow
Rounded Corners
Transforms
Animations


1. Instill with Life
2. Having the appearance of movement

1. Transition Property
2. Animation property + Keyframes

.element{
  tranistion: [property] [duration] [ease] [delay];
}

Ex: {
  transition: opacity 300ms ease-in-out 1s;
}

Animatable properties
font-size
background-color
width
left

Non Animatable properties
position
font-family
display

Performant Properties
position:
scale:
rotation:
opacity:

Triggering
1. hover pseudo class
2. Class changes

Keyframes
@keyframes [name] {
  from {
    [styles]
  }
  to {
    [styles]
  }
}
.element{
  animation: [name] [duration] [ease] [delay] [iteration-count] [direction] [fill-mode] [play-state]
}

RequireJS Unit Tests Demo

HTML 5
Semantic Tags
Additional Input Controls – Forms
Video & Audio

Colors
  Hex Code  #RRGGBB p{color:#FF0000;}
  Short Hex Code  #RGB  p{color:#6A7;}
  RGB % rgb(rrr%,ggg%,bbb%) p{color:rgb(50%,50%,50%);}
  RGB Absolute  rgb(rrr,ggg,bbb)  p{color:rgb(0,0,255);}
  keyword aqua, black, etc. p{color:teal;}
Background
  The background-color property is used to set the background color of an element.
  The background-image property is used to set the background image of an element.
  The background-repeat property is used to control the repetition of an image in the background.
  The background-position property is used to control the position of an image in the background.
  The background property is used as a shorthand to specify a number of other background properties.  
Fonts
  The font-family property is used to change the face of a font.
  The font-style property is used to make a font italic or oblique.
  The font-variant property is used to create a small-caps effect.
  The font-weight property is used to increase or decrease how bold or light a font appears.
  The font-size property is used to increase or decrease the size of a font.
  The font property is used as shorthand to specify a number of other font properties.