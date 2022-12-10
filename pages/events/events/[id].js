import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EventForm from '../../../components/event/EventForm';
import { getSingleEvent } from '../../../utils/data/eventData';
import { useAuth } from '../../../utils/context/authContext';

export default function EditGame() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { user } = useAuth();

  const { id } = router.query;

  useEffect(() => {
    getSingleEvent(id).then(setEditItem);
  }, [id]);

  return (<EventForm user={user} obj={editItem} />);
}
