type HeaderProps = {
    name: string,
    age: number,
    city: string,
    state: string,
}

export const Header = (props: HeaderProps): JSX.Element => {
    return (
        <h2>O {props.name} está com {props.age} anos. Cidade/Estado: {props.city}/{props.state}.</h2>
    )
};