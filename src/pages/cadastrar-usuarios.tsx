import React, { useState } from 'react';
import styles from '../styles/login.module.css';

export function CadastrarUsuario() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const [confirmacaoSenha, setConfirmacaoPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ nome, sobrenome, usuario, email, senha });
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <div className={styles.loginHeader}>
                    <h1 className={styles.welcomeTitle}>Crie sua conta</h1>
                    <p className={styles.subtitle}>Preencha os campos abaixo para se cadastrar</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Nome</label>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                            className={styles.inputField}
                            placeholder="Digite seu nome"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Sobrenome</label>
                        <input
                            type="text"
                            value={sobrenome}
                            onChange={(e) => setSobrenome(e.target.value)}
                            required
                            className={styles.inputField}
                            placeholder="Digite seu sobrenome"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Nome de usuário</label>
                        <input
                            type="text"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                            className={styles.inputField}
                            placeholder="Escolha um nome de usuário"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>E-mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={styles.inputField}
                            placeholder="Digite seu e-mail"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Senha</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className={styles.inputField}
                            placeholder="Crie uma senha"
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Confirmação de senha</label>
                        <input
                            type="password"
                            value={confirmacaoSenha}
                            onChange={(e) => setConfirmacaoPassword(e.target.value)}
                            required
                            className={styles.inputField}
                            placeholder="Repita a senha"
                        />
                    </div>

                    <button type="submit" className={styles.loginButton}>
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CadastrarUsuario;