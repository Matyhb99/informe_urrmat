## Herramienta utilizada

- **Claude (Anthropic)** — claude.ai (Claude Sonnet 4.6) Lo utilice como asistente de investigación y redacción, para buscar un caso de conocimiento internacional y que tuvo alcance nacional
- **GitHub Copilot (VS Code)** — Fue utilizado para la modificacion de los componentes React.

---

### Prompt utilizado
> "ayudame a ver que tal fue el caso de ciberseguridad Equifax 2017 que lo necesito para un informe académico de análisis en el marco legal chileno y realiza un breve resumen para luego modificarlo a mi manera."

### Correcciones realizadas
- **Corrección 1:** La IA inicialmente indicó "143 millones de afectados" donde se basa en el anuncio inicial de septiembre 2017. Se corrigió a **147,9 millones**, que es la cifra final confirmada tras la investigación forense completa. Justificación: el número actualizado es más preciso y académicamente correcto.
- **Corrección 2:** La IA no mencionó el detalle de los **certificados TLS vencidos durante 19 meses**, que es un dato clave para entender por qué los atacantes no fueron detectados. Se añadió manualmente tras consultar el informe del Comité de Supervisión de la Cámara de Representantes de EE.UU.

---

### ¿Qué limitaciones tuvo?

- La IA cometió errores en **fechas específicas** (fecha de promulgación de la Ley 21.663, año de la multa del ICO) que requirieron verificación cruzada con fuentes primarias.
- La IA tendía a simplificar las distinciones jurídicas (por ejemplo, entre responsabilidad contractual y extracontractual, o entre artículo de obligación y artículo de sanción).
- En ocasiones la IA generalizaba el análisis sin referenciar hechos concretos del caso, lo que habría resultado en prompts del nivel "En desarrollo" según la rúbrica.
