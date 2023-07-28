const qualite = ['humilite', 'sagesse', 'gentil', 'intelligent'];
const noms = ['heritier', 'paul', 'job', 'joe','afho'];
const action = ['coach', 'professeur', 'mentor','conseille'];

function genererMessage() {
    const qualiteAleatoire = qualite[Math.floor(Math.random() * qualite.length)];
    const nomAleatoire = noms[Math.floor(Math.random() * noms.length)];
    const actionAleatoire = action[Math.floor(Math.random() * action.length)];

    return `Ce ${qualiteAleatoire} ${nomAleatoire} ${actionAleatoire} des messages.`;
}

console.log(genererMessage());