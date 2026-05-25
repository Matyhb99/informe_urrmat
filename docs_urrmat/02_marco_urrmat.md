# 02 — Marco Normativo Nacional e Internacional

> **Criterio evaluado:** 2.1.1 — Marco normativo nacional e internacional  
> **Nivel objetivo:** Destacado — Lista ≥ 4 normas aplicables con justificación textual referida a hechos concretos del caso.

---

## Introducción

El caso Equifax 2017 involucra la exfiltración masiva de datos personales de aproximadamente 147 millones de personas. Aunque el incidente ocurrió bajo jurisdicción estadounidense, el análisis legal chileno es procedente bajo el supuesto hipotético de que los hechos hubieran ocurrido en Chile o que Equifax operara como empresa con presencia en el país. A continuación se identifican y justifican las normas aplicables.

---

## Normas Nacionales (Chile)

### 1. Ley N° 21.459 — Delitos Informáticos (2022)

**Descripción:** Promulgada el 20 de junio de 2022, esta ley deroga la antigua Ley N° 19.223 y adecúa la legislación chilena al **Convenio de Budapest sobre Ciberdelincuencia**. Tipifica conductas como acceso ilícito, interceptación ilícita, ataque a la integridad de datos, ataque a la integridad de sistemas, falsificación informática, fraude informático y abuso de dispositivos.

**Justificación de aplicabilidad:**  
Los atacantes explotaron la vulnerabilidad CVE-2017-5638 para acceder sin autorización al portal de disputas de Equifax. Este acceso no autorizado a un sistema informático, y la posterior extracción de datos de millones de personas durante 76 días de movimiento lateral, configura directamente los tipos penales del **artículo 2° (acceso ilícito)** y el **artículo 4° (ataque a la integridad de los datos)**. Si los hechos hubieran ocurrido en Chile, los atacantes serían imputados bajo esta ley.

---

### 2. Ley N° 19.628 — Protección de la Vida Privada (1999)

**Descripción:** Principal norma chilena en materia de protección de datos personales. Regula el tratamiento, almacenamiento y comunicación de datos de carácter personal. Establece los derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) para los titulares de los datos y obliga a quienes traten datos a adoptar medidas de seguridad adecuadas.

**Justificación de aplicabilidad:**  
Equifax almacenaba y procesaba datos personales de naturaleza sensible: números de identificación equivalentes a RUT, fechas de nacimiento, direcciones, historial financiero y en algunos casos números de tarjetas de crédito. El **artículo 11** de la Ley 19.628 obliga a quien administra datos personales a adoptar "los debidos resguardos para garantizar la seguridad de los datos personales". La falla de Equifax al no aplicar el parche de seguridad, no segmentar su red y mantener certificados TLS vencidos constituyó una violación directa de este deber de seguridad. Adicionalmente, la exposición de los datos comprometió los derechos ARCO de todos los afectados, quienes no pudieron ser notificados oportunamente.

---

### 3. Ley N° 21.663 — Marco Regulatorio de Ciberseguridad (2024)

**Descripción:** Ley promulgada en enero de 2024 que establece la institucionalidad de ciberseguridad en Chile. Crea la **Agencia Nacional de Ciberseguridad (ANCI)**, define los estándares mínimos de seguridad para operadores de servicios esenciales e infraestructura crítica, y establece obligaciones de reporte de incidentes.

**Justificación de aplicabilidad:**  
Si Equifax operara en Chile como proveedor de servicios financieros y de información crediticia, sería clasificado como **operador de servicios esenciales** bajo el artículo 4° de esta ley. Las obligaciones de gestión de riesgos, parcheado oportuno de vulnerabilidades y reporte de incidentes —que Equifax incumplió durante 76 días— son exactamente las que esta ley impone. El retraso de más de dos meses entre la detección interna (29 de julio) y la notificación pública (7 de septiembre) habría infringido las obligaciones de notificación a la ANCI.

---

### 4. Ley N° 20.393 — Responsabilidad Penal de las Personas Jurídicas (2009, modificada por Ley 21.459)

**Descripción:** Establece la responsabilidad penal de las personas jurídicas (empresas) en Chile. La Ley 21.459 incorporó expresamente los delitos informáticos al catálogo de delitos que pueden generar responsabilidad de la empresa, siempre que sean cometidos por personas que actúen en su nombre o bajo su supervisión.

**Justificación de aplicabilidad:**  
Equifax, como persona jurídica, habría sido responsable penalmente en Chile por los delitos informáticos cometidos en el contexto de su operación. La falla sistemática del equipo de ciberseguridad interno —que no aplicó el parche conocido y no detectó la intrusión durante 76 días— representa exactamente el supuesto de **defecto de organización** que activa la responsabilidad penal empresarial bajo esta ley. Las sanciones podrían incluir multas, inhabilitación para contratar con el Estado y medidas de supervisión.

---

## Normas Internacionales

### 5. Convenio de Budapest sobre Ciberdelincuencia (2001) — Council of Europe

**Descripción:** Primer tratado internacional sobre delitos informáticos. Establece definiciones comunes de conductas ilícitas (acceso ilícito, interceptación ilícita, interferencia de datos y sistemas, entre otros) y mecanismos de cooperación internacional entre Estados para investigar y perseguir estos delitos.

**Justificación de aplicabilidad:**  
Los atacantes identificados son ciudadanos chinos que operaron desde territorio extranjero. El Convenio de Budapest es relevante porque proporciona el marco de **cooperación internacional** para la investigación y eventual extradición. Chile suscribió el proceso de adhesión al Convenio, y la Ley 21.459 fue diseñada expresamente para armonizar la legislación chilena con este instrumento. Los artículos 2 al 6 del Convenio —que tipifican el acceso ilícito, interceptación ilícita y la interferencia de datos— son directamente aplicables a las acciones de los atacantes.

---

### 6. Reglamento General de Protección de Datos — GDPR (UE, 2018)

**Descripción:** Reglamento europeo aplicable al tratamiento de datos personales de ciudadanos de la Unión Europea, con efecto extraterritorial. Exige medidas técnicas y organizativas apropiadas para garantizar la seguridad de los datos (artículo 32), notificación de brechas en 72 horas a la autoridad supervisora (artículo 33), y establece sanciones de hasta 20 millones de euros o el 4% de la facturación global anual.

**Justificación de aplicabilidad:**  
Equifax procesaba datos de aproximadamente 15,2 millones de residentes del Reino Unido y potencialmente de ciudadanos de la Unión Europea. La Oficina de Información del Comisionado del Reino Unido (ICO) multó a Equifax UK Ltd con £500.000 en 2018. En el análisis comparativo, el GDPR es relevante porque establece el estándar internacional más exigente de protección de datos y sirve de referencia para evaluar las omisiones de Equifax.

---

## Tabla resumen de normas aplicables

| N° | Norma | Tipo | Hecho concreto del caso que justifica su aplicación |
|----|-------|------|-----------------------------------------------------|
| 1 | Ley 21.459 (Chile) | Nacional | Acceso no autorizado mediante CVE-2017-5638; exfiltración de datos durante 76 días |
| 2 | Ley 19.628 (Chile) | Nacional | Almacenamiento inseguro de datos personales sensibles; falta de notificación oportuna a afectados |
| 3 | Ley 21.663 (Chile) | Nacional | Operador de servicio esencial que no reportó el incidente en plazo legal |
| 4 | Ley 20.393 (Chile) | Nacional | Defecto organizacional de Equifax Inc. como persona jurídica responsable |
| 5 | Convenio de Budapest (Intl.) | Internacional | Cooperación internacional para investigar atacantes chinos; tipificación transfronteriza |
| 6 | GDPR (UE) | Internacional | Datos de residentes del Reino Unido comprometidos; aplicación extraterritorial |
