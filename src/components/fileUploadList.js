import * as React from "react";
import getFileUploadList from "../services/file-service";
import Card from "../shared/UI/Card/Card";
import _ from "lodash";
import TableComponent from "../shared/componenets/Table/tableComponent";

const FileUploadList = (props) => {
  const [data, setData] = React.useState("");
  React.useEffect(() => {
    getFileUploadList().then((response) => {
      const fileUploadList = response;
      const requiredData = fileUploadList?.fileUploadList?.map(function (row) {
        // This function defines the "mapping behaviour".
        // data from each "row" from your columns array is mapped to a
        // corresponding item in the new "options" array
        return {
          Id: row._id,
          FileName: row.filename,
          Size: row.size,
          Type: row.type,
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
    <Card>
      <TableComponent
        data-testid="myTeamTable"
        columns={createColumns(data)}
        data={flattenData(data)}
        DeleteIconreq='true'
        DownloadIconreq='true'
        EditIconreq='false'
      />
    </Card>
  );
};

export default FileUploadList;
