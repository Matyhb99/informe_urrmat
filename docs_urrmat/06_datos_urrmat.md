# 06  Tratamiento de Datos Personales (Ley 19.628)
  
> **Nivel objetivo:** Destacado — Lista ≥ 3 tipos de datos comprometidos, distingue personales de sensibles, y analiza ≥ 3 derechos ARCO con cita textual de la Ley 19.628.

---

## Introducción

La **Ley N° 19.628 sobre Protección de la Vida Privada**, promulgada en agosto de 1999, es la principal normativa chilena en materia de protección de datos personales. Aunque Chile avanza hacia una nueva ley de datos personales (Proyecto de Ley Boletín 11.144-07), la Ley 19.628 es la norma vigente aplicable al análisis de este caso.

Este archivo examina los datos comprometidos en la brecha de Equifax 2017 bajo la óptica de la Ley 19.628: clasificación de los datos, distinción entre datos personales y datos sensibles, y análisis de los derechos ARCO vulnerados.

---

## Tipos de Datos Comprometidos en el Caso Equifax

### 1. Datos de identificación personal (Datos Personales básicos)

**Descripción:** Información que identifica directamente a una persona natural.

| Dato comprometido | Cantidad de afectados | Equivalente en Chile |
|---|---|---|
| Nombre completo | ~147,9 millones | Nombre y apellidos |
| Fecha de nacimiento | ~147,9 millones | Fecha de nacimiento |
| Dirección física (domicilio) | ~147,9 millones | Dirección |
| Número de Seguridad Social (SSN) | ~147,9 millones | Equivalente al RUT (número de identificación único e irrevocable) |

**Clasificación bajo Ley 19.628:**
El **artículo 2° letra f)** de la Ley 19.628 define los datos de carácter personal como "los relativos a cualquier información concerniente a personas naturales, identificadas o identificables". Todos los datos anteriores caen dentro de esta definición.

El SSN (Número de Seguridad Social) es especialmente crítico: a diferencia de una contraseña, **no puede cambiarse**. Su exposición es equivalente a la exposición del RUT en Chile, un dato que permite realizar trámites legales, acceder a servicios financieros e impersonar a la víctima de forma casi irrevocable.

---

### 2. Datos financieros y crediticios (Datos Personales de mayor sensibilidad)

**Descripción:** Información relacionada con la situación económica y el comportamiento financiero de las personas.

| Dato comprometido | Cantidad de afectados |
|---|---|
| Historial crediticio y puntaje de crédito | ~147,9 millones |
| Números de tarjeta de crédito | ~209.000 personas |
| Números de cuentas bancarias | Incluidos en documentos de disputas |
| Información de deudas y pagos | ~147,9 millones |

**Clasificación bajo Ley 19.628:**
El **artículo 2° letra g)** contempla como datos especialmente protegidos los "datos relativos a las obligaciones de carácter económico, financiero, bancario o comercial". El historial crediticio y las deudas son datos de este tipo. Su compromiso afecta directamente la solvencia percibida y la capacidad de obtener créditos.

---

### 3. Datos sensibles: Números de licencia de conducir y documentos de identidad

**Descripción:** Información que, combinada con otros datos, permite suplantar la identidad de las víctimas.

| Dato comprometido | Cantidad de afectados |
|---|---|
| Número de licencia de conducir | ~17,6 millones (EE.UU.) |
| Pasaportes y documentos de disputa | ~182.000 personas |

**Clasificación bajo Ley 19.628 — Datos Sensibles:**
El **artículo 2° letra g)** de la Ley 19.628 define como **datos sensibles** aquellos que "se refieren a las características físicas o morales de las personas o a hechos o circunstancias de su vida privada o íntima". El número de licencia de conducir y los documentos de identidad permiten la **suplantación física** de la víctima, lo que los eleva al nivel de datos sensibles bajo esta clasificación.

**Importancia de la distinción:**
La Ley 19.628 impone un estándar más elevado para el tratamiento de datos sensibles: el **artículo 10°** establece que "no pueden ser objeto de tratamiento los datos sensibles, salvo cuando la ley lo autorice, exista consentimiento del titular o sean datos necesarios para la determinación u otorgamiento de beneficios de salud". La recopilación y almacenamiento de esta categoría de datos por parte de Equifax requería justificación legal expresa.

---

## Distinción: Datos Personales vs. Datos Sensibles en el caso Equifax

| Categoría | Datos del caso Equifax | Base legal (Ley 19.628) |
|---|---|---|
| **Datos personales básicos** | Nombre, fecha de nacimiento, domicilio | Art. 2° letra f) |
| **Datos personales con protección reforzada** | SSN (equivalente a RUT), historial crediticio, números de tarjeta | Art. 2° letra g) |
| **Datos sensibles** | Licencias de conducir, pasaportes, documentos de disputas que revelan situación económica íntima | Art. 2° letra g) y Art. 10° |

La brecha de Equifax comprometió **las tres categorías** simultáneamente, lo que maximiza el daño potencial para cada persona afectada: con el SSN + fecha de nacimiento + domicilio + número de tarjeta, un atacante puede suplantar completamente la identidad de una víctima.

---

## Análisis de los Derechos ARCO Afectados

Los derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) son los derechos fundamentales que la Ley 19.628 reconoce a los titulares de datos personales. La brecha de Equifax vulneró los cuatro derechos de forma simultánea y masiva.

---

### Derecho de Acceso (A)

**Texto de la Ley 19.628, artículo 12°:**
> "Toda persona tiene derecho a exigir a quien sea responsable de un banco de datos, que le comunique los datos relativos a su persona, su procedencia y destinatario, el propósito del almacenamiento y la individualización de las personas u organismos a los cuales sus datos son transmitidos regularmente."

**Vulneración en el caso Equifax:**
Los 147,9 millones de afectados no tenían conocimiento de que Equifax almacenaba su información. Equifax no operaba con una relación directa con los consumidores (obtenía los datos de instituciones financieras), por lo que los titulares de los datos **no podían ejercer su derecho de acceso** para verificar qué información tenía Equifax sobre ellos, ni corregirla antes de la brecha.

Más grave aún: tras la brecha, Equifax tardó **más de cinco semanas** en notificar públicamente el incidente (desde el 29 de julio hasta el 7 de septiembre de 2017), privando a los afectados del conocimiento necesario para ejercer su derecho de acceso y tomar medidas preventivas oportunas.

---

### Derecho de Rectificación (R)

**Texto de la Ley 19.628, artículo 12°:**
> "El titular de datos personales tiene, además, derecho a que se modifiquen cuando sean erróneos, inexactos, equívocos o incompletos."

**Vulneración en el caso Equifax:**
La brecha comprometió datos que en algunos casos ya contenían errores (historial de disputas indica que muchos consumidores debatían la exactitud de sus registros). Al exfiltrar datos erróneos, Equifax facilitó que los atacantes tuvieran información que podría ser usada para fraudes basados en datos falsos. Los afectados no podían rectificar lo que no sabían que había sido robado.

Adicionalmente, una vez que los datos fueron exfiltrados y circularon en la dark web, el derecho de rectificación resulta **imposible de ejercer frente a los atacantes**: no existe mecanismo para corregir los datos en manos de actores maliciosos.

---

### Derecho de Cancelación / Supresión (C)

**Texto de la Ley 19.628, artículo 12°:**
> "Asimismo, el titular tiene derecho a que se eliminen, en los casos en que ello sea procedente conforme a la ley, sus datos personales, previa solicitud al responsable del banco de datos."

**Vulneración en el caso Equifax:**
Los afectados no tenían manera de solicitar la eliminación de sus datos en Equifax, ya que en la mayoría de los casos no sabían que Equifax los almacenaba. Una vez producida la brecha, el derecho de cancelación frente a Equifax resulta insuficiente: aunque Equifax eliminara los datos de sus sistemas, los datos ya habían sido exfiltrados y estaban en manos de terceros.

El historial de disputas (~182.000 documentos) contenía datos que los titulares habían presentado como parte de un proceso legal, con expectativa de confidencialidad. Su exposición viola directamente el derecho de cancelación, ya que esos datos debían haber sido eliminados tras resolver las disputas.

---

### Derecho de Oposición (O)

**Texto de la Ley 19.628, artículo 7°:**
> "Los datos personales no pueden usarse para fines distintos o incompatibles con aquellos que motivaron su recopilación."

**Vulneración en el caso Equifax:**
Los datos recopilados por Equifax con el fin de elaborar informes crediticios (fin lícito original) fueron utilizados por los atacantes para fines radicalmente distintos: potencial robo de identidad, fraude financiero y espionaje estatal. Los titulares no tenían posibilidad de oponerse a este uso ilícito porque ocurrió sin su conocimiento y contra la voluntad de Equifax misma.

La falta de mecanismos de **notificación inmediata** a los titulares también impidió que estos ejercieran su derecho de oposición ante las instituciones financieras para alertarles del riesgo de que sus datos fueran usados fraudulentamente.

---

## Tabla resumen de derechos ARCO vulnerados

| Derecho ARCO | Artículo Ley 19.628 | Forma en que fue vulnerado en el caso Equifax |
|---|---|---|
| **Acceso** | Art. 12°, inciso 1° | Afectados no sabían que Equifax tenía sus datos; notificación de la brecha tardó más de 5 semanas |
| **Rectificación** | Art. 12°, inciso 2° | Datos potencialmente erróneos exfiltrados; imposibilidad de rectificación frente a atacantes |
| **Cancelación** | Art. 12°, inciso 3° | Documentos confidenciales (disputas) no eliminados; datos irrecuperables una vez en la dark web |
| **Oposición** | Art. 7° | Datos usados para fines incompatibles (fraude, espionaje) sin posibilidad de oposición previa |

---

## Obligaciones de seguridad incumplidas por Equifax bajo la Ley 19.628

**Artículo 11° de la Ley 19.628:**
> "La persona responsable del registro o banco de datos personales deberá adoptar los debidos resguardos para garantizar la seguridad de los datos personales y evitar su adulteración, pérdida, consulta o uso no autorizado."

Equifax incumplió este artículo de manera grave al:
1. No aplicar el parche de seguridad para CVE-2017-5638 durante más de dos meses.
2. No segmentar la red para limitar el movimiento lateral de los atacantes.
3. Almacenar credenciales de acceso en texto plano.
4. Mantener certificados TLS vencidos durante 19 meses, impidiendo la inspección del tráfico saliente.

Bajo la Ley 19.628 vigente, estas omisiones habrían dado lugar a la sanción establecida en el **artículo 23°**: indemnización del daño patrimonial y moral causado, más multa a beneficio fiscal.
