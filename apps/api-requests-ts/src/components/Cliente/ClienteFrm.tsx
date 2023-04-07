export default function ClienteFrm() {
    return (
        <form>
            <input className="form-control" type="text" name="nome" placeholder="Nome" />
            <input className="form-control" type="text" name="telefone" placeholder="Telefone" />
            <input className="form-control" type="text" name="email" placeholder="Email" />

            <input className="btn btn-warning" type="button" value="Alterar" />
            <input className="btn btn-danger" type="button" value="Remover" />
            <input className="btn btn-secondary" type="button" value="Cancelar" />
            <input className="btn btn-primary" type="button" value="Cadastrar" />
        </form>
    );
}
