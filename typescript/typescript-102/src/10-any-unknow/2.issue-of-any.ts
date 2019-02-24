const halloweenCostumeIdeas: any =  ['😱', '👹 ', '🤖', '👻', '👽'];

halloweenCostumeIdeas.indexOf('👽')
// no controll of the following things as it not check the type
// in an other word, it downgrade to non type check program
halloweenCostumeIdeas.a.b.c.d
halloweenCostumeIdeas();



function randomCostume(ideas: string[]) {
  return ideas[Math.floor(Math.random() * ideas.length)];
}
// there's no check of as a input value as well becaust it is any. so maybe string[]
randomCostume(halloweenCostumeIdeas);