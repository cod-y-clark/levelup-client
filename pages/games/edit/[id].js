import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import GameForm from '../../../components/game/GameForm';
import { getSingleGame } from '../../../utils/data/gameData';
import { useAuth } from '../../../utils/context/authContext';

export default function EditGame() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { user } = useAuth();

  const { id } = router.query;

  useEffect(() => {
    console.warn(id);
    getSingleGame(id).then(setEditItem);
  }, [id]);

  return (<GameForm user={user} obj={editItem} />);
}
