/**
 *  FishList: renders individual fish objects as HTML. Creates container element and renders each individual fish component for each fish in collection
 */

import { useFish } from './FishDataProvider.js'
import { Fish } from './Fish.js'
export const FishList = () => {
    //Reference to `<article class="content">`
   
    const contentElement = document.querySelector(".topLeft")
    const fishes = useFish()

    
    //const fishes = mostHolyFish()

    // console.log(contentElement)

    /*
      Invoke the Fish component function
      and pass the current fish object as an argument.
      Each time, add the return value to the
      fishHTMLRepresentations variable with `+=`
    */
    let fishHTMLRepresentations = ""
    for (const fish of fishes) {
        fishHTMLRepresentations += Fish(fish)
    }

    //add to existing HTML in the contentElement
    contentElement.innerHTML += `
    <article class="fishList">
        ${fishHTMLRepresentations}
    </article>
    `
}
