export const projects = [
    {
      id: 'tiendaexpress',
      title: '🛒 TiendaExpress E-commerce',
      role: 'QA Manual + Automatización',
      type: 'ecommerce',
      description: [
        'Diseñé 80+ casos de prueba funcionales y de integración.',
        'Automatización de regresión con Cypress (15 scripts).',
        'Reporté 45+ bugs en JIRA con evidencias detalladas.',
        'Reducción del 40% en tiempo de pruebas de regresión.'
      ],
      metrics: [
        { number: '80+', label: 'Casos de prueba' },
        { number: '45', label: 'Bugs reportados' },
        { number: '-40%', label: 'Tiempo testing' }
      ],
      links: []
    },
    {
      id: 'Forcesos',
      title: '📱 Forcesos App',
      role: 'QA Manual Mobile',
      type: 'mobile',
      description: [
        'Pruebas funcionales en iOS y Android.',
        'Documentación de hallazgos con logs y screenshots.',
        'Validación de sincronización con API en la nube.',
        'Participación en ceremonias ágiles (daily, planning).'
      ],
      metrics: [
        { number: '60+', label: 'Casos de prueba' },
        { number: '30', label: 'Bugs reportados' },
        { number: 'v2.1', label: 'Versión testeada' }
      ],
      links: []
    },
    {
      id: 'petstore',
      title: '🔗 PetStore API Testing',
      role: 'QA API Testing',
      type: 'api',
      description: [
        'Colección de 50+ requests en Postman.',
        'Validación de códigos de estado, schemas y tiempos.',
        'Automatización con Newman en CI/CD (GitHub Actions).',
        'Pruebas de contrato entre servicios.'
      ],
      metrics: [
        { number: '50+', label: 'Requests' },
        { number: '100%', label: 'Cobertura endpoints' },
        { number: 'CI/CD', label: 'Integración' }
      ],
      links: []
    }
  ]