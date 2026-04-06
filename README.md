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

## Parte 4 de Proyecto Front-End

### Utilizacion de APIs

El proyecto cuenta con la utilizacion de una [API Open-Source](https://open-meteo.com/en/docs) llamada Open-Meteo la cual se encargara de generar la informacion necesaria para el proyecto, la informacion en formato JSON pasa a ser estandarizada segun la ciudad para la cual se solicita.

### Estructura de clases

La clase que es utilizada contiene una estructura simple, el constructor de esta recibe un solo argumento, la URL establecida segun la ciudad (en el caso de nuestra pagina web, las 9 ciudades mas populares + santiago de Chile), y tambien cuenta con una variable "resultado" que inicializa en "null" (mas adelante se explica el motivo). 
La clase cuenta con un solo metodo en formato async, esto es para manejar de manera correcta el consumo de APIs, en donde el objeto guardara la informacion recibida en formato JSON en la variable 'resultado' de cada objeto, de manera que permita la manipulacion de esta informacion sin la necesidad de llamar a la funcion fetch(), si la variable "resultado" no se encuentra en 'null', esto quiere decir que recibio informacion, para asi utilizar esta, de no ser asi, el metodos esta estructurado para utilizar la funcion fetch() en la URL.
La clase es utilizada un total de 10 veces en este proyecto, una vez por ciudad.

### Calculo de estadisticas 

Afortunadamente la API cuenta con una personalizacion bastante grande en respecto a la informacio que puedo solicitar, asi que cree un perfil que recibe la informacion superficial del dia 0 (dia que se llama fetch() a la API) e informacion detallada de los siguientes 7 dias (empezando del dia que se llama fetch() a la API), dentro del archivo JS que se encarga de la pagina de informacion detallada se encuentra la logica utilizada, una combinacion de creacion de objetos menores, para un mejor acceso a la informacion semanal, junto con una pequeña reduccion de las llaves creadas segun el clima, de esa manera se recibe el clima que mas se repite y se puede presentar en la pagina.

# Arreglos Y Tweaks a mejorar

## Arreglos
- Ajustar iconografia en pantalla principal (El ciclo dia/noche solo funciona con el horario local del usuario)
- Ajustar iconografia en pantalla de detalle (El ciclo dia/noche fue degradado a solo dia por falta de conocimientos).
- Integrar de manera correcta la mejora que permite al usuario buscar cualquier ciudad y recibir la informacion
- Agregar modo oscuro
- NO DECIDIDO AUN: agregar i18n/l10n

## Tweaks
- Agregar mas iconografia que represente correctamente la meteorologia
- Mejorar Rendimiento de paginas web
- Mejorar en lo posible el diseño del sitio web