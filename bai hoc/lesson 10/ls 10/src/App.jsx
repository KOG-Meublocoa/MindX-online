import { useRef ,useState} from "react"

//! Vi du 3
function RenderCount(){
  const n = useRef(0)
  n.current += 1;
  reuturn <small>(da ve (n.current)lan)</small>
}

// function FriendItem({name}){
//   return <li>{name}{RenderCount()}</li>
// }
const FriendItem = nemo(function FriendItem({name})){
  reuturn
}
function App() {
  //! Vi du 1
  const inputRef = useRef(null)
  //! Vi du 2
  // const [shown ,setShown] = useState(0)
  // const noteRef = useRef(0)
  // const renders = useRef(0)
  // renders.current +=1

  //! vi du 3
  const 

  return (
    //! 1 vi du co ban useRef
    // <>
    //   <input ref={inputRef} placeholder="Nhap ten"/> 
    //   <button onClick={() => inputRef.current .focus()}>Dat con tro vao o </button> 
    // </>
    //! 2 vi du khac nhau giua useRef va useState
    // <>

    //   <p>So hien : {shown} (da ve {renders.current} lan)</p>
    //   <button onClick={() => setShown(shown + 1)}>Tang so hien tai (Su dung useState)</button>
    //   <button onClick={() => (noteRef.current +=1)}>Cong ghi chu rieng(Su dung useRef)</button>
    //   <button onClick={() => alert("Ghi chu rieng:" + noteRef.current)}>Xem ghi chu</button>
    // </>
    <>
    <p>Luot xem: {views}</p>
    <button onClick={() => setViews(views + 1)}>Tang luot xem</button>
    <ul>
      <FriendItem name ="Alice"/>
      <FriendItem name = "Bob"/>
      <FriendItem name = "Charlie"/>
    </ul>
    </>
  )
}

export default App
