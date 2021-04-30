import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from "react-bootstrap";

const CompanyArray = (props) => {
  const { data } = props;

  return (
    <div className="resultstabl2">
      <SearchBar />
      <Table striped responsive="sm" hover>
        <thead class="thead-dark">
          <tr key={props.id}>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Homepage</th>
            <th scope="col">Founded</th>
            <th scope="col">Updated:</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr>
              <th scope="row"></th>
              <td key={i}> {item.name}</td>
              <td> {item.homepage_url} </td>
              <td> {item.founded_day}/{item.founded_month}/{item.founded_year}  </td>
              <td> email: {item.email_address}, phone: {item.phone_number} </td>
              {}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};


const SearchBar = () => {


  const [query, setQuery] = useState('')
  // Määritellään käsittelija napille 1
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Tapahtuman aiheutti: ", event.target);
    console.log("Hakusana: ", query);
    GetCompanyInfo();
  };

  // Määritellään käsittelija napille 2
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Tapahtuman aiheutti: ", event.target);
    GetData();
  };
  
  const [results, setResults] = useState([])

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


const GetCompanyInfo = () => {
  fetch("https://restapimiina.herokuapp.com/name/" + query )
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      console.log("Haettu", data);
      const items = data;
      console.log("Company:", data);

      setResults(items)
    });
};
  
  // Komponentin palauttama JSX muotoinen esitys
   return (
        <form onSubmit={handleSubmit}>
         
          <div className="form-group">
            <h1>Search for a company</h1>
            <label>Hae: </label>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="form-control"
              placeholder="ex. Technorati"
              name="query"
            />
          </div>
          <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Hae kaikki
            </button>
            </div>
              <CompanyArray data={results} />
            </div>
          
          </form>
    );
  };
export default SearchBar;
