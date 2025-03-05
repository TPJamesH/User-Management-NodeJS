//Destructured directly from function parameter
import { Card, Text } from 'rsuite';
const HeadlessCard = ({ header, body, footer, width, headerSize,bodyStyle}) => {
    return (
        <Card width={width} shaded>
            <Card.Header as={headerSize}> {header} </Card.Header>
            <Card.Body style = {bodyStyle}>
                {body}
            </Card.Body>
            <Card.Footer>
                <Text muted> {footer}  </Text>
            </Card.Footer>
        </Card>
    )
}

export default HeadlessCard
