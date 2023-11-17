// Importo el Badge
import Badge from 'react-bootstrap/Badge';

const Tags = ({colorfondo, texto}) => { 
    return(
       <>
            <Badge bg={colorfondo}  style={{ width: "100%" }}>{texto}</Badge>
       </>
    );
}

export default Tags;