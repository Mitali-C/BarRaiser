import { useEffect } from "react";
import { useSelector } from 'react-redux';
import {store} from "../../index"
import { addData } from "../../redux/actions/test";

export const Home = () => {
  const state = useSelector((state) => state)
  useEffect(()=>{
    (store.dispatch)(
      addData('new string')
    );
    console.log(state, store.getState());
  })

  return(
    <div>home</div>
  )
}