export default function Footer() {
  return (
    <footer>
      <div className="container flex">
        <small className="custom_icon__wrap">
          Made with React{' '}
          <span className="material-icons custom_icon">code</span>
        </small>

        <a
          href="https://github.com/Rostyk27/todo-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <small className="custom_icon__wrap">
            Source code
            <span className="material-icons custom_icon">data_array</span>
          </small>
        </a>
      </div>
    </footer>
  );
}
