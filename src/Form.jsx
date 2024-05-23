const Form = ({
  name,
  description,
  onNameChange,
  onDescriptionChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onNameChange}
        />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={onDescriptionChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
