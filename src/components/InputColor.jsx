export const InputColor = ({ onChange, }) => {
  return (
    <input
      autoFocus
      className="form-control inputColor"
      type="text"
      placeholder="Introduzca nombre del color en inglès"
      onChange={onChange}
    />
  );
};
