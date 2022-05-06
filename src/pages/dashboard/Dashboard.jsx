import "./dashboard.scss";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgress } from "@mui/material";
import file from "../../file/file.xlsx";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="main-container">
          <div className="main-container--raw">
            <div className="main-container--raw-heading">
              <h5>Raw Data (FastQ)</h5>
            </div>
            <table className="main-container--raw-table">
              <tr className="main-container--raw-table-row">
                <th className="main-container--raw-table-row-head">Status</th>
                <th className="main-container--raw-table-row-head">
                  Data Pool Name
                </th>
                <th className="main-container--raw-table-row-head">
                  Update Date
                </th>
                <th className="main-container--raw-table-row-head">
                  # Samples
                </th>
                <th className="main-container--raw-table-row-head">Owner</th>
                <th className="main-container--raw-table-row-head">Marker</th>
                <th className="main-container--raw-table-row-head">Primer</th>
                <th className="main-container--raw-table-row-head">Metadata</th>
                <th className="main-container--raw-table-row-head">File</th>
                <th className="main-container--raw-table-row-head"></th>
              </tr>
              <tr className="main-container--raw-table-row">
                <td className="main-container--raw-table-row-data">
                  <InsertChartIcon className="yellow" />
                </td>
                <td className="main-container--raw-table-row-data">
                  Cornfield analysis - Bavaria
                </td>
                <td className="main-container--raw-table-row-data">
                  2021-06-15
                </td>
                <td className="main-container--raw-table-row-data">56</td>
                <td className="main-container--raw-table-row-data">
                  Beta User
                </td>
                <td className="main-container--raw-table-row-data">
                  Fungal ITS2
                </td>
                <td className="main-container--raw-table-row-data">
                  <CheckIcon />
                </td>
                <td className="main-container--raw-table-row-data">
                  <CircularProgress
                    variant="determinate"
                    value={50}
                    className="progress"
                  />
                </td>
                <td className="main-container--raw-table-row-data">
                  <a href={file} download="File">
                    Download File
                  </a>
                </td>
                <td className="main-container--raw-table-row-data">
                  <MoreVertIcon />
                </td>
              </tr>
              <tr className="main-container--raw-table-row">
                <td className="main-container--raw-table-row-data">
                  <InsertChartIcon />
                </td>
                <td className="main-container--raw-table-row-data">
                  Lighttrap - IV
                </td>
                <td className="main-container--raw-table-row-data">
                  2021-08-17
                </td>
                <td className="main-container--raw-table-row-data">33</td>
                <td className="main-container--raw-table-row-data">
                  Beta User
                </td>
                <td className="main-container--raw-table-row-data">
                  Animal CO1
                </td>
                <td className="main-container--raw-table-row-data">
                  <CloseIcon />
                </td>
                <td className="main-container--raw-table-row-data">
                  <CircularProgress
                    variant="determinate"
                    value={75}
                    className="progress"
                  />
                </td>
                <td className="main-container--raw-table-row-data">
                  <a href={file} download="File">
                    Download File
                  </a>
                </td>
                <td className="main-container--raw-table-row-data">
                  <MoreVertIcon />
                </td>
              </tr>
              <tr className="main-container--raw-table-row">
                <td className="main-container--raw-table-row-data">
                  <InsertChartIcon className="blue" />
                </td>
                <td className="main-container--raw-table-row-data">
                  Pollen (Flowering Strip)
                </td>
                <td className="main-container--raw-table-row-data">
                  2021-07-21
                </td>
                <td className="main-container--raw-table-row-data">125</td>
                <td className="main-container--raw-table-row-data">
                  Colleague A
                </td>
                <td className="main-container--raw-table-row-data">
                  Plant ITS2
                </td>
                <td className="main-container--raw-table-row-data">
                  <CheckIcon />
                </td>
                <td className="main-container--raw-table-row-data">
                  <CircularProgress
                    variant="determinate"
                    value={100}
                    className="progress"
                  />
                </td>
                <td className="main-container--raw-table-row-data">
                  <a href={file} download="File">
                    Download File
                  </a>
                </td>
                <td className="main-container--raw-table-row-data">
                  <MoreVertIcon />
                </td>
              </tr>
            </table>
          </div>
          <div className="main-container--processed">
            <div className="main-container--processed-heading">
              <h5>Processed Data (OTU)</h5>
            </div>
            <table className="main-container--processed-table">
              <tr className="main-container--processed-table-row">
                <th className="main-container--processed-table-row-head">
                  Status
                </th>
                <th className="main-container--processed-table-row-head">
                  Data Pool Name
                </th>
                <th className="main-container--processed-table-row-head">
                  Update Date
                </th>
                <th className="main-container--processed-table-row-head">
                  # Samples
                </th>
                <th className="main-container--processed-table-row-head">
                  Owner
                </th>
                <th className="main-container--processed-table-row-head">
                  Marker
                </th>
                <th className="main-container--processed-table-row-head"></th>
                <th className="main-container--processed-table-row-head">
                  Metadata
                </th>
                <th className="main-container--processed-table-row-head">
                  File
                </th>
                <th className="main-container--processed-table-row-head"></th>
              </tr>
              <tr className="main-container--processed-table-row">
                <td className="main-container--processed-table-row-data">
                  <InsertChartIcon className="yellow" />
                </td>
                <td className="main-container--processed-table-row-data">
                  Forest Fringe South
                </td>
                <td className="main-container--processed-table-row-data">
                  2020-03-29
                </td>
                <td className="main-container--processed-table-row-data">73</td>
                <td className="main-container--processed-table-row-data">
                  Colleague B
                </td>
                <td className="main-container--processed-table-row-data">
                  Animal CO1
                </td>
                <td className="main-container--processed-table-row-data"></td>
                <td className="main-container--processed-table-row-data">
                  <CircularProgress
                    variant="determinate"
                    value={100}
                    className="progress"
                  />
                </td>
                <td className="main-container--processed-table-row-data">
                  <a href={file} download="File">
                    Download File
                  </a>
                </td>
                <td className="main-container--processed-table-row-data">
                  <MoreVertIcon />
                </td>
              </tr>
              <tr className="main-container--processed-table-row">
                <td className="main-container--processed-table-row-data">
                  <InsertChartIcon />
                </td>
                <td className="main-container--processed-table-row-data">
                  Sediment Sample
                </td>
                <td className="main-container--processed-table-row-data">
                  2019-07-16
                </td>
                <td className="main-container--processed-table-row-data">16</td>
                <td className="main-container--processed-table-row-data">
                  Colleague C
                </td>
                <td className="main-container--processed-table-row-data">
                  Bacteria 16s
                </td>
                <td className="main-container--processed-table-row-data"></td>
                <td className="main-container--processed-table-row-data">
                  <CircularProgress
                    variant="determinate"
                    value={25}
                    className="progress"
                  />
                </td>
                <td className="main-container--processed-table-row-data">
                  <a href={file} download="File">
                    Download File
                  </a>
                </td>
                <td className="main-container--processed-table-row-data">
                  <MoreVertIcon />
                </td>
              </tr>
              <tr className="main-container--processed-table-row">
                <td className="main-container--processed-table-row-data">
                  <InsertChartIcon className="blue" />
                </td>
                <td className="main-container--processed-table-row-data">
                  Bat Feces
                </td>
                <td className="main-container--processed-table-row-data">
                  2020-09-11
                </td>
                <td className="main-container--processed-table-row-data">41</td>
                <td className="main-container--processed-table-row-data">
                  Colleague A
                </td>
                <td className="main-container--processed-table-row-data">
                  Plant ITS2
                </td>
                <td className="main-container--processed-table-row-data"></td>
                <td className="main-container--processed-table-row-data">
                  <CircularProgress
                    variant="determinate"
                    value={75}
                    className="progress"
                  />
                </td>
                <td className="main-container--processed-table-row-data">
                  <a href={file} download="File">
                    Download File
                  </a>
                </td>
                <td className="main-container--processed-table-row-data">
                  <MoreVertIcon />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
