// import { useState } from 'react'





function NavBar({taillePokList, countState}) {

    const [count, setCount] = countState;

    console.log(taillePokList + setCount +  count);

    /* Evenement clic bouton prec/suivant */
    const handleClick = (event) => {

  
    const parent = event.target;

  


    /* Detect precedent ou suivant selon id target */
    switch (parent.id) {


      /* Precedente */
      case "btn-prec" : 
        
        setCount(count - 1);
          
        if(count < 0 ){
            setCount(taillePokList -1 );
          }
      
      break;




      /* Suivante */
      case "btn-suiv": 
      
      setCount(count + 1);

      if(count >= taillePokList ){
        setCount(0);
      }

      break;
    }
    
   }






    return (

        <div>

        <h1> Selectionne ton pokémon </h1>
        <button id="btn-prec" className="button" onClick = {handleClick} > Precedente </button>
        <button id="btn-suiv" className="button" onClick = {handleClick} > Suivante </button>

        </div>

    )



}

export default NavBar