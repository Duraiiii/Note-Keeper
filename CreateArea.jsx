import React from "react";
import { isPropertySignature } from "typescript";

function CreateArea(props) {
//   const [titleInput, setTitleInput] = React.useState("");
//   const [contentInput, setContentInput] = React.useState("");

//   // const {titleAndContent, setTitleAndContent} = React.useState({
//   //   title : "",
//   //   content: ""
//   //     })

//   function handleChange(event){
//     if (event.target.name === "title"){ 
//       const newTitle = event.target.value ;
//     return setTitleInput(newTitle);
//   } else if (event.target.name === "content"){
//     const newContent = event.target.value ;
//     return setContentInput(newContent) ;
//   }
// }

  return (
    <div>
      <form onSubmit = {props.onAddition}>
        <input onChange={props.handleChange} name="title" placeholder="Title" value = {props.titleInput} />
        <textarea onChange={props.handleChange} name="content" placeholder="Take a note..." rows="3" value = {props.contentInput}  />
        <button type="submit" >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
