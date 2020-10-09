/**
 *  TipList: renders individual tip objects as HTML. Creates container element and renders each individual tip component for each tip in collection
 */

import { someTips } from './TipDataProvider.js'
import { Tip } from './Tip.js'
export const TipsList = () => {
    //Reference to `<article class="content">`
   
    const contentElement = document.querySelector(".fishTips")
    const tipz = someTips()
    // debugger

    // console.log(contentElement)

    /*
      Invoke the Tip component function
      and pass the current tip object as an argument.
      Each time, add the return value to the
      tipHTMLRepresentations variable with `+=`
    */
    let tipsHTMLRepresentations = ""
    for (const tip of tipz) {
        tipsHTMLRepresentations += Tip(tip)
    }

    //add to existing HTML in the contentElement
    contentElement.innerHTML += `
    <article class="tipzList">
        ${tipsHTMLRepresentations}
    </article>
    `
}