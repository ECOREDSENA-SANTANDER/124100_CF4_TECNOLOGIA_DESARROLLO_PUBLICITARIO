export default {
  global: {
    componenteFormativo: 'Estructura de la campaña publicitaria',
    descripcionCurso:
      'El desarrollo de una campaña publicitaria abarca tres elementos clave: la investigación, el <i>brief</i> y la identidad corporativa. Estos componentes forman la base del proceso de comunicación y establecen la ruta para una conversación eficaz con el cliente. Es importante destacar que existen numerosos modelos de campañas publicitarias, con cada agencia de publicidad empleando su propio enfoque.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Qué es una campaña publicitaria?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estructura de la campaña publicitaria',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Modelos de campaña',
            hash: 't_1_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF4_124100_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Castelló, A. Pino, C. (2019). De la Publicidad a la Comunicación Persuasiva. Esic Editorial.',
      link:
        'https://books.google.es/books?hl=es&lr=&id=iPORDwAAQBAJ&oi=fnd&pg=PA18&dq=De+la+Publicidad+a+la+Comunicaci%C3%B3n+Persuasiva.&ots=uUZamFYkQW&sig=N-cM6g8XILA7irxFLNpMvY49AWA#v=onepage&q=De%20la%20Publicidad%20a%20la%20Comunicaci%C3%B3n%20Persuasiva.&f=false',
    },
    {
      referencia:
        'Cardenas A. (2019). ESTRATEGIAS DE COMUNICACIÓN Y MARKETING PARA EL POSICIONAMIENTO DE LA MARCA DE LA EMPRESA “PROELECTRIC”. Tesis.',
      link:
        'https://repositorio.puce.edu.ec/server/api/core/bitstreams/598b185e-1683-4c19-99e1-947737e33544/content',
    },
    {
      referencia:
        'Molano. J. (2023 ) Blog. Cómo hacer un plan de comunicación (con ejemplos y plantilla) ',
      link: 'https://blog.hubspot.es/marketing/crear-plan-comunicacion#que-es',
    },
    {
      referencia:
        'Medina, P. y Ferrer, I. (2014). Dirección Empresarial para Publicitarios. Editorial Dykinson. ',
      link:
        'https://books.google.com.co/books?id=HwjdBAAAQBAJ&printsec=frontcover&hl=es&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false',
    },
    {
      referencia:
        'Reimers Design. (s.f.). Pequeño Diccionario del Diseñador. Consultado el 27 de mayo de 2020 ',
      link:
        'https://www.academia.edu/23225540/Peque%C3%B1o_Diccionario_del_Dise%C3%B1ador',
    },
    {
      referencia:
        'Pablo Orellana Nirian , 06 de julio, 2020 Comunicación estratégica. Economipedia.com ',
      link:
        'https://economipedia.com/definiciones/comunicacion-estrategica.html',
    },
    {
      referencia:
        'Vilajoana, A., Jiménez, M., González, Z. y Vila, J. (2014). ¿Cómo diseñar una campaña de publicidad? Editorial UOC. ',
      link: 'https://blog.hubspot.es/marketing/campana-publicitaria',
    },
  ],
  glosario: [
    {
      termino: 'Briefing',
      significado:
        '<i>marketing</i>. Conjunto de datos sobre la empresa, sus objetivos y estrategia; que sirven de base al consultor o diseñador para plantear la comunicación corporativa. Término inglés que engloba las instrucciones que el cliente da a su proveedor para que de acuerdo con ellas desarrolle la campaña de <i>Marketing</i> Directo desde la idea global hasta el envío del <i>mailing.</i>',
    },
    {
      termino: 'Canal',
      significado:
        'en teoría de la comunicación, camino técnico o fisiológico que recorre un mensaje desde el emisor hasta el receptor',
    },
    {
      termino: 'Comunicación',
      significado:
        'es hacer común un significado a una comunidad, con el fin de que toda ella pueda comulgar en la comprensión de este. Proceso por el cual una fuente emisora influye sobre un sistema receptor a través de la manipulación de signos (creatividad, combinatoria, codificación), configurando mensajes y circulándolos por medio de determinados canales físicos.',
    },
    {
      termino: 'Creatividad',
      significado:
        'actividad creadora o capacidad imaginativa de hallar soluciones nuevas o ideas originales. La creatividad es la aptitud del ser humano para la combinatoria, es decir, la combinación de formas y mensajes nuevos a partir de combinaciones originales de signos.',
    },
    {
      termino: '<i>marketing</i>',
      significado:
        'técnicas que persiguen la selección de mercados objetivos, la identificación y cuantificación de las necesidades de esos mercados, el desarrollo de productos y servicios que satisfagan estas necesidades.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'situación de una marca en el mercado, respecto a sus competidores.',
    },
    {
      termino: 'RR.PP / Relaciones Públicas',
      significado:
        'acciones de comunicación destinadas a la creación y el mantenimiento de una imagen positiva de las empresas o instituciones ante grupos específicos: prensa, clientes. ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
          fecha: 'Mayo,2024',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julián Fernando Vanegas Vera',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodriguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Desarrollador <i>full stack</i> junior',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
