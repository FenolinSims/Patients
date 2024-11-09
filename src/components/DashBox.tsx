const DashBox = ({imgsrc,con1,con2,con3, dashCls, dashfontcls}) => {
    const dashClss = dashCls.join(' ');
    const dashfontclss = dashfontcls.join(' ');

    return (
        <div className={`dashbox fr-vc  dashbox-flex ${dashClss}`}>
            <div className="dasbox-left">
                <p className={`con1 ${dashfontclss}`}>{con1}</p>
                <p className="con2">{con2}</p>
                <p className="con3">{con3}</p>
            </div>
            <div className="dashbox-right">
                <img className="img" src={imgsrc} />
            </div>
        </div>
    )
}

export default DashBox;