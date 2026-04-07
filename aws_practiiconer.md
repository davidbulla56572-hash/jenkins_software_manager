## AWS Practicioner

### Introducción a la informática en la nube

- ¿Qué es la computación en la nube?
    Son un conjunto de servicios de software que hacen uso de hardware externo en diferentes lugares del mundo para ser provistos a la medida de la empresa según vaya escalando. Ya sea almacenamiento, procesamiento, entre otros. Esto permite a las empresas evolucionar sin centrarse en la construcción de hardware a la medidad, Ej: si su empresa pasó de 1000 clientes a 10000 en 1 mes y sus aplicaciones ahora son más lentas, no tendrán que administrar por sí mismos el software, ya que accediendo al software de AWS podrán escalarlo sin necesidad de hacerlo manualmente.

    **Ventajas:**  
        - Escalabilidad  
        - Remueve tareas duras e innecesarias (Que podrían ser realizadas de manera más inteligente)  
        - Permite que las empresas inicien sus operaciones a un costo bajo.  
        - Infraestraestructura como software.

    **Modelos de negocio:**  
    - IaaS (Infraestructura como servicio): Ofrece servicios con una capacidad alta de gestión, como: entornos virtuales, equipos dedicados, almacenamiento puro, redes. Flexibilidad máxima.
    - PaaS (Platform as a Service): Permite centrar a las empresas sus esfuerzos en construir la infraestructura de sus aplicaciones en lugar de usar un producto final, Flexibilidad media.
    - SaaS (Software as a Service): Proporciona un servicio completo, son aplicaciones para el uso del cliente final, el usuario solo debe encargarse de conocer cómo usar el servicio. Tal como un gestor de emails.

    **Modelos de implementación en la nube:**  Entornos en los que nuestras aplicaciones pueden ser desplegadas.
    - Nube: todas nuestras aplicaciones están creadas, manejadas en la nube totalmente. Usan abstraciones de los servicio.
    - Híbrido: Aplicaciones que están alojadas en nuestros servicios locales pero que hacen uso de servicios de AWS. Sistemas internos con sistemas de la nube.
    - Privada / Local: Se usan para tener servicios menos expuestos y dedicados, sin embargo, estos siguen haciendo uso de virtualización y ejecución de aplicaciones para máximizar el uso de los recursos de este.

**Sección 2:**  

### Ventajas de cloud computing

- Inversión menor: permite escalar según el consumo necesario. Evita gastar en centros de datos físicos propios, esto ahorra tiempo y costos, además de permitir a las empresas centrarse en el negocio.
- Economías de escala: Debido a la cantidad de usuarios de AWS, permite reevaluar los costos en relación a las ganancias y transferir descuentos a los clientes.  
- Evita errores de estimación sobre la capacidad necesaria de los servicios, además de un ajuste de capacidad en minutos.
- Aumenta la velocidad y agilidad, reduce el tiempo que pueden tomar las tareas de desarrollo, despliegue, entre otras fases de experimentación.
- Permite centrarse en el negocio, en lugara de gastar sus recursos en centros de datos, esto para transferir sus energía en estrategias que destaquen entre los clientes.
- Alcance mundial eficiente, debido a presencia en diferentes regiones del mundo, permitiendo bajas latencias para los clientes.

**Sección 3:**  

### Introducción a AWS

- ¿Qué es un servicio web?: Es una aplicación accesible desde red de internet, que puede estar alojado en la nube o en un servicio privado. De esto solo los nos preocupamos por la información de salida y de entrada.

- ¿Qué es AWS?: Son un conjunto de productos informáticos globales en la nube, de acceso bajo demanda, con herramientas de administración. Cada uno de estos servicios individuales tiene un valor, por el cual solo se paga si se usa. Y la característica importante: todos son servicios web, ya que se acceden desde internet.

AWS permite conectar entre sí cada uno de estos servicios para construir soluciones sofisticadas y escalables a la medida.

Cada uno de los productos de AWS están dentro de una categoría, acompañados de uno o más servicios.

Algunas ramas de servicio:

- Amazon EC2: Para acceder a recursos informáticos y tener control de la infraestructura.
- AWS Lambda: para ejecutar código sin provisionar y servidor.
- AWS Elastic Beanstalk: administra y escala aplicaciones web de manera automática.
- AWS Lightsail: lanza una app web de manera sencilla en un entorno de nube.
- AWS Batch: Ejecución de código para lotes de información de manera fiable.
- AWS Outpost: para ejecutar la infraestructura de AWS desde su propio cero de datos.
- AWS Fargate: ejecución de microservicios o arquitectura de contenedores.

**Formas de interactuar con AWS:**  
- CLI
- AWS Interface
- SDK's con Java, Python y otros.


**Sección 4:**

### Marco de adopción de la nube AWS (CAF).

Se enfoca en guiar a una empresa en su adopción, contiene 6 fases principales, con 4 enfoques.

- Negocio: Este debe ser una fase para concretar el estado actual del negocio y el estado objetivo del negocio. Aquí se identifica cómo va a cambiar el modelo de negocio empresarial con la nueva adopción y los retos a enfrentar.

- Gente: Para la implementación se debe identificar el equipo actual: hallar las virtudes, capacidades y deficiencias, ya que estos son el recurso más importante para liderar el cambio y el mantenimiento futuro.

- Gobernanza: Aquí los directores mantienen la migración alineada con los Objetivos TI de la empresa, además de las inversiones y reduccion de riesgos comerciales.

- Plataforma: Arquitectos, Directores y Expertos en TI deben de tener la visión clara sobre el objetivo de la migración; un diseño de operatibilidad y relaciones del sistema en la nube.

- Seguridad: evaluar para que la migración cumpla con los requisitos de seguridad necesarios. Visibilidad, auditoria, control y agilidad.

- Operaciones: el equipo de operaciones respaldará el proceso para definir un nuevo flujo que esté alineado con el negocio para desarrollar sus actividades diarias, trimestrales o anuales.


## Modulo 2

## Aspectos para precios

Existen 3 formas de cobro que implementa AWS para cualquiera de sus productos, y el valor varía según el producto y el modelo de precios inicial que elija.

1. Cómputo: Varía según el tipo de instancia (Solo linux), Cómputo por hora/segundo.
2. Almacenamiento: Cobra por GB
3. Transferencia: no realiza el cobro por entrada de datos en todos los casos, existen algunas excepciones. En la salida de datos siempre. Se cobra por GB de transferencia. Este se cobra como un servicio, denominado _Transferencia saliente de datos de AWS_.

### Filosofía de AWS

- Pague por lo que usa
- Pague menos al reservar: Permite la inversión en instancias reservadas (RI) para instancias RDS o EC2, de este existen 3 tipos de reserva:
    * AURI: Pago total anticipado por instacia. Genera un   
    * PURI: Pago parcial anticipado por instancia.  
    * NURI: Reserva sin pago anticipado.  
- Paga menos si utiliza más: En servicios como S3, EFS, EBS, la cantidad de almacenamiento es inversamente proporcional a el porcentaje de cobro. De esta forma se ahorra más; hay más descuento.
- Paga aún menos a medida que crece aws: AWS a medida que crece ajusta sus precios, desde 2006 al 2019 redujo su costo 75 veces. Esto gracias a optimizaciones y mejora en el manejo de los recursos.


Si ninguno de los modelos de AWS le satisfacen, puede acceder a los precios personalizados, aunque esto es para proyectos de gran volumen y con requisitos únicos.

AWS ofrece una capa gratuita para sus nuevos clientes, esto con el fin de acojerlos hacia la transición a la nube.

### Servicios sin cargo adicional
Amazon VPC (Virtual Private Cloud), IAM (Controla el acceso a los recursos y servicios AWS), Facturación unificada (Permite realizar el pago de las facturas de AWS de varios servicios al tiempo), Elastic Beanstalk (Implementación y Administración sencilla de Aplicaciones), CloudFormation (Creación de colección de recursos relacionados entre sí), Automatic Scaling (Agrega o elimina recursos de manera automática), OpsWorks.