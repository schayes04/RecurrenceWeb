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
  ['Poubelles', 'Ordures'],
  ['poubelles', 'ordures'],
  ['carte bancaire', 'carte de crédit'],
  ['Télécharger le kit presse', 'Télécharger la trousse média'],
  ['Télécharger le kit', 'Télécharger la trousse'],
  ['Kit presse', 'Trousse média'],
  [/ ([?!;])/g, '$1'],
]);
