function Theme({ toggle, onToggle }) {
  return <button onClick={onToggle}>{`${toggle}`}</button>;
}
export default Theme;
