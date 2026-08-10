export interface Servicio {
  slug: string;
  icono: string;
  titulo: string;
  subtitulo: string;
  introduccion: string;
  incluye: string[];
  beneficios: string[];
}

export const SERVICIOS: Servicio[] = [
  {
    slug: 'sistemas-empresariales',
    icono: '💻',
    titulo: 'Sistemas empresariales',
    subtitulo: 'Un sistema hecho a la medida de cómo trabaja tu negocio.',
    introduccion:
      'Cada negocio funciona distinto, por eso las soluciones genéricas casi nunca terminan de encajar. Desarrollamos sistemas empresariales personalizados que se adaptan a tus procesos reales: ventas, inventario, caja, compras, clientes y trabajadores, todo conectado en un solo lugar.',
    incluye: [
      'Módulo de ventas y punto de venta',
      'Control de inventario y almacén',
      'Gestión de caja y movimientos de dinero',
      'Registro de compras a proveedores',
      'Base de datos de clientes',
      'Gestión de trabajadores y permisos de acceso'
    ],
    beneficios: [
      'Todo tu negocio centralizado en un solo sistema',
      'Reduces el uso de hojas de cálculo y papel',
      'Información en tiempo real para tomar decisiones',
      'Se adapta a tu negocio, no al revés'
    ]
  },
  {
    slug: 'paginas-web',
    icono: '🌐',
    titulo: 'Páginas web',
    subtitulo: 'Una página profesional que representa bien a tu negocio.',
    introduccion:
      'Tu página web suele ser el primer contacto que un cliente tiene con tu negocio. Diseñamos páginas modernas, rápidas y adaptadas a celulares, pensadas para transmitir confianza y facilitar que tus clientes te contacten o conozcan lo que ofreces.',
    incluye: [
      'Diseño profesional y personalizado',
      'Adaptación completa a celulares (responsive)',
      'Secciones de servicios, contacto y sobre nosotros',
      'Botón directo de contacto por WhatsApp',
      'Formulario de contacto',
      'Optimización básica para buscadores (SEO)'
    ],
    beneficios: [
      'Imagen profesional y moderna para tu marca',
      'Disponible las 24 horas para tus clientes',
      'Más fácil de encontrar en internet',
      'Aumenta la confianza antes de la primera compra'
    ]
  },
  {
    slug: 'inventario-y-ventas',
    icono: '📦',
    titulo: 'Inventario y ventas',
    subtitulo: 'Controla lo que entra, lo que sale y lo que vendes.',
    introduccion:
      'Perder de vista el inventario es una de las causas más comunes de pérdidas en un negocio. Este servicio te da control total sobre tus productos, stock, ventas y movimientos, todo desde un solo panel fácil de usar.',
    incluye: [
      'Registro y categorización de productos',
      'Control de stock en tiempo real',
      'Punto de venta rápido',
      'Historial de movimientos y compras',
      'Alertas de stock bajo',
      'Reportes de productos más vendidos'
    ],
    beneficios: [
      'Sabes exactamente qué tienes disponible',
      'Evitas pérdidas por productos extraviados o vencidos',
      'Vendes más rápido y con menos errores',
      'Decisiones de compra basadas en datos reales'
    ]
  },
  {
    slug: 'automatizacion-e-ia',
    icono: '🤖',
    titulo: 'Automatización e IA',
    subtitulo: 'Que la tecnología trabaje por ti, no al revés.',
    introduccion:
      'Muchas tareas repetitivas de tu negocio pueden automatizarse, liberando tiempo valioso para enfocarte en lo importante. Usamos automatización e inteligencia artificial para optimizar procesos, responder más rápido a tus clientes y reducir el trabajo manual.',
    incluye: [
      'Automatización de respuestas frecuentes',
      'Generación automática de reportes',
      'Recordatorios y alertas automáticas',
      'Integración entre tus sistemas y herramientas',
      'Flujos de trabajo personalizados',
      'Soluciones básicas de inteligencia artificial aplicadas a tu negocio'
    ],
    beneficios: [
      'Ahorras horas de trabajo manual cada semana',
      'Reduces errores humanos en tareas repetitivas',
      'Respondes más rápido a tus clientes',
      'Tu equipo se enfoca en lo que realmente importa'
    ]
  },
  {
    slug: 'datos-y-reportes',
    icono: '📊',
    titulo: 'Datos y reportes',
    subtitulo: 'Convierte la información de tu negocio en decisiones inteligentes.',
    introduccion:
      'Tu negocio genera datos todos los días: ventas, clientes, productos, gastos. El problema es que casi nunca están organizados de forma útil. Transformamos esos datos en reportes claros y visuales para que puedas entender rápidamente cómo va tu negocio y qué decisiones tomar.',
    incluye: [
      'Reportes de ventas por día, semana o mes',
      'Dashboards visuales con gráficos',
      'Reportes de productos y clientes más rentables',
      'Comparativas de periodos anteriores',
      'Exportación de reportes',
      'Indicadores clave (KPIs) personalizados'
    ],
    beneficios: [
      'Entiendes tu negocio de un vistazo',
      'Detectas oportunidades y problemas a tiempo',
      'Decisiones basadas en datos, no en suposiciones',
      'Ahorra tiempo frente a los reportes manuales'
    ]
  },
  {
    slug: 'soporte-tecnologico',
    icono: '🛠️',
    titulo: 'Soporte tecnológico',
    subtitulo: 'Siempre hay alguien detrás para ayudarte cuando lo necesites.',
    introduccion:
      'La tecnología puede fallar, y cuando pasa, necesitas soluciones rápidas, no complicaciones. Te acompañamos después de la implementación, resolviendo problemas, respondiendo dudas y asegurando que tus sistemas sigan funcionando correctamente.',
    incluye: [
      'Atención ante fallas o errores del sistema',
      'Mantenimiento preventivo periódico',
      'Actualizaciones y mejoras continuas',
      'Resolución de dudas de uso',
      'Copias de seguridad de tu información',
      'Canal directo de contacto para soporte'
    ],
    beneficios: [
      'Tranquilidad de tener respaldo profesional',
      'Menos tiempo de tu negocio detenido por fallas',
      'Sistemas siempre actualizados y seguros',
      'Acompañamiento a largo plazo, no solo al inicio'
    ]
  }
];