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
  ['refrigerador', 'frigorífico'],
  ['Respaldar el celular y la computadora', 'Hacer copia de seguridad del móvil y el ordenador'],
  ['O activa los respaldos automáticos y revisa de vez en cuando que funcionen.', 'O activa las copias de seguridad automáticas y comprueba de vez en cuando que funcionan.'],
  ['canaletas', 'canalones'],
  ['jarra purificadora', 'jarra con filtro'],
  ['Presiona el botón de prueba', 'Pulsa el botón de prueba'],
  ['usas lentes o lentes de contacto', 'llevas gafas o lentillas'],
  ['el estuche de los lentes de contacto', 'el estuche de las lentillas'],
  ['Hacerte un examen de la vista', 'Revisarte la vista'],
  ['en el piso', 'en el suelo'],
  ['si manejas', 'si conduces'],
  ['el pasto', 'el césped'],
  ['tabletas y pipetas', 'comprimidos y pipetas'],
  ['la hoja de afeitar', 'la cuchilla de afeitar'],
  ['Revisar tu reporte de crédito', 'Revisar seguros y contratos'],
  ['Busca cuentas que no reconozcas y errores que puedas reclamar.', 'Compara los precios del seguro, la luz y el teléfono, y busca cargos que no reconozcas.'],
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
  c.useCases.chores.meta.title = 'App de tareas domésticas y limpieza de casa | Tareas';
  if (c.tools) c.tools.howOften.areas.car = 'Coche';
});
