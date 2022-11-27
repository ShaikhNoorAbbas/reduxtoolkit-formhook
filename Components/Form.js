import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { add } from '../Store/dataSlice';
import classes from './form.module.css';
const Form = () => {
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        fullname: yup.string().required('Please Enter Your Name '),
        age: yup.number().required('please Enter Your age').positive().integer(),
        email: yup.string().required("please Enter Your Email").email(),
        password: yup.string().required("Please Enter Your Password").min(4).max(10),
        confirm_password: yup.string().required('please Enter Your Confirm Password').oneOf([yup.ref('password'), null], 'password Should Match')
    });
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const callbackFunction = (data) => {
        console.log(data);
        dispatch(add({ id: Math.random().toString(), username: data.fullname, age: data.age, email: data.email, password: data.password, confirm_password: data.confirm_password }));
        reset();
    }
    return (
        <div>
            <div className={classes.container}>
                <form onSubmit={handleSubmit(callbackFunction)}>
                    <label>Enter Your Name </label><br />
                    <input type="text" {...register("fullname")} /><br />
                    <label>Enter Your Age</label><br />
                    <input type="number" {...register("age")} /><br />
                    <label>Enter Your Email</label><br />
                    <input type="email" {...register("email")} /><br />
                    <label>Enter Your Password</label><br />
                    <input type="password" {...register("password")} /><br />
                    <label>Enter Your Password Agian</label><br />
                    <input type="password" {...register("confirm_password")} /><br /><br />
                    <button type="submit">Add user</button>
                </form>
            </div>
        </div >
    );
};
export default Form;