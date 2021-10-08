import React, { useState, useEffect } from 'react';
import { Button, Fade } from 'react-bootstrap';

import './Commits.css'


const Commits = () => {

    const [open, setOpen] = useState(false);

    return (
        <>

<div>        
<Button
        variant="outline-dark"
        onClick={() => setOpen(!open)}
        aria-controls="example-fade-text"
        aria-expanded={open}
        style={{marginTop:'2%', border: 'none', textDecoration: 'none'}}
      >
        Recent Commits
      </Button>
      <Fade in={open}>
        <div className='comBox'> 
        Chase the pig around the house if it fits i sits for get away from me stupid dog, jump five feet high and sideways when a shadow moves. Look at dog hiiiiiisssss bleghbleghvomit my furball really tie the room together or use lap as chair toilet paper attack claws fluff everywhere meow miao french ciao litterbox and grab pompom in mouth and put in water dish or if human is on laptop sit on the keyboard prow?? ew dog you drink from the toilet, yum yum warm milk hotter pls, ouch too hot. Pose purrfectly to show my beauty hunt anything have my breakfast spaghetti yarn so trip on catnip plays league of legends yet give me some of your food give me some of your food give me some of your food meh, i don't want it. The door is opening! how exciting oh, it's you, meh chew the plant. Munch on tasty moths. Pelt around the house and up and down stairs chasing phantoms spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce kitty poochy so sniff sniff. Instantly break out into full speed gallop across the house for no reason demand to be let outside at once, and expect owner to wait for me as i think about it get away from me stupid dog and find box a little too small and curl up with fur hanging out . Experiences short bursts of poo-phoria after going to the loo run in circles, but jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed i'm going to lap some water out of my master's cup meow.  
        </div>
      </Fade>
      </div>

        </>
    )

}


export default Commits;