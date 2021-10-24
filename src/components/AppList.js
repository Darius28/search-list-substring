import React, { useContext } from "react";
import { Context } from "../context/index";

export default function AppList() {
  const { state } = useContext(Context);
  return (
    <div className="tables-container">
      <div>
        <h2>Total List</h2>
        <hr />
        <table>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Item</th>
            </tr>
          </thead>
          {state.LIST_OF_ITEMS.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div>
        <h2>Matching List</h2>
        <hr />
        {state.matchingItems.length === 0 || state.sTerm.length === 0 ? (
          <h2>No Matching Items Found</h2>
        ) : (
          <table className="result-table">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Item</th>
              </tr>
            </thead>
            {state.matchingItems.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                </tr>
              );
            })}
          </table>
        )}
      </div>
    </div>
  );
}
