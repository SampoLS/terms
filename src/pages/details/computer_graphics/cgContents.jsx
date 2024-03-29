import { v4 as uuidv4 } from "uuid";
import addSubpath from "../../../utils/addSubpath";

const wikiUrl = "https://en.wikipedia.org/wiki";

export const cgContents = [
  {
    id: uuidv4(),
    title: "Computer Graphics",
    isLargerTitle: true,
    path: "/cg",
    url: `${wikiUrl}/Computer_graphics`,
    anchor: "Computer_Graphics",
    text: {
      p1: (
        <p>Computer graphics deals with generating images and art with the aid of computers. Today, computer graphics is a core technology in digital photography, film, video games, digital art, cell phone and computer displays, and many specialized applications. A great deal of specialized hardware and software has been developed, with the displays of most devices being driven by computer graphics hardware. It is a vast and recently developed area of computer science. The phrase was coined in 1960 by computer graphics researchers Verne Hudson and William Fetter of Boeing. It is often abbreviated as CG, or typically in the context of film as computer generated imagery (CGI). The non-artistic aspects of computer graphics are the subject of computer science research.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Rendering (computer graphics)",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/Rendering_(computer_graphics)`,
    anchor: "Rendering_(computer_graphics)",
    text: {
      p1: (
        <p>Rendering or image synthesis is the process of generating a photorealistic or non-photorealistic image from a 2D or 3D model by means of a computer program. The resulting image is referred to as the render. Multiple models can be defined in a scene file containing objects in a strictly defined language or data structure. The scene file contains geometry, viewpoint, texture, lighting, and shading information describing the virtual scene. The data contained in the scene file is then passed to a rendering program to be processed and output to a digital image or raster graphics image file. The term "rendering" is analogous to the concept of an artist's impression of a scene. The term "rendering" is also used to describe the process of calculating effects in a video editing program to produce the final video output.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Fragment (computer graphics)",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/Fragment_(computer_graphics)`,
    anchor: "Fragment_(computer_graphics)",
    text: {
      p1: (
        <p>In computer graphics, a fragment is the data necessary to generate a single pixel's worth of a drawing primitive in the frame buffer.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Vertex (computer graphics)",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/Vertex_(computer_graphics)`,
    anchor: "Vertex_(computer_graphics)",
    text: {
      p1: (
        <p>A vertex (plural vertices) in computer graphics is a data structure that describes certain attributes, like the position of a point in 2D or 3D space, or multiple points on a surface.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Shader",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/Shader`,
    anchor: "Shader",
    text: {
      p1: (
        <p>In computer graphics, a shader is a computer program that calculates the appropriate levels of light, darkness, and color during the rendering of a 3D scene—a process known as shading. Shaders have evolved to perform a variety of specialized functions in computer graphics special effects and video post-processing, as well as general-purpose computing on graphics processing units.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "UV mapping",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/UV_mapping`,
    anchor: "UV_mapping",
    text: {
      p1: (
        <p>UV mapping is the 3D modeling process of projecting a 3D model's surface to a 2D image for texture mapping. The letters "U" and "V" denote the axes of the 2D texture because "X", "Y", and "Z" are already used to denote the axes of the 3D object in model space, while "W" (in addition to XYZ) is used in calculating quaternion rotations, a common operation in computer graphics.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Texture mapping",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/Texture_mapping`,
    anchor: "Texture_mapping",
    text: {
      p1: (
        <p>Texture mapping is a method for mapping a texture on a computer-generated graphic. Texture here can be high frequency detail, surface texture, or color.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Polygon mesh",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/Polygon_mesh`,
    anchor: "Polygon_mesh",
    text: {
      p1: (
        <p>In 3D computer graphics and solid modeling, a polygon mesh is a collection of vertices, edges and faces that defines the shape of a polyhedral object. The faces usually consist of triangles (triangle mesh), quadrilaterals (quads), or other simple convex polygons (n-gons), since this simplifies rendering, but may also be more generally composed of concave polygons, or even polygons with holes.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Graphics pipeline",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/Graphics_pipeline`,
    anchor: "Graphics_pipeline",
    text: {
      p1: (
        <p>In computer graphics, a computer graphics pipeline, rendering pipeline or simply graphics pipeline, is a conceptual model that describes what steps a graphics system needs to perform to render a 3D scene to a 2D screen. Once a 3D model has been created, for instance in a video game or any other 3D computer animation, the graphics pipeline is the process of turning that 3D model into what the computer displays. Because the steps required for this operation depend on the software and hardware used and the desired display characteristics, there is no universal graphics pipeline suitable for all cases. However, graphics application programming interfaces (APIs) such as Direct3D and OpenGL were created to unify similar steps and to control the graphics pipeline of a given hardware accelerator. These APIs abstract the underlying hardware and keep the programmer away from writing code to manipulate the graphics hardware accelerators (AMD/Intel/NVIDIA etc.).</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Graphics",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/Graphics`,
    anchor: "Graphics",
    text: {
      p1: (
        <p>Graphics (from Ancient Greek γραφικός (graphikós) 'pertaining to drawing, painting, writing, etc.') are visual images or designs on some surface, such as a wall, canvas, screen, paper, or stone, to inform, illustrate, or entertain. In contemporary usage, it includes a pictorial representation of data, as in design and manufacture, in typesetting and the graphic arts, and in educational and recreational software. Images that are generated by a computer are called computer graphics.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Pixel",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/Pixel`,
    anchor: "Pixel",
    text: {
      p1: (
        <p>In digital imaging, a pixel (abbreviated px), pel,[1] or picture element[2] is the smallest addressable element in a raster image, or the smallest point in an all points addressable display device. In most digital display devices, pixels are the smallest element that can be manipulated through software.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Digital image",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/Digital_image`,
    anchor: "Digital_image",
    text: {
      p1: (
        <p>A digital image is an image composed of picture elements, also known as pixels, each with finite, discrete quantities of numeric representation for its intensity or gray level that is an output from its two-dimensional functions fed as input by its spatial coordinates denoted with x, y on the x-axis and y-axis, respectively.[1] Depending on whether the image resolution is fixed, it may be of vector or raster type. By itself, the term "digital image" usually refers to raster images or bitmapped images (as opposed to vector images).</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "3D computer graphics",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/3D_computer_graphics`,
    anchor: "3D_computer_graphics",
    text: {
      p1: (
        <p>3D computer graphics, sometimes called CGI, 3D-CGI or three-dimensional computer graphics are graphics that use a three-dimensional representation of geometric data (often Cartesian) that is stored in the computer for the purposes of performing calculations and rendering digital images, usually 2D images but sometimes 3D images. The resulting images may be stored for viewing later (possibly as an animation) or displayed in real time.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "2D computer graphics",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/2D_computer_graphics`,
    anchor: "2D_computer_graphics",
    text: {
      p1: (
        <p>2D computer graphics is the computer-based generation of digital images—mostly from two-dimensional models (such as 2D geometric models, text, and digital images) and by techniques specific to them. It may refer to the branch of computer science that comprises such techniques or to the models themselves.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Three-dimensional space",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/Three-dimensional_space`,
    anchor: "Three-dimensional_space",
    text: {
      p1: (
        <p>In geometry, a three-dimensional space (3D space, 3-space or, rarely, tri-dimensional space) is a mathematical structure in which three values (coordinates) are required to determine the position of a point. More specifically, the three-dimensional space is the Euclidean space of dimension three that models physical space.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Plane (geometry)",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/Plane_(geometry)`,
    anchor: "Plane_(geometry)",
    text: {
      p1: (
        <p>In Euclidean geometry, a plane is a flat two-dimensional surface that extends indefinitely. Planes often arise as subspaces of three-dimensional space, as with one of a room's walls, infinitely extended.</p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Image",
    isLargerTitle: false,
    path: "/cg",
    url: `${wikiUrl}/Image`,
    anchor: "Image",
    text: {
      p1: (
        <p>An image is a visual representation of something. It can be two-dimensional, three-dimensional, or somehow otherwise feed into the visual system to convey information. An image can be an artifact, such as a photograph or other two-dimensional picture, that resembles a subject. In the context of signal processing, an image is a distributed amplitude of color(s).</p>
      ),
    },
  },
]

export const contentsLength = cgContents.length;

let subpathContents = [];
export const cgContentsAddedSubpath = addSubpath(
  subpathContents,
  contentsLength,
  cgContents
);
