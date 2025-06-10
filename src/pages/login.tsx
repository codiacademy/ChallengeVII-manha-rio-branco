import React, { useState } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import styles from '../styles/login.module.css';

export function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <div className={styles.loginHeader}>
                    <h1 className={styles.welcomeTitle}>Acesse sua conta</h1>
                </div>

                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.inputGroup}>
                        <FiMail className={styles.inputIcon} />
                        <input
                            type="text"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                            className={styles.inputField}
                            placeholder="Digite seu usuário"

                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <FiLock className={styles.inputIcon} />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={styles.inputField}
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <div className={styles.optionsRow}>
                        <label className={styles.rememberMe}>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <span>Manter logado</span>
                        </label>
                        <a href="#" className={styles.forgotPassword}>Esqueceu sua senha?</a>
                    </div>

                    <button type="submit" className={styles.loginButton}>
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;