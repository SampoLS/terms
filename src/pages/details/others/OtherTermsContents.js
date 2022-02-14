import { v4 as uuidv4 } from "uuid";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const termsContents = [
  {
    id: uuidv4(),
    title: "Other Terms",
    isLargerTitle: true,
    path: "/other_terms",
    url: "",
    anchor: "other_terms",
    text: {
      p1: (
        <p>
          These pages describe the concept maybe good for promoting programming
          skills, maybe including life.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Hierarchy",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Hierarchy`,
    anchor: "Hierarchy",
    text: {
      p1: (
        <p>
          A hierarchy is an arrangement of items (objects, names, values,
          categories, etc.) that are represented as being "above", "below", or
          "at the same level as" one another. Hierarchy is an important concept
          in a wide variety of fields, such as philosophy, architecture, design,
          mathematics, computer science, organizational theory, systems theory,
          systematic biology, and the social sciences (especially political
          philosophy).
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Design pattern",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Design_pattern`,
    anchor: "Design_pattern",
    text: {
      p1: (
        <p>
          A design pattern is the re-usable form of a solution to a design
          problem. The idea was introduced by the architect Christopher
          Alexander and has been adapted for various other disciplines, notably
          software engineering.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Interaction",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Interaction`,
    anchor: "Interaction",
    text: {
      p1: (
        <p>
          Interaction is a kind of action that occurs as two or more objects
          have an effect upon one another. The idea of a two-way effect is
          essential in the concept of interaction, as opposed to a one-way
          causal effect. Closely related terms are interactivity and
          interconnectivity, of which the latter deals with the interactions of
          interactions within systems: combinations of many simple interactions
          can lead to surprising emergent phenomena. Interaction has different
          tailored meanings in various sciences.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Flowchart",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Flowchart`,
    anchor: "Flowchart",
    text: {
      p1: (
        <p>
          A flowchart is a type of diagram that represents a workflow or
          process. A flowchart can also be defined as a diagrammatic
          representation of an algorithm, a step-by-step approach to solving a
          task.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Data",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Data`,
    anchor: "Data",
    text: {
      p1: (
        <p>
          Data are individual facts, statistics, or items of information, often
          numeric. In a more technical sense, data are a set of values of
          qualitative or quantitative variables about one or more persons or
          objects, while a datum (singular of data) is a single value of a
          single variable.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Engineering",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Engineering`,
    anchor: "Engineering",
    text: {
      p1: (
        <p>
          Engineering is the use of scientific principles to design and build
          machines, structures, and other items, including bridges, tunnels,
          roads, vehicles, and buildings. The discipline of engineering
          encompasses a broad range of more specialized fields of engineering,
          each with a more specific emphasis on particular areas of applied
          mathematics, applied science, and types of application. See glossary
          of engineering.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Rule of thumb",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Rule_of_thumb`,
    anchor: "Rule_of_thumb",
    text: {
      p1: (
        <p>
          Rule of thumb is an approximate method for doing something, based on
          practical experience rather than theory.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Computing",
    isLargerTitle: false,
    path: "/other_terms",
    url: `${wikiUrl}/Computing`,
    anchor: "Computing",
    text: {
      p1: (
        <p>
          Computing is any goal-oriented activity requiring, benefiting from, or
          creating computing machinery. It includes the study and
          experimentation of algorithmic processes and development of both
          hardware and software. It has scientific, engineering, mathematical,
          technological and social aspects. Major computing disciplines include
          computer engineering, computer science, cybersecurity, data science,
          information systems, information technology and software engineering.
        </p>
      ),
    },
  },
];
