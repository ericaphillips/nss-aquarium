/**
 *  Tip: renders each individual tip objects as HTML
 */

export const Tip = (tipsObjects) => {
    return `
        <div class="tipss">
            <div class="tip__number">${tipsObjects.numb}</div>
            <div class="tip__saying">${tipsObjects.saying}</div>
        </div>
        `
}