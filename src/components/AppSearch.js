import React, { useContext } from "react";
import { Context } from "../context/index";

export default function AppSearch() {
  const { dispatch } = useContext(Context);
  const onChangeHandler = (e) => {
    dispatch({
      type: "USER_ENTRY",
      payload: e.target.value,
    });
  };
  return <input type="text" name="searchKey" onChange={onChangeHandler} />;
}
