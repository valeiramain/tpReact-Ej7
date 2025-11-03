
import { ListGroup, Card, Badge } from 'react-bootstrap';

const EmpleadoRow = ({ empleado }) => {
    const { department, fullName, pic, title } = { ...empleado };
    return (

        <ListGroup.Item className="bg-transparent border-0 text-center text-md-start">
            <Card>
                <div className="d-md-flex align-items-center">
                    <Card.Img variant="top" src={pic}
                        alt="persona"
                        className="rounded-circle  foto d-block mx-auto mx-md-2 me-md-3 m-2" />
                    <Card.Body>
                        <Card.Title>{fullName}</Card.Title>

                        <Card.Text>
                            {title}
                            <Badge bg="warning" className="ms-2 text-dark p-2">{department}</Badge>
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </ListGroup.Item >

    );
};

export default EmpleadoRow;
