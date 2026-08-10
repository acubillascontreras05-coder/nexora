export interface Solucion {
  slug: string;
  titulo: string;
  subtitulo: string;
  introduccion: string;
  incluye: string[];
  beneficios: string[];
}

export const SOLUCIONES: Solucion[] = [
  {
    slug: 'inventario',
    titulo: 'Control de inventario',
    subtitulo: 'Sabe siempre qué tienes, cuánto tienes y cuándo reponer.',
    introduccion:
      'Muchos negocios pierden dinero sin darse cuenta por no saber exactamente qué hay en su almacén o tienda. Nuestro sistema de inventario te da visibilidad total y en tiempo real de tus productos, para que dejes de improvisar y empieces a tomar decisiones con datos reales.',
    incluye: [
      'Registro de productos con stock, precios y categorías',
      'Alertas automáticas cuando un producto está por agotarse',
      'Control de entradas y salidas de mercadería',
      'Historial de movimientos por producto',
      'Reportes de productos más y menos vendidos'
    ],
    beneficios: [
      'Evita quedarte sin stock de tus productos más vendidos',
      'Reduce pérdidas por productos vencidos o extraviados',
      'Ahorra tiempo en conteos manuales',
      'Toma decisiones de compra basadas en datos reales'
    ]
  },
  {
    slug: 'ventas',
    titulo: 'Sistema de ventas',
    subtitulo: 'Vende más rápido y controla cada transacción de tu negocio.',
    introduccion:
      'Un sistema de ventas ordenado es la diferencia entre un negocio que crece y uno que se estanca. Digitalizamos tu proceso de venta para que sea más rápido, más claro para tus clientes, y te dé información valiosa sobre cómo va tu negocio día a día.',
    incluye: [
      'Punto de venta (POS) rápido y fácil de usar',
      'Control de caja diaria (ingresos y egresos)',
      'Registro de clientes y su historial de compras',
      'Múltiples métodos de pago',
      'Reportes de ventas por día, semana o mes'
    ],
    beneficios: [
      'Atiende a tus clientes más rápido',
      'Reduce errores de cobro y descuadres de caja',
      'Conoce tus horas y productos de mayor venta',
      'Fideliza clientes con su historial de compras'
    ]
  },
  {
    slug: 'presencia-digital',
    titulo: 'Presencia digital',
    subtitulo: 'Haz que tus clientes te encuentren, sin importar dónde estén.',
    introduccion:
      'Hoy en día, si tu negocio no está en internet, es como si no existiera para muchos clientes potenciales. Creamos páginas web, catálogos digitales y tiendas online que reflejan la calidad de lo que ofreces, y que funcionan perfectamente desde cualquier celular.',
    incluye: [
      'Página web profesional y moderna',
      'Catálogo digital de tus productos o servicios',
      'Diseño adaptado a celulares (responsive)',
      'Botón directo de contacto por WhatsApp',
      'Optimización para que te encuentren en Google'
    ],
    beneficios: [
      'Aumenta tu alcance más allá de tu zona física',
      'Genera confianza y una imagen profesional',
      'Facilita que los clientes te contacten',
      'Disponible las 24 horas, los 7 días de la semana'
    ]
  },
  {
    slug: 'automatizacion',
    titulo: 'Automatización',
    subtitulo: 'Deja que la tecnología haga el trabajo repetitivo por ti.',
    introduccion:
      'Muchas horas del día se van en tareas manuales y repetitivas que perfectamente podrían automatizarse. Identificamos esos procesos en tu negocio y los automatizamos, para que tú y tu equipo puedan enfocarse en lo que realmente hace crecer tu negocio.',
    incluye: [
      'Automatización de respuestas y mensajes frecuentes',
      'Generación automática de reportes periódicos',
      'Recordatorios automáticos (pagos, citas, stock)',
      'Integración entre tus distintos sistemas',
      'Flujos de trabajo personalizados según tu negocio'
    ],
    beneficios: [
      'Ahorra horas de trabajo manual cada semana',
      'Reduce errores humanos en tareas repetitivas',
      'Libera tiempo para enfocarte en tu negocio',
      'Mejora la consistencia de tus procesos'
    ]
  }
];