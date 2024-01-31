import './Detail.scss';
import SimpleBar from "simplebar-react"
import "simplebar-react/dist/simplebar.min.css"

const Detail = ({detail}) => {
  return (

    <>

        { detail.id ? (
            <div className='detail'>
                <div className='detail-fig'>
                    <img className='detail-fig__img' alt='' src={detail.image}/>
                </div>
                <h2 className='detail__name'>{detail.name}</h2>
                <div className='detail-props'>
                    {Object.keys(detail).filter(k => k !== 'id' && k !== 'name' && k !== 'image').map((key, i) => (
                        <div className='detail-props-prop' key={i}>
                            <h3 className='detail-props-prop__title'>{key}</h3>
                            <SimpleBar style={{ maxHeight: "180px" }}>
                                <ul className='detail-props-prop-ul'>
                                    {detail[key] && (
                                        Array.isArray(detail[key]) ? (      
                                            detail[key].map((elem, j) => (
                                                <li key={j}>{elem}</li>
                                            ))
                                        ) : (
                                            <li>{detail[key]}</li>
                                        )
                                    )}
                                </ul>
                            </SimpleBar>
                        </div>
                    ))}
                </div>
            </div>

            ) : (
                <p>Cargando...</p>
            )

        }
    </>
  )
}

export default Detail
