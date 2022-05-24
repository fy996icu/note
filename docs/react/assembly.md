---
title: React面向组件编程
toc: menu
order: 1
---
# React面向组件编程

## 组件分类

React组件分为：函数式组件、类式组件。

## 定义组件注意事项

1. 组件名必须首字母大写。

2. 虚拟DOM元素只能有一个根元素。

3. 虚拟DOM元素必须有结束标签。


## 函数式组件

```jsx | pure
//1.创建函数式组件
function MyComponent(){
  console.log(this); //此处的this是undefined，因为babel编译后开启了严格模式
  return <h2>我是用函数定义的组件</h2>
}

//2.渲染组件到页面
ReactDOM.render(<MyComponent/>,document.getElementById('root'))
/* 
  执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
  1.React解析组件标签，找到了MyComponent组件。
  2.发现组件是使用函数定义的，随后调用该函数，将返回的虚拟DOM转为真实DOM，随后呈现在页面中。
*/
```



## 类式组件

```jsx | pure
//1.创建类式组件
class MyComponent extends React.Component {
  render(){
    //render是放在哪里的？—— MyComponent的原型对象上，供实例使用。
    //render中的this是谁？—— MyComponent的实例对象 <=> MyComponent组件实例对象。
    console.log('render中的this:',this);	// 输出MyComponent类
    return <h2>我是用类定义的组件</h2>
  }
}
//2.渲染组件到页面
ReactDOM.render(<MyComponent/>,document.getElementById('root'))
/* 
  执行了ReactDOM.render(<MyComponent/>.......之后，发生了什么？
  1.React解析组件标签，找到了MyComponent组件。
  2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
  3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。
*/
```

## 组件三大核心属性

Reac三大核心属性：`state`、`props`、`refs`。

1. 组件中的`render()`方法中的`this`为组件实例对象。
2. 组件自定义方法中`this`为`undefined`，解决方法：
  * 强制绑定`this`：通过函数对象的`bind()`方法。
  * 使用箭头函数。
3. 状态数据不能直接修改或者更新。

**<font v-pre size="6">state</font>**

理解：

1、`state`是组件对象最重要的属性, 值是对象(可以包含多个key-value的组合)。

2、组件被称为"状态机", 通过更新组件的state来更新对应的页面显示(重新渲染组件)



**在`constructor`中初始化state**

```jsx | pure
//1.创建组件
class Weather extends React.Component{

  //构造器调用几次？ ———— 1次
  constructor(props){
    super(props)
    //初始化状态
    this.state = {isHot:false,wind:'微风'}
    //解决changeWeather中this指向问题
    this.changeWeather = this.changeWeather.bind(this)
  }

  //render调用几次？ ———— 1+n次 1是初始化的那次 n是状态更新的次数
  render(){
    //读取状态
    const {isHot,wind} = this.state
    return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}，{wind}</h1>
  }

  //changeWeather调用几次？ ———— 点几次调几次
  changeWeather(){
    //changeWeather放在哪里？ ———— Weather的原型对象上，供实例使用
    //由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
    //类中的方法默认开启了局部的严格模式，所以changeWeather中的this为undefined

    //获取原来的isHot值
    const isHot = this.state.isHot
    //严重注意：状态必须通过setState进行更新,且更新是一种合并，不是替换。
    this.setState({isHot:!isHot})
    //严重注意：状态(state)不可直接更改，下面这行就是直接更改！！！
    //this.state.isHot = !isHot //这是错误的写法
  }
}
//2.渲染组件到页面
ReactDOM.render(<Weather/>,document.getElementById('root'))
```



**类式组件state简写方式**

```jsx | pure
class Weather extends React.Component{
  state = {isHot:false,wind:'微风'}
  render(){
    const {isHot,wind} = this.state
    return <h1 onClick={this.changeWeather}>今天天气很{isHot ? '炎热' : '凉爽'}，{wind}</h1>
  }
}
ReactDOM.render(<Weather/>,document.getElementById('root'))
```

>  1. 通过使用`this.setState()`方法修改state。
>  2. `state`不可以直接修改。
>  3. 错误示例：`this.state.isHot = !isHot `


**<font v-pre size="6">props</font>**

理解：

1. 每个组件对象都会有`props`属性。
2. 组件标签的所有属性都保存在`props`中。



作用：通过标签属性从组件外向组件内传递变化的数据。

>  组件内部不要修改`props`数据，`props`是只读的。
>
>  错误示例：`this.props.name = 'jack'` 此行代码会报错，因为props是只读的。



读取属性值：`this.props.name`



**向组件内传递`props`**

```jsx | pure
// name、age、sex都是向Person组件传递的props
<Person name="jerry" age={19}  sex="男"/>

// 一次性传递多个props
const p = {name:'老刘',age:18,sex:'女'}
ReactDOM.render(<Person {...p}/>,document.getElementById('root'))
```



**在组件内接收`props`**

```jsx | pure
class Person extends React.Component{
  render(){
    // 接收props
    const {name,age,sex} = this.props
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age+1}</li>
      </ul>
    )
  }
}
```



**在`constructor`中访问`props`**

```jsx | pure
constructor(props){
  //构造器是否接收props，是否传递给super，取决于：是否希望在构造器中通过this访问props
  // console.log(props);
  super(props)
  console.log('constructor',this.props);
}
```



**对`props`进行类型限制**

依赖：需要使用`prop-types`库对`props`进行限制。

```shell
$ yarn add prop-types
```



作用：`prop-types`能用来检测全部数据类型的变量，包括基本类型的的字符串，布尔值，数字，以及引用类型的对象，数组，函数，甚至还有ES6新增的符号类型。

```json
// prop-types所能限制的类型--Person代表组件
Person.propTypes = {
  optionalArray: PropTypes.array,		//检测数组类型
  optionalBool: PropTypes.bool,			//检测布尔类型
  optionalFunc: PropTypes.func,			//检测函数（Function类型）
  optionalNumber: PropTypes.number,	//检测数字
  optionalObject: PropTypes.object,	//检测对象
  optionalString: PropTypes.string,	//检测字符串
  optionalSymbol: PropTypes.symbol,	//ES6新增的symbol类型
}
```



```jsx | pure
// 引入prop-types库
import PropTypes from 'prop-types';

// 创建函数式组件
function Person (props){
  const {name,age,sex} = props
  return (
    <ul>
      <li>姓名：{name}</li>
      <li>性别：{sex}</li>
      <li>年龄：{age}</li>
    </ul>
  )
}

// 限制数据类型
Person.propTypes = {
  name:PropTypes.string.isRequired, //限制name必传，且为字符串
  sex:PropTypes.string,//限制sex为字符串
  age:PropTypes.number,//限制age为数值
}

// 指定默认值
Person.defaultProps = {
  sex:'男',//sex默认值为男
  age:18 //age默认值为18
}
//渲染组件到页面
ReactDOM.render(<Person name="jerry"/>,document.getElementById('root'))
```



**<font v-pre size="6">refs</font>**

作用：组件内的标签可以定义`ref`属性来标识自己。



**字符串形式的`ref`**

```jsx | pure
// 使用ref="input"标记该input框
<input ref="input" type="text" placeholder="字符串形式的ref标记input"/>

// 通过ref获取input框的DOM
const {input} = this.refs
```

> 字符串形式的`ref`已弃用。



**回调形式的`ref`**

```jsx | pure
// 使用ref={el=>this.input=el}标记该input框
<input ref={el=>this.input=el} type="text" placeholder="回调形式的ref标记input"/>

// 通过ref获取input框的DOM
const {input} = this
```



**`createRef`创建`ref`容器**

`React.createRef`调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的。

```jsx | pure
//创建组件
class Demo extends React.Component{
	// React.createRef调用后可以返回一个容器，该容器可以存储被ref所标识的节点,该容器是“专人专用”的
  myRef = React.createRef()
	myRef2 = React.createRef()
  //展示左侧输入框的数据
  showData = ()=>{
    alert(this.myRef.current.value);	// 获取被ref标识的DOM的相关数据
  }
  //展示右侧输入框的数据
  showData2 = ()=>{
    alert(this.myRef2.current.value);
  }
  render(){
    return(
      <div>
        <input ref={this.myRef} type="text" placeholder="点击按钮提示数据"/>&nbsp;
        <button onClick={this.showData}>点我提示左侧的数据</button>&nbsp;
        <input onBlur={this.showData2} ref={this.myRef2} type="text" placeholder="失去焦点/>；
      </div>
    )
  }
}
//渲染组件到页面
ReactDOM.render(<Demo a="1" b="2"/>,document.getElementById('root'))
```



## 事件处理

React 事件的命名采用小驼峰式（camelCase），而不是纯小写。

使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。



**传统HTML与React绑定事件的不同**

```html
// 传统HTML绑定事件
<button onclick="activateLasers()">
  Activate Lasers
</button>

// React中绑定事件
<button onClick={activateLasers}>
  Activate Lasers
</button>
```


**在 React 中另一个不同点是你不能通过返回 `false` 的方式阻止默认行为。你必须显式的使用 `preventDefault`。**

```jsx | pure
function ActionLink() {
  function handleClick(e) {    
    e.preventDefault();    
    console.log('The link was clicked.');  
  }
  return (
    <a href="#" onClick={handleClick}>点击我</a>
  );
}
```



**事件处理理解**

1. 通过`onXxx`属性指定事件处理函数。

2. React中使用的是自定义（合成）事件，而不是使用的原生DOM事件。

3. React中的事件是通过事件委托的方式处理的。（委托给组件最外层的元素）

4. 通过`event.target`得到发生事件的DOM元素对象。



**回调函数中的`this`问题**

:::warning 注意
  在JavaScript中，`class`的方法默认不会绑定`this`。如果忘记绑定，把`this.handleClick`传入`onClick`，当你调用这个函数的时候`this`的值为`undefined`。

  如果你没有在方法后面添加 `()`，例如 `onClick={this.handleClick}`，你应该为这个方法绑定 `this`。
:::



**回调函数中绑定`this`的三种方法**

1. 通过`bind()`方法绑定`this`

   ```jsx | pure
   class Toggle extends React.Component {
     constructor(props) {
       super(props);
       this.state = {isToggleOn: true};
   
       // 为了在回调中使用 `this`，这个绑定是必不可少的
       this.handleClick = this.handleClick.bind(this);
     }
   
     handleClick() {
       this.setState(state => ({
         isToggleOn: !state.isToggleOn
       }));
     }
   
     render() {
       return (
         <button onClick={this.handleClick}>
           {this.state.isToggleOn ? 'ON' : 'OFF'}
         </button>
       );
     }
   }
   
   ReactDOM.render(
     <Toggle />,
     document.getElementById('root')
   );
   ```

2. 通过[public class fields 语法](https://babeljs.io/docs/plugins/transform-class-properties/)绑定`this`

   ```jsx | pure
   class LoggingButton extends React.Component {
     // 此语法确保 `handleClick` 内的 `this` 已被绑定。
     // 注意: 这是 *实验性* 语法。
     handleClick = () => {
       console.log('this is:', this);
     }
   
     render() {
       return (
         <button onClick={this.handleClick}>
           Click me
         </button>
       );
     }
   }
   ```

3. 在回调中使用`箭头函数`绑定`this`

   ```jsx | pure
   class LoggingButton extends React.Component {
     handleClick() {
       console.log('this is:', this);
     }
   
     render() {
       // 此语法确保 `handleClick` 内的 `this` 已被绑定。
       return (
         <button onClick={() => this.handleClick()}>
           Click me
         </button>
       );
     }
   }
   ```

>   此语法问题在于每次渲染 `LoggingButton` 时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为 `prop` 传入子组件时，这些组件可能会进行额外的重新渲染。我们通常建议在构造器中绑定或使用 `class fields` 语法来避免这类性能问题。

**向事件处理函数传递参数**

通过`箭头函数`传递参数

```jsx | pure
class Demo extends React.Component{
  // 事件处理函数
  handleClick = (params1,params2) => {
    console.log("传递过来的参数是：",params1,params2)	// 点击后输出：传递过来的参数是： a b
  }
  render(){
    return(
      <div>
        // 通过箭头函数传递参数”a“,"b"
        <button onClick={()=>this.handleClick("a","b")}>回调函数传递参数</button>&nbsp;
      </div>
    )
  }
}
//渲染组件到页面
ReactDOM.render(<Demo/>,document.getElementById('root'))
```



使用`高阶函数`传递参数

```jsx | pure
//创建组件
class Demo extends React.Component{
  // 事件处理函数
  handleClick(params1,params2){
    console.log("页面渲染就会执行")	// 页面渲染就会执行改行代码
    return (event)=>{						 // 点击按钮才会执行该return的箭头函数
      console.log(event)				 // 获得事件对象
      console.log("传递过来的参数是：",params1,params2)	// 点击后输出：传递过来的参数是： a b
    }
  }
  render(){
    return(
      <div>
        // 向handleClick传递参数”a“,"b"
        <button onClick={this.handleClick("a","b")}>回调函数传递参数</button>&nbsp;
      </div>
    )
  }
}
//渲染组件到页面
ReactDOM.render(<Demo/>,document.getElementById('root'))
```



## 受控组件

理解：受控组件就是可以被 react 状态控制的组件。

表单：在一个受控组件中，表单数据是由 React 组件来管理的。

>在 react 中，`input` 、`textarea` 等组件默认是非受控组件（输入框内部的值是用户控制，和React无关）。



**将表单元素转为受控组件**

将表单组件转换为受控组件，就是通过 `onChange` 事件获取当前输入内容，将当前输入内容作为 `value` 传入，此时就成为受控组件。

```jsx | pure
class Sum extends Component{
    state={a:0,b:0,result:0}

    handleChangeA=(event)=>{
        this.setState({
            a:parseInt(event.target.value),
            result:parseInt(event.target.value)+this.state.b
        })
    }
    handleChangeB=(event)=>{
        this.setState({
            b:parseInt(event.target.value),
            result:parseInt(event.target.value)+this.state.a
        })
    }
    render(){
        return (
            <div>
            		// 给表单元素绑定value和onChange事件
                <input type="text" value={this.state.a} onChange={this.handleChangeA}/> +
                <input type="text" value={this.state.b} onChange={this.handleChangeB} /> = 
                <input type="text" value={this.state.result}/>
            </div>
        )
    }
}

ReactDOM.render(<Sum/>,document.getElementById('root'))
```



**`textarea` 标签**

在 React 中，`<textarea>` 使用 `value` 属性代替。这样，可以使得使用 `<textarea>` 的表单和使用单行 input 的表单非常类似。

```jsx | pure
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的文章: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```



**`select`标签**

**HTML版select**

```html
<select>
  <option value="grapefruit">葡萄柚</option>
  <option value="lime">酸橙</option>
  <option selected value="coconut">椰子</option>
  <option value="mango">芒果</option>
</select>
```



**React版select**

由于 `selected` 属性的缘故，椰子选项默认被选中。React 并不会使用 `selected` 属性，而是在根 `select` 标签上使用 `value` 属性。这在受控组件中更便捷，因为您只需要在根标签中更新它。例如：

```jsx | pure
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('你喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">酸橙</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```

>
>  可以将数组传递到 `value` 属性中，以支持在 `select` 标签中选择多个选项：
>
>  ```jsx | pure
>  <select multiple={true} value={['B', 'C']}>
>  ```
>


**`文件input`标签**

在 HTML 中，`<input type="file">` 允许用户从存储设备中选择一个或多个文件，将其上传到服务器，或通过使用 JavaScript 的 [File API](https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications) 进行控制。

```html
<input type="file" />
```

>因为它的 `value` 只读，所以它是 React 中的一个**非受控**组件。


**处理多个输入**

当需要处理多个 `input` 元素时，我们可以给每个元素添加 `name` 属性，并让处理函数根据 `event.target.name` 的值选择要执行的操作。

```jsx | pure
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'isGoing' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
```



## 非受控组件

表单数据由DOM本身处理。即`不受setState()`的控制，与传统的HTML表单输入相似，input输入值即显示最新值（使用 `ref`从DOM获取表单值）

```jsx | pure
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```



**默认值**

在 React 渲染生命周期时，表单元素上的 `value` 将会覆盖 DOM 节点中的值，在非受控组件中，经常希望 React 能赋予组件一个初始值，但是不去控制后续的更新。 在这种情况下, 可以指定一个 `defaultValue` 属性，而不是 `value`。

```jsx | pure
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
          defaultValue="Bob"	// 添加默认值
          type="text"
          ref={this.input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```

同样，`<input type="checkbox">` 和 `<input type="radio">` 支持 `defaultChecked`，`<select>` 和 `<textarea>` 支持 `defaultValue`。



**文件输入**

在 React 中，`<input type="file" />` 始终是一个非受控组件，因为它的值只能由用户设置，而不能通过代码控制。应该使用 `File API` 与文件进行交互。

```jsx | pure
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${this.fileInput.current.files[0].name}`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(
  <FileInput />,
  document.getElementById('root')
);
```
