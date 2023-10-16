function NavBar (props) {

    const {rappeurList, setRappeurIndex} = props;

    return (
        <nav>
            <p>Clique sur l'un des rappeurs disponibles dans ton Rappeurdex pour le voir apparaître avec ses performances</p>
            <ul>
                <li>
                    {rappeurList.map((rappeurL, index) => (
                    <button key={index} onClick={() => setRappeurIndex(index)}>{rappeurL.name}</button>
                    ))}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar