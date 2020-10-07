/**
 *  FishList: renders individual fish objects as HTML. Creates container element and renders each individual fish component for each fish in collection
 */

import { useFish } from './FishDataProvider.js'
export const FishList = () => {
    //Reference to `<article class="content">`
    const contentElement = document.querySelector(".topLeft")
    const fishes = useFish()

    //add to existing HTML in the content element
    contentElement.innerHTML += `
    <article class="fishList">
    <h3>All of the fish!</h3>
    <div></div>
    </article>
    `
}