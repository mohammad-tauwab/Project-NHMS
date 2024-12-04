import Spinner from "../subcomponent/Spinner";

function AddUserDashboard (){
        return(
            <>
            <div id="container" className="w-full p-3 m-1 rounded-tr-lg bg-slate-200">
                <iframe src="http://localhost:7000/adduser" frameborder="0" className="w-full h-full"></iframe>
            </div>
            <Spinner></Spinner>
            </>
        )

}

export default AddUserDashboard;