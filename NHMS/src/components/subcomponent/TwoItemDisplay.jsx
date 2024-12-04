//We will display the patients Registration deails
import styles from "./TwoItemDetail.module.css";
import "./media.css"
let TwoItemDetail = (data) => {

    let keys = Object.keys(data.dataPair); // getting the keys to access it avlue
    let values = Object.values(data.dataPair);
    return <>
        <div className="container-lg container-fuild text-start mt-2">
            <div className="row justify-content-center gy-2  mb-3 bg-info row-style">
                {
                    keys.map((value, index) => (
                        <>
                            <div className="col-6 col-md-3 ">
                                <input type="text" value={value} className={styles.input} readOnly />
                            </div>
                            <div className="col-6 col-md-3  ">
                                { String(values[index]).length < 35 ?
                                <input type="text" value={values[index]} className="input" readOnly style={{ "fontWeight": "bold" }} /> :
                                <textarea value={values[index]} className="input" readOnly style={{ "fontWeight": "bold" }} ></textarea> }
                            </div>
                        </>
                    ))}
            </div>
        </div >
    </>
}

export default TwoItemDetail;
