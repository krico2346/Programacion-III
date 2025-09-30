En el siguiente repositorio se encuentran la parte 1, 2 y también el código de selector de temas.

en la parte 1 encontramos un boton que acciona una alerta, en este caso nos dice hola esto lo hacemos con el alert("hola") y con el evento click en el JavaScript, luego tenermos un div en el cual si pasamos el mouse encima cambia a un color verde, esto se hace con el evento mouseover,
para que vuelva al color original usamos el evento mouseout, para cambiar el color definimos las variable const fondo= document.getElementsByTagName("div")[0];, luego con la propiedad style le cambiamos el color, asi: fondo.style.background= "green"; y fondo.style.background= "none";
para la parte de la lista de igual manera definimos la variables, en este caso el ul, el input, definimos una nueva variable para que se cree un li, y por ultimo el boton, luego hacemos:

nuevoLi= document.createElement("li");
nuevoLi.textContent = input.value;
lista.appendChild(nuevoLi);

Ahora para la parte 2 Primero, el código busca un formulario en la página. Si lo encuentra, se queda “escuchando” qué pasa cuando alguien intente enviarlo. En ese momento, revisa lo que la persona escribió en el campo de texto. Si no escribió nada, aparece un aviso que dice que hace 
falta llenar los campos y se cancela el envío. Si sí escribió algo, le pregunta al usuario con un cuadro de confirmación si realmente quiere enviar esa información; si responde que no, también se cancela.

Luego, el código busca un espacio donde se debe mostrar el nombre. Si ese espacio existe, toma la información que llegó en la dirección de la página (lo que aparece después del signo de interrogación en la URL) y extrae el valor que corresponde al nombre. Finalmente, coloca ese nombre
dentro del lugar indicado para que se vea en la pantalla.

por ultimo para la parte del selector de temas se crean los tres botones, el area de demostracion y el contador esto en el html, en el javaScript capturamos una variable para el body, un numero para el contador y el texto del contador, luego utilizamos el evento 
DOMContentLoaded, luego creamos una variable para guardar los temas y con un condicional verificamos si esta vacio, si no le cambiamos la clase al body para poder guardar los temas para que al recargar la pagina se quede en el ultimo tema guardado, luego hay una funcion
para actualizar el contador, por ultimo la funcion que va en cada boton (las tres hacen lo mismo), primero verifica que el body no tenga el mismo nombre de clase del tema que queremos cambiar, si se cumple la condicion se cambia la clase del body por el tema que elegimos
ej "Tema-claro", luego guarda este "Tema-claro" en "Tema" y por ultimo actualiza el contado, al hacer la primera verificacion logramos que el contador no siga avanzando si se presiona el mismo boton.
