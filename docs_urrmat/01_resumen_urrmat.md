# 01 — Resumen Ejecutivo del Caso Equifax del 2017

## Identificación del Caso

| Campo | Detalle |
|-------|---------|
| **Nombre del caso** | Brecha de datos Equifax 2017 |
| **Fecha de inicio del ataque** | 10 de marzo de 2017 |
| **Fecha de detección** | 29 de julio de 2017 |
| **Divulgación pública** | 7 de septiembre de 2017 |
| **Organización afectada** | Equifax Inc. (Atlanta, Georgia, EE.UU.) |
| **Sector** | Servicios financieros / Agencia de informes de crédito |

---

## ¿Qué es Equifax?

Equifax Inc. es una de las tres principales agencias de informes crediticios del mundo, junto con Experian y TransUnion. Su negocio consiste en recopilar, procesar y vender datos financieros y personales de cientos de millones de consumidores y empresas. Estos datos se utilizan para otorgar créditos, verificar identidades y tomar decisiones financieras. Por su naturaleza, Equifax almacena información extremadamente sensible: números de seguridad social, historiales de pago, ingresos, direcciones, fechas de nacimiento y números de licencias de conducir.

---

## ¿Qué ocurrió?

### El vector de entrada: CVE-2017-5638

El 7 de marzo de 2017, la Fundación Apache publicó el parche para una vulnerabilidad crítica en Apache Struts, identificada como **CVE-2017-5638**. Esta falla permitía la **ejecución remota de código (RCE)** mediante una cabecera HTTP `Content-Type` maliciosa, sin necesidad de autenticación previa.

Equifax fue notificada de la vulnerabilidad ese mismo día, pero **no aplicó el parche a todos sus sistemas**. Tres días después, el 10 de marzo de 2017, atacantes comenzaron a explotar activamente esta vulnerabilidad en el portal de disputas en línea de Equifax.

### Cronología del incidente

| Fecha | Evento |
|-------|--------|
| 07/03/2017 | Apache divulga CVE-2017-5638 y publica parche |
| 10/03/2017 | Atacantes inician explotación del portal de disputas de Equifax |
| 13/05/2017 | Comienza la exfiltración masiva de datos personales |
| 29/07/2017 | El equipo de seguridad de Equifax detecta tráfico sospechoso |
| 30/07/2017 | Equifax desconecta el portal afectado; descubre CVE-2017-5638 como vector |
| 02/08/2017 | Equifax contrata a Mandiant para investigación forense |
| 07/09/2017 | Divulgación pública de la brecha |
| 19/07/2019 | Acuerdo de settlement por al menos US$575 millones |

Los atacantes permanecieron **76 días sin ser detectados** dentro de la red de Equifax.

### Técnicas utilizadas

Los atacantes no solo explotaron la vulnerabilidad inicial: una vez dentro del sistema, realizaron **movimiento lateral** a través de la red interna, accediendo a múltiples bases de datos. Esto fue posible porque Equifax:
- No segmentaba correctamente sus redes internas.
- Almacenaba credenciales de acceso en texto plano.
- No tenía sistemas de detección de intrusos robustos en sus bases de datos heredadas.
- Mantenía certificados TLS vencidos (hacía 19 meses), lo que impedía inspeccionar el tráfico saliente.

---

## Datos comprometidos

| Tipo de dato | Afectados |
|---|---|
| Números de Seguridad Social (SSN) | ~147,9 millones (EE.UU.) |
| Fechas de nacimiento | ~147,9 millones |
| Direcciones físicas | ~147,9 millones |
| Números de licencia de conducir | ~17,6 millones |
| Números de tarjeta de crédito | ~209.000 |
| Documentos de disputas (datos sensibles) | ~182.000 |
| Datos de residentes del Reino Unido | ~15,2 millones |
| Datos de residentes de Canadá | Número no divulgado |

---

## Actores involucrados

- **Atacantes**: Cuatro miembros del Ejército Popular de Liberación (EPL) de China, identificados por el Departamento de Justicia de EE.UU. en una acusación formal de 2020: Wu Zhiyong, Wang Qian, Xu Ke y Liu Lei.
- **Víctima directa**: Equifax Inc.
- **Víctimas indirectas**: Aproximadamente 147 millones de consumidores cuyos datos fueron expuestos.
- **Reguladores**: FTC (Comisión Federal de Comercio), CFPB (Oficina de Protección Financiera del Consumidor), fiscales generales de 48 estados de EE.UU.
- **Empresa forense**: Mandiant (contratada para investigación post-brecha).

---

## Impacto

### Impacto económico
- Acuerdo de settlement por **US$575 millones** (potencialmente US$700 millones).
- US$300 millones destinados a un fondo de monitoreo crediticio para afectados.
- US$175 millones en multas civiles a estados.
- US$100 millones de multa al CFPB.
- Caída del 35% en el valor de las acciones de Equifax en las semanas posteriores al anuncio.

### Impacto reputacional
- El CEO Richard Smith renunció el 26 de septiembre de 2017.
- Equifax fue objeto de múltiples audiencias en el Congreso de EE.UU.
- La empresa fue calificada como negligente por la FTC por no implementar "medidas básicas de seguridad".

### Impacto social
- Millones de ciudadanos expuestos a robo de identidad, fraude financiero y suplantación.
- Erosión generalizada de la confianza pública en las agencias de crédito.

---

## Causa raíz

El informe del Comité de Supervisión y Reforma de la Cámara de Representantes de EE.UU. (diciembre de 2018) concluyó que la brecha fue **completamente evitable** y se debió a:
1. Falla en la aplicación oportuna de un parche conocido.
2. Ausencia de segmentación de red.
3. Falla en el sistema de escaneo de vulnerabilidades (el certificado TLS vencido impedía detectar tráfico malicioso).
4. Cultura organizacional deficiente en ciberseguridad.

---

## Relevancia del caso

El caso Equifax 2017 es considerado uno de los peores incidentes de ciberseguridad de la historia por la **cantidad de personas afectadas**, la **sensibilidad de los datos expuestos** (no solo correos o contraseñas, sino información que no puede cambiarse, como el número de seguridad social), y la evidencia de **negligencia institucional**. Sirve como referente mundial para el análisis de responsabilidades legales, marcos normativos y estándares de protección de datos.
