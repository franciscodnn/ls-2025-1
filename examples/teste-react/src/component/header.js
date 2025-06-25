// export default function Header(props) {
export default function Header({ title, attr, tipoUsuario}){
  console.log(title);
  console.log(attr);
  console.log(tipoUsuario);

  return (
    <header>
      <h1>
        { title }
      </h1>
    </header>
  );
}