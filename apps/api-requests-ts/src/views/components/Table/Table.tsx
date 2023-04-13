interface TableProps {
    columns: string[];
    data: any[][];
    onEdit: (clienteData: any[]) => void;
    onDelete: (clienteData: any[]) => void;
}

const Table: React.FC<TableProps> = ({ columns, data, onEdit, onDelete }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>{cell}</td>
                        ))}
                        <td>
                            <button className="btn btn-sm btn-outline-warning me-2" onClick={() => onEdit(row)}>
                                Editar
                            </button>
                            <button className="btn btn-sm btn-outline-danger" onClick={() => onDelete(row)}>
                                Excluir
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;