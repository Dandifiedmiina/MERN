import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const GetData = () => {
  fetch("https://restapimiina.herokuapp.com/api/getall")
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      console.log(data);
      const items = data;
      ReactDOM.render(
        <CompanyArray data={items} />,
        document.getElementById("root")
      );
    });
  return <div>Nothing here. Fething data...</div>;
};

const CompanyArray = (props) => {
  const { data } = props;

  return (
    <div>
      <SearchBar />
      <table className="table table-striped table-bordered">
        <thead>
          <tr key={props.id}>
            <th scope="col">Name</th>
            <th scope="col">Homepage</th>
            <th scope="col">overview</th>
            <th scope="col">Temperature</th>
            <th scope="col">Updated:</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr>
              <td key={i}> {item.name}</td>
              <td> {item.homepage_url} </td>
              <td> {item.overview} </td>
              <td> {item.updated_at}</td>
              {}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const SearchBar = () => {
  // Määritellään käsittelija napille 1
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Tapahtuman aiheutti: ", event.target);
    var form = event.target;
    console.log("Hakusana: ", form.query.value);
  };

  // Määritellään käsittelija napille 2
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Tapahtuman aiheutti: ", event.target);
    GetData();
  };
  // Komponentin palauttama JSX muotoinen esitys
  return (
    <div>
      <h1>Search for a company</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Hae kaikki
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
