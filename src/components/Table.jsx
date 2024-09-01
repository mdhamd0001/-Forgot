import React, { memo, link } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { RiEditCircleFill } from "react-icons/ri";
import axios from 'axios';

function Table({ userdata, setuserdata, setform }) {
  const handleCopy = (pass) => {
    navigator.clipboard.writeText(pass).then(() => {
      alert("Password copied to clipboard");
    });
  };

  const handleEdit = async (e) => {
    let index = userdata.findIndex((task) => task.id === e);
    setform(userdata[index]);
    await axios.delete(`http://localhost:3000/${e}`)
    
    setuserdata(newdata);

    console.log(userdata);
  };

  const dlt = async(id) => {
    let confm = confirm("❗❗Are you Sure❗❗");
    
    if (confm) {
       await axios.delete(`http://localhost:3000/${id}`)
       
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                <thead className=" border-neutral-200 font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      #
                    </th>
                    <th scope="col" className="px-6 py-4">
                      URL
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Username
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Password
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userdata.map((e, index) => {
                    return (
                      <tr
                        key={e.id}
                        className="border-b border-neutral-200 dark:border-white/10"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <a href={e.url}>
                            {e.url && e.url.substring(0, 7)}...
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {e.username}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          ****
                          <button
                            onClick={() => handleCopy(e.pass)}
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                          >
                            Copy
                          </button>
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <button
                            onClick={() => handleEdit(e.id)}
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                          >
                            <RiEditCircleFill />
                          </button>
                          <button
                            onClick={() => dlt(e.id)}
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                          >
                            <MdDeleteOutline />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="text-center w-full">
                {userdata.length === 0 && "Storage is Empty"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
