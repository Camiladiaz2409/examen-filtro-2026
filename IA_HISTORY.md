# IA_HISTORY.md — Registro de Uso de IA

Alumno/a: Camila Belén Díaz
Fecha: 21/04/2026
---

> **Instrucciones:** Documentar los 2 prompts más importantes que usaste durante el examen.
> Completar **todas** las secciones con criterio propio. No se trata de copiar lo que generó la IA — se evalúa tu capacidad de analizar, detectar errores y tomar decisiones técnicas fundamentadas.
>
> **Mínimo por sección de análisis: 3 oraciones.** Respuestas de una línea no se consideran válidas.

---

> **Ejemplo de análisis insuficiente** ❌
> _"La IA generó el código y funcionó bien."_
>
> **Ejemplo de análisis aceptable** ✅
> _"La IA reemplazó los `<div>` por etiquetas semánticas, pero usó `<section>` para la navegación en lugar de `<nav>`. Lo detecté al revisar la estructura en DevTools. Técnicamente es incorrecto porque `<nav>` tiene un rol ARIA implícito que `<section>` no tiene, así que lo corregí manualmente."_

---

## Prompt 1

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
-->
```
Cuando estaba corrigiendo el HTML inicial, específicamente la cabecera y la navegación, no sabía cómo reemplazar los <div> y <span> por etiquetas semánticas correctas.


### Lo que le pedí a la IA

```
<!-- Pegá aquí el prompt exacto que escribiste. Debe ser el texto que vos escribiste, no la respuesta. -->
```

Le mostré el bloque de código con <div class="header"> y <div class="nav"> y le pedí que me dijera cómo corregirlo con etiquetas semánticas.


### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
-->
```
La IA me devolvió una propuesta usando <header>, <nav>, <h1> y <ul>/<li> para los enlaces. El enfoque fue convertir cada contenedor en una etiqueta semántica con rol claro. El resultado coincidía con lo que esperaba porque mejoraba la accesibilidad y la estructura. Lo más útil fue que me mostró un ejemplo completo con la jerarquía correcta.


### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
-->
```
El resultado estaba casi correcto, pero tuve que ajustar estilos y clases para que el CSS siguiera funcionando. Detecté que algunos nombres de clases no coincidían con los que ya tenía en mi archivo. También revisé que el <h1> no rompiera la jerarquía del documento, ya que más adelante tenía otros títulos. Cambié el tamaño de fuente en CSS en lugar de inline para mantener buenas prácticas.


---

## Prompt 2

### Momento del proceso

```
<!--
  Indicá en qué punto del examen usaste este prompt.
  No es sobre la hora exacta — es sobre el contexto: ¿qué estabas intentando resolver cuando recurriste a la IA?
  Ej: "Cuando no sabía cómo estructurar el layout con Grid."
  Ej: "Al terminar el HTML, para verificar si me faltaba algo de accesibilidad."
  Ej: "Al principio del ejercicio de JS, para entender cómo arrancar."
-->
```
Al terminar el HTML y CSS, necesitaba validar el formulario en JavaScript. No sabía cómo empezar la lógica de validación y pedí ayuda para capturar el evento submit y mostrar mensajes.


### Lo que le pedí a la IA

```
<!-- Pegá aquí el prompt exacto que escribiste. Debe ser el texto que vos escribiste, no la respuesta. -->
```
Le pedí un ejemplo de cómo validar que los campos del formulario no estén vacíos y mostrar un mensaje de error o éxito.


### Análisis del resultado obtenido

```
<!--
  Describí con tus propias palabras qué generó la IA. No copies el código ni la respuesta — analizála.
  Mínimo 3 oraciones. Respondé:
  - ¿Qué enfoque tomó la IA para resolver el problema?
  - ¿El resultado era lo que esperabas? ¿Por qué sí o por qué no?
  - ¿Qué parte te resultó útil como punto de partida?
-->
```
La IA me mostró un código con addEventListener en el formulario, uso de preventDefault y validación con condicionales. El enfoque fue directo: obtener los valores con getElementById y verificar si estaban vacíos. El resultado era lo que esperaba porque me dio una base clara para empezar. Lo más útil fue la idea de usar console.log para probar primero la lógica.


### Qué debí corregir manualmente y por qué

```
<!--
  Esta sección es la más importante. Sé específico/a. Mínimo 3 oraciones.
  Respondé:
  - ¿Qué error concreto tenía el resultado? (semántico, de accesibilidad, lógico, de estilo, etc.)
  - ¿Cómo lo detectaste? (al probarlo en el browser, al leer el código, al ver la consola...)
  - ¿Por qué estaba técnicamente incorrecto o insuficiente?
  - ¿Qué cambiaste exactamente para que funcionara bien?
  Si no corregiste nada, explicá por qué el resultado era correcto tal como estaba.
-->
```
El código funcionaba, pero agregaba mensajes duplicados cada vez que fallaba la validación. Lo detecté al probar varias veces el formulario en el navegador. Técnicamente era incorrecto porque generaba múltiples <p> de error en pantalla. Lo corregí agregando document.querySelectorAll(...).forEach(p => p.remove()) antes de insertar el nuevo mensaje, así se limpia el anterior y no se acumulan.

---

## Reflexión final

```
<!--
  Mínimo 3 oraciones. Respondé:
  - ¿Qué tipo de errores repitió la IA que tuviste que corregir?
  - ¿Hubo algo que la IA resolvió bien a la primera sin que necesitaras tocarlo?
  - ¿Cambiarías la forma en que le pedís cosas a la IA la próxima vez? ¿Por qué?
-->
```

La IA repetía algunos errores comunes como usar estilos inline y no limpiar mensajes previos en el formulario. Sin embargo, resolvió muy bien la estructura semántica del HTML y la lógica básica de validación en JS. La próxima vez le pediría ejemplos más cortos y específicos, porque así me resulta más fácil detectar qué parte está bien y qué debo ajustar manualmente.
