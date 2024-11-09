const NavOption = ({imgsrc, actionClass}) => {
    
    return (
        <>
            <div className={actionClass}>
                <img src={imgsrc} />
            </div>
        </>
    )
}
export default NavOption;