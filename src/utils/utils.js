export const wilders = [
    "Guillaume",
    "Margaux",
    "Marion",
    "Danyel",
    "Bertrand",
    "Samy",
    "Elodie",
    "Damien",
    "David",
    "JB",
    "Denis",
    "Vincent",
    "Nadège",
    "Nicolas",
    "Julien",
    "Alban"
]

export function getRandomWilder(wildersList) {
    const randomNumber = Math.floor(Math.round(Math.random() * (wildersList.length - 1)));
    console.log(randomNumber)
    return wildersList[randomNumber];
}