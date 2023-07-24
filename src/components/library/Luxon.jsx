
import {DateTime} from "luxon";
import {useState} from "react";

const Luxon = () => {

    const [now, setNow] = useState();

    setInterval(()=>{
        setNow(DateTime.now().toFormat('yyyy-MM-dd HH:ss'));
    }, 100);

    return (
        <div className="luxon">
            <h2>{now}</h2>
        </div>
    );
}

export default Luxon;