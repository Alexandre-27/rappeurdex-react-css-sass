function RappeurCard (props) {

    return (
        <>
            <figure>
                <img src={props.rappeur.imgSrc} alt={props.rappeur.name} />
                <div>
                    <figcaption>{props.rappeur.name}</figcaption>
                    <p>{props.rappeur.rap}</p>
                    <p>{props.rappeur.flow}</p>
                </div>
            </figure>
        </>
    )
}

export default RappeurCard;