import React from 'react';
import { Stack, Center } from '@chakra-ui/layout';
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
} from '@chakra-ui/react';

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
            CUPOGHLAN es un emprendimiento destinado a acercar a los/as
            vecinos/as -y cualquier persona que no resida en nuestro querido
            barrio- de vuelta a los locales.
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
            Somos de Coghlan. Lo amamos. Nos parece importante, que empezando a
            superar la pandemia, la gente vuelva a los locales. No sólo para
            evitar intermediarios que aumenten los costos, sino también para
            vivir nuevamente la experiencia de compra y contacto directo con los
            productos ofrecidos. CUPOGHLAN es también una manera de introducir
            gratuitamente en el mundo digital a muchos locales y emprendedores
            que, hasta el momento, no habían podido hacerlo.
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
            Te dejamos un QR para que exhibas en la vidriera de tu local.
            Cualquier persona, al escanearlo, tiene acceso directo a la web de
            CUPOGHLAN, donde encuentra los datos de tu comercio y la oferta que
            hayas elegido, para poder comunicarse/acercarse directamente, sin
            intermediarios.
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
            En la medida de lo posible, que exhibas el QR en la vidriera, ya que
            si el local esta cerrado el/la usuario/a puede acceder igual y
            volver/comunicarse con vos en otro momento. También te vamos a pedir
            una oferta mensual para publicar en tu espacio en la web y que la
            mantengas vigente mientras dure ese período. Por último, que nos
            arrobes, repostees, etc. en alguna publicación que hagas en redes
            sociales. De esta manera, nos beneficiamos todos y todas.
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
            Todo comercio físico de Coghlan y aledaños a la querida Estación.
            (Próximamente también showrooms).
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
            Y siempre lo será. Formar parte de CUPOGHLAN solamente requiere
            pegar en tu vidriera el QR que te llevemos. Nuestro equipo financia
            los gastos de la web y desarrollo con las publicaciones destacadas,
            el aporte de sponsors y los paquetes personalizados que ofrecemos.
            Tampoco vendemos la base de datos. Ni de los comercios, ni de los/as
            usuarios/as ya que no solicitamos ningún tipo de login/ingreso al
            portal.
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
            Al ser un emprendimiento autogestionado y gratuito, le dedicamos
            nuestras horas libres tratando de suplir todas las demandas en el
            menor tiempo posible. Solicitamos paciencia si una carga de datos no
            se ve reflejada rápidamente, nuestro objetivo es que todo esté
            actualizado en menos de 48 h hábiles.
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
            En el sitio web de CUPOGHLAN, alojado en la URL
            www.cupoghlan.com.ar, se brindan ofertas de descuento sobre
            productos y/o servicios de empresas o comercios de diferentes rubros
            (las "Empresas"). La relación comercial será entre la Empresa y
            el/la Usuario/a. Las Empresas son las responsables únicas y
            exclusivas de los productos y/o servicios referenciados en las
            ofertas, las cuales realizan esas prestaciones y/o brindan tales
            servicios con arreglo a sus respectivas Condiciones Generales de
            Contratación. CUPOGHLAN no tiene a su cargo la realización de las
            prestaciones indicadas en las ofertas ni la entrega de los productos
            y/o servicios indicados en los mismos – estando tales actividades a
            cargo de las Empresas -, sino que la oferta le concede a Usted
            únicamente un derecho para obtener el descuento ante la Empresa que
            realice la prestación y/o brinde dicho servicio. Para la utilización
            del servicio de CUPOGHLAN rigen exclusivamente las presentes
            Condiciones de Uso. Las ofertas ofrecidas por CUPOGHLAN no están
            dirigidas a una prestación concreta ni a una mercadería concreta ni
            a un valor de prestación o mercadería concretos. CUPOGHLAN no es
            propietario de los productos y/o servicios ofrecidos por las
            Empresas, no tiene posesión de los mismos, ni interviene en la
            entrega y/o uso de los productos y/o servicios como así tampoco
            realiza Ofertas en su nombre, sino que es el espacio virtual en el
            cuál cada potencial comprador/a puede ver las ofertas a fin de
            adquirir los productos y/o servicios de las Empresas.
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
            De toparse con algún error de cualquier indole, por favor
            comunicarse al mail de contacto. Agregar ERROR / ACTUALIZACIÓN al
            subject del mail y a continuación detallar el mismo para su eventual
            corrección/actualización, junto con tus datos de contacto.
          </AccordionPanel>
        </AccordionItem>

        {/* ///////////// */}
      </Accordion>
    </Stack>
  );
};

export default Faq;
