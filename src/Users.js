import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CSVLink, CSVDownload } from "react-csv";


function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setUsers(null);
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);
  
  if (loading) return <div>Loading..</div>;
  if (error) return <div>error</div>;
  if (!users) return null;
  return (
    <div>
        <div>-[알고리즘] 미리보기-</div>
        <table id="dataTable" border="1">
            <tr>
                <th scope="col" class="graph">ID</th>
                <th scope="col" class="graph">NAME</th>
                <th scope="col" class="graph">TEL</th>
                <th scope="col" class="graph">SEX</th>
                <th scope="col" class="graph">WEIGHT</th>
                <th scope="col" class="graph">HEIGHT</th>
                <th scope="col" class="graph">ADDRESS</th>
            </tr>
              {users.map(user => (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.phone} </td>
                  <td>{user.website} </td>
                  <td>{user.address.street} </td>
                </tr>
              ))}
          </table>
          <form name="download_category" action="" method="get">
            <div>
                <input type="radio" id="contactChoice1" name="contact" value="EXL"/>
                <label for="contactChoice1">EXL</label>

                <input type="radio" id="contactChoice2" name="contact" value="PDF"/>
                <label for="contactChoice2">PDF</label>

                <input type="radio" id="contactChoice3" name="contact" value="CSV"/>
                <label for="contactChoice3">CSV</label>

                <input type="radio" id="contactChoice4" name="contact" value="HWP"/>
                <label for="contactChoice4">HWP</label>
            </div>
            </form>
            <CSVLink 
                    data={users}
                    filename={"비식별화.csv"}
                    className="btn btn-primary"
                    target="_blank"
                ><button>EXL</button>
            </CSVLink>
    </div>
  );
}


export default Users;