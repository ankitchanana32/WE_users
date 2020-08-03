import React, { useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import UserActions from '../../Actions';
import { connect } from 'react-redux';
import "./style.css"

const LoginForm = (props) => {

    const errors = props.errors;
    const touched = props.touched;
    const { token } = props.User;


    if (token) {
        props.history.push("/allUsers")
    }
    return (
        <div>
            <div className="card form-card text-center">
                <div className="card-header">
                    {props.User.error ? <div class="alert alert-danger" role="alert">
                        {props.User.error}
                    </div> : <div>                   Enter Your Credentials
 </div>}
                </div>
                <div className="card-body">
                    <Form className="">
                        <div className="form-group " >
                            <div>
                                <label>User Email</label>
                                <Field type="text"
                                    className={'form-control' + (errors.User_Email && touched.User_Email ? ' is-invalid' : '')}
                                    name="User_Email" />
                                {touched.User_Email && errors.User_Email && <span style={{ color: 'red' }}>{errors.User_Email}</span>}
                            </div>
                            <br />
                            <div>
                                <label>User Password</label>
                                <Field type="password"
                                    className={'form-control' + (errors.User_Password && touched.User_Password ? ' is-invalid' : '')}
                                    name="User_Password" />
                                {touched.User_Password && errors.User_Password && <span style={{ color: 'red' }}>{errors.User_Password}</span>}
                            </div>
                            <div>
                                <br />
                                <br />
                                <br />
                            </div>
                            <div>
                                <button
                                    className={'btn btn-primary'}
                                    type="submit"
                                > Login</button>
                            </div>
                        </div>
                    </Form >
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
        </div>
    )
}

const FormikLoginForm = withFormik(
    {
        mapPropsToValues(props) {
            return {
                User_Email: "",
                User_Password: ""

            }
        },
        validationSchema: Yup.object().shape({
            User_Email: Yup.string()
                .required("User Email is Required"),
            User_Password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .required("Password is Required"),
        }),
        handleSubmit(values, { props }) {

            props.userLogin(values);
        }
    }
)(LoginForm)



const mapStateToProps = (state) => {
    return ({ User: state.UserLoginReducer })
}

const mapDispatchToProps = {
    userLogin: UserActions.userLogIn
}
export default connect(mapStateToProps, mapDispatchToProps)(FormikLoginForm)

