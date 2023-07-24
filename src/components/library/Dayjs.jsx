
import dayjs from "dayjs";
import {useState} from "react";
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Asia/Seoul');

const Dayjs = () => {

    const [dte_ko, setDte_ko] = useState();
    const [dte_ny, setDte_ny] = useState();

    setInterval(()=>{
        setDte_ko(dayjs().format('YYYY-MM-DD HH:mm:ss'));
        setDte_ny(dayjs.tz(dayjs(), "America/New_York").format('YYYY-MM-DD HH:mm:ss'));
    }, 1000);

    return (
        <>
            <h2>
                한국시 : {dte_ko}
            </h2>
            <h2>
                뉴욕시 : {dte_ny}
            </h2>
        </>
    )
}

export default Dayjs;
