import { redirect } from "react-router-dom";
import fetchWithTimeOut from "./fetchfromapi";

export const getAddUserFormData = (data) => {
  let options = [];
  data.request
    .formData()
    .then((result) => {
      let userformdata = Object.fromEntries(result);
      Object.values(userformdata).forEach((value, index) => {
        if (value === "on") {
          options.push(Object.keys(userformdata)[index]);
        }
      });
      let data = {
        name: userformdata.name,
        pwd: userformdata.password,
        loginid: userformdata.loginid,
        employeeid: userformdata.employeeid,
        mobile: userformdata.mobile,
        description: userformdata.description,
        roles: options,
      };
      fetchWithTimeOut(
        "http://localhost:7000/adduser",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
        "json",
        (response, data) => {
          if (response === "error") {
            alert("Server Error Reported: ", data);
          }
          if (response === "data") {
            alert("User Added Successfully");
          }
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
  return redirect("/main");
};
