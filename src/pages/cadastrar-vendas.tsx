import styles from '../styles/cadastrar-vendas.module.css';

const CadastrarVendas = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <div className={styles.headerContent}>
                    <div className={styles.logoContainer}>
                        <div className={styles.logo}>
                            <span className={styles.logoIcon}>💼</span>
                            <div>
                                <h1 className={styles.logoTitle}>Cadastro de Vendas</h1>
                                <p className={styles.logoSubtitle}>Cadastre suas vendas</p>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className={styles.mainContent}>
                <form className={styles.salesForm}>

                    {/* Seção Curso */}
                    <div className={styles.formSection}>
                        <h2 className={styles.sectionTitle}>Tipo de Curso</h2>
                        <div className={styles.courseOptions}>
                            <label className={`${styles.courseOption} ${styles.selected}`}>
                                <input
                                    type="radio"
                                    name="tipoCurso"
                                    value="online"
                                    className={styles.radioInput}
                                    checked
                                />
                                <span>Online</span>
                            </label>

                            <label className={styles.courseOption}>
                                <input
                                    type="radio"
                                    name="tipoCurso"
                                    value="presencial"
                                    className={styles.radioInput}
                                />
                                <span>Presencial</span>
                            </label>
                        </div>
                    </div>

                    {/* Seção Cliente */}
                    <div className={styles.formSection}>
                        <h2 className={styles.sectionTitle}>Dados do Cliente</h2>
                        <div className={styles.formGrid}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="nomeCliente">Nome Completo</label>
                                <input
                                    type="text"
                                    id="nomeCliente"
                                    name="nomeCliente"
                                    defaultValue=""
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    defaultValue=""
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="telefone">Telefone</label>
                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    defaultValue=""
                                />
                            </div>
                        </div>
                    </div>

                    {/* Seção Valores */}
                    <div className={styles.formSection}>
                        <h2 className={styles.sectionTitle}>Valores</h2>
                        <div className={styles.valuesGrid}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="valorBruto">Valor Bruto (R$)</label>
                                <div className={styles.currencyField}>
                                    <span>R$</span>
                                    <input
                                        type="text"
                                        id="valorBruto"
                                        name="valorBruto"
                                        defaultValue=""
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="descontoAplicado">Desconto (%)</label>
                                <div className={styles.percentField}>
                                    <input
                                        type="text"
                                        id="descontoAplicado"
                                        name="descontoAplicado"
                                        defaultValue=""
                                    />
                                    <span>%</span>
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="imposto">Imposto (%)</label>
                                <div className={styles.percentField}>
                                    <input
                                        type="text"
                                        id="imposto"
                                        name="imposto"
                                        defaultValue=""
                                    />
                                    <span>%</span>
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="valorFinalVenda">Valor Final (R$)</label>
                                <div className={`${styles.currencyField} ${styles.finalValue}`}>
                                    <span>R$</span>
                                    <input
                                        type="text"
                                        id="valorFinalVenda"
                                        name="valorFinalVenda"
                                        defaultValue=""
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="taxaCartao">Taxa do Cartão (%)</label>
                                <div className={styles.percentField}>
                                    <input
                                        type="text"
                                        id="taxaCartao"
                                        name="taxaCartao"
                                        defaultValue=""
                                    />
                                    <span>%</span>
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <label htmlFor="comissao">Comissão (%)</label>
                                <div className={styles.percentField}>
                                    <input
                                        type="text"
                                        id="comissao"
                                        name="comissao"
                                        defaultValue=""
                                    />
                                    <span>%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formActions}>
                        <button type="button" className={styles.cancelButton}>
                            Cancelar
                        </button>
                        <button type="submit" className={styles.submitButton}>
                            Salvar
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default CadastrarVendas;