import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [titleInput, setTitleInput] = React.useState("");
  const [contentInput, setContentInput] = React.useState("");

  // const {titleAndContent, setTitleAndContent} = React.useState({
  //   title : "",
  //   content: ""
  //     })

  function handleChange(event){
    if (event.target.name === "title"){ 
      const newTitle = event.target.value ;
    return setTitleInput(newTitle);
  } else if (event.target.name === "content"){
    const newContent = event.target.value ;
    return setContentInput(newContent) ;
  }
}



  const [listItems, setListItems] = React.useState([]);

  function addition(event) {
    event.preventDefault();
    setTitleInput("");
    setContentInput("");

    return setListItems((preValue) => {
      return [
        ...preValue,
        {
          title: titleInput,
          content: contentInput
        }
      ]
    })   
  }

  function deleteItem(id){
    return setListItems((preValue)=>{
      return preValue.filter((each, index) =>{
        return index !== id 
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAddition={addition} handleChange={handleChange} titleInput={titleInput} contentInput={contentInput}  />
      {
        listItems.map((eachItem, index) => {
          return <Note key={index} id={index} title={eachItem.title} content={eachItem.content} onDeleteItem={deleteItem} />
        })
      }

      <Footer />
    </div>
  );
}

export default App;
