const TabOption = ({tab, classLst}) => {
    const tempclassLst = classLst.join(' ')
    return (
        <>
            <div className={`${tempclassLst}`}>
                <p className={`${tempclassLst}`}>{tab}</p>
            </div>
        </>
    )
}
export default TabOption;