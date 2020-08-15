document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: -80,
    shift: 5,
    padding: 5,
    numVisible: 3,
    // indicators: true,
    noWrap: false
  });
});

const postres = [
    {
        id: 0,
        nombre: 'Donas',
        tipo: 'Glaseadas',
        receta: `Hacer un glaseado blanco para donuts es muy sencillo y apenas se necesitan ingredientes. El azúcar impalpable puedes comprarlo ya preparado o hacerlo tú mismo siguiendo nuestra receta de azúcar glass.
        <br><br>
        Con las cantidades indicadas en la lista de ingredientes obtendremos un glaseado blanco para 10-15 donas aproximadamente. Si necesitas más, solo debes ajustar la cantidad de azúcar. Dicho esto, empezamos la receta calentando un vaso de agua en el microondas. No es necesario que el agua hierva, con que esté templada o un poco caliente será suficiente.
        <br><br>
        Por otro lado, para conseguir que el glaseado blanco adquiera un punto más de brillo y las donas queden más bonitas, puedes calentar el agua con una cucharada de mantequilla y mezclar. La mantequilla es un producto que siempre aporta brillo a las coberturas sin alterar el sabor.
        <br><br>
        Colocamos el azúcar en un bol, añadimos un par de cucharadas de agua y mezclamos. Como probablemente el azúcar impalpable todavía no se habrá disuelto, agregamos dos cucharadas más de agua y seguimos mezclando.
        Receta de Glaseado blanco para donas - Paso 4
        <br><br>
        Para 100 gramos de azúcar con cuatro o cinco cucharadas de agua templada debería ser suficiente. Pero, si quieres que el glaseado blanco para donas quede más líquido, siempre puedes añadir más.
        <br><br>
        Y si quieres dar color a tu glaseado para donuts, ¡añade unas gotas de colorante! Ahora que ya tienes la cobertura preparada, puedes ponerte manos a la obra y preparar tu propia masa para dona.
        <br><br>
        Cuando tengas las donas listas, coge un pincel de cocina y cubre la superficie con el glaseado blanco casero. Luego, déjalas reposar en algún lugar libre de humedades para que endurezca un poco y listo, ya puedes disfrutar de tus donas glaseadas con un café caliente, un rico champurrado o atole de fresa.
        <br><br>`,
        ingredientes: `Azúcar glass - 100 gramos,
            Agua (cantidad necesaria) - ,
            Mantequilla (opcional) - 1 Cucharada`,
        img: 'img/dona-01.jpg',
    },
    {
        id: 1,
        nombre: 'Pastel',
        tipo: 'Chocolate',
        receta: `En un recipiente combinar harina, azúcar, cocoa, polvo hornear, bicarbonato y sal. Revolver a baja
        velocidad con la batidora.
        <br><br>
        Agregar leche, mantequilla y vainilla. Batir con batidora a velocidad baja, luego batir 2 minutos a velocidad media, agregar huevo y batir 2 minutos más.
        <br><br>
        Poner en un molde redondo de 22 cms. de diámetro, engrasado y enharinado.
        <br><br>
        Hornear a 180 °C por 30 o 35 minutos. Sacar del horno y enfriar en una rejilla 10 minutos. Sacar del
        molde y dejar enfriar completamente.
        <br><br>
        Para hacer el glaseado: derretir chocolate y mantequilla a fuego suave, remover del fuego y
        agregar el azúcar glass y el agua caliente moviendo siempre. Si es necesario agregar mas de agua
        para tener la consistencia de glaseado.
        <br><br>
        Glasear el pastel y dejar escurrir por los lados a cubrirlo totalmente.
        <br><br>`,
        ingredientes: `Harina - 2 Tazas,
            Azúcar - 2 Tazas,
            Cocoa en polvo - 1/2 Taza,
            Polvo para hornear - 2 Cucharadas,
            Bicarbonato de sodio - 2 Cucharadas,
            Leche - 1 1/2 Tazas,
            Mantequilla - 1/2 Taza,
            Vainilla líquida - 1 Cucharada,
            Huevos - 2,
            Sal - 1/2 Cucharada,
            Azúcar glass - 3 Tazas,
            Chocolate amargo - 250 gramos,
            Mantequilla para el glaseado - 6 Cucharadas,
            Agua - 6 Cucharadas,
            Mermelada de chabacano - `,
        img: 'img/pastel-01.jpg',
    },
    {
        id: 2,
        nombre: 'Muffins',
        tipo: 'Chocolate',
        receta: `Por un lado mezclamos los ingredientes sólidos, la harina, el cacao, la levadura y la sal. Reservamos.&nbsp;En un cuenco mezclamos la leche entera con el zumo de medio limón. Dejamos reposar durante 15 minutos, así conseguiremos un buttermilk casero.
        <br><br>
        Derretimos la mantequilla en el microondas y la reservamos. En un bol batimos los huevos con el azúcar. Mezclamos bien hasta crear una  crema espumosa. Añadimos la mantequilla derretida y el buttermilk. Mezclamos bien.
        <br><br>
        Incorporamos los ingredientes secos y, con unas varillas mezclamos hasta integrar. No es necesario que trabajemos demasiado la mezcla, se trata sólo de integrar los sólidos con los líquidos.
        <br><br>
        Con un cuchillo troceamos el chocolate 70% cacao en daditos  pequeños. No importa que nos queden irregulares o de diferentes tamaños. Apartamos ¼ del chocolate y el resto lo añadimos a la masa de los muffins. Removemos para repartirlos por toda la masa.
        <br><br>
        Encendemos el horno para precalentarlo a 190º C y mientras rellenamos las cápsulas con la mezcla, dejando siempre 1/3 de la altura libre.
        <br><br>
        Tenemos que tener en cuenta que la masa subirá por eso es necesario que dejemos un espacio libre, sin rellenar.
        <br><br>
        Repartimos el chocolate troceado que tenemos apartado sobre todos los muffins y horneamos durante 20 minutos a 190ºC con calor por arriba y por abajo y sin ventilador.
        <br><br>
        Retiramos del horno la bandeja de los muffins y los colocamos sobre una rejilla hasta que se enfríen totalmente.
        <br><br>
        Lo perfecto es que los tomemos recién hechos. Una vez que estén templados, los trocitos de chocolate estarán fundidos en cada bocado. Imaginad estos muffins acompañando a un vaso de leche puede ser una merienda o un desayuno de rechupete.
        <br><br>
        Si os queda alguno para el día siguiente, no os preocupéis si se vuelven un poco duros. Podemos meterlos durante 5 o 6 segundos en el micro y volveremos a disfrutar con su sabor y su textura.
        <br><br>`,
        ingredientes: `Harina de trigo - 300g,
            Cacao puro - 80g,
            Levadura química - 1 y ½ cdita,
            Sal - ¼ cdita,
            Azúcar - 250g,
            Mantequilla - 100g,
            Leche entera - 250ml,
            El zumo de ½ limón - ,
            Huevos - 2,
            Chocolate 70% cacao - 150g`,
        img: 'img/muffins-01.jpg',
    },
    {
        id: 3,
        nombre: 'Donas',
        tipo: 'Chocolate',
        receta: `Desmoronar la levadura, formar un hoyo en el centro con 1/4 de azúcar, 1/2 taza de cocoa en
        polvo, 1 taza de harina y poner en el centro la levadura.
        <br><br>
        Agregar 3/4 de taza de leche caliente para que se disuelva la levadura.
        <br><br>
        Incorporar la harina poco a poco y agregar 3 cucharadas de mantequilla hasta tener una mezcla
        homogénea.
        <br><br>
        Pasar la masa a un recipiente de metal y tapar con un trapo húmedo, dejar reposar por 30 min.
        <br><br>
        Mezclar el resto de la harina, cocoa en polvo, los huevos, la mantequilla, la leche y el azúcar.
        <br><br>
        Cuando aumente el volumen de la masa que se dejo en reposo, mezclar con la otra. Dejar en un
        recipiente de metal y reposar por una hora o hasta que doble su tamaño, cubrir con un trapo
        húmedo.
        <br><br>
        Amasar y usando un rodillo extender la mas hsta tener un grosor de 2 o 3 cm. Cortar en forma de
        dona, un círculo grande y otro mas chico en el centro.
        <br><br>
        Colocar las donas en un charola y dejar reposar por 30 min o hasta que dupliquen su volumen.
        <br><br>
        Freír las donas en aceite muy caliente y pasar a un plato con papel de cocina para escurrir el exceso
        de grasa.
        <br><br>
        Dejar enfriar por 5 min y derretir el chocolate en baño maría.
        <br><br>
        Sumerja cada dona de la parte frontal en el chocolate derretido, decorar con las chispas de
        chocolate blanco y de leche.
        <br><br>
        Servir.
        <br><br>`,
        ingredientes: `Chocolate en trozos - 4 Tazas,
            Levadura - 3 Cucharadas,
            Mantequilla - 6 Cucharadas,
            Huevos - 3,
            Azúcar - 1/2 Taza,
            Leche - 1 1/2 Taza,
            Harina de trigo - 3 Tazas,
            Aceite comestible - 1/2 Litro,
            Chispas de chocolate blanco - ,
            Chispas de chocolate de leche- ,
            Cocoa en polvo - 1 Taza`,
        img: 'img/dona-02.jpg',
    },
    {
        id: 4,
        nombre: 'Pastel',
        tipo: 'Mil Hojas',
        receta: `Se pone a hervir la leche con el azúcar. Se revuelven las yemas con la Maizena, la vainilla y la
        pintura vegetal amarilla. Poco a poco, se les va agregando leche caliente, batiendo con un
        batidor de globo. Finalmente se regresa a la olla donde se puso la leche con el azúcar. Se
        deja cocinar a fuego lento durante unos 10-12 minutos, moviendo con un batidor de globo.
        Se saca del fuego y se deja enfriar con un plastico transparente para evitar que se forme
        nata.
        <br><br>
        Se bate la crema Lyncott con el azúcar glass hasta que quede como crema batida Chantilly.
        <br><br>
        Se revuelve con un batidor de globo la crema pastelera (del paso anterior).
        <br><br>
        Se estira la pasta de hojaldre a medio centímetro de grueso para que cubra toda la charola.
        <br><br>
        Se coloca sobre una charola para galletas sin engrasar cubierta con papel encerado y
        semillas crudas. Se hornea 40 minutos a 200º centígrados. Se retira el papel encerado y las
        semillitas y se regresa al horno entre 5 y 10 minutos, para que se termine de cocer. Una vez
        horneada, se cortan 3 tiras a lo largo.
        <br><br>
        Se coloca la primera tira en un platón de servir, se rellena con la mitad de la crema y se le
        pone la segunda tira de hojaldre. Se vuelve a cubrir con el resto de la crema pastelera y se le
        pone encima la tercera tira de hojaldre. Se puede espolvorear con azúcar glass o decorar
        con un glaseado como el de la foto.
        <br><br>
        Para decorar el pastel de mil hojas como la foto, se necesita preparar un glaseado con: 1
        taza de azúcar glass, y 3 o 5 cucharadas de agua. Para conseguir el frosting se tiene que
        cernir el azúcar en un recipiente y agregar poco a poco el agua, batiendo con un batidor de
        globo. (Mientras se bate se espesa hasta quedar cremoso).
        <br><br>
        Cubrir el pastel de mil hojas con el glaseado blanco.
        <br><br>
        Para hacer las rayas de chocolate, se derrite en una olla 1 tablita de chocolate semiamargo
        con 1/2 taza de leche. Con esta mezcla en una dulla de papel, se hacen rayas horizontales
        (a lo ancho) sobre el glaseado. Finalmente, con una espátula de metal (o un palillo) se hacen
        rayas verticales; primero de arriba hacia abajo y luego de abajo hacia arriba. Con esta
        técnica se iran formando las flechas de chocolate sobre el glaseado blanco que son típicas
        en este postre.
        <br><br>`,
        ingredientes: `Pasta de hojaldre - 1 kilo,
            Leche de vaca - 1 litro,
            Fécula de maiz/maicena - 2 Cucharadas,
            Azúcar granulada - 1/2 Taza,
            Yemas de huevo - 2,
            Extracto de vainilla - 1 1/2 Cucharadita,
            Crema para batir - 1 1/8 Taza,
            Azúcar glass - 1 Cucharada,
            Gotas de colorante artificial amarillo - ,
            Agua para el glaseado - 5 Cucharadas,
            Chocolate semi-amargo - 1 Tablilla,
            Leche de vaca para derretir el chocolate - 1/2 Taza`,
        img: 'img/pastel-02.jpg',
    }
];

window.addEventListener('load', () => {
    
    document.querySelectorAll('.carousel-item').forEach( (tarjeta) => {
        tarjeta.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.classList.contains('receta') ? "" : tarjeta.classList.toggle('flip');
        });

    });

    let btnPopups = document.querySelectorAll('.receta'),
        overlay = document.querySelector('#overlay'),
        popup = document.querySelector('#popup'),
        btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    btnPopups.forEach( btn => {

        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            let id = e.target.dataset.id;
    
            const indice = postres.findIndex( postre => postre.id == id);
            const postre = postres[indice];
    
            document.querySelector('#popup img').src = postre.img;
            document.querySelector('#popup h4').innerHTML = `${postre.nombre} <span>${postre.tipo}</span>`;
            document.querySelector('#popup p').innerHTML = postre.receta;
            let ingredientes = postre.ingredientes.split(',');
    
            let lista = document.querySelector('#popup .ingredientes ul');
            lista.innerHTML = "";
            ingredientes.forEach( ingrediente => {
                let item = document.createElement('li');

                let nombre = document.createElement('span');
                let cantidad = document.createElement('span');
                let textos = ingrediente.split('-');
                
                nombre.innerHTML = textos[0].trim();
                item.appendChild(nombre);
                cantidad.innerHTML = textos[1].trim();
                item.appendChild(cantidad);

                lista.appendChild(item);
            });
    
            overlay.classList.add('active');
            popup.classList.add('active');
        });
    
    });

    btnCerrarPopup.addEventListener('click', (e) => {
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    });

    overlay.addEventListener('click', (e) => {
        if( e.target.id == 'overlay' ){
            overlay.classList.remove('active');
            popup.classList.remove('active');
        }
    });

});