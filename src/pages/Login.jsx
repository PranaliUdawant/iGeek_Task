import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as yup from "yup"
import { UserLogin } from '../redux/action/Useraction'
const Login = () => {
    const { userlogin, error } = useSelector(state => state.User)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "atuny0@sohu.com",
            password: "9uQFF1Lh"
        },
        validationSchema: yup.object({
            email: yup.string().required(),
            password: yup.string().required()
        }),
        onSubmit: (values) => {
            console.log(values);
            dispatch(UserLogin(values))
        }
    })
    useEffect(() => {
        if(userlogin) {
            navigate("/dashboard")
        }
    }, [userlogin])
  return <>
  <div class="container mt-5">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    {
                        error && <div className="alert alert-danger">
                            Please check email or password
                        </div>
                    }
                    <div class="card">
                        <div class="card-header">Login</div>
                        <div class="card-body">
                            <form onSubmit={formik.handleSubmit}>
                                <div>

                                    <label for="email" class="form-label">Email</label>
                                    <input
                                        type="text"
                                        id="email" name="email"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} value={formik.values.email}
                                        className={formik.errors.email && formik.touched.email ? "form-control is-invalid" : "form-control"}
                                        placeholder="Enter Your Email"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a password.</div>
                                </div>
                                <div class="mt-2">
                                    <label for="password" class="form-label">password</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        id="password" name="password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur} value={formik.values.password}
                                        className={formik.errors.password && formik.touched.password ? "form-control is-invalid" : "form-control"}
                                        placeholder="Enter Your password"
                                    />
                                    <div class="valid-feedback">Looks good!</div>
                                    <div class="invalid-feedback">Please choose a password.</div>
                                </div>
                                <button type="submit" class="btn btn-dark w-100 mt-3">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
}

export default Login