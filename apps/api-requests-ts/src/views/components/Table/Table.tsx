import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";

import styles from "./css/Table.module.css";
import CustomModal from "../Modal/CustomModal";
interface TableProps {
    columns: string[];
    data: any[][];
    onEdit: (clienteData: any[]) => void;
    onDelete: (clienteData: any[]) => void;
    onView?: (clienteData: any[]) => void; // tornando a propriedade onView opcional
    isEditing: boolean;
}

const Table: React.FC<TableProps> = ({ columns, data, onEdit, onDelete, onView, isEditing }) => {
    const [modalShow, setModalShow] = useState(false);
    const [selectedRow, setSelectedRow] = useState<any[]>([]);

    const handleView = (row: any[]) => {
        setSelectedRow(row);
        setModalShow(true);
    };

    return (
        <div className={`${styles.containerWithBorder}`}>
            <table className={`table table-bordered mb-0 table-striped`}>
                <thead>
                    <tr className="table-secondary">
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                        <th className="text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                            <td className="text-center">
                                <button
                                    className="btn btn-sm btn-outline-secondary me-2"
                                    onClick={() => handleView(row)}
                                    disabled={isEditing}
                                ><FontAwesomeIcon icon={faEye} /></button>
                                <button
                                    className="btn btn-sm btn-outline-secondary me-2"
                                    onClick={() => onEdit(row)}
                                    disabled={isEditing}
                                ><FontAwesomeIcon icon={faEdit} /></button>
                                <button
                                    className="btn btn-sm btn-outline-secondary"
                                    onClick={() => onDelete(row)}
                                    disabled={isEditing}
                                ><FontAwesomeIcon icon={faTrash} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Adicionando o componente CustomModal e definindo o seu conteúdo */}
            <CustomModal
                title={`Visualizando registro de número : [ ${selectedRow[0]} ]`}
                show={modalShow}
                onClose={() => setModalShow(false)}
            >
                <div>
                    <p>ID: {selectedRow[0]}</p>
                    <p>Nome: {selectedRow[1]}</p>
                    <p>Telefone: {selectedRow[2]}</p>
                    <p>Email: {selectedRow[3]}</p>
                </div>
            </CustomModal>
        </div>
    );
};

export default Table;