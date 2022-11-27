import Head from 'next/head';
import { useSelector, useDispatch } from 'react-redux';
import classes from './form.module.css';
import style from './nav.module.css';
import { remove } from '../Store/dataSlice';
const FormData = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.formdata);
    const handle = (id) => {
        dispatch(remove(id));
    }
    return (
        <div>
            <Head>
                <title>Form Data View</title>
            </Head>
            <div className={classes.container} id={classes.number}>
                <h3>Number of Data {data.length}</h3>
            </div>
            <div className={classes.bigWrapper}>
                {data.map((data) =>
                    <div key={data.id} className={classes.wrapper}>
                        <p>name {data.username}</p>
                        <p>Age: {data.age}</p>
                        <p>Email: {data.email}</p>
                        <p>Password: {data.password}</p>
                        <p>Confirm password: {data.confirm_password}</p>
                        <button onClick={() => handle(data.id)} className={style.link} id={style.remove}>Remove user</button>
                    </div>
                )}
            </div>
        </div >
    );
};
export default FormData;