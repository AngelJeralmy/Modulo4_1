// Importo el componente Card y Tags
import Card from 'react-bootstrap/Card';
import Tags from './Tags'

// Recibo las props
const MyCard = ({url, nombre, descripcion, texto, colorfondo}) => {
    return(
        <>
            <div className='contenedor'>
                <Card className='card1' style={{border: "1px solid black"}}>
                <Card.Img variant='top' src={url} style={{height:"200px"}}/>
                <Card.Body style={{padding: "0px", width:"100%", display: "flex", flexDirection:"column", justifyContent: "space-between"}}>
                    <Card.Title>
                        {nombre}
                    </Card.Title>
                    <p className='descripcion'>
                        {descripcion}
                    </p>
                    <Tags colorfondo={colorfondo} texto={texto}/>
                </Card.Body>
                </Card>
            </div>
        </>
    );
};
export default MyCard;