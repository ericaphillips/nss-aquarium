const fishCollection = [
    {
        name: "Bart",
        food: "crustaceans",
        species: "big fish",
        size: "30 inches",
        location: "Arizona",
        image: "https://s.yimg.com/uu/api/res/1.2/ooYDUbCTpEL6vK1NHOXKnQ--~B/aD0zOTA7dz02MTA7c209MTthcHBpZD15dGFjaHlvbg--/http://globalfinance.zenfs.com/Finance/US_AHTTP_ENTREPRENEUR_H_NEW_LIVE/1409247788-2-what-big-fish-hired-roils-small-pond_original.jpg"
    },
    {
        name: "Small Fry",
        food: "Small and large fish, mollusks",
        species: "Whale Shark",
        size: "30 Feet",
        location: "Ningaloo Reef",
        image: "https://i.insider.com/5d1a31f02516e92a1014446b?width=1200&format=jpeg&auto=webp"
    },
    {
        name: "Carl",
        food: "Bloodworms",
        species: "Buffalo Head Ranchu",
        size: "5 inches",
        location: "Japan",
        image: "https://goldfishnet.com/admin/productimage/15295441285%20DSC01554.JPG"
    },
    {
        name: "Irelia",
        food: "Algae",
        species: "Symphysodon",
        size: "5.8 inches",
        location: "Amazon River",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsnIX75umwOjj5JgdcDJA0Vb8IzZiPT8Q8Ig&usqp=CAU"
    }
]

export const useFish = () => {
    return fishCollection.slice()
}