class Quote {
  constructor(content) {
    this.content = content;
  }

  render() {
    return text(this.content);
  }
}

class ListItem {
  static render(content) {
    const listItem = document.createElement('li');
    listItem.appendChild(content);
    return listItem;
  }
}

const quotations = [
  'The pharmaceutical and insurance industries are legally empowered to hold sick children hostage while their parents frantically bankrupt themselves trying to save their sons or daughters.',
  'Culture and the arts have been replaced by sexual commodification, banal entertainment, and graphic depictions of violence.',
  'When prisoners in our society are released, they have lost the right to vote, and to receive public assistance. They are burdened with fines, that, if unpaid, will put them back behind bars. They are subject to arbitrary searches and arrest. They spend the rest of their lives as marginalized of a members of a vast criminal caste system. And that is why 76% of those released from state penitentiaries return to prison within five years. Our system of mass incarceration, however, is not, as critics charge, "broken." It works exactly the way it is designed to work. The bodies of poor people of color do not generate money for corporations on the streets of our de-industrialized cities, but they generate forty or fifty-thousand dollars a years if we lock them up in cages, and that is why they are there.',
  'This seminal moment in human history marks the end of a long, tragic tale of plunder and murder by the white race. It is inevitable that for the final act we vomited up Trump. Europeans and Americans have spent five centuries conquering, plundering, exploiting, and polluting the earth in the name of civilization and human progress. They use their technological superiority to create the most efficient killing machines on the planet directed against anyone or anything, especially indigenous cultures which stood in their way. They stole and hoarded the planet’s wealth and resources. They believe this orgy of blood and gold will never end. They do not understand that the dark ethic of ceaseless capitalism and imperialist expansion is over, and that it is dooming the exploiters as well as the exploited. But, even as we stand on the cusp of extinction, we lack the ability to free ourselves from the myth of human progress.',
  'To be a rebel is to reject the capitalist mantra of \'I come first\'',
];

renderQuotations();

function renderQuotations() {
  const list = document.getElementById('quotations');
  quotations
    .map(_ => wrap(_, '"'))
    .map(_ => new Quote(_))
    .forEach(quote => {
      const listItem = ListItem.render(quote.render());
      list.appendChild(listItem);
    },
  );
}

function wrap(text, wrapper) {
  return wrapper + text + wrapper;
}

function text(text) {
  return document.createTextNode(text);
}
