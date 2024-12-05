import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';

function ReadForm() {

    const [userData,setUserData] = useState([]);

    useEffect( ()=>{
        getUserData();
      });

      const navigate = useNavigate()

      const getUserData = async () => {
        const response = await axios.get('https://6746d44b38c8741641d451f9.mockapi.io/user')
        setUserData(response.data);
       }
     
      async function deleteUserData(id) {
        const response = await axios.delete("https://6746d44b38c8741641d451f9.mockapi.io/user/"+id);
        getUserData();
      };

      function gotoUpdatePage(userid) {
        navigate('/update/' + userid)
      }

  return (
    <div>
        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>CITY</th>
            <th>PHONE</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
           {
              userData.map((value)=>{
                return (
                  <tr key={value.id}>
                     <td>{value.id}</td>
                     <td>{value.username}</td>
                     <td>{value.email}</td>
                     <td>{value.city}</td>
                     <td>{value.phone}</td>
                     <button type="button" onClick={()=>deleteUserData(value.id)}>Delete</button>
                     <button type='button' onClick={()=>gotoUpdatePage(value.id)}>Update</button>
                  </tr>
                )
              })
           }
        </tbody>
      </table>
    </div>
  )
}

export default ReadForm;