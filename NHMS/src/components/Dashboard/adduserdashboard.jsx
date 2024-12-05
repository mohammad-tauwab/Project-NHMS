import { useState } from "react";
import Spinner from "../subcomponent/Spinner";

function AddUserDashboard (){
    const [loading, setLoading] = useState(true);
        return(
            <>
            <div id="container" className="w-full p-3 m-1 rounded-tr-lg bg-slate-200">
                <Spinner loading={loading}/>
                <iframe src="http://localhost:7000/adduser"  className="w-full h-full" onLoad={()=>{
                    setLoading(false);
                }} ></iframe>
            </div>
            </>
        )

}

export default AddUserDashboard;