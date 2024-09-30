import './App.css';

function App() {
  return (
    <div className="site">
      <header className='cabecalho'>
        <nav className='container navbar navbar-expand'>
          <div>
            <span className='navbar-brand'>Logo</span>
            </div>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link menu_link' href="">Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link menu_link' href="">Sobre Nós</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link menu_link' href="">Contato</a>
            </li>
            </ul>
        </nav>
      </header>
      <main>
        <div className='conteudo mt-3 container'>
          <div className='row'>
            <div className='conteudos col-10'>
              <h2>Produtos</h2>
              <div className='container produto p-3'>
                <h3>Batom</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repudiandae sit quia laborum voluptatem dignissimos ipsam fugit illo minima sequi facilis. 
                  Quos ut vero dolorem atque itaque. 
                  Voluptas dolorem esse velit.
                </p>
                <button className='btn btn-warning me-3'>Favoritar</button>
                <button className='btn btn-success'>Comprar</button>
              </div>
              <div className='container produto p-3'>
                <h3>Sombra</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Repudiandae sit quia laborum voluptatem dignissimos ipsam fugit illo minima sequi facilis. 
                  Quos ut vero dolorem atque itaque. 
                  Voluptas dolorem esse velit.
                </p>
                <button className='btn btn-warning me-3'>Favoritar</button>
                <button className='btn btn-success'>Comprar</button>
              </div>
            </div>
              <aside className='col-2'>
                <h4>Perfumaria</h4>
                <ol className='list-group list-group-numbered'>
                  <li className='list-group-item'>Sabonetes<span className='badge text-bg-primary rounded-pill'>8</span></li>
                  <li className='list-group-item'>Colonia</li>
                  <li className='list-group-item'>Vala</li>
                  <li className='list-group-item'>Bady Splash</li>
                </ol>
              </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
