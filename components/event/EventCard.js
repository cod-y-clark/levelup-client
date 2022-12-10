import PropTypes from 'prop-types';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { deleteEvent, joinEvent, leaveEvent } from '../../utils/data/eventData';

function EventCard({
  game, description, date, time, id, onUpdate, joined, uid,
}) {
  const [year, month, day] = date.split('-');
  const newDate = [month, day, year].join('/');

  const deleteThisEvent = () => {
    if (window.confirm(`delete ${description}?`)) {
      deleteEvent(id).then(() => onUpdate());
    }
  };

  const joinThisEvent = () => {
    joinEvent(id, uid).then(() => onUpdate());
  };

  const leaveThisEvent = () => {
    leaveEvent(id, uid).then(() => onUpdate());
  };

  return (
    <Card className="text-center">
      <Card.Header>{game.title}</Card.Header>
      <Card.Body>
        <Card.Title>{newDate} @ {time}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Footer><Button onClick={deleteThisEvent}>Delete Event</Button>{
          joined ? <Button onClick={leaveThisEvent}>Leave</Button> : <Button onClick={joinThisEvent}>Join</Button>
        }
        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

EventCard.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    maker: PropTypes.string,
    gamer: PropTypes.number,
    number_of_players: PropTypes.number,
    skill_level: PropTypes.number,
  }).isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  organizer: PropTypes.shape({
    id: PropTypes.number,
    uid: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
  id: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
  joined: PropTypes.bool.isRequired,
  uid: PropTypes.string.isRequired,
};

export default EventCard;
