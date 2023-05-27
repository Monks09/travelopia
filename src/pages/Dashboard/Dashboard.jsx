import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import Header from "../../components/Header/Header";
import { Spinner } from "@chakra-ui/react";
import { CSVLink, CSVDownload } from "react-csv";
import api from "../../components/Api";

function Dashboard(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const csvData = [];

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [page]);

  const fetchData = async () => {
    let res = await fetch(`${api}/submissions?page=${page}`);
    res = await res.json();
    // console.log(res);
    setData(res.submissions);
    setTotalPages(res.totalPages);
    setLoading(false);
  };

  const makeCsvData = () => {
    let heads = [
      "Id",
      "Name",
      "Email address",
      "Destination",
      "Travellers count",
      "Budget per person",
    ];
    // adding heading row
    csvData.push(heads);

    // adding data rows
    data.forEach((el) => {
      let arr = [];
      arr.push(el._id);
      arr.push(el.name);
      arr.push(el.email);
      arr.push(el.destination);
      arr.push(el.no_of_travellers);
      arr.push(el.budget_per_person);

      csvData.push(arr);
    });
  };

  makeCsvData();
  //   console.log(csvData);

  return (
    <div className={styles.dashboard}>
      <Header />
      {loading && <Spinner size="xl" color="teal" />}
      {!loading && (
        <div className={styles.tableDiv}>
          <div className={styles.csvDiv}>
            <CSVLink data={csvData} filename="submissions.csv">
              Download CSV
            </CSVLink>
          </div>
          <h2>Dashboard</h2>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email address</th>
                <th>Destination</th>
                <th>Travellers Count</th>
                <th>Budget per person (in $)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((el) => {
                return (
                  <tr key={el._id}>
                    <td>{`...${el._id.substr(el._id.length - 4)}`}</td>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>{el.destination}</td>
                    <td>{el.no_of_travellers}</td>
                    <td>{el.budget_per_person}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={styles.pagination}>
            <button
              onClick={() => {
                setPage(page - 1);
              }}
              disabled={page === 1}
            >
              Prev
            </button>
            <span>{`Page ${page} of ${totalPages}`}</span>
            <button
              onClick={() => {
                setPage(page + 1);
              }}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
