import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { FormPerson } from './Form.styled';
import Grid from '@mui/material/Grid';
import propTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// import { useAddContactMutation } from 'server/fetchContacts';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const [updatePost] = useAddContactMutation()

  // цикл первой загрузки компонента
  useEffect(() => {
    const lwrite = localStorage.getItem('write');
    if (lwrite) {
      const write = JSON.parse(lwrite);
      setName(write.name);
      setNumber(write.number);
    }
  }, []);

  // после обновления стейта сохраним локально вводимые значения
  useEffect(() => {
    localStorage.setItem('write', JSON.stringify({ name, number }));
  }, [name, number]);

  //генерируем необходимые ключи
  const idName = nanoid();
  const idTel = nanoid();

  // универсальный метод для инпутов
  const onCangeInpute = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  //внутрений метод сабмита обрабатывающий событие
  const formSubmit = event => {
    event.preventDefault();
    // updatePost({ name, number });
    reset();
  };

  // очистка формы
  const reset = () => {
    setName('');
    setNumber('');
    // тут же нам необходимо очистить локалку чтоб вводимые ранее значения не всплыли вновь
    localStorage.removeItem('write');
  };

  return (
    <FormPerson action="" onSubmit={formSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            id={idName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            fullWidth
            onChange={onCangeInpute}
            value={name}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Telephon"
            id={idTel}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onCangeInpute}
          />
        </Grid>
      </Grid>
      <Button variant="contained" fullWidth sx={{ mt: 3, mb: 2 }} type="submit">
        Save
      </Button>
    </FormPerson>
  );
};

Form.propTypes = { chengeSabmit: propTypes.func };