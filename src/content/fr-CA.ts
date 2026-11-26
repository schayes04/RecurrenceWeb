// Canadian French, derived from the France copy. Task names follow the app's
// fr-CA strings; Quebec typography drops the space before ? ! and ;.

import { derive } from './derive';
import fr from './fr';

export default derive(fr, [
  ['Contrôle chez le dentiste', 'Examen chez le dentiste'],
  ['contrôle chez le dentiste', 'examen chez le dentiste'],
  ['dernier contrôle', 'dernier examen'],
  ['Traitement antipuces et antitiques', 'Traitement contre les puces et les tiques'],
  ['Vidange', 'Changement d’huile'],
  ['Laver la voiture', 'Laver l’auto'],
  ['Faire la vidange', 'Faire changer l’huile'],
  ['traitement antipuces et antitiques', 'traitement contre les puces et les tiques'],
  ['la gaine du sèche-linge', 'le conduit de la sécheuse'],
  ['Nettoyez la gaine', 'Nettoyez le conduit'],
  ['le lave-linge', 'la laveuse'],
  ['de la carafe filtrante', 'du pichet filtrant'],
  ['Faire le point sur vos contrats', 'Vérifier votre dossier de crédit'],
  ['Comparez assurances, énergie et forfaits avant leur échéance pour ne pas payer trop cher.', 'Repérez les comptes que vous ne reconnaissez pas et les erreurs à faire corriger.'],
  ['Poubelles', 'Ordures'],
  ['poubelles', 'ordures'],
  ['carte bancaire', 'carte de crédit'],
  ['Télécharger le kit presse', 'Télécharger la trousse média'],
  ['Télécharger le kit', 'Télécharger la trousse'],
  ['Kit presse', 'Trousse média'],
  [/ ([?!;])/g, '$1'],
]);
