import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Packages(props) {

    return (
        <div className="packages">
            <Card border="dark">
                <Card.Body>
                    <Card.Title>Our Packages</Card.Title>
                    <hr />
                    <ListGroup>
                        {props.packages.map((pckg, index) => <ListGroup.Item key={index}>{pckg}</ListGroup.Item>)}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}