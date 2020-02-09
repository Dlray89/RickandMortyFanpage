import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import "./Signup.css";
import * as Yup from "yup";

const validateSignup = Yup.object().shape({
    firstname: Yup.string()
        .min(3, 'too short')
        .max(50, 'To long')
        .required('Require to proceed'),
    lastname: Yup.string()
        .min(3, 'too short')
        .max(50, 'To long')
        .required('Require to proceed'),
    email: Yup.string()
        .email('invalid Email')
        .required('Required to proceed'),
    password: Yup.string()
        .min(6, "Too short")
        .max(50, 'Secured')
        .required('Required to proceed')
});

const Signup = () => (

    <div>
        <div className='btnCont'>
            <button className="navBtn"><Link style={{ textDecoration: 'none', color: 'black' }} to='/'>Home</Link></button>
            <button className="navBtn"><Link style={{ textDecoration: 'none', color: 'black' }} to='/login'>Login</Link></button>
        </div>
        <h1>Sign-Up</h1>


        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                createpassword: '',
                confirmpassword: '',
            }}

            validationSchema={validateSignup}
            onSubmit={(values, {setSubmitting }) => {
                     setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400)
            }}

        >
            {({ errors, touched, isSubmitting }) => (
                <div className='signup'>
        
                <Form>
                    <label>First Name</label>
                    <br />
                    <Field
                        name="firstname" type="text" />
                    {errors.firstname && touched.firstname ? (
                        <div>{errors.firstname}</div>
                    ) : null}
                    <br />

                    <label>Last Name</label>
                    <br />
                    <Field
                        name="lastname" type="text"/>
                    {errors.lastname && touched.lastname ? (
                        <div>{errors.lastname}</div>
                    ) : null}
                    <br />

                    <label>Email</label>
                    <br />
                    <Field
                        name="email" type="email" autoComplete='new-email'/>
                    {errors.email && touched.email ? (
                        <div>{errors.email}</div>
                    ) : null}
                    <br />

                    <label>Create Password</label>
                    <br />
                    <Field
                        name="createpassword" type="password" autoComplete='new-password'/>
                    {errors.createpassword && touched.createpassword ? (
                        <div>{errors.createpassword}</div>
                    ) : null}
                    <br />

                    <label>Confirm password</label>
                    <br />
                    <Field
                        name="confirmpassword" type="password" autoComplete='new-password'/>
                    {errors.confirmpassword && touched.confirmpassword ? (
                        <div>{errors.confirmpassword}</div>
                    ) : null}
                    <br />
                    <button type='submit'  disabled={isSubmitting} > Sign-up </button>
                </Form>
                 </div>
                
            )}
        </Formik>
    </div>
)
export default Signup;