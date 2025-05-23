import { useRouteError } from "react-router-dom";
const  Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOPS!</h1>
            <h2>{`Error:${err.status} Type:${err.statusText} ` }</h2>
        </div>
    )
}
export default Error;
// manages