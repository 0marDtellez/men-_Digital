import { useEffect, useState } from "react"
// import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { data } from "../../../Fire/meFire";
import Detall from '../../context/detall';

const InfoPostr = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;
    useEffect(() => {
      const entRef = doc(data, "entradas", id);
      const docRef = doc(data, "menu", id);
      const posRef = doc(data, "postre", id);
      const bebRef = doc(data, "bebidas", id);
      getDoc(posRef)
        .then((resp) => {
          setItem(
            { ...resp.data(), id: resp.id }
          );
        })
    }, [id])

  return (
    <>
    <div>
      {item && <Detall item={item} />}
    </div>
    </>
  )
}

export default InfoPostr;