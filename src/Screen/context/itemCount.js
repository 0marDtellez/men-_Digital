import { useState } from "react";
const ItemCount = () => {
  const [comen,setComen] = useState("");
  // const handleText = (e) =>{
  //   setComen(e.target.value);
  // }
  console.log (comen);

  return (
    <>
    <div className="col-sm-10">
      <label>Agregar cometario:</label>
      <input
        className="form-control"
        placeholder="Comentario" 
        aria-label="Comentario"
        value={comen}
        onChange={(e) =>setComen(e.target.value)}
        type="text" 
      ></input>
    </div>
    {/* <div>
      <div class="mb-3">
        <p>{comen}</p>
        <label for="exampleFormControlTextarea1" class="form-label"></label>
        <textarea class="form-control" rows="3" onChange={handleText}></textarea>
        <button className="btn" type="submit"> agregar cometario</button>
      </div>
    </div> */}
    </>
  )
} 

export default ItemCount;