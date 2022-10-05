const fs =require('fs')
var fetchdata =()=>{
    try {
        return JSON.parse(fs.readFileSync('notes.txt'))
    } catch (error) {
        return []
    }
}
 var addDataTofile =(data)=>{
    fs.writeFileSync('notes.txt',JSON.stringify(data) )
 }
var add =(title , body)=>{
    // fetch data 
    let notes = fetchdata()
    // check if note found
    let double = notes.filter((e)=> e.title === title)

    if(double.length ==0){
        let newnote = {"title":title , "body":body}
        notes.push(newnote)
       addDataTofile(notes)
        console.log("data added ")
    }else{
        console.log("stop : title found in database")
    }
}
var deletenote = (title)=>{
    // get data
    let notes = fetchdata()
    let found = notes.filter((e)=> e.title === title)
    if(found.length ==0){
        return console.log("title not found")
    }else{
        let notesAfterDelete = notes.filter((e)=> e.title !== title)
        addDataTofile(notesAfterDelete)
        console.log("note deleted")
    }
}

var ViewAll = ()=>{
   let notes =fetchdata()
  
notes.forEach(element => {
   ShowOneNote(element)
});
}
var ShowOneNote =(note)=>{
    console.log("Title :" , note.title)
    console.log("Body :" , note.body)
    
    console.log("********************")
}
var showSingleNote = (title)=>{
let notes =fetchdata()
let note = notes.filter((e)=> e.title === title)
if(note.length ===0){
    return console.log("note not found")
}

ShowOneNote(note[0])
}

module.exports ={
    add, 
    deletenote,
    showSingleNote,
    ViewAll
}



