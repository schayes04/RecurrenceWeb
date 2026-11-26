// en-GB, en-AU and en-CA, derived from the en-US copy. Task names match the
// app's own regional English (Localizable.xcstrings); search words follow each
// store listing (bin and rota in the UK, bins and rego in Australia, garbage in Canada).
import type { SiteContent } from './types';
import { derive } from './derive';
import enUS from './en-US';

const commonwealth: [string, string][] = [
  ['Check Tire Pressure', 'Check Tyre Pressure'],
  ['Dentist Checkup', 'Dentist Check-up'],
  ['Vet Checkup', 'Vet Check-up'],
  ['checkups', 'check-ups'],
  ['checkup', 'check-up'],
  ['tire pressure', 'tyre pressure'],
  ['tire checks', 'tyre checks'],
  ['tires', 'tyres'],
  ['canceled', 'cancelled'],
  ['synchronization', 'synchronisation'],
  ['November 26, 2026', '26 November 2026'],
  // Free tools
  ['spring and fall', 'spring and autumn'],
  ['in fall and winter', 'in autumn and winter'],
  ['recognize', 'recognise'],
  ['Fertilize', 'Fertilise'],
  ['Get an eye exam', 'Have an eye test'],
  ['January 31', '31 January'],
  ['February 28', '28 February'],
  ['February 29', '29 February'],
  ['February 30', '30 February'],
];

export const enGB: SiteContent = derive(enUS, [
  ['Take Out Trash', 'Take Out the Rubbish'],
  ['trash day', 'bin day'],
  ['Trash day', 'Bin day'],
  ['trash night', 'bin night'],
  ['Trash goes out every Thursday.', 'The bins go out every Thursday.'],
  ...commonwealth,
  ['Oil changes, tyre checks and new wipers', 'Oil changes, tyre checks, new wipers and the MOT'],
]);

export const enAU: SiteContent = derive(enUS, [
  ['Take Out Trash', 'Put the Bins Out'],
  ['trash day', 'bin night'],
  ['Trash day', 'Bin night'],
  ['trash night', 'bin night'],
  ['Trash goes out every Thursday.', 'The bins go out every Thursday.'],
  ...commonwealth,
  ['Oil changes, tyre checks and new wipers', 'Oil changes, tyre checks, new wipers and rego'],
]);

export const enCA: SiteContent = derive(enUS, [
  ['Take Out Trash', 'Take Out the Garbage'],
  ['trash day', 'garbage day'],
  ['Trash day', 'Garbage day'],
  ['trash night', 'garbage night'],
  ['Trash goes out every Thursday.', 'Garbage goes out every Thursday.'],
  ['canceled', 'cancelled'],
]);
