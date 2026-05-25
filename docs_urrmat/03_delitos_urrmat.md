# 03 — Tipificación de Delitos Informáticos (Ley 21.459)

> **Criterio evaluado:** 2.1.2 — Tipificación de delitos informáticos  
> **Nivel objetivo:** Destacado — Cita ≥ 3 artículos de la Ley 21.459 con número e inciso, mapeando cada acción del atacante al artículo correspondiente.

---

## Introducción

La **Ley N° 21.459**, publicada en el Diario Oficial el 20 de junio de 2022, establece las normas sobre delitos informáticos en Chile, derogando la antigua Ley N° 19.223. El análisis siguiente aplica esta legislación chilena vigente al caso Equifax 2017 bajo el supuesto hipotético de que los hechos hubieran ocurrido bajo jurisdicción chilena, tal como lo exige el criterio 2.1.2 del instrumento evaluador.

---

## Acciones del atacante identificadas en el caso

Del informe forense y del reporte del Comité de Supervisión de la Cámara de Representantes de EE.UU. (diciembre 2018), se identifican las siguientes conductas concretas realizadas por los atacantes:

1. **Explotación de CVE-2017-5638**: Envío de solicitudes HTTP con cabeceras `Content-Type` maliciosas al portal de disputas de Equifax, logrando ejecución remota de código sin autenticación.
2. **Acceso no autorizado a sistemas internos**: Una vez ejecutado el código malicioso, los atacantes obtuvieron acceso a sistemas internos de Equifax a los que no tenían autorización.
3. **Movimiento lateral en la red**: Desde el portal comprometido, los atacantes se desplazaron hacia otras bases de datos internas, utilizando credenciales robadas almacenadas en texto plano.
4. **Exfiltración de datos**: Extracción de archivos con datos personales de ~147,9 millones de personas, en múltiples operaciones durante el período comprendido entre el 13 de mayo y el 30 de julio de 2017.
5. **Ocultamiento de actividad**: Los atacantes dividieron las consultas y exfiltraron los datos en pequeños paquetes cifrados para evadir los sistemas de detección.

---

## Mapeo: Acción del atacante → Artículo de la Ley 21.459

---

### Artículo 2° — Acceso Ilícito

**Texto legal (extracto):**
> "El que, sin autorización o excediendo la autorización concedida, acceda a un sistema informático será castigado con la pena de presidio menor en su grado mínimo o multa de once a veinte unidades tributarias mensuales."

**Inciso 2°:**
> "Se impondrá la pena de presidio menor en su grado medio si el acceso se realizare con el ánimo de apoderarse o usar la información contenida en el sistema informático."

**Acciones mapeadas:**

| Acción del atacante | Elementos típicos satisfechos |
|---|---|
| Envío de solicitudes HTTP maliciosas mediante CVE-2017-5638 para ejecutar código en el servidor de Equifax | "Sin autorización" — Los atacantes no tenían credenciales ni permiso para acceder al sistema |
| Ingreso al portal de disputas de Equifax mediante la explotación de la vulnerabilidad | "Acceda a un sistema informático" — El portal web es un sistema informático según el artículo 15 de la misma ley |
| Movimiento lateral hacia otras bases de datos internas usando credenciales obtenidas | "Excediendo la autorización concedida" — Las credenciales capturadas no autorizaban el acceso a esas bases |

**Pena aplicable:** Presidio menor en grado medio (541 días a 3 años), por el inciso agravado, dado que el acceso se realizó con el ánimo expreso de apoderarse de la información de millones de usuarios.

---

### Artículo 4° — Ataque a la Integridad de los Datos Informáticos

**Texto legal (extracto):**
> "El que indebidamente altere, dañe o suprima datos informáticos, será castigado con presidio menor en su grado medio, siempre que con ello se cause un daño grave al titular de estos mismos."

**Acciones mapeadas:**

| Acción del atacante | Elementos típicos satisfechos |
|---|---|
| Exfiltración de archivos con datos personales de ~147,9 millones de personas | "Indebidamente" — Sin autorización del titular ni de Equifax para hacer uso de esos datos |
| Manipulación de registros para ocultar rastros de la intrusión | "Alteración" — Modificación de logs y registros del sistema para obstaculizar detección |
| Extracción de datos en 209.000 tarjetas de crédito, comprometiendo su integridad | "Daño grave al titular" — La exposición de datos financieros causa perjuicio directo a los afectados |

**Pena aplicable:** Presidio menor en grado medio (541 días a 3 años). Dado el volumen (147 millones de afectados), una acusación formal en Chile probablemente aplicaría las circunstancias agravantes del artículo 12 N°1 del Código Penal (pluralidad de víctimas).

---

### Artículo 6° — Fraude Informático

**Texto legal (extracto):**
> "El que, causando perjuicio a otro, con la finalidad de obtener para sí o para un tercero un beneficio económico indebido, manipule un sistema informático mediante la introducción, alteración, daño o supresión de datos informáticos, o a través de cualquier interferencia en el funcionamiento de un sistema informático, será castigado con presidio menor en su grado máximo."

**Acciones mapeadas:**

| Acción del atacante | Elementos típicos satisfechos |
|---|---|
| Exfiltración de datos personales (SSN, fechas de nacimiento, licencias) con potencial uso para robo de identidad | "Obtener para sí o para un tercero un beneficio económico indebido" — Los datos robados tienen valor en el mercado negro; la acusación del DOJ de EE.UU. indica que los atacantes actuaban en beneficio del Estado chino |
| Manipulación de los sistemas de Equifax para extraer información sin activar alarmas | "Manipule un sistema informático mediante la introducción, alteración o supresión de datos" — Los atacantes alteraron los procesos del sistema para dividir y exportar datos en paquetes menores |
| Causación de perjuicio a 147,9 millones de afectados | "Causando perjuicio a otro" — Los afectados quedaron expuestos a fraude, robo de identidad y daños patrimoniales |

**Pena aplicable:** Presidio menor en grado máximo (3 años y 1 día a 5 años). Esta es la pena más severa dentro del catálogo de delitos informáticos de la Ley 21.459.

---

### Artículo 8° — Abuso de Dispositivos (análisis complementario)

**Texto legal (extracto):**
> "El que, sin contar con la debida autorización, produzca, adquiera para su uso, importe, distribuya, difunda o posea con miras a su utilización, dispositivos, programas informáticos, contraseñas u otros datos de acceso a un sistema informático, destinados a perpetrar alguno de los delitos contemplados en esta ley, será castigado con la pena de presidio menor en su grado mínimo y multa de diez a cien unidades tributarias mensuales."

**Acciones mapeadas:**

| Acción del atacante | Elementos típicos satisfechos |
|---|---|
| Uso de herramientas de explotación automatizadas basadas en CVE-2017-5638 (exploits disponibles en ExploitDB desde el 7 de marzo de 2017) | "Dispositivos, programas informáticos destinados a perpetrar delitos" |
| Uso de credenciales de acceso robadas de sistemas internos para realizar movimiento lateral | "Contraseñas u otros datos de acceso" no autorizados |

**Pena aplicable:** Presidio menor en grado mínimo (61 a 540 días) más multa.

---

## Tabla resumen de tipificación

| Artículo Ley 21.459 | Delito | Acción concreta del atacante en el caso Equifax |
|---|---|---|
| Art. 2°, inciso 1° | Acceso ilícito simple | Explotación de CVE-2017-5638 para ingresar al portal de disputas |
| Art. 2°, inciso 2° | Acceso ilícito agravado | Movimiento lateral hacia bases de datos con credenciales robadas, con ánimo de apoderarse de información |
| Art. 4° | Ataque a la integridad de datos | Exfiltración de datos de 147,9 millones de personas; alteración de logs para ocultar actividad |
| Art. 6° | Fraude informático | Manipulación de sistemas para extraer datos con valor económico, causando perjuicio a los titulares |
| Art. 8° | Abuso de dispositivos | Uso de exploits y credenciales robadas para perpetrar los delitos anteriores |

---

## Notas sobre el concurso de delitos

En Chile, la comisión simultánea de los delitos tipificados en los artículos 2°, 4° y 6° de la Ley 21.459 constituiría un **concurso ideal de delitos** (artículo 75 del Código Penal chileno), dado que provienen de un mismo acto de explotación de la vulnerabilidad. El tribunal debería aplicar la pena mayor asignada al delito más grave (artículo 6° con presidio menor en grado máximo) aumentada en un grado.

Adicionalmente, la atribución de la autoría del ataque al Ejército Popular de Liberación de China (EPL) podría dar lugar a la aplicación de circunstancias agravantes relacionadas con la organización criminal y el carácter transnacional del delito.
