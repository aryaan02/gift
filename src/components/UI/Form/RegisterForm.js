import { useState } from 'react';

const RegisterForm = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    
    const { email, password, confirmPassword } = form;
    
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
        }
    };

    return (
        <div className="register-form">
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                        minLength="6"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={onChange}
                        required
                        minLength="6"
                    />
                </div>
                <input
                    type="submit"
                    value="Register"
                    className="btn btn-primary btn-block"
                />
            </form>
        </div>
    );
};

export default RegisterForm;