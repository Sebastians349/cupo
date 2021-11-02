import React from 'react';
import { Stack, Center, Spacer, UnorderedList, Text } from '@chakra-ui/layout';
import LogoHeader from '../LogoHeader';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Image,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const Faq = () => {
  return (
    <Stack p={5}>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="/Home">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Faq</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Center>
        <LogoHeader titulo="FAQ" />
      </Center>
      {/* ////////////Accordion///////////// */}
      <Container maxW="9xl" centerContent p={10}>
        <Accordion p={2}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontWeight="semibold"
                  flex="1"
                  textAlign="left"
                >
                  Qué hacemos
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Container textAlign="justify">
                CUPOGHLAN es un emprendimiento destinado a acercar a los/as
                vecinos/as -y cualquier persona que no resida en nuestro querido
                barrio- de vuelta a los locales.
              </Container>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontWeight="semibold"
                  flex="1"
                  textAlign="left"
                >
                  por qué lo hacemos{' '}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Container textAlign="justify">
                Somos de Coghlan. Lo amamos. Nos parece importante, que
                empezando a superar la pandemia, la gente vuelva a los locales.{' '}
                <Spacer /> <br /> No sólo para evitar intermediarios que
                aumenten los costos, sino también para vivir nuevamente la
                experiencia de compra y contacto directo con los productos
                ofrecidos. <Spacer /> <br /> CUPOGHLAN es también una manera de
                introducir gratuitamente en el mundo digital a muchos locales y
                emprendedores que, hasta el momento, no habían podido hacerlo.
              </Container>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontWeight="semibold"
                  flex="1"
                  textAlign="left"
                >
                  cómo lo hacemos{' '}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Container textAlign="justify">
                Ingresamos los datos que nos brindes (junto con tu oferta) y te
                asignamos GRATIS un espacio en la web, según tu rubro.
                <Spacer /> <br />
                Te dejamos un QR para que exhibas en la vidriera de tu local.
                Cualquier persona, al escanearlo, tiene acceso directo a la web
                de CUPOGHLAN. <Spacer /> <br /> Allí, van a encontrar los datos
                de tu comercio y la oferta que hayas elegido, para poder
                comunicarse / acercarse directamente, sin intermediarios.
                <Center>
                  <Image
                    p={3}
                    boxSize="150px"
                    src="QRokmini.png"
                    alt="logo de comercio"
                    objectFit="contain"
                    fallbackSrc="https://via.placeholder.com/150"
                  />
                </Center>
              </Container>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontWeight="semibold"
                  flex="1"
                  textAlign="left"
                >
                  qué te pedimos{' '}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Container textAlign="justify">
                En la medida de lo posible, que exhibas el QR en la vidriera, ya
                que si el local esta cerrado el/la usuario/a puede acceder igual
                y volver/comunicarse con vos en otro momento.
                <Spacer /> <br /> También te vamos a pedir una oferta mensual
                para publicar en tu espacio en la web y que la mantengas vigente
                mientras dure ese período. <Spacer /> <br />
                Por último, que nos arrobes, repostees, etc. en alguna
                publicación que hagas en redes sociales. De esta manera, nos
                beneficiamos todos y todas.
              </Container>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontWeight="semibold"
                  flex="1"
                  textAlign="left"
                >
                  cómo formar parte{' '}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Container textAlign="justify">
                Fácil. Nos envias un mail con estos datos: <Spacer />
                <br />
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    <strong>Nombre de tu comercio.</strong>
                    <br />
                    Nombre de tu local y ubicación exacta.{' '}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    <strong>Categoría/Rubro.</strong> <br />
                    Ejemplo Categoría: Alimentos - Actividades - Indumentaria -
                    Hogar-Gastronomia - Otros rubros. <br /> Este último si no
                    entrás en las otras. <br /> Próximamente, más categorías.{' '}
                    <br />
                    Ejemplo Rubro: Pastelería, Ferretería, etc.{' '}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    <strong>Descripción/Bajada nombre.</strong> <br />
                    Ej: "Cosas muy ricas", en la descripcion junto con el rubro.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    <strong>Logo del negocio</strong>. <br />
                    Adjuntado en el mail. En formato .PNG Máximo 160 x 160 (px)
                    y con buena resolución. (no blureado) <br /> Para que tu
                    marca se vea perfecta.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    <strong>Redes sociales.</strong> <br /> Las que tengas. Web,
                    Facebook, Instagram, Twitter y Whatsapp. <Spacer />
                    <br />
                    Este último, fundamental, ya que linkea directo con la App
                    para mensajearte. (no hace falta que nos brindes el +54 9 11
                    . Sólo los últimos 8 numeros )
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    <strong>La oferta y detalle de la misma. </strong>
                    <br />
                    Si tiene valor($), con fecha de caducidad o stock. Si es en
                    efectivo, débito u otro método de pago.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={MdCheckCircle} color="green.500" />
                    <strong>Opcionales</strong>
                    <br />
                    <UnorderedList>
                      <ListItem>Nombre.</ListItem>{' '}
                      <ListItem>
                        Whatsapp (no te agendamos, ni te agregamos a ningún
                        grupo, ni te enviamos mensajes)
                      </ListItem>
                      <ListItem>Telefono comercial.</ListItem>{' '}
                      <ListItem>Cuit del local.</ListItem> <br />
                    </UnorderedList>
                    Estos datos son para seguridad y validación de identidad del
                    comercio en la carga de datos.{' '}
                    <Text as="mark">
                      El usuario NO va a verlos. Ni se suben a la base de datos
                      / repositorio.
                    </Text>{' '}
                    <Spacer />
                    <br />
                    Lo ideal es que la primera vez nos mandes el mail ,nos
                    avises por dm en Instagram para validar al comercio.
                    <Spacer /> <br /> Si en el momento de la carga /
                    actualización de datos , no podemos validar la identidad, no
                    actualizamos lo solicitado en nuestra web.
                  </ListItem>
                </List>
              </Container>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontWeight="semibold"
                  flex="1"
                  textAlign="left"
                >
                  quiénes forman parte{' '}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Container textAlign="justify">
                Todo comercio físico de Coghlan y aledaños a la querida
                Estación. (Próximamente también showrooms).
              </Container>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontWeight="semibold"
                  flex="1"
                  textAlign="left"
                >
                  es gratis{' '}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Container textAlign="justify">
                Y siempre lo será. Formar parte de CUPOGHLAN solamente requiere
                que como local brindes una oferta mensual y pegar en tu vidriera
                el QR que te llevemos.
                <Spacer /> <br /> Nuestro equipo financia los gastos de la web y
                desarrollo con las publicaciones destacadas, el aporte de
                sponsors y los paquetes personalizados que ofrecemos.
              </Container>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontWeight="semibold"
                  flex="1"
                  textAlign="left"
                >
                  tiempos{' '}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Container textAlign="justify">
                Al ser un emprendimiento autogestionado y gratuito, le dedicamos
                nuestras horas libres tratando de suplir todas las demandas en
                el menor tiempo posible. <Spacer /> <br />
                Solicitamos paciencia si una carga de datos no se ve reflejada
                rápidamente, nuestro objetivo es que todo esté actualizado en el
                menor tiempo posible. <Spacer /> <br />
                En el transcurso de la semana actualizamos la web. Y vas a poder
                verlo reflejado.
              </Container>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontWeight="semibold"
                  flex="1"
                  textAlign="left"
                >
                  Legales{' '}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Container textAlign="justify">
                En el sitio web de CUPOGHLAN, alojado en la URL
                www.cupoghlan.com.ar, se brindan ofertas de descuento sobre
                productos y/o servicios de empresas o comercios de diferentes
                rubros (las "Empresas"). La relación comercial será entre la
                Empresa y el/la Usuario/a. Las Empresas son las responsables
                únicas y exclusivas de los productos y/o servicios referenciados
                en las ofertas, las cuales realizan esas prestaciones y/o
                brindan tales servicios con arreglo a sus respectivas
                Condiciones Generales de Contratación. CUPOGHLAN no tiene a su
                cargo la realización de las prestaciones indicadas en las
                ofertas ni la entrega de los productos y/o servicios indicados
                en los mismos – estando tales actividades a cargo de las
                Empresas -, sino que la oferta le concede a Usted únicamente un
                derecho para obtener el descuento ante la Empresa que realice la
                prestación y/o brinde dicho servicio. Para la utilización del
                servicio de CUPOGHLAN rigen exclusivamente las presentes
                Condiciones de Uso. Las ofertas ofrecidas por CUPOGHLAN no están
                dirigidas a una prestación concreta ni a una mercadería concreta
                ni a un valor de prestación o mercadería concretos. CUPOGHLAN no
                es propietario de los productos y/o servicios ofrecidos por las
                Empresas, no tiene posesión de los mismos, ni interviene en la
                entrega y/o uso de los productos y/o servicios como así tampoco
                realiza Ofertas en su nombre, sino que es el espacio virtual en
                el cuál cada potencial comprador/a puede ver las ofertas a fin
                de adquirir los productos y/o servicios de las Empresas.
              </Container>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  textTransform="uppercase"
                  fontWeight="semibold"
                  flex="1"
                  textAlign="left"
                >
                  errores / actualizaciones{' '}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Container textAlign="justify">
                De toparse con algún error de cualquier indole, por favor
                comunicarse al mail de contacto. <Spacer /> <br />
                Agregar ERROR / ACTUALIZACIÓN al subject del mail y a
                continuación detallar el mismo para su eventual
                corrección/actualización, junto con tus datos de contacto.
              </Container>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
      {/* ///////////// */}
    </Stack>
  );
};

export default Faq;
