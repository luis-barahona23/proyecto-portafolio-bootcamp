# proyecto-portafolio-bootcamp
Proyecto de pagina web encargada de visualizar el clima en ciertas ciudades

## Como funciona 
De momento es simplemente la parte visual/estructural de la pagina web, cuenta con 10 ciudades (Capital de Chile + 9 ciudades importantes) que en estilo de carta, presentaran la informacion mas general posible de su respectiva ciudad (Nombre de ciudad + Temperatura actual + explicacion en palabras + imagen demostrando la situacion actual). Cuando el usuario haga click en alguna ciudad, esta se expandira y mostrara informacion mas detallada sobre esta (Porcentaje de humedad, velocidad de viento, Indice UV, etc.).

## Es suficiente?
Buscando en internet, revisando que cuenta como MVP, las definiciones varian mucho, asi que en respuesta, escogi una que creo yo es lo suficientemente considerable en lo que debe contar

The Lean Product Playbook, Dan Olsen

"For your MVP, you want to identify the minimum funcionality required to validate that you are heading the right direction

"Para tu MVP, quieres identificar la funcionalidad minima para validad que te diriges en la direccion correcta"

## Como Ingresar?

Para una demostracion funcional, visitar la pagina:
https://luis-barahona23.github.io/proyecto-portafolio-bootcamp/

Para ver el codigo fuente, visitar la pagina:
https://github.com/luis-barahona23/proyecto-portafolio-bootcamp


## Parte 2 de proyecto Front-end

### Metodologia escogida

Se mantiene la funcionalidad ya estableida en la parte 1 del trabajo, es necesario cambiar la metodologia de estilo (BEM, OCSS, SACSS)
En este proyecto, o por lo menos al inicio de este, se utilizara la metodologia BEM, debido a que el codigo ya cuenta con un framework (Bootstrap) por lo que el estilo de este ya se encuentra realizado a nivel MVP, y BEM es el mas facil/recomendable cuando el codigo no es de gran tamaño.

### Estructura SASS

El proyecto no cuenta con las suficientes partes para meritar una implementacion SASS robusta, sobre todo por el hecho de contar con un framework, este trunca toda capacidad extra que el preprocesador pueda dar, con eso en cuenta, agregamos una variable para el color de fondo de la pagina web, tambien contamos con un mixin que se encarga de agregar este a la pagina, mas alla de la base, el preprocesador cuenta con los compenentes utilizados para los componentes que pueden ser añadidos.

## Parte 3 de Proyecto Front-End

### Estructura de datos utilizada

El proyecto cuenta con 2 archivos JavaScript, uno centrado especificamente en la estructura de datos que cuenta con la informacion de cada ciudad, y otro que se encargar de importar la informacion y manejar la logica para manipular el DOM. La razon para utilizar esta estructura es la simplicidad y accesibilidad que ofrece al mantener datos y logica separada.
La estructura de datos es un arreglo de objetos, en el que cada objeto cuenta como ciudad (10 elementos totales en el arreglo exterior), dentro de cada objeto, se cuenta con pares de llave/valor que especifican: El nombre de la ciudad, un objeto anestado dentro de la llave "informacion", dentro de este objeto, se cuenta con informacion sobre el dia actual: Temperatura actual, el estado actual de la ciudad, porcentaje de lluvia, velocidad del viento, y humedad. El ultimo par llave/valor es el pronostico semanal, que se encuentra ordenado en un arreglo, un total de 7 objetos como elementos dentro de este, uno por cada dia de la semana: El dia de la semana, la temperatura maxima pronosticada, la temperatura minima pronosticada, el pronostico estimado, la velocidad de viento pronosticada, la humedad pronosticada, y finalmente, el porcentaje de lluvia pronosticado.

### Logica de manipulacion de datos

Dentro del siguiente archivo JavaScript, se encuentra la logica utilizada, donde se crea un arreglo secundario por cada elemento dentro del arreglo principal, que contiene el nombre de la ciudad, la temperatura promedio semanal estimada, la cantidad de dias segun el clima (Soleado, nublado, lluvioso, tormenta, nevado, etc.), la temperatura maxima estimada en la semana, y la temperatura minima estimada de la semana. A traves de diferentes funciones* se logra acumular los valores necesitados para este arreglo y poder manipular el DOM a traves de un bucle .forEach().

** Ver funciones: totalTemp(), totalDia(), maxValor(), minValor() para entender su utilizacion.
