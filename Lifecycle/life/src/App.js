//"?import logo from './logo.svg
import './App.css';
import React from 'react'
import User from './User'
import Togglechild from './Togglechild';
import { useState,createRef,useRef } from 'react'
import { Button ,Alert,Table} from 'react-bootstrap'
import Userf from './Userf'

// class App extends React.Component {
//   constructor(){
//     super();
//     // console.warn("C")
//     this.state={
//       data:"nasreen"//we cannot use api here
//     }
//   }
//    render(){
//     console.warn("r")
//     return(
//       <h1>Hello world {this.state.data}</h1>
//     )
//    }
// }
// function App(){
//   const [name,setName]=React.useState("mulla")
//   return ( 
//     <div className="App">
//       <h1>Render in life cycle methode</h1>
//       <User name={name}/>
//       {/* //<User name={name}/>
//       //<button onClick={()=>setName("nasreen")}>Updatebutton</button> */}
//     </div>
//   );
// }
// class App extends React.Component{
//   constructor(){
//     super();
//     console.warn("constructor")
//     this.state={
//       name:"anil"
//     }
//   }
//   componentDidMount(){
//     console.warn("component did mount called")
//   }
  
//      render(){
//       console.warn("render called")
//       return (
            
//       <div className="App">
//         <h1>component did mount </h1>
//         <button onClick={()=>{this.setState({name:"sidhu"})}}>update</button>
      
//         {/* //<User name={name}/>
//         //<button onClick={()=>setName("nasreen")}>Updatebutton</button> */}
//       </div>
    
//       );
//      }
//    }
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       name:"nasreen"
//     }
//     console.warn("constructure called")
//   }
//   componentDidUpdate(preProp,preState,Snapshot){
//     console.warn("component did update called")
//   }
  
//      render(){
//          console.warn("render Called")
//       return (
            
//       <div className="App">
//         <h1>component did update </h1>
//         <button onClick={()=>this.setState({name:"sidhu"})}>Update name</button>

//       </div>
    
//       );
//      }
//    }
class App extends React.Component{
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  componentDidUpdate(){
    console.warn("did update")
  }
  shouldComponentUpdate(){
    console.warn("shouldcomponentupdate",this.state.count)
   if(this.state.count>5 && this.state.count<10)
    {
      return true
    }
  }
  
     render(){
    
      return (
            
      <div className="App">
        <h1>component should update mount{this.state.count} </h1>
        <button onClick={()=>{this.setState({count:this.state.count+1})}}>Count</button>
        
      </div>
    
      );
     }
   }
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       show:true
//     }
  
//   }
  
//      render(){
    
//       return (
            
//       <div className="App">
//         {
//           this.state.show?
//           <Togglechild></Togglechild>:<h1>Component removed</h1>

//         }
//         {/* <h1>component  willun mount lifecycle methode </h1> */}
       
//         <button onClick={()=>this.setState({show:!this.state.show})}>Togglechild</button>

        
//       </div>
    
//       );
//      }
//    }


// function App(){
//   const[data,setData]=useState("nasreen")
//   return(
//     <div className='App'>

//     <h1>{data}</h1>
//     <button onClick={()=>setData("mulla")}>Update</button>
//     </div>
//   );
// }
import { useEffect} from 'react';
// function App(){
//   const[count,setCount]=useState(0)
//   useEffect(()=>{
//   console.warn("usefefct")
//   })
  
//   return(
//     <div className='App'>

//     <h1>Hooks Useeffect {count}</h1>
//     <button onClick={()=>setCount(count+1)}>Update</button>
    
//     </div>
//   );
// }
// function App(){
//   const[data,setData]=useState(1)
//   const[count,setCount]=useState(100)
//   useEffect(()=>{
//     console.warn("useeffect called data")
//   },[data])
//   useEffect(()=>{
//     alert("useeffect called" +count)
//   },[count])
//   return (
//    <div className='App'>
//     <h1>Counting :{count}</h1>
//     <h2>Dataece:{data}</h2>
//     <button onClick={()=>setCount(count+1)}>Countupdate</button>
//     <button onClick={()=>setData(data+1)}>dataupdate</button>
    

//    </div>
//   );
// }
import Userchild from './Userchild'
// function App(){
//   const[data,setData]=useState(1)
//   const[count,setCount]=useState(100)
  
//   return (
//    <div className='App'>
//     {/* <h1>Counting :{count}</h1>
//     <h2>Dataece:{data}</h2> */}
//     <Userchild count={count} data={data}></Userchild>
//     <button onClick={()=>setCount(count+1)}>Countupdate</button>
//     <button onClick={()=>setData(data+1)}>dataupdate</button>
    

//    </div>
//   );
// }
import './style.css'
import style from './custom.module.css'
// function App(){
   
    
//     return (
//      <div className='App'>
 
//      <h1># ways for styling in react Js</h1>
//      <h1 className="primary">#  1 ways for styling in react Js</h1>
//      <h1 style={{color:'black',backgroundColor:"blueviolet"}}>2ways for styling in CSS</h1>
//      <h1 className={style.success}>3 ways for styling in CSS</h1>
       
      
//     <h1>hello</h1>
  
//      </div>
//     );
//   }
// function App(){
   
    
//   return (
//    <div className='App'>

   
    
//   <h1>install bootstrap</h1>
//   <Button>Click me</Button>
//   <Button variant="primary">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button>{' '}
//       <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button>{' '}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
//       {[
//         'primary',
//         'secondary',
//         'success',
//         'danger',
//         'warning',
//         'info',
//         'light',
//         'dark',
//       ].map((variant) => (
//         <Alert key={variant} variant={variant}>
//           This is a {variant} alert—check it out!
//         </Alert>
//       ))}
    
//    </div>
//   );
// }
// function App(){
   
//     const student=['nasreen','mulla','raheem','hosur'];
//     const stu1=[
//       {name:"nasreen",age:22,no:999},
//       {name:"raheem",age:55,no:444},
//       {name:"sam",age:77,no:66
//     ]
//     student.map((i)=>{
//       console.warn("my name is:",i)
//     })

//     for(let i=0;i<student.length;i++){
//       console.warn("my name in for lops is",student[i])//we cannot use for loop in return so we use map
//     }
//   return (
//    <div className='App'>

   
//     <h1>Array witl list</h1>
//   {
//     student.map((data)=>
//     <h1>name is :{data}</h1>
//     )
//   }


//       <table border="10" >
//         <tr>
//           <td>Name</td>
//           <td>age</td>
//           <td>no</td>
//         </tr>
//         {
//           stu1.map((data)=>
//           <tr>
//             <td>{data.name}</td>
//             <td>{data.age}</td>
//             <td>{data.no}</td>
//           </tr>
//           )
//         }
//         </table> 
//    </div>
//   );
// }
// function App(){
  
// const stu1=[
//   {name:"nasreen",age:22,no:999},
//   {name:"raheem",age:55,no:999},
//   {name:"sam",age:77,no:66}
// ]

// return (
// <div className='App'>


// <h1> list with bootstrap and unique key</h1>

//   <Table striped>
//     <tbody>
//       <tr>
//         <td>Name</td>
//         <td>Age</td>
//         <td>no</td>
//       </tr>
//       {
//         stu1.map((item,i)=>
//        item.no === 999 ?
//        <tr key={i}>
//        <td>{item.name}</td>
//        <td>{item.age}</td>
//        <td>{item.no}</td>
//      </tr>:null
//         )
//       }
//     </tbody>
//   </Table>
  
// </div>
// );
// }
// function App(){
  
//   const stu1=[
//     {name:"nasreen",age:22,adr:[
//       {hn:"10",place:'delhi',mark:'x'},
//       {hn:"11",place:'noida',mark:'y'},
//       {hn:"10",place:'delhi',mark:'x'}

//     ]},
//     {name:"raheem",age:55,adr:[
//       {hn:"10",place:'delhi',mark:'x'},
//       {hn:"11",place:'noida',mark:'y'},
//       {hn:"10",place:'delhi',mark:'x'}

//     ]},
//     {name:"sam",age:77,adr:[
//       {hn:"10",place:'delhi',mark:'x'},
//       {hn:"11",place:'noida',mark:'y'},
//       {hn:"10",place:'delhi',mark:'x'}

//     ]}
//   ]
  
//   return (
//   <div className='App'>
  
  
//   <h1> nested lits with nested array</h1>
//   <Table striped>
//     <tbody >
//       <tr>
//         <td>Sno</td>
//         <td>Name</td>
//         <td>Age</td>
//         <td>Adr</td>
//       </tr>
//       {
//         stu1.map((item,i)=>
//           <tr key={i}>
//             <td>{i+1}</td>
//             <td>{item.name}</td>
//             <td>{item.age}</td>
//             <td>
//               <Table>
//                 <tbody>
//                   <tr>
//                     <td>House</td>
//                     <td>Place</td>
//                     <td>Mark</td>
//                   </tr>
//                   {
//                     item.adr.map((data)=>
//                   <tr>
//                     <td>{data.hn}</td>
//                     <td>{data.place}</td>
//                     <td>{data.mark}</td>

//                   </tr>
//                     )
//                   }
//                 </tbody>
//               </Table>
//             </td>
//           </tr>
//         )
//       }
//     </tbody>
//   </Table>
  
//   </div>
//   );
//   }
// function App(){
  
//   const user1=[{name:'nasreen',email:'nasree@123',adr:'delhi'},
//               {name:'mulla',email:'mull@123',adr:'dub'},
//             {name:'shaik',email:'shaik@123',ad:'kar'}]//json
  
//   return (
//   <div className='App'>
//     <h1>Reuse component</h1>
   
//      {
//       user1.map((item,i)=>
//       <h1><Userf data={item}/></h1>
//       )
//      }
    
//   </div>
//   );
//   }
// function App(){
  
 
//   return (
//   <div className='App'>

//     <h1>Fragment is used to wrap multiple component there ae 3 ways to do it</h1>
   
//   </div>
//   );
//   }
// function App(){
  
 
//   return (
//   <div className='App'>
//     <>
//     <h1>empty wraper is the firts way</h1>
//     <h2>nnnnnn</h2>
//     </> 
    
   
//   </div>
//   );
//   }
// function App(){
  
 
//   return (
//   <div className='App'>
//     <React.Fragment>
//     <h1>empty wraper is the 2 way</h1>
//     <h2>nnnnnn</h2>
//     </React.Fragment>
    
   
//   </div>
//   );
//   }
// import Cols from './Cols';
// function App(){
  
 
//   return (
//   <div >
    
//   <h1>React fragment</h1>
//   <table>
//     <tbody>
//       <tr>
//        <Cols/>
//       </tr>
//     </tbody>
//   </table>
    
   
//   </div>
//   );
//   }
// import Child from './Child'
// function App(){
//   function Palert(da){
//     alert(da)
//   }
 
//   return (
//   <div className="App" >
    
//   <h1>Lifting state up</h1>
//   <Child alert={Palert}/>

//   </div>
//   );
//   }
import  './App.css';

// class App extends React.PureComponent{
//   constructor(){
//     super();
//     this.state={
//       count:1
//     }
//   }
//    render(){
//     console.log("check rerendering")
//     return (
//       <div className="App">
//         <h1> PUre component in raect {this.state.count}</h1>
//         <button onClick={()=>this.setState({count:1})}>Update</button>

//       </div>
//     )
//    }
// }
import Purechild from './Purechild';
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       count:1
//     }
//   }
//    render(){
    
//     return (
//       <div className="App">
//         <Purechild count={this.state.count}/>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>

//       </div>
//     )
//    }
// }
import './App.css'
import { useMemo } from 'react';
//import React from 'react'
// function App(){
//   const [count,setCount]=useState(0)
//   const [item,setItem]=useState(10)
//    const constmemo=useMemo(
    
//   function multiCount(){
//     console.log("multicount")
//     return count*5
//   },[count]
//    )

//  return(
//   <div className="App">
//     <h1>Use memo hook in react</h1>
//     <h1>Count:{count}</h1>
//     <h1>Item :{item}</h1>
//     <h1>{constmemo}</h1>
//     <button onClick={()=>setCount(count+1)}>Update</button>
//     <button onClick={()=>setItem(item*10)}>Updateitem</button>
//   </div>
//  );
// }

// class  App extends React.Component{
//   constructor(){
//     super();
//     this.inputRef=createRef();
//   }
//  componentDidMount(){
//  // console.warn(this.inputRef.current.value="1000")
//  }
//  getval(){
//   console.warn(this.inputRef.current.value)
//   this.inputRef.current.style.color="red"
//  }
// render(){
//   return(
//     <div className="App">
//       <h1>Ref in Reactjs</h1>
//       <input type='text' ref={this.inputRef}/>
//       <button onClick={()=>this.getval()}>CheckRef</button>
//     </div>
//    );
//   }

// }
// function App() {
//   let inRef= useRef(null)

//    function  handle(){
//      console.warn("function call")
//      inRef.current.value="1000"
//      inRef.current.focus();
//    }
//  return(
//    <div className="App">
//     <h1> Useref in raect</h1>
//     <input type="text" ref={inRef}/>
//     <button onClick={handle}>Handleinput</button>

//    </div>
//  );
// }
import Forwardchild from './Forwardchild';
// function App(){
//   let inputRef=useRef(null)
//   function handle(){
//     inputRef.current.value="1000"
//     inputRef.current.style.color="red"
//     inputRef.current.focus()
//   }
//   return(
//     <div className="App">
//      <h1>Forward ref can be used to between two different component</h1>
//      <Forwardchild ref={inputRef}/>
//      <button onClick={handle}>ForwardsButton</button>
//     </div>
//   )
// }
// function App(){
//   let [val,setValue]=useState("")
//   return(
//     <div className="App">
//       <h1>Controlled component</h1>
//       <input type="text" value={val} onChange={(e)=>setValue(e.target.value)}/>
//       <h3> Value {val}</h3>

//     </div>
//   )
// }
// function App(){
//   let inputRef=useRef(null)
//   let inputRef2=useRef(null)
//   function Submitform(e){
//   e.preventDefault()
//   console.warn("input filed value" ,inputRef.current.value)
//   console.warn("input filed value2" ,inputRef2.current.value)
//   let input3=document.getElementById("input3").value
//   console.log("input filed value3",input3)
//   }
  
//   return(
//     <div className="App">
//       <h1>UNControlled component</h1>
//        <form onSubmit={Submitform}>
//         <input  ref={inputRef} type="text"/> <br></br>
//         <input  ref={inputRef2}type="text"/> <br></br>
//         <input id="input3" type="text"/> <br></br>
//         <button>Submit</button>

//        </form>



//     </div>
//   )
// }
// function App(){
//   return (
//     <div className="App">
//     <h1>HOC component</h1>
//     <Counter/>
//     <HOCS cmp={Counter}/>
//     </div>
//   )
// }
// function HOCS(props){
//   return <h1 style={{backgroundColor:'red',width:100}}><props.cmp/></h1>
// }
// function Counter(){
//   const [count,setCount]=useState(0)
//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Update</button>
//     </div>
//   )
// }
import {Link,Routes,Route,Switch, BrowserRouter} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
// function App(){
//   return(
//     <div className="App">

//       <Navbar/>
      
//       <Routes>
      
//         <Route path="/about" element={<About/>}/>
//         <Route path="/" exact={true} element={<Home/>}/>
   
//       </Routes>
   

//     </div>
//   );
// }

// function App(){
//   return(
//     <div className="App">
//       <h1>404 -page not found</h1>
//       <Link to="/">Home</Link>
//       <Link to="/About">About</Link>
//       <Link to="/Login">Login</Link>
//      <Routes>
      
//       <Route path="/about" element={<Tbout/>}/>
//       <Route path="/" exact={true} element={<Tome/>}/>
//       <Route path="*" element={<Error/>}/>
     
     
//      </Routes>

//     </div>
//   );
// }
// function Tome(){
//   return(
//     <div>
//       <h1> home page</h1>
//       <p>This is homepage</p>
//     </div>
//   )
// }
// function Tbout(){
//   return(
//     <div>
//       <h1> about page</h1>
//       <p>This is aboutpage</p>
//     </div>
//   )
// }
// function Error(){
//   return(
//     <div>
//       <h1> 404 not page</h1>
//       <p>This is Error 404 pagepage</p>
//     </div>
//   )
// }
// function App(){
//   let user=[
//     {id:1,name:'anil',email:'anil@123'},
//     {id:2,name:'nas',email:'nas@123'},
//     {id:3,name:'mull',email:'mull@123'},
//     {id:4,name:'rah',email:'rah@123'},
//     {id:5,name:'eem',email:'eem@123'}

//   ]
//   return(
//     <div className="App">
//      <h1>React dynamic Routing</h1>
//      {/* {
//       user.map((item)=>
//       <div>
//         <a href={"/User" +item.id}><h3>{item.name}</h3></a>
//         </div>
//       )
//      } */}
//      <BrowserRouter>
//       {
//       user.map((item)=>
//       <div>
//         <Link href={"/User" +item.id}><h3>{item.name}</h3></Link>
//         </div>
//       )
//      }
//      </BrowserRouter>
//     </div>
//   );
// }
// import Dser from './Dser';
// function App(){
//   let user=[
//     {id:1,name:'anil',email:'anil@123'},
//     {id:2,name:'nas',email:'nas@123'},
//     {id:3,name:'mull',email:'mull@123'},
//     {id:4,name:'rah',email:'rah@123'},
//     {id:5,name:'eem',email:'eem@123'}

//   ]
//   return(
//     <div className="App">
      
//      <h1>React dynamic Routing</h1>
   
//       {
//       user.map((item)=>
//       <div>
//         <Link to={"/user/"+item.id +"/"+item.name}><h3>{item.name}</h3></Link>
//         </div>
//       )
//      }
//     <Routes>
//       <Route path="/user/:id/:name" element={<Dser/>}/>
//     </Routes>
  
//     </div>
//   );
// }
// export default App;
//import './App.css';
//import React,{useEffect} from 'react';

// function App(){
//   const [data,setData]=useState([])
//   const [name,setName]=useState([])
//   const [email,setEmail]=useState([])
//   const[phone,setPhone]=useState([])
//   const [userId,setUserId]=useState([])

//   useEffect(()=>{
//   set()
//   },[])
//   console.warn(data);
//   function Change(){
//    let item={name,email,mobile,userId}
//    fetch('ursl/${id}',{
//     method:'PUT',
//     header:{
//       'Accept':'Application/json',
//       'Content-type':'Application/json'
//     },
//     body:JSON.stringify(item)
//   }).then((result)=>{
// result.json().then((resp)=>{
//  console.warn(resp)
//  set()
// })
//   })

//   }
//   function set(){
//     fetch("https://www.Bayt.com").then((result)=>{
//       result.json().then((resp)=>{
//       console.warn("result",resp)
//       setData(resp)
//       setName(resp[0].name)
//       setEmail(resp[0].email)
//       setPhone(resp[0].phone)
//       setUserId(resp[0].id)
//        })
//     })
//   }
//   function Select(){
//     console.warn(data[id-1])
//     setName(data[id-1].name)
//       setEmail(data[id-1].email)
//       setPhone(data[id-1].phone)
//       setUserId(data[id-1].id)
//   }
//   function Dfelete(id){
//     fetch('ursl/${id}',{
//       method:'DELETE'
//     }).then((result)=>{
// result.json().then((resp)=>{
//    console.warn(resp)
//    set()
// })
//     })
//   }

// return(
// <div className="App">
// <h1>Get APi call</h1>
// <table border="1">
//   <tr>
//     <td>name</td>
//     <td>Email</td>
//     <td>Phone</td>
//     <td>Operations</td>
//   </tr>
//   {
//     data.map((items)=>{
//       <tr>
//     <td>{items.name}</td>
//     <td>{items.mail}</td>
//     <td>{items.Phone}</td>
//     <td><button onClick={Dfelete(items.id)}>Delete</button></td>
//     <td><button onClick={Select(items.id)}>Update</button></td>
//   </tr>
//     }
//     )}
// </table>
// <div>
//   <input type="text" value={name} onChange={(e)=>setName.target.value}/>
//   <input type="text" value={email} onChange={(e)=>setEmail.target.value}/>
//   <input type="text" value={phone}onChange={(e)=>setPhone.target.value}/>
//   <button onChange={Change}>Update user</button>

// </div>
// </div>
// );
// }
// export default App;
// function App(){
//   const [name,setName]=useState("");
//   const [email,setEmail]=useState("");
//   const [title,setTitle]=useState("");
//   function save(){
//     console.warn({name,email,title});
//     let data={name,email,title}
//     fetch("url",{
//       method:'POST',
//       headers:{
//         'accept':'application/json',
//         'content-type':'application/json'

//       },
//       body:JSON.stringify(data)
//     }).then((result)=>{
//          result.json().then((res)=>{
//           console.warn("resp",res)
//          })
//     })
//   }
//   return(
//     <div className="App">
//      <h1>API call from react form</h1>
//      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="na"/>
//      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}name="ra"/>
//      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="an"/>
//      <button type="button" onClick={save}>Submit me</button>
//     </div>
//   )
// }
// export default App;
function App(){
  const [count,setCount]=useState(1);
   function Update(){
    let rand=(Math.floor(Math.random()*10))
    setCount((pre)=>{
    console.warn(pre);
      return rand;
    })
  for(let i=0;i<5;i++){
    setCount((pre)=>pre+1)
  }

  }
  return(
    <div className="App">
      <h1>Previous state {count}</h1>
      <button onClick={Update}>Update me</button>

    </div>
  )
  }
// export default App;
// import Raheem from './Raheem';
// function App(){
//   const [count,setCount]=React.useState(1);
//   return(
//     <div className="App">
//       <h1>Previous props in functional components</h1>
      
//      <Raheem count={count}/>
//      <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update</button>
//     </div>
//   );
// }
// export default App;
// import { Commoncontext } from './Compnents/Commoncontext';
// import Main from './Compnents/Main';
// import Updatebutton from './Compnents/Updatebutton';
// import Footer from './Compnents/Footer';
// import Header from './Compnents/Header';
// class App extends React.Component {
//   constructor(){
//     super()
//     this.Updatef=(color)=>{
//       this.setState({
//        color:color
//      })
//    }
//     this.state={
//     color:"red",
//     Updatef:this.Update
//     }
// }
// render()
// {
//   return(
    
//       <Commoncontext.Provider value={this.setState} >
//         <Header/>
//         <h1>Here is the example of create context api</h1>
//         <Main/>
//         <Updatebutton/>
//         <Footer/>
//       </Commoncontext.Provider>
//   );
// }
// }
// export default App
