import { Link, Route, Routes} from 'react-router-dom';


function Header_2 () {
    return(
      <header>
      <div className="headerLeft">
        <img width={61} height={75} src="/img/logo.png"/>
      </div>
      <div className="headerRight">
      <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/about">О нас</Link>
            </li>
            <li>
              <Link to="/users">Тарифы</Link>
            </li>
          </ul>

        <Link to="/user">
        <div className='nik'>
            <img src='/img/user.png'></img>
            <h4>Кирилл</h4>
            </div>
        </Link>
      </div>
    </header>

    );
}

export { Header_2 };