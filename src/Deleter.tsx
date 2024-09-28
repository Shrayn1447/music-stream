import { useContext } from "react";
import { useFormContext } from "react-hook-form";

function Deleter() {
    const {control, getValues} = useFormContext();
    console.log(getValues())
  return (
    <>  
        
    </>
  )
}

export default Deleter;
