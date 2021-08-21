function Card(props){

    return(

        <div className="card">
            <div className="cardimg">
                <img src={props.image} className='card-image' />
            </div>
            <h1 className="cardtitle">{props.title}</h1>
            <h3 className="cardsubti">{props.subtitle}</h3>
            <p className="card-desc">
                {props.desc}
            </p>
            <p className="btn-parent">
              <button className="card-btn">
                  Read More
              </button>
            </p>
        </div>
    )
}
export default Card;