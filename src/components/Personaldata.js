import { Link} from 'react-router-dom';
function Perconaldata(){
    return(
        <form>
            <div>
             <label>ФИО</label>
            <input className="form" type="text" name="fio"/>
            </div>
            <div>
             <label>Email</label>
            <input className="form" type="text" name="email"/>
            </div>
            <div>
            <label>Пароль</label>
              <input className="form" type="text" name="password"/>
            </div>
            <div>
            <label>Телефон</label>
              <input className="form" type="text" name="phone"/>
            </div>
            <div >
            <Link to="/user"><button className="save">Сохранить изменения</button></Link>
            </div>
            </form>
    );
}

export default Perconaldata;