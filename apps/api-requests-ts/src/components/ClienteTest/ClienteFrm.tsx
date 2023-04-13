export default function ClienteFrm() {
    return (
        <>
            <form>
                <input className="form-control" type="text" name="nome" placeholder="Nome" />
                <input className="form-control" type="text" name="telefone" placeholder="Telefone" />
                <input className="form-control" type="text" name="email" placeholder="Email" />

                <input className="btn btn-warning" type="button" value="Alterar" />
                <input className="btn btn-danger" type="button" value="Remover" />
                <input className="btn btn-secondary" type="button" value="Cancelar" />
                <input className="btn btn-primary" type="button" value="Cadastrar" />
            </form>

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
            
        </>
    );
}