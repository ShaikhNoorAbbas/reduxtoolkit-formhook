import Link from 'next/link';
import classes from './nav.module.css';
const Navbar = () => {
    return (
        <div className={classes.navcontainer}>
            <span style={{ fontSize: '25px' }}>Hook-Form+Reduxjs-Toolkit</span>
            <div>
                <span className={classes.link}><Link href="/">Home</Link></span>
                <span className={classes.link}><Link href="/formData">Form Data</Link></span>
            </div>
        </div>
    );
};
export default Navbar;