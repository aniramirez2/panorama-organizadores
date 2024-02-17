import { useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Checkbox, 
  CheckboxGroup,
  Stack
} from '@chakra-ui/react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFormik } from 'formik';
import { useToast } from '@chakra-ui/react'

const Form1 = ({formik}) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Información del contacto
      </Heading>

      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Correo
        </FormLabel>
        <Input id="email" type="email" name="correo" onChange={formik.handleChange}/>
        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      </FormControl>

        <FormControl>
          <FormLabel htmlFor="name" fontWeight={'normal'}>
            Nombre
          </FormLabel>
          <Input id="name" placeholder="Nombre" name='organizador' onChange={formik.handleChange} />
        </FormControl>

      <FormControl mr="5%">
          <FormLabel htmlFor="phone" fontWeight={'normal'}>
            Celular
          </FormLabel>
          <Input id="phone" placeholder="Teléfono" type='phone' name="telefono" onChange={formik.handleChange} />
        </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Redes sociales
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Link"
            name='redesSociales'
            onChange={formik.handleChange}
          />
        </InputGroup>
      </FormControl>
    </>
  )
}

const Form2 = ({formik}) => {

const [startDate, setStartDate] = useState(new Date());
const [startTime, setStartTime] = useState("");
const [endTime, setEndTime] = useState("");
const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Información del evento
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="event"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Evento
        </FormLabel>
        <Input
            pr="4.5rem"
            type="text"
            placeholder="Nombre del evento"
            name='evento'
            onChange={formik.handleChange}
          />
      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="description"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
            Descripción
        </FormLabel>
        <Input
          type="text"
          name="descripcion"
          id="descripcion"
          w="full"
          onChange={formik.handleChange}
        />
        <FormHelperText>          Por favor detalle la mayor cantidad de información del evento y asegúrese de responder ¿De qué se trata el evento?¿A quién está dirigido?¿Algún requisito especial?
</FormHelperText>
      </FormControl>
      <Flex>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="startDate"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Fecha de inicio
        </FormLabel>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="startTime"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Hora de inicio
        </FormLabel>
        <Input
          onChange={() => {}}
        />
      </FormControl>
      </Flex>
      <Flex>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="startDate"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Fecha de finalizaciòn
        </FormLabel>
        <DatePicker
          selected={endDate}
          onChange={(date) => setStartDate(date)}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="endTime"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Hora de finalizacion
        </FormLabel>
        <Input
          selected={endTime}
          onChange={() => {}}
        />
      </FormControl>
      </Flex>
      <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Idioma
          </FormLabel>
          <Select placeholder='Select option' onChange={formik.handleChange} name='idioma'>
            <option value='Español'>Español</option>
            <option value='Ingles'>Ingles</option>
            <option value='Portgues'>Portgues</option>
            <option value='Frances'>Frances</option>
            <option value='Otro'>Otro</option>
          </Select>
        </FormControl>
        <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Link info
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Link"
            name='linkInfo'
            onChange={formik.handleChange}
          />
        </InputGroup>
        <FormHelperText>¿Algún link dónde podamos encontrar información adicional?</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Fotos
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="file"
          />
        </InputGroup>
      </FormControl>
    </>
  )
}

const Form3 = ({formik}) => {


  const [checkedItems, setCheckedItems] = useState([])  
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Información del evento
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Ubicación
          </FormLabel>
          <InputGroup size="sm">
            <Input
              type="text"
              placeholder="calle 50 · 50 - 50"
              focusBorderColor="brand.400"
              rounded="md"
              name='ubicacion'
              onChange={formik.handleChange}
            />
          </InputGroup>
        </FormControl>

        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Precio
          </FormLabel>
            <Input
              type="text" name="precio"
              onChange={formik.handleChange}
            />
            <FormHelperText>Si es gratis, escribe 'Gratis', si es En taquilla escribe 'En taquilla', si es otro utilizar el siguiente formato para colocar el precio y moneda: 12000 COP o 34 USD
            </FormHelperText>
        </FormControl>

        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Publico Objetivo
          </FormLabel>
          <Select placeholder='Select option' name='publicoObjetivo' onChange={formik.handleChange}>
            <option value='Niños'>Niños (0 a 15)</option>
            <option value='Jovenes'>Jovenes (15 a 29)</option>
            <option value='Mayores'>Mayores de edad</option>
            <option value='Todos'>No importa la edad</option>
          </Select>
        </FormControl>

        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Categoria
          </FormLabel>
          <Select placeholder='Select option' name='categoria' onChange={formik.handleChange}>
            <option value='Cultura'>Cultura (Teatros, Galerias, Librerías, Museos, Exposiciones...)</option>
            <option value='Entretenimiento'>Entretenimiento (Conciertos, Festivales, Fiestas, Inauguraciones, Ferias...)</option>
            <option value='Deportivo'>
Deportivo (Competencias, Torneos, Ligas, Campeonatos, Encuentros deportivos, Entrenamientos, Partidos...)</option>
            <option value='Académico'>Académico (Convenciones, Educativos, Congresos...)</option>
            <option value='Negocios'>Negocios (Convenciones, Educativos, Congresos...)</option>
            <option value='Religioso'>Religioso (Ceremonias, Celebraciones...)</option>
          </Select>
        </FormControl>

        <FormControl>
        <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Selecciona las otras opciones que tiene el evento
          </FormLabel>
        <Stack spacing={5} direction='row'>
          <Checkbox colorScheme='red' >
            Venta de Comida
          </Checkbox>
          <Checkbox colorScheme='green' >
            Venta de Licor
          </Checkbox>
          <Checkbox colorScheme='blue' >
            Accesible silla de ruedas
          </Checkbox>
        </Stack>
        </FormControl>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Capacidad del lugar
          </FormLabel>
            <Input
              type="text" name="capacidad" onChange={formik.handleChange}
            />
            <FormHelperText>Por favor indicar cuántas personas caben en el lugar aproximadamente
            </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  )
}

export default function App() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)

  const formik = useFormik({
    initialValues: {
      correo: '',
      organizador: '',
      telefono: '',
      redesSociales: '',
      evento: '',
      descripcion: '',
      ubicacion: '',
      precio: '',
      publicoObjetivo: '',
      otrasOpciones: '',
      idioma: '',
      capacidad: '',
      categoria: '',
      linkInfo: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box display="flex" justifyContent="center" width="100%" my={4} alignItems="center">
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        width={800}
        p={6}
        as="form" onSubmit={formik.handleSubmit}>
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <Form1 formik={formik} /> : step === 2 ? <Form2 formik={formik} /> : <Form3 formik={formik} />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 3) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </Box>
  )
}