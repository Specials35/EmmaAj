import React from 'react';
import { Card } from 'react-bootstrap';

const AppCard = () => {
    return (
        <div className="d-flex justify-content-center">
            <Card style={{width: '18rem', backgroundColor: 'blue', color: 'white'}}>
                <Card.Body>
                    <Card.Title>Card 1</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{width: '18rem', backgroundColor: 'red', color: 'white'}}>
                <Card.Body>
                    <Card.Title>Card 2</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{width: '18rem', backgroundColor: 'green', color: 'white'}}>
                <Card.Body>
                    <Card.Title>Card 3</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AppCard;