import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
  private heroes: Heroe[] = [
    {
      nombre: 'Aquaman',
      bio:
        'Aquaman puede ser para siempre el blanco de las bromas de la cultura pop gracias a su interpretación de las caricaturas de Super Friends y sus diversos efectos secundarios. ¿Cómo puede un tipo que habla con los peces resistir a Batman o Superman? Bastante bien, como sabe cualquiera que haya pasado mucho tiempo leyendo cómics de Aquaman. Aquaman no solo es tan fuerte y capaz en la batalla como cualquier persona que nade kilómetros por debajo de la superficie del océano, sino que es el líder del vasto reino submarino de Atlantis. El atractivo principal de Aquaman reside en el hecho de que sus lealtades se ponen a prueba constantemente. ¿Está del lado del mundo de la superficie, donde fue criado, o con su gente de Atlantis? Jason Momoa ha hecho, además, que triunfe en la gran pantalla de una manera que no esperábamos.',
      img: 'assets/img/aquaman.jpg',
      aparicion: '1941-11-01',
      casa: 'DC',
    },
    {
      nombre: 'Batman',
      bio:
        'Puedes rastrear las diversas inspiraciones de Batman con suficiente claridad. Él es a partes iguales El Zorro, Sherlock Holmes y la Sombra. Pero reúne todos esos elementos y llegarás a algo realmente especial. Desde 1939, los fans han estado fascinados por la saga de un hombre que se viste como un murciélago para inspirar miedo en los corazones de los criminales. Es una saga que se ha desarrollado en todos los medios. A diferencia de la mayoría de los héroes de DC, Batman no tiene habilidades sobrehumanas. Simplemente tiene la capacidad, los recursos y, lo que es más importante, la voluntad de librar una guerra de un solo hombre contra el crimen. Y es un testimonio de esa voluntad que nadie cuestiona si Batman tiene lo que se necesita para estar al lado del resto en la Liga de la Justicia. Cualquier humano que pueda derrotar a Superman por pura inteligencia merece ser temido y admirado.',
      img: 'assets/img/batman.png',
      aparicion: '1939-05-01',
      casa: 'DC',
    },
    {
      nombre: 'Átomo',
      bio:
        'Comparte su nombre de superhéroe con el Atom de la Edad de Oro, pero Ray Palmer es más un científico que un pugilista. Su cinturón patentado de cambio de tamaño le permite encogerse hasta llegar a un tamaño subatómico. Este poder versátil le permite todo tipo de aventuras, desde la ciencia ficción alucinante hasta la aventura más clásica. La suerte de Ray han variado y disminuido en los últimos años, desde las consecuencias trágicas de Identity Crisis hasta su regreso a su reducido papel en The New 52. Sin embargo, sigue siendo el héroe más grande que se llama a sí mismo Átomo y le hemos visto triunfar en la serie de TV Legends of Tomorrow.',
      img: 'assets/img/atomo.jpg',
      aparicion: '1940-10-01',
      casa: 'DC',
    },
    {
      nombre: 'Supergirl',
      bio:
        'Superman puede ser el último hijo de Krypton, pero no es el único superviviente. Su prima, Kara Zor-El, también hizo el gran viaje. Supergirl ha sido un pilar de la franquicia de Superman desde su debut en 1959. Al igual que Mary Marvel y Batgirl, fue un ejemplo temprano de una compañera que desarrolló una gran base de fans por derecho propio. Ha habido muchas versiones del personaje, algunas kryptonianas y otras no. Una de ellas incluso salió con Lex Luthor por un tiempo. Pero en todos los casos, Supergirl ha sido una de los heroínas más poderosas de DC. Y Supergirl triunfa en la TV con su propia serie y crossovers dentro del Arrowverso.',
      img: 'assets/img/supergirl.jpg',
      aparicion: '1959-05-01',
      casa: 'DC',
    },
    {
      nombre: 'Linterna Verde',
      bio:
        'Los fans de los cómics tienden a atenerse a lo que saben, y siempre es difícil reemplazar a un héroe familiar con un personaje novato. Pero Kyle Rayner venció las probabilidades. Kyle fue presentado como el nuevo Green Lantern después de que Hal Jordan se volviera loco y casi destruyera la Green Lantern Corps. En términos de personalidad y temperamento, Kyle no podría haber sido más diferente de Hal. Pero él prosperó en el papel y se convirtió en Green Lantern durante una década completa. A pesar de que Hal ha sido redimido y devuelto al servicio, Kyle sigue siendo un héroe activo y uno de los pocos dignos para portar un anillo de Linterna Blanca.',
      img: 'assets/img/linterna-verde.jpg',
      aparicion: '1940-06-01',
      casa: 'DC',
    },
    {
      nombre: 'Flash',
      bio:
        'El debut de Barry Allen en 1956 se asocia al inicio de la Edad de Plata de los cómics de DC. Barry heredó el papel de Flash del héroe de la Edad de Oro, Jay Garrick. Rápidamente demostró ser uno de los más populares de la nueva ola de héroes de DC gracias a sus poderes de velocidad casi ilimitados, sus coloridas aventuras en el tiempo y el espacio, y su interminable lucha por equilibrar sus travesuras de superhéroes con su vida profesional y personal. A pesar de su increíble velocidad, Barry siempre tiene la reputación de llegar tarde. Barry fue asesinado en la historia de 1986, Crisis en Tierras Infinitas, proyectando una larga sombra sobre el resto del Universo DC en el proceso. Pero ya ha regresado y ha vuelto a ser Flash.',
      img: 'assets/img/flash.png',
      aparicion: '1940-01-20',
      casa: 'DC',
    },
    {
      nombre: 'Superman',
      bio:
        'Etiquetar a Superman como el primer superhéroe depende de la definición de "superhéroe" que manejemos. Pero fuese o no el primero, es sin duda el mejor. Superman es la destilación más pura de todo lo que amamos de los héroes. Tiene un origen trágico, casi bíblico: un bebé es enviado de un planeta condenado, es adoptado por una pareja humana y crece para convertirse en el principal defensor de la verdad, la justicia y el estilo de vida estadounidense. Gracias a su fisiología kryptoniana, es un héroe de fuerza casi ilimitada.',
      img: 'assets/img/superman.jpg',
      aparicion: '1938-06-15',
      casa: 'DC',
    },
  ];

  constructor() {
    console.log('Servicio heroes listo!');
  }

  getHeroes(): Heroe[] {
    return this.heroes;
  }

  getHero(i: number) {
    return this.heroes[i];
  }

  searchHeroes(search: string): Heroe[] {
    let heroesArray: Heroe[] = [];
    search = search.toLowerCase();

    for (let i = 0; i < this.heroes.length; i++) {
      let hero = this.heroes[i];
      let nombre = hero.nombre.toLowerCase();

      if (nombre.indexOf(search) >= 0) {
        hero.index = i;
        heroesArray.push(hero);
      }
    }

    return heroesArray;
  }
}

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  index?: number;
}
