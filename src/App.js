import "./App.css";

function App() {
  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-3 col-lg-2">
            <div className="header__logo">
              <font>E-Store</font>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="input-group">
              <div className="input-group">
                <input type="text" className="form-control" />
              </div>
              <div className="input-group-append">
                <button className="btn btn-success">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default App;
