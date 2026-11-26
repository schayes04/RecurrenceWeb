// Spanish (Spain), derived from the Latin American copy. Task names, tabs and
// settings follow the app's es-ES strings (Ajustes, coche, filaria).

import { derive } from './derive';
import es from './es';

export default derive(es, [
  ['Configuración > ', 'Ajustes > '],
  ['ve a Configuración', 've a Ajustes'],
  ['la app Configuración', 'la app Ajustes'],
  ['se administran en la configuración de tu cuenta', 'se gestionan en los ajustes de tu cuenta'],
  ['en la configuración de tu cuenta', 'en los ajustes de tu cuenta'],
  ['Medicina contra el gusano del corazón', 'Medicamento contra la filaria'],
  ['la medicina contra el gusano del corazón', 'el medicamento contra la filaria'],
  ['Quien da la medicina la marca', 'Quien da el medicamento lo marca'],
  ['Medicinas', 'Medicamentos'],
  ['medicinas', 'medicamentos'],
  [/\bautos\b/g, 'coches'],
  [/\bauto\b/g, 'coche'],
  ['Mantén presionada', 'Mantén pulsada'],
  ['modo de enfoque', 'modo de concentración'],
  ['monto', 'importe'],
  ['Agrega', 'Añade'],
  ['agrega', 'añade'],
  ['odómetro', 'cuentakilómetros'],
  ['cada servicio', 'cada revisión'],
  ['toque un servicio', 'toque una revisión'],
  ['ícono', 'icono'],
  ['4.7+', '4,7+'],
  ['Calificación en el App Store', 'Valoración en el App Store'],
  ['¿le diste de comer al perro?', '¿le has dado de comer al perro?'],
  ['Pagos y suscripciones', 'Facturas y suscripciones'],
  ['recordatorio de pagos y suscripciones', 'recordatorio de facturas y suscripciones'],
  ['Quehaceres del hogar', 'Tareas domésticas'],
], (c) => {
  c.useCases.chores.meta.title = 'App de tareas domésticas y limpieza de casa | Recurrence';
});
