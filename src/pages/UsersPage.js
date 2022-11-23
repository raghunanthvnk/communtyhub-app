import * as React from "react";
import { getUsersList } from "../services/user-service";
import Card from "../shared/UI/Card/Card";
import _ from "lodash";
import TableComponent from "../shared/componenets/Table/tableComponent";
import CustomButton from "../shared/UI/CustomButton/CustomButton";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { PRIMARY } from "../shared/styles";
const UsersPage = (props) => {
  const [data, setData] = React.useState("");
  const CreateHandler = (e) => {
  };
  React.useEffect(() => {
    getUsersList().then((response) => {
      const usersList = response;
      const requiredData = usersList?.userList?.map(function (row) {
        // This function defines the "mapping behaviour".
        // data from each "row" from your columns array is mapped to a
        // corresponding item in the new "options" array
        return {
          id: row._id,
          Image: row.image,
          FirstName: row.first_name,
          LastName: row.last_name,
          Email: row.email,
          UserName: row.username,
          IsActive: row.isactive,
        };
      });
      setData(requiredData);
    });
  }, []);
  const flattenData = (data) => {
    if (data) {
      _.forEach(data, (_item, key) => {
        _item.IsActive = _item?.IsActive?.toString();
      });
    }
    return data;
  };
  const createColumns = (data) => {
    let resData = [];
    if (data) {
      _.forEach(data, (_item, key) => {
        Object.keys(_item).forEach(function (k) {
          const isColumnExist = _.some(resData, (item) => item.accessor === k);
          if (!isColumnExist) {
            let table_obj = {};
            table_obj["Header"] = table_obj["accessor"] = k;
            resData.push(table_obj);
          }
        });
      });
      if (resData.length === 1) {
        resData.push({
          Header: "",
          accessor: "NoData",
        });
      } else {
        resData.push({
          Header: "Actions",
          accessor: "",
        });
      }
    }

    return resData;
  };
  return (
    <React.Fragment>
      <Card>
      <CustomButton
        data-testid="add-user"
        label="Add User"
        variant="contained"
        color={PRIMARY[100]}
        style={{
          float: "left",
        }}
        startIcon={<ControlPointIcon style={{ height: 14, width: 14 }} />}
        onClick={() => CreateHandler()}
      /> 
      <div style={{ marginTop: "50px" }}></div>

        <TableComponent
          data-testid="myusersTable"
          columns={createColumns(data)}
          data={flattenData(data)}
          DeleteIconreq="true"
          DownloadIconreq="false"
          EditIconreq="true"
        />
      </Card>
    
    </React.Fragment>
  );
};

export default UsersPage;
