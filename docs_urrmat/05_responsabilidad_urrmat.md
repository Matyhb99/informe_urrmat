# 05  Responsabilidades Legales de los Actores

> **Criterio evaluado:** 2.1.4 — Responsabilidades legales de los actores  
> **Nivel objetivo:** Destacado — Identifica ≥ 3 actores y distingue ≥ 2 tipos de responsabilidad (penal, civil, administrativa) para cada uno, con cita de artículo o norma.

---

## Introducción

En el caso Equifax 2017, participaron múltiples actores con roles, posiciones y niveles de responsabilidad distintos. El análisis que sigue identifica cuatro actores principales y examina sus responsabilidades penales, civiles y/o administrativas bajo el ordenamiento jurídico chileno (aplicado hipotéticamente) y el derecho comparado.

---

## Actor 1: Los Atacantes (Wu Zhiyong, Wang Qian, Xu Ke y Liu Lei — miembros del EPL de China)

### Descripción del actor
Cuatro ciudadanos chinos identificados por el Departamento de Justicia de EE.UU. en febrero de 2020. Actuaron en coordinación, explotando la vulnerabilidad CVE-2017-5638, realizando movimiento lateral en la red de Equifax y exfiltrando datos de 147,9 millones de personas durante 76 días.

### Responsabilidad Penal
**Base normativa:** Ley 21.459, artículos 2°, 4° y 6°

| Delito | Artículo Ley 21.459 | Conducta concreta |
|---|---|---|
| Acceso ilícito agravado | Art. 2°, inciso 2° | Ingreso no autorizado al portal de disputas mediante CVE-2017-5638, con ánimo de apoderarse de información |
| Ataque a la integridad de datos | Art. 4° | Exfiltración y alteración de datos de 147,9 millones de personas |
| Fraude informático | Art. 6° | Manipulación de sistemas para obtener datos con valor económico, causando perjuicio a los titulares |
| Abuso de dispositivos | Art. 8° | Uso de exploits y credenciales robadas como instrumentos del delito |

**Pena:** En concurso ideal (Art. 75 Código Penal), se aplicaría la pena del delito más grave aumentada en un grado: presidio menor en su grado máximo aumentado (hasta 5 años), con posibilidad de concurso con la Ley 20.393 si se acredita organización criminal.

### Responsabilidad Civil
**Base normativa:** Artículo 2314 y 2329 del Código Civil chileno (responsabilidad extracontractual por hecho ilícito)

Los atacantes son civilmente responsables por los daños patrimoniales y extrapatrimoniales causados a los 147,9 millones de afectados. Estos daños incluyen:
- Gastos incurridos en monitoreo crediticio.
- Pérdidas por fraude e identidad robada.
- Daño moral por la exposición de datos íntimos e irrevocables (como el número equivalente al RUT).

La responsabilidad civil es solidaria entre todos los coautores (Art. 2317 Código Civil).

> **Nota práctica:** La persecución penal y civil de los atacantes es materialmente difícil dado que operan desde China y no existe tratado de extradición vigente entre Chile y China para estos efectos.

---

## Actor 2: Equifax Inc. (Empresa — Persona Jurídica)

### Descripción del actor
Equifax Inc. es la víctima del ataque, pero también es responsable por las omisiones que permitieron la brecha: no aplicó el parche de seguridad conocido, no segmentó su red, almacenó credenciales en texto plano y mantuvo certificados TLS vencidos durante 19 meses.

### Responsabilidad Administrativa
**Base normativa:** Ley 19.628, Art. 11; Ley 21.663, Art. 26 y ss.

- **Ley 19.628, Art. 11:** "La persona responsable del registro o banco de datos personales deberá adoptar los debidos resguardos para garantizar la seguridad de los datos personales." La falla en aplicar el parche y la ausencia de segmentación de red constituyen una infracción directa de esta obligación.
- **Ley 21.663, Art. 26:** Obliga a los operadores de servicios esenciales a notificar a la ANCI los incidentes de ciberseguridad que afecten su operación "a más tardar en el plazo de 24 horas". Equifax tardó más de 5 semanas desde la detección interna (29 de julio) hasta la notificación pública (7 de septiembre), infringiendo este plazo.
- **Sanciones:** Multa de hasta 10.000 UTM (Ley 21.663) o clausura temporal del tratamiento de datos (Ley 19.628 reformada).

### Responsabilidad Civil
**Base normativa:** Art. 23 Ley 19.628; Arts. 2314 y 2329 Código Civil

Equifax tiene responsabilidad civil contractual frente a quienes le encomendaron el tratamiento de sus datos (instituciones financieras y empresas que compran informes crediticios) y responsabilidad extracontractual frente a los consumidores cuyos datos fueron expuestos sin su consentimiento directo. El daño moral derivado de la exposición de datos irrevocables (equivalentes a RUT, fecha de nacimiento, domicilio) da lugar a indemnización.

**Referencia real:** En EE.UU., Equifax pagó US$575 millones en settlement, de los cuales US$300 millones fueron a un fondo de compensación para consumidores afectados (FTC, 22 de julio de 2019).

### Responsabilidad Penal (Persona Jurídica)
**Base normativa:** Ley 20.393, Art. 3° (modificada por Ley 21.459)

La Ley 20.393 establece que una persona jurídica es penalmente responsable cuando el delito fue cometido por una persona natural que actúe en su nombre, por cuenta o en su interés, y cuando la organización no adoptó modelos de prevención del delito. El equipo de ciberseguridad de Equifax —que no implementó el parche, no detectó la intrusión y almacenó credenciales sin cifrar— actuaba bajo la dirección y supervisión de Equifax. Este **defecto de organización** activa la responsabilidad penal empresarial.

**Sanciones para la persona jurídica (Art. 8° Ley 20.393):** Multa de 200 a 20.000 UTM, disolución de la sociedad (en caso extremo), prohibición de contratar con el Estado.

---

## Actor 3: Richard Smith (CEO de Equifax hasta el 26 de septiembre de 2017)

### Descripción del actor
Máximo ejecutivo de Equifax durante el incidente. Testificó ante el Congreso de EE.UU. el 3 de octubre de 2017, atribuyendo la brecha a "error humano y falla en la comunicación interna".

### Responsabilidad Administrativa
**Base normativa:** Ley 21.663, Art. 36; Ley General de Bancos (Art. 66 y ss., aplicable si operara en Chile como entidad financiera regulada)

Los ejecutivos de entidades financieras tienen el deber de implementar sistemas de gestión de riesgos y ciberseguridad. La Comisión para el Mercado Financiero (CMF) en Chile puede sancionar a los directores y gerentes generales de instituciones financieras con multa personal e inhabilitación para ejercer cargos en el sector, cuando se acredite negligencia grave en la supervisión de los sistemas de seguridad.

### Responsabilidad Civil
**Base normativa:** Art. 2314 Código Civil; Art. 133 Ley de Sociedades Anónimas (si opera como SA en Chile)

Los directores y administradores de sociedades anónimas responden personalmente por los perjuicios causados a la sociedad y a los terceros cuando han actuado con culpa grave o dolo. La decisión de no implementar un plan estructurado de gestión de parches —a pesar de que el equipo de seguridad fue notificado de CVE-2017-5638— puede configurar culpa grave imputable personalmente al CEO.

---

## Actor 4: Terceros — Instituciones Financieras que usaban datos de Equifax

### Descripción del actor
Bancos, aseguradoras, empresas de telecomunicaciones y otras entidades que compraban informes crediticios a Equifax y potencialmente almacenaban datos derivados de esos reportes.

### Responsabilidad Administrativa
**Base normativa:** Ley 19.628, Art. 5° y 8°; Circular CMF N° 2.909 (normativa de seguridad para instituciones financieras en Chile)

Estas entidades son **corresponsables del tratamiento** de los datos que adquirieron de Equifax. La Ley 19.628 establece que quien encarga el tratamiento de datos a un tercero (Equifax) debe "verificar que éste cuente con las medidas de seguridad adecuadas". Las instituciones que no realizaron esta verificación de diligencia debida (due diligence) de seguridad sobre su proveedor Equifax comparten responsabilidad administrativa.

### Responsabilidad Civil
**Base normativa:** Art. 2314 Código Civil; Ley 19.496 (Protección al Consumidor, si corresponde)

Si el uso de datos obtenidos de Equifax causó perjuicios a consumidores finales (por ejemplo, denegación de crédito basada en información incorrecta post-brecha), estas instituciones pueden enfrentar demandas bajo la Ley de Protección al Consumidor (Art. 3° y 23 de la Ley 19.496).

---

## Tabla resumen de responsabilidades

| Actor | Responsabilidad Penal | Responsabilidad Civil | Responsabilidad Administrativa | Norma principal |
|---|---|---|---|---|
| Atacantes (EPL China) | Sí: Arts. 2°, 4°, 6° y 8° Ley 21.459 | Sí: Art. 2314 y 2329 CC (daños a afectados) | No aplica | Ley 21.459 |
| Equifax Inc. (Empresa) | Sí: Ley 20.393 por defecto de organización | Sí: Art. 23 Ley 19.628; daño moral y patrimonial | Sí: Ley 19.628 Art. 11; Ley 21.663 Art. 26 | Ley 19.628; Ley 20.393; Ley 21.663 |
| Richard Smith (CEO) | Eventual: si se acredita dolo | Sí: Art. 133 Ley SA; culpa grave | Sí: CMF puede inhabilitar; multa personal | Ley SA; Ley 21.663 |
| Terceros (inst. financieras) | No directa | Sí: Ley 19.496 si causan daño a consumidores | Sí: Ley 19.628 Arts. 5° y 8° (due diligence) | Ley 19.628; Ley 19.496 |
