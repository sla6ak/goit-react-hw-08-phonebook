import { useEffect, useState } from 'react';
import { DataNew } from './BoxFooter.styled';

export function BoxFooter(props) {
  const [date, setDate] = useState('2022');
  const dataNow = new Date();
  const dateString =
    dataNow.getFullYear() +
    ' year - ' +
    (dataNow.getMonth() + 1) +
    ' month - ' +
    dataNow.getDate() +
    ' day';

  useEffect(() => {
    setDate(dateString.toString());
  }, [dateString]);

  return (
    <DataNew>
      Made in_<b>Kriviy Rig</b>_ Data today : {date}
    </DataNew>
  );
}
