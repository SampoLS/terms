import { v4 as uuidv4 } from "uuid";

export const noteContents = [
  {
    id: uuidv4(),
    title: "Notes",
    isLargerTitle: true,
    path: "/note",
    url: "",
    anchor: "mynotes",
    text: {
      p1: (
        <ol className="list">
          <li>
            计算机用数据给现实世界建模，数据也是需要容器来装，比如说数据结构(我觉得数据结构可以是shape来进行描述现实生活中对象的样子)之类的，像对象，数组。
          </li>
          <li>
            它是什么？然后用来做什么(目的)？该如何对其进行操作？它为什么被制造出来？（产生的原因）
          </li>
          <li>
            编程就是给计算机下指令，把你所要做的目的或想法通过以代码的形式呈现。
          </li>
          <li>了解一项新事物，理解它的起因、概念、组成。</li>
          <li>如果多个子程序都需要用到相同的一个变量，那就设置为全局变量。</li>
          <li>
            我认为想要完成一个什么功能，会涉及到行为、动作，也就是说需要用到函数（方法）来达到目的。
          </li>
          <li>
            理解每一条语句背后所表达的含义，表达了什么意思(传递了什么信息)。
          </li>
          <li>
            用什么方法把数据保存到变量里面，然后再把这些变量又通过用什么方式结合起来，或者形成数据结构。形成数据结构之后，再之后需要用到这些数据的时候，又该用什么方法去获取，获取过后有用什么方法来展示。
          </li>
          <li>
            共享代码，抽取的一般都是具有相同成分的代码，把其放在另一个代码块中。
          </li>
          <li>编程多思考设计思路。</li>
          <li>
            计算机就是用来解决现实中的问题，那么解决问题的思路是什么呢？用什么方法能解决相关问题呢？
          </li>
          <li>对象不仅仅是一种数据结构，还可以是一种继承方式。</li>
          <li>
            函数不仅可以表动作、行为，还可以表示功能块，还可以表示减少重复代码。
          </li>
          <li>把思维、步骤、条件转换成代码。</li>
          <li>在考虑设计代码的时候，要思考如果项目变得越来越大怎么办？</li>
          <li>
            尽量把逻辑(相似)放在一个module里面(模块化 —》
            文件)，然后在进行整合。
          </li>
          <li>把内容相似的放在一个盒子里，不要怕嵌套多个盒子。</li>
          <li>
            数据如何安排得当？（数据结构），通过什么方法才能获取数据？在安排组合数据时一定要考虑粘合性。
          </li>
          <li>数据存放结构 + 语义化</li>
          <li>html 先是整体（大的布局），先了解整体架构布局。</li>
          <li>
            如何把需要的数据保存起来，然后通过什么方式传递到各个需要用的地方使用
          </li>
          <li>How does it work?</li>
          <li>React: Better architecture will result in less re-renders.</li>
          <li>Algorithm: method for solving a problem.</li>
          <li>Data Structure: method to store information.</li>
          <li>
            After state has been changed by statements(e.g. subroutines,
            re-store), the system know about it because the changed state has
            been stored in the memory, we can use it anytimes when we need it.
          </li>
          <li>
            variable(state), reference(identifier to a value),
            interface(contract), data structure and algorithm
          </li>
          <li>
            Process of abstraction build on details of reality. Find the key
            between connections.
          </li>
          <li>
            How to describe things clearly? I think it is a relation about the
            way to describe details step by step. So, how to get the details?
          </li>
          <li>
            Programming languages(the code we write) are just the
            implementation(translation) of algorithms(details), I need to find
            out the process of details based on experience and then use code to
            model the details.
          </li>
          <li>
            What is the purpose of the chunk of code? What kind of data it
            passed and handled?
          </li>
          <li>
            A variable is the name of a memory cell. It is "variable" because
            the value in the cell can change. Each memory cell has an address.
            The program puts data in contiguous memory.
          </li>
          <li>
            Objects can be designed to model real-world things in software.
            Objects group together details.
          </li>
        </ol>
      ),
    },
  },
];
