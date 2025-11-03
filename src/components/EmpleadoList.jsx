
import ListGroup from 'react-bootstrap/ListGroup';
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = () => {
    const empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://images.pexels.com/photos/2380795/pexels-photo-2380795.jpeg" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://images.pexels.com/photos/2412691/pexels-photo-2412691.jpeg" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://images.pexels.com/photos/17300044/pexels-photo-17300044.jpeg" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://images.pexels.com/photos/3781904/pexels-photo-3781904.jpeg" },
    ]

    return (

        <ListGroup className="my-2">
            {empleados.map((empleado) => (
                <EmpleadoRow key={empleado.id} empleado={empleado}></EmpleadoRow>
            ))}
        </ListGroup>

    );
};

export default EmpleadoList;