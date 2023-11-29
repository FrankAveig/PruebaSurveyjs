import { useState } from 'react';
// Importaciones de activos (si las necesitas)
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// Importaciones de SurveyJS
import { Model } from 'survey-core';
import { Survey, PopupSurvey } from 'survey-react-ui';
import { StylesManager } from 'survey-core';
import 'survey-core/defaultV2.css'; 
import { SharpLight , BorderlessDark} from 'survey-core/themes';


import './App.css';

// Aplica el tema fuera de la función del componente para que solo se haga una vez

function App() {
  const [count, setCount] = useState(0);
  
  // Asegúrate de que surveyJson está definido en alguna parte de tu código
  
  const surveyJson = {
    pages: [{
      name: "PersonalDetails",
      elements: [ {
          type: "text",
          name: "Identifcation",
          title: "Identificación:"
        }, {
          "type": "matrix",
          "name": "IdentificacionLaboral",
          "title": "IDENTIFICACIÓN LABORAL",
          "columns": [
            { "value": 1, "text": "Muy insatisfecho" },
            { "value": 2, "text": "Insatisfecho" },
            { "value": 3, "text": "Normal" },
            { "value": 4, "text": "Satisfecho" },
            { "value": 5, "text": "Muy satisfecho" }
          ],
          "rows": [
            { "value": "Pregunta1", "text": "Me gusta mi trabajo en Empagran" },
            { "value": "Pregunta2", "text": "Conozco claramente Misión, Visión y valores de Empagran" },
            { "value": "Pregunta3", "text": "Yo aporto al proceso de planificación en mi área de trabajo" },
            { "value": "Pregunta4", "text": "Cuento con los materiales y equipos necesarios para realizar mi trabajo" },
            { "value": "Pregunta5", "text": "Me siento orgulloso de trabajar para Empagran" },
            { "value": "Pregunta6", "text": "Considero que me pagan lo justo por mi trabajo en Empagran" },
            { "value": "Pregunta7", "text": "Me siento muy satisfecho con mi ambiente de trabajo" },
            { "value": "Pregunta8", "text": "Estoy satisfecho con los beneficios que recibo en Empagran" },
            { "value": "Pregunta9", "text": "Está conforme con la limpieza, higiene y salubridad en su lugar de trabajo" },
            { "value": "Pregunta10", "text": "Las herramientas y equipos que utilizo (computador, teléfono, etc.) son mantenidos en forma adecuada" }
          ]
        },{
          "type": "matrix",
          "name": "DesarrolloProfesional",
          "title": "DESARROLLO PROFESIONAL",
          "columns": [
            { "value": 1, "text": "Muy insatisfecho" },
            { "value": 2, "text": "Insatisfecho" },
            { "value": 3, "text": "Normal" },
            { "value": 4, "text": "Satisfecho" },
            { "value": 5, "text": "Muy satisfecho" }
          ],
          "rows": [
            { "value": "Pregunta1", "text": "En Empagran se interesan por mi futuro profesional al definir actividades de desarrollo para mi (capacitación, plan de carrera, etc.)" },
            { "value": "Pregunta2", "text": "Recibo capacitación en una sala adecuada para mi aprendizaje." },
            { "value": "Pregunta3", "text": "Mi Jefe inmediato me exhorta a mejorar mis capacidades o educación" },
            { "value": "Pregunta4", "text": "Mi Jefe inmediato me exhorta a crecer y aprender" }
          ]
        },{
          "type": "matrix",
          "name": "AutonomiaTrabajo",
          "title": "AUTONOMÍA EN EL TRABAJO",
          "columns": [
            { "value": 1, "text": "Muy insatisfecho" },
            { "value": 2, "text": "Insatisfecho" },
            { "value": 3, "text": "Normal" },
            { "value": 4, "text": "Satisfecho" },
            { "value": 5, "text": "Muy satisfecho" }
          ],
          "rows": [
            { "value": "Pregunta1", "text": "Me siento comprometido para alcanzar las metas establecidas." },
            { "value": "Pregunta2", "text": "El horario de trabajo me permite atender mis necesidades personales" },
            { "value": "Pregunta3", "text": "Si hay un nuevo Plan Estratégico, estoy dispuesto a servir de voluntario para iniciar los cambios" }
          ]
        },{
          "type": "matrix",
          "name": "CohesionEquipo",
          "title": "COHESIÓN DE EQUIPO",
          "columns": [
            { "value": 1, "text": "Muy insatisfecho" },
            { "value": 2, "text": "Insatisfecho" },
            { "value": 3, "text": "Normal" },
            { "value": 4, "text": "Satisfecho" },
            { "value": 5, "text": "Muy satisfecho" }
          ],
          "rows": [
            { "value": "Pregunta1", "text": "En Empagran existe un espíritu de cohesión de equipo de “estamos todos juntos en esto”." },
            { "value": "Pregunta2", "text": "En mi grupo de trabajo, solucionar el problema es más importante que encontrar algún culpable." },
            { "value": "Pregunta3", "text": "Siento que formo parte de un equipo que trabaja hacia una meta común." },
            { "value": "Pregunta4", "text": "Mi grupo trabaja de manera eficiente y enfocada" },
            { "value": "Pregunta5", "text": "Puedo confiar en mis compañeros de trabajo" },
            { "value": "Pregunta6", "text": "Existe muy buena comunicación entre los compañeros de trabajo." }
          ]
        },
        {
          "type": "matrix",
          "name": "ComunicacionInterna",
          "title": "COMUNICACIÓN INTERNA",
          "columns": [
            { "value": 1, "text": "Muy insatisfecho" },
            { "value": 2, "text": "Insatisfecho" },
            { "value": 3, "text": "Normal" },
            { "value": 4, "text": "Satisfecho" },
            { "value": 5, "text": "Muy satisfecho" }
          ],
          "rows": [
            { "value": "Pregunta1", "text": "Es clara la información que recibo en términos de calidad, cantidad y forma de presentación de mi trabajo." },
            { "value": "Pregunta2", "text": "Están establecidos los canales de comunicación entre las diferentes áreas de Empagran" },
            { "value": "Pregunta3", "text": "Sé dónde dirigirme cuando tengo un problema de trabajo." },
            { "value": "Pregunta4", "text": "He recibido información sobre el Reglamento" },
            { "value": "Pregunta5", "text": "Tengo un cuadernillo y/o ejemplar del Reglamento Interno" },
            { "value": "Pregunta6", "text": "He recibido inducción sobre los procedimientos en Seguridad, Salud e Higiene en el Trabajo." },
            { "value": "Pregunta7", "text": "Poseo un cuadernillo de los reglamentos y/o procedimientos en relación a Seguridad, Salud e Higiene en el Trabajo." }
          ]
        },
        {
          "type": "matrix",
          "name": "JerarquiaLiderazgo",
          "title": "JERARQUÍA Y LIDERAZGO",
          "columns": [
            { "value": 1, "text": "Muy insatisfecho" },
            { "value": 2, "text": "Insatisfecho" },
            { "value": 3, "text": "Normal" },
            { "value": 4, "text": "Satisfecho" },
            { "value": 5, "text": "Muy satisfecho" }
          ],
          "rows": [
            { "value": "Pregunta1", "text": "Mi Jefe Inmediato me pide mi opinión para ayudarle a tomar decisiones" },
            { "value": "Pregunta2", "text": "Mi Jefe inmediato escucha lo que dice su personal respecto a actividades laborales." },
            { "value": "Pregunta3", "text": "Mi Jefe inmediato busca los aportes del equipo de trabajo para que se puedan comprender y dar solución a las actividades complejas que se presentan" },
            { "value": "Pregunta4", "text": "Mi Jefe inmediato maneja mis asuntos laborales de manera satisfactoria" },
            { "value": "Pregunta5", "text": "Mi Jefe inmediato da un buen ejemplo" },
            { "value": "Pregunta6", "text": "Mi Jefe inmediato está disponible cuando lo requiero" }
          ]
        },{
          "type": "matrix",
          "name": "ReconocimientoEquidad",
          "title": "RECONOCIMIENTO Y EQUIDAD",
          "columns": [
            { "value": 1, "text": "Muy insatisfecho" },
            { "value": 2, "text": "Insatisfecho" },
            { "value": 3, "text": "Normal" },
            { "value": 4, "text": "Satisfecho" },
            { "value": 5, "text": "Muy satisfecho" }
          ],
          "rows": [
            { "value": "Pregunta1", "text": "Dentro de la empresa Empagran se reconoce la trayectoria del personal de mi área para ser promovido" },
            { "value": "Pregunta2", "text": "Puedo contar con un trato justo por parte de Mi Jefe y/o la empresa Empagram" },
            { "value": "Pregunta3", "text": "Las promociones se las dan a quienes se las merecen" },
            { "value": "Pregunta4", "text": "Mi Jefe es rápido para reconocer una buena ejecución" },
            { "value": "Pregunta5", "text": "Los objetivos que fija Mi Jefe para mi trabajo son razonables y alcanzables" }
          ]
        },
        {
          "type": "matrix",
          "name": "PresionCargaTrabajo",
          "title": "PRESIÓN Y CARGA DE TRABAJO",
          "columns": [
            { "value": 1, "text": "Muy insatisfecho" },
            { "value": 2, "text": "Insatisfecho" },
            { "value": 3, "text": "Normal" },
            { "value": 4, "text": "Satisfecho" },
            { "value": 5, "text": "Muy satisfecho" }
          ],
          "rows": [
            { "value": "Pregunta1", "text": "Tengo mucho trabajo y poco tiempo para realizarlo" },
            { "value": "Pregunta2", "text": "Considero que la presión que existe para cumplir con mis funciones es la adecuada." },
            { "value": "Pregunta3", "text": "Empagran es un lugar relajado para trabajar" }
          ]
        },
        {
          "type": "matrix",
          "name": "ApoyoEmocional",
          "title": "APOYO EMOCIONAL",
          "columns": [
            { "value": 1, "text": "Muy insatisfecho" },
            { "value": 2, "text": "Insatisfecho" },
            { "value": 3, "text": "Normal" },
            { "value": 4, "text": "Satisfecho" },
            { "value": 5, "text": "Muy satisfecho" }
          ],
          "rows": [
            { "value": "Pregunta1", "text": "Considero que Mi Jefe es flexible y justo ante las peticiones que solicito" },
            { "value": "Pregunta2", "text": "Puedo contar con la ayuda de Mi Jefe cuando la necesito" },
            { "value": "Pregunta3", "text": "Mi Jefe me respalda 100% en mi trabajo" },
            { "value": "Pregunta4", "text": "Es fácil hablar con Mi Jefe sobre problemas relacionados con el trabajo" },
            { "value": "Pregunta5", "text": "Mi Jefe me respalda y deja que yo aprenda de mis propios errores" }
          ]
        },
        {
          "type": "matrix",
          "name": "Innovacion",
          "title": "INNOVACIÓN",
          "columns": [
            { "value": 1, "text": "Muy insatisfecho" },
            { "value": 2, "text": "Insatisfecho" },
            { "value": 3, "text": "Normal" },
            { "value": 4, "text": "Satisfecho" },
            { "value": 5, "text": "Muy satisfecho" }
          ],
          "rows": [
            { "value": "Pregunta1", "text": "Mi Jefe me anima a desarrollar mis propias ideas." },
            { "value": "Pregunta2", "text": "A Mi Jefe le agrada que yo intente hacer mi trabajo de distintas formas, siempre que estas sean eficaces y ayuden a otros" },
            { "value": "Pregunta3", "text": "Mi Jefe 'valora' nuevas formas de hacer las cosas, y siempre que existe la oportunidad nos lo solicita" }
          ]
        },
        {
          "type": "matrix",
          "name": "ServicioAlimentacion",
          "title": "SERVICIO DE ALIMENTACIÓN",
          "columns": [
            { "value": 1, "text": "Muy insatisfecho" },
            { "value": 2, "text": "Insatisfecho" },
            { "value": 3, "text": "Normal" },
            { "value": 4, "text": "Satisfecho" },
            { "value": 5, "text": "Muy satisfecho" }
          ],
          "rows": [
            { "value": "Pregunta1", "text": "Está conforme con la infraestructura de la cafetería (sillas, mesas, cocina, platería, atención, ventilación)" },
            { "value": "Pregunta2", "text": "Considera que el lugar donde se sirve los alimentos cumple con todas las normas de higiene" },
            { "value": "Pregunta3", "text": "Usted está de acuerdo con la calidad de los alimentos que se sirven en la cafetería" }
          ]
        },
  
      
      ]
      }]
    };

  const survey = new Model(surveyJson);
  survey.applyTheme(BorderlessDark);


  return (
    <div>
      <Survey model={survey} />
      {/* <PopupSurvey model={survey} isExpanded={true} /> */}
    </div>
  );
}


export default App
