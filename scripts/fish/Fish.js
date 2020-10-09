/**
 *  Fish: renders each individual fish objects as HTML
 */

export const Fish = (fishObjects) => {
    return `
        <div class="fish">
            <div><img class="fish__image" src="${fishObjects.image}"></div>
            <div class="fish__name">${fishObjects.name}</div>
            <div class="fish__species">${fishObjects.species}</div>
            <div class="fish__length">${fishObjects.length} inches</div>
            <div class="fish__location">${fishObjects.location}</div>
            <div class="fish__diet">${fishObjects.food}</div>
        </div>
        `
}