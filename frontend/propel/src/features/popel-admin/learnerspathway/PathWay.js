import React from "react";
import classes from "./PathWay.module.css";

const PathWay = ({ pathway }) => {
  return (
    <div style={{ minWidth: "500px", overflowX: "auto" }}>
      <table className={classes.tableContainer}>
        <tr style={{ backgroundColor: "rgb(249, 249, 249)" }}>
          <th className={classes.tableDataHeader}>Name</th>
          <th className={classes.tableDataHeader}>Descrption</th>
          <th className={classes.tableDataHeader}> Courses</th>
          <th className={classes.tableDataHeader}>Actions</th>
        </tr>
        {pathway?.map((path) => {
          return (
            <tr>
              <td className={classes.tableData}>{path?.name}</td>
              <td className={classes.tableData}>{path?.descrption}</td>
              <td className={classes.tableData}>{path?.courses}</td>
              <td className={classes.tableData}>
                <span
                  style={{ fontSize: "38px",cursor:'pointer' }}
                  class="material-symbols-outlined">
                  more_horiz
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default PathWay;
