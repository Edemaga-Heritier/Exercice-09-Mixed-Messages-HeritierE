let qualite =['humilite','sagesse','gentil','inteligent'];
let noms =['heritier','paul','job','joe'];
let action =['coach','proffesseur','mentor'];

function genererMessage() {
    let adjectifAleatoire = qualite[Math.floor(Math.random() * adjectifs.length)];
    let nomAleatoire = noms[Math.floor(Math.random() * noms.length)];
    let actionAleatoire = action[Math.floor(Math.random() * actions.length)];
  
    return `Ce ${adjectifAleatoire} ${nomAleatoire} ${actionAleatoire} des messages.`;
  }
  
  console.log(genererMessage());