export default function ClienteTbl() {
    return (
        <table className="table table-dark">
            <thead>
                <tr className="table-active">
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Charles Borges</td>
                    <td>85999651360</td>
                    <td>solucao.erp@gmail.com</td>
                    <td><button className="btn btn-success" >Selecionar</button></td>
                </tr>
            </tbody>
        </table>
    );
}
