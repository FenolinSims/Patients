const InfoOption = ({ name, val }) => {
    return (
        <div style={{
            width: "50%"
        }}>
            <div>
                <p className="info-name">{name}</p>
            </div>
            <div>

                <p className="info-val">{val}</p>
            </div>
        </div>
    )
}

export default InfoOption;