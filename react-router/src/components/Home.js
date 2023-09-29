import Card from 'react-bootstrap/Card';

export default function Home () {
    return(
        <div className="homepage">
            <Card border="dark">
                <Card.Body>
                    <Card.Title>Home</Card.Title>
                    <hr />
                    <Card.Text>
                        Visit our resort and change your life!
                    </Card.Text>
                    <Card.Text>
                        Grand opening in StressVille, Texas
                    </Card.Text>
                    <Card.Text>
                        Check out our wide array of packages and offers!
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )

}