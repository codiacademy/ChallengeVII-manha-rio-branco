import React from 'react';
import styles from '../styles/cadastrar-gastos.module.css';

const CadastrarGastos = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.pageHeader}>
                <div className={styles.headerContent}>
                    <div className={styles.logoContainer}>
                        <div className={styles.logo}>
                            <span className={styles.logoIcon}>💰</span>
                            <div>
                                <h1 className={styles.logoTitle}>Cadastro de Gastos</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className={styles.mainContent}>

                {/* Seletor de Tipo de Despesa */}
                <div className={styles.expenseTypeSelector}>
                    <h2 className={styles.sectionTitle}>Selecione o Tipo de Despesa</h2>
                    <div className={styles.typeOptions}>
                        <button type="button" className={`${styles.typeOption} ${styles.active}`}>
                            Despesas Fixas
                        </button>
                        <button type="button" className={styles.typeOption}>
                            Despesas Variáveis
                        </button>
                        <button type="button" className={styles.typeOption}>
                            Impostos
                        </button>
                    </div>
                </div>

                {/* Despesas Fixas */}
                <div className={styles.salesForm}>
                    <div className={styles.formSection}>
                        <h2 className={styles.sectionTitle}>Despesas Fixas</h2>

                        <div className={styles.inputGroup}>
                            <label htmlFor="tipoDespesaFixa">Tipo de Despesa Fixa</label>
                            <select id="tipoDespesaFixa" className={styles.selectInput}>
                                <option value="">Selecione...</option>
                                <option value="luz">Conta de Luz</option>
                                <option value="agua">Conta de Água</option>
                                <option value="aluguel">Aluguel</option>
                                <option value="internet">Internet</option>
                                <option value="folha">Folha de Pagamento</option>
                            </select>
                        </div>

                        <div className={styles.dynamicForm}>

                            {/* Luz */}
                            <div className={styles.expenseForm}>
                                <div className={styles.formGrid}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="dataVencimentoLuz">Data de Vencimento</label>
                                        <input type="date" id="dataVencimentoLuz" className={styles.inputField} />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="dataPagamentoLuz">Data de Pagamento</label>
                                        <input type="date" id="dataPagamentoLuz" className={styles.inputField} />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="valorPagarLuz">Valor (R$)</label>
                                        <div className={styles.currencyField}>
                                            <span>R$</span>
                                            <input type="number" id="valorPagarLuz" className={styles.inputField} />
                                        </div>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Forma de Pagamento</label>
                                        <div className={styles.paymentOptions}>
                                            <label className={styles.paymentOption}>
                                                <input type="radio" name="pagamentoLuz" value="pix" />
                                                <span>Pix</span>
                                            </label>
                                            <label className={styles.paymentOption}>
                                                <input type="radio" name="pagamentoLuz" value="cartaoCredito" />
                                                <span>Cartão Crédito</span>
                                            </label>
                                            <label className={styles.paymentOption}>
                                                <input type="radio" name="pagamentoLuz" value="cartaoDebito" />
                                                <span>Cartão Débito</span>
                                            </label>
                                            <label className={styles.paymentOption}>
                                                <input type="radio" name="pagamentoLuz" value="boleto" />
                                                <span>Boleto</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.formActions}>
                                    <button type="button" className={styles.addButton}>
                                        Adicionar
                                    </button>
                                    <button type="button" className={styles.removeButton}>
                                        Remover
                                    </button>
                                </div>
                            </div>

                            {/* Folha de Pagamento */}
                            <div className={styles.expenseForm}>
                                <h3 className={styles.subsectionTitle}>Colaborador</h3>
                                <div className={styles.formGrid}>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="nomeColaborador">Nome</label>
                                        <input type="text" id="nomeColaborador" className={styles.inputField} />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="funcaoColaborador">Função</label>
                                        <input type="text" id="funcaoColaborador" className={styles.inputField} />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="salarioColaborador">Salário (R$)</label>
                                        <div className={styles.currencyField}>
                                            <span>R$</span>
                                            <input type="number" id="salarioColaborador" className={styles.inputField} />
                                        </div>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="valeTransporte">Vale Transporte (R$)</label>
                                        <div className={styles.currencyField}>
                                            <span>R$</span>
                                            <input type="number" id="valeTransporte" className={styles.inputField} />
                                        </div>
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label htmlFor="dataPagamentoColab">Data de Pagamento</label>
                                        <input type="date" id="dataPagamentoColab" className={styles.inputField} />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Forma de Pagamento</label>
                                        <div className={styles.paymentOptions}>
                                            <label className={styles.paymentOption}>
                                                <input type="radio" name="pagamentoColab" value="pix" />
                                                <span>Pix</span>
                                            </label>
                                            <label className={styles.paymentOption}>
                                                <input type="radio" name="pagamentoColab" value="deposito" />
                                                <span>Depósito</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.formActions}>
                                    <button type="button" className={styles.addButton}>
                                        Adicionar
                                    </button>
                                    <button type="button" className={styles.removeButton}>
                                        Remover
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Despesas Variáveis */}
                <div className={styles.salesForm}>
                    <div className={styles.formSection}>
                        <h2 className={styles.sectionTitle}>Despesas Variáveis</h2>

                        <div className={styles.inputGroup}>
                            <label htmlFor="tipoDespesaVariavel">Tipo de Despesa Variável</label>
                            <select id="tipoDespesaVariavel" className={styles.selectInput}>
                                <option value="">Selecione...</option>
                                <option value="manutencao">Manutenção</option>
                                <option value="suprimentos">Suprimentos</option>
                                <option value="outros">Outros</option>
                            </select>
                        </div>

                        {/* Manutenção */}
                        <div className={styles.expenseForm}>
                            <div className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="tipoManutencao">Tipo de Manutenção</label>
                                    <select id="tipoManutencao" className={styles.selectInput}>
                                        <option value="">Selecione...</option>
                                        <option value="predial">Predial</option>
                                        <option value="equipamentos">Equipamentos</option>
                                        <option value="informatica">Informática</option>
                                        <option value="outros">Outros</option>
                                    </select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="descricaoManutencao">Descrição</label>
                                    <input type="text" id="descricaoManutencao" className={styles.inputField} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="dataManutencao">Data</label>
                                    <input type="date" id="dataManutencao" className={styles.inputField} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="valorManutencao">Valor (R$)</label>
                                    <div className={styles.currencyField}>
                                        <span>R$</span>
                                        <input type="number" id="valorManutencao" className={styles.inputField} />
                                    </div>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Forma de Pagamento</label>
                                    <div className={styles.paymentOptions}>
                                        <label className={styles.paymentOption}>
                                            <input type="radio" name="pagamentoManutencao" value="pix" />
                                            <span>Pix</span>
                                        </label>
                                        <label className={styles.paymentOption}>
                                            <input type="radio" name="pagamentoManutencao" value="cartao" />
                                            <span>Cartão</span>
                                        </label>
                                        <label className={styles.paymentOption}>
                                            <input type="radio" name="pagamentoManutencao" value="transferencia" />
                                            <span>Transferência</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formActions}>
                                <button type="button" className={styles.addButton}>
                                    Adicionar
                                </button>
                                <button type="button" className={styles.removeButton}>
                                    Remover
                                </button>
                            </div>
                        </div>

                        {/* Suprimentos */}
                        <div className={styles.expenseForm}>
                            <div className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="tipoSuprimento">Tipo de Suprimento</label>
                                    <select id="tipoSuprimento" className={styles.selectInput}>
                                        <option value="">Selecione...</option>
                                        <option value="escritorio">Escritório</option>
                                        <option value="limpeza">Limpeza</option>
                                        <option value="didatico">Didático</option>
                                        <option value="outros">Outros</option>
                                    </select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="descricaoSuprimento">Descrição</label>
                                    <input type="text" id="descricaoSuprimento" className={styles.inputField} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="quantidadeSuprimento">Quantidade</label>
                                    <input type="number" id="quantidadeSuprimento" className={styles.inputField} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="valorUnitarioSuprimento">Valor Unitário (R$)</label>
                                    <div className={styles.currencyField}>
                                        <span>R$</span>
                                        <input type="number" id="valorUnitarioSuprimento" className={styles.inputField} />
                                    </div>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="valorTotalSuprimento">Valor Total (R$)</label>
                                    <div className={`${styles.currencyField} ${styles.disabled}`}>
                                        <span>R$</span>
                                        <input type="number" id="valorTotalSuprimento" className={styles.inputField} readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formActions}>
                                <button type="button" className={styles.addButton}>
                                    Adicionar
                                </button>
                                <button type="button" className={styles.removeButton}>
                                    Remover
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Impostos */}
                <div className={styles.salesForm}>
                    <div className={styles.formSection}>
                        <h2 className={styles.sectionTitle}>Impostos</h2>

                        <div className={styles.expenseForm}>
                            <div className={styles.formGrid}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="tipoImposto">Tipo de Imposto</label>
                                    <select id="tipoImposto" className={styles.selectInput}>
                                        <option value="">Selecione...</option>
                                        <option value="inss">INSS</option>
                                        <option value="fgts">FGTS</option>
                                        <option value="irrf">IRRF</option>
                                        <option value="iss">ISS</option>
                                        <option value="outros">Outros</option>
                                    </select>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="periodoImposto">Período de Referência</label>
                                    <input type="month" id="periodoImposto" className={styles.inputField} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="dataPagamentoImposto">Data de Pagamento</label>
                                    <input type="date" id="dataPagamentoImposto" className={styles.inputField} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="valorImposto">Valor (R$)</label>
                                    <div className={styles.currencyField}>
                                        <span>R$</span>
                                        <input type="number" id="valorImposto" className={styles.inputField} />
                                    </div>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label>Forma de Pagamento</label>
                                    <div className={styles.paymentOptions}>
                                        <label className={styles.paymentOption}>
                                            <input type="radio" name="pagamentoImposto" value="pix" />
                                            <span>Pix</span>
                                        </label>
                                        <label className={styles.paymentOption}>
                                            <input type="radio" name="pagamentoImposto" value="boleto" />
                                            <span>Boleto</span>
                                        </label>
                                        <label className={styles.paymentOption}>
                                            <input type="radio" name="pagamentoImposto" value="transferencia" />
                                            <span>Transferência</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formActions}>
                                <button type="button" className={styles.addButton}>
                                    Adicionar
                                </button>
                                <button type="button" className={styles.removeButton}>
                                    Remover
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.mainActions}>
                    <button type="button" className={styles.cancelButton}>Cancelar</button>
                    <button type="submit" className={styles.submitButton}>Salvar</button>
                </div>
            </main>
        </div>
    );
};

export default CadastrarGastos;