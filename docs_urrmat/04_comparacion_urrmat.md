# 04 — Comparación de Marcos Regulatorios por Industria

> **Criterio evaluado:** 2.1.3 — Comparación de marcos regulatorios por industria  
> **Nivel objetivo:** Destacado — Tabla comparativa con ≥ 3 marcos y ≥ 3 ejes; columna explícita de aplicabilidad al caso.

---

## Introducción

El caso Equifax 2017 involucra a una empresa del **sector financiero y de servicios de información crediticia**. Para comprender el alcance regulatorio, es necesario comparar los distintos marcos normativos que podrían aplicar según la industria, la jurisdicción y la naturaleza de los datos comprometidos. A continuación se presenta la tabla comparativa con tres marcos regulatorios relevantes analizados bajo cinco ejes.

---

## Tabla Comparativa de Marcos Regulatorios

| Eje de comparación | **Ley 19.628 (Chile)** — Protección de Datos Personales | **GDPR (Unión Europea / Reino Unido)** — Reglamento General de Protección de Datos | **PCI-DSS** — Payment Card Industry Data Security Standard |
|---|---|---|---|
| **Alcance / Ámbito de aplicación** | Se aplica a toda persona natural o jurídica, pública o privada, que realice tratamiento de datos personales en Chile. No requiere presencia física en el país; aplica cuando los datos corresponden a personas con residencia en Chile. | Aplica a todo responsable del tratamiento que ofrezca bienes o servicios a personas en la UE, o que monitoree su comportamiento, independientemente de dónde esté establecido. Carácter extraterritorial expreso (Art. 3 GDPR). | Aplica a toda organización que almacene, procese o transmita datos de tarjetas de pago (Visa, Mastercard, Amex, etc.), sin importar su tamaño o sector. Es un estándar de la industria, no una ley estatal; su cumplimiento es impuesto contractualmente por las marcas de tarjetas. |
| **Sujeto regulado** | Toda persona natural o jurídica que trate datos personales ("responsable del fichero"). Incluye empresas privadas, organismos públicos y personas naturales que actúen como encargados de datos. | El "responsable del tratamiento" (quien decide los fines) y el "encargado del tratamiento" (quien trata datos por cuenta del responsable). Diferenciación clara entre ambos roles con obligaciones distintas. | Comerciantes, proveedores de servicios y cualquier entidad de la cadena de pagos que tenga acceso a datos de tarjetahabientes (CHD: Cardholder Data). Equifax, al almacenar ~209.000 datos de tarjetas, era sujeto regulado bajo PCI-DSS. |
| **Sanción por incumplimiento** | Multa a beneficio fiscal de hasta 50 UTM por infracción (aprox. CLP $3,4 millones a 2024). Las sanciones son consideradas bajas para el estándar internacional. Existe también responsabilidad civil por daños. | Multas administrativas de hasta **20 millones de euros** o el **4% de la facturación global anual** del ejercicio anterior (el importe mayor). En el caso Equifax UK, la ICO (Información del Comisionado) impuso £500.000 en 2018 (máximo bajo la antigua Ley de Protección de Datos 1998). | No existe una multa directa del estándar PCI-DSS; sin embargo, las marcas de tarjetas pueden imponer penalizaciones de **USD $5.000 a USD $100.000 por mes** de incumplimiento, revocar el derecho a procesar tarjetas y trasladar la responsabilidad por fraude al comerciante no cumplidor. |
| **Jurisdicción** | Territorial: aplica dentro del territorio chileno. Los datos de personas naturales residentes en Chile quedan protegidos. No hay mecanismo formal de cooperación internacional para perseguir infractores extranjeros (en discusión en el proyecto de modernización de la ley). | Extraterritorial (Art. 3): aplica a cualquier empresa en el mundo que trate datos de ciudadanos de la UE. La jurisdicción la ejerce la autoridad supervisora del país de establecimiento del responsable o del país de residencia del afectado. | Global: es un estándar contractual que aplica en cualquier país donde se procesen datos de tarjetas de las marcas adheridas. Los litigios por incumplimiento se resuelven en los tribunales del país donde opera el adquirente o el comerciante. |
| **Aplicabilidad al caso Equifax** | **Media:** Si Equifax operara en Chile, la Ley 19.628 obligaría a adoptar medidas de seguridad adecuadas (Art. 11) y a informar a los titulares sobre la brecha. La falta de notificación oportuna (más de 4 semanas entre detección interna y anuncio público) violaría esta obligación. Sin embargo, las multas serían insuficientes para disuadir a una corporación del tamaño de Equifax. | **Alta:** El GDPR fue la norma bajo la que Equifax fue sancionada en el Reino Unido. Bajo GDPR completo, la multa habría ascendido a cientos de millones de euros. Los 15,2 millones de afectados en el Reino Unido activaron directamente el mecanismo sancionatorio. La obligación de notificación en 72 horas (Art. 33 GDPR) fue ampliamente incumplida. | **Alta:** Equifax almacenaba números de tarjeta de crédito de ~209.000 personas. El incumplimiento de los controles PCI-DSS (segmentación de red, escaneo de vulnerabilidades, gestión de parches) fue exactamente el tipo de falla que este estándar busca prevenir. Su incumplimiento habría activado penalizaciones de las marcas de tarjetas. |

---

## Análisis complementario: Marcos adicionales relevantes

### Gramm-Leach-Bliley Act (GLBA) — EE.UU.
Aplica directamente al caso real ya que Equifax opera como institución financiera bajo esta ley. La **Safeguards Rule** (Regla de Salvaguardas) del GLBA exige a las instituciones financieras implementar un programa de seguridad de la información. La FTC alegó expresamente que Equifax violó esta regla al no implementar "una política para asegurar que las vulnerabilidades de seguridad fueran parcheadas".

### ISO/IEC 27001 — Estándar Internacional de Gestión de Seguridad de la Información
Aunque no es una ley, este estándar internacional representa la **línea de base de buenas prácticas** que Equifax debía seguir. La ausencia de controles básicos como la gestión de parches (Control A.12.6.1), la segmentación de redes (Control A.13.1.3) y la gestión de incidentes (Control A.16) evidencia que Equifax no cumplía con los estándares de la industria.

---

## Conclusión del análisis comparativo

| Marco | Nivel de exigencia | Efectividad sancionatoria en el caso Equifax |
|---|---|---|
| Ley 19.628 (Chile) | Bajo-Medio | Insuficiente: multas bajas, sin mecanismo de notificación obligatoria eficiente |
| GDPR (UE/UK) | Alto | Efectivo: sanción aplicada; exige notificación en 72 horas y da derechos reales a los afectados |
| PCI-DSS | Medio-Alto | Parcialmente efectivo: aplica solo a datos de tarjetas; su violación activa responsabilidad contractual |
| GLBA + Safeguards Rule (EE.UU.) | Medio | El principal instrumento que permitió a la FTC exigir el settlement de US$575 millones |

El caso Equifax evidencia que los marcos regulatorios del sector financiero en Chile (Ley 19.628) son significativamente menos robustos que los estándares internacionales (GDPR), lo que representa un riesgo real para los consumidores chilenos en caso de un incidente similar.
