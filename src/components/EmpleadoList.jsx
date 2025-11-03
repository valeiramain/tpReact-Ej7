
import ListGroup from 'react-bootstrap/ListGroup';
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = () => {
    const empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
    ]

    return (

        <ListGroup className="my-5">
            {empleados.map((empleado) => (
                <EmpleadoRow key={empleado.id} empleado={empleado}></EmpleadoRow>
            ))}
        </ListGroup>

    );
};

export default EmpleadoList;