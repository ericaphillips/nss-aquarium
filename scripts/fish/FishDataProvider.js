//Fish object key pairs

const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        species: "big fish",
        length: 300000,
        location: "Arizona",
        image: "https://s.yimg.com/uu/api/res/1.2/ooYDUbCTpEL6vK1NHOXKnQ--~B/aD0zOTA7dz02MTA7c209MTthcHBpZD15dGFjaHlvbg--/http://globalfinance.zenfs.com/Finance/US_AHTTP_ENTREPRENEUR_H_NEW_LIVE/1409247788-2-what-big-fish-hired-roils-small-pond_original.jpg"
    },
    {
        name: "Small Fry",
        food: "Small and large fish, mollusks",
        species: "Whale Shark",
        length: 33,
        location: "Ningaloo Reef",
        image: "https://i.insider.com/5d1a31f02516e92a1014446b?width=1200&format=jpeg&auto=webp"
    },
    {
        name: "Carl",
        food: "Bloodworms",
        species: "Buffalo Head Ranchu",
        length: 5,
        location: "Japan",
        image: "https://goldfishnet.com/admin/productimage/15295441285%20DSC01554.JPG"
    },
    {
        name: "Irelia",
        food: "Algae",
        species: "Symphysodon",
        length: 5.8,
        location: "Amazon River",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsnIX75umwOjj5JgdcDJA0Vb8IzZiPT8Q8Ig&usqp=CAU"
    }
]
//The slice method returns a new copy of the array
export const useFish = () => {
    return fishCollection.slice()
}

// export const addFish = (fishObject) => {
//     fishCollection.push(fishObject)
// }

//lesson chapter 13

// export const mostHolyFish = () => {
//     // 3, 6, 9, 12, etc... fish
//     const holyFish = []

//     for (const phish of fishCollection) {
//         if(phish.length % 3 === 0) {
//         holyFish.push(phish)
//         }
//     }
//     return holyFish
// }

// export const soldierFish = () => {
//     // 5, 10, 15, 20, 25, etc... fish
//     const soldiers = []

//     for (const phish of fishCollection) {
//         if(phish.length % 5 === 0 && phish.length %3 !== 0) {
//         soldiers.push(phish)
//         }
//     }
//     return soldiers
// }

// export const nonHolyFish = () => {
//     // Any fish not a multiple of 3 or 5
//     const unholyFish = []

//     for (const phish of fishCollection) {
//         if(phish.length %)
//     }
//     return regularFish
// }