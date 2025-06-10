import React, { useState } from 'react';
import styles from '../styles/cadastrar-despesas-variaveis.module.css';

export function DespesasVariaveis() {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('manutencao'); // 'manutencao' ou 'suprimentos'
    const [despesas, setDespesas] = useState<any[]>([]);

    const [formData, setFormData] = useState({
        tipo: '',
        descricao: '',
        data: '',
        valor: '',
        formaPagamento: '',
        quantidade: '',
        valorUnitario: '',
        valorTotal: ''
    });

    const openModal = (tab: string) => {
        setActiveTab(tab);
        setShowModal(true);
        setFormData({
            tipo: '',
            descricao: '',
            data: '',
            valor: '',
            formaPagamento: '',
            quantidade: '',
            valorUnitario: '',
            valorTotal: ''
        });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const novaDespesa = {
            id: Date.now(),
            ...formData,
            tipo: activeTab,
            dataCadastro: new Date().toISOString()
        };

        setDespesas([...despesas, novaDespesa]);
        closeModal();
    };

    const handleView = (id: number) => {
        const despesa = despesas.find(d => d.id === id);
        alert(`Visualizando: ${despesa?.descricao}`);
    };

    const handleEdit = (id: number) => {
        const despesa = despesas.find(d => d.id === id);
        setFormData({
            tipo: despesa?.tipoDespesaVariavel || despesa?.tipoSuprimentos || '',
            descricao: despesa?.descricaoManutencao || despesa?.descricaoSuprimentos || '',
            data: despesa?.data || '',
            valor: despesa?.valor || despesa?.valorTotal || '',
            formaPagamento: despesa?.formaPagamento || '',
            quantidade: despesa?.quantidadeSuprimentos || '',
            valorUnitario: despesa?.valorUnitario || '',
            valorTotal: despesa?.valorTotal || ''
        });
        setActiveTab(despesa?.tipo === 'manutencao' ? 'manutencao' : 'suprimentos');
        setShowModal(true);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Tem certeza que deseja excluir esta despesa?')) {
            setDespesas(despesas.filter(d => d.id !== id));
        }
    };

    return (
        <div className={styles.despesasContainer}>
            <div className={styles.header}>
                <h1>Despesas Variáveis</h1>
                <div className={styles.buttonsGroup}>
                    <button
                        onClick={() => openModal('manutencao')}
                        className={styles.addButton}
                    >
                        + Manutenção
                    </button>
                    <button
                        onClick={() => openModal('suprimentos')}
                        className={styles.addButton}
                    >
                        + Suprimentos
                    </button>
                </div>
            </div>

            {/* Despesas */}
            <div className={styles.tableContainer}>
                <table className={styles.despesasTable}>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Descrição</th>
                            <th>Data</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {despesas.length > 0 ? (
                            despesas.map(despesa => (
                                <tr key={despesa.id}>
                                    <td>{despesa.tipo === 'manutencao' ? 'Manutenção' : 'Suprimentos'}</td>
                                    <td>{despesa.descricao}</td>
                                    <td>{new Date(despesa.data).toLocaleDateString()}</td>
                                    <td>R$ {parseFloat(despesa.valor).toFixed(2)}</td>
                                    <td>
                                        <button
                                            onClick={() => handleView(despesa.id)}
                                            className={styles.actionButton}
                                        >
                                            👁️
                                        </button>
                                        <button
                                            onClick={() => handleEdit(despesa.id)}
                                            className={styles.actionButton}
                                        >
                                            ✏️
                                        </button>
                                        <button
                                            onClick={() => handleDelete(despesa.id)}
                                            className={styles.actionButton}
                                        >
                                            🗑️
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className={styles.noData}>Nenhuma despesa cadastrada</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Cadastro */}
            {showModal && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        <div className={styles.modalHeader}>
                            <h2>
                                {activeTab === 'manutencao'
                                    ? 'Cadastrar Manutenção'
                                    : 'Cadastrar Suprimentos'}
                            </h2>
                            <button onClick={closeModal} className={styles.closeButton}>×</button>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.modalForm}>
                            <div className={styles.tabs}>
                                <button
                                    type="button"
                                    className={`${styles.tabButton} ${activeTab === 'manutencao' ? styles.active : ''}`}
                                    onClick={() => setActiveTab('manutencao')}
                                >
                                    Manutenção
                                </button>
                                <button
                                    type="button"
                                    className={`${styles.tabButton} ${activeTab === 'suprimentos' ? styles.active : ''}`}
                                    onClick={() => setActiveTab('suprimentos')}
                                >
                                    Suprimentos
                                </button>
                            </div>

                            <div className={styles.formContent}>
                                {activeTab === 'manutencao' ? (
                                    <>
                                        <div className={styles.inputGroup}>
                                            <label>Tipo de Despesa</label>
                                            <select
                                                name="tipo"
                                                value={formData.tipo}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Selecione...</option>
                                                <option value="preventiva">Preventiva</option>
                                                <option value="corretiva">Corretiva</option>
                                                <option value="preditiva">Preditiva</option>
                                            </select>
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label>Descrição</label>
                                            <input
                                                type="text"
                                                name="descricao"
                                                value={formData.descricao}
                                                onChange={handleChange}
                                                required
                                                placeholder="Descrição da manutenção"
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label>Data</label>
                                            <input
                                                type="date"
                                                name="data"
                                                value={formData.data}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label>Valor (R$)</label>
                                            <input
                                                type="number"
                                                name="valor"
                                                value={formData.valor}
                                                onChange={handleChange}
                                                required
                                                step="0.01"
                                                min="0"
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label>Forma de Pagamento</label>
                                            <select
                                                name="formaPagamento"
                                                value={formData.formaPagamento}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Selecione...</option>
                                                <option value="dinheiro">Dinheiro</option>
                                                <option value="cartao">Cartão</option>
                                                <option value="transferencia">Transferência</option>
                                                <option value="boleto">Boleto</option>
                                            </select>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={styles.inputGroup}>
                                            <label>Tipo de Suprimento</label>
                                            <select
                                                name="tipo"
                                                value={formData.tipo}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Selecione...</option>
                                                <option value="material">Material</option>
                                                <option value="equipamento">Equipamento</option>
                                                <option value="consumivel">Consumível</option>
                                            </select>
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label>Descrição</label>
                                            <input
                                                type="text"
                                                name="descricao"
                                                value={formData.descricao}
                                                onChange={handleChange}
                                                required
                                                placeholder="Descrição do suprimento"
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label>Quantidade</label>
                                            <input
                                                type="number"
                                                name="quantidade"
                                                value={formData.quantidade}
                                                onChange={handleChange}
                                                required
                                                min="1"
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label>Valor Unitário (R$)</label>
                                            <input
                                                type="number"
                                                name="valorUnitario"
                                                value={formData.valorUnitario}
                                                onChange={handleChange}
                                                required
                                                step="0.01"
                                                min="0"
                                            />
                                        </div>

                                        <div className={styles.inputGroup}>
                                            <label>Valor Total (R$)</label>
                                            <input
                                                type="number"
                                                name="valorTotal"
                                                value={formData.quantidade && formData.valorUnitario
                                                    ? (parseFloat(formData.quantidade) * parseFloat(formData.valorUnitario)).toFixed(2)
                                                    : ''}
                                                readOnly
                                            />
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className={styles.modalFooter}>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className={styles.cancelButton}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className={styles.saveButton}
                                >
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DespesasVariaveis;