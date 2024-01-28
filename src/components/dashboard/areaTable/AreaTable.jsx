import AreaTableAction from "./AreaTableAction";
import "./AreaTable.scss";

const TABLE_HEADS = [
  "Products",
  "Order ID",
  "Date",
  "Cutomer name",
  "Status",
  "Amount",
  "Action",
];

const TABLE_DATA = [
  {
    id: 1,
    name: "Iphone 13 Pro",
    order_id: 11234,
    date: "Jun 29, 2022",
    customer: "Fandi Aziz Pratama",
    status: "delivered",
    amout: 400,
  },
  {
    id: 2,
    name: "Iphone 13 Pro",
    order_id: 11234,
    date: "Jun 29, 2022",
    customer: "Fandi Aziz Pratama",
    status: "delivered",
    amout: 400,
  },
  {
    id: 3,
    name: "Iphone 13 Pro",
    order_id: 11234,
    date: "Jun 29, 2022",
    customer: "Fandi Aziz Pratama",
    status: "delivered",
    amout: 400,
  },
  {
    id: 4,
    name: "Iphone 13 Pro",
    order_id: 11234,
    date: "Jun 29, 2022",
    customer: "Fandi Aziz Pratama",
    status: "delivered",
    amout: 400,
  },
  {
    id: 5,
    name: "Iphone 13 Pro",
    order_id: 11234,
    date: "Jun 29, 2022",
    customer: "Fandi Aziz Pratama",
    status: "delivered",
    amout: 400,
  },
  {
    id: 6,
    name: "Iphone 13 Pro",
    order_id: 11234,
    date: "Jun 29, 2022",
    customer: "Fandi Aziz Pratama",
    status: "delivered",
    amout: 400,
  },
];

const AreaTable = () => {
  return (
    <section className="content-area-table">
      <div className="date-table-info">
        <h4 className="data-table-title">Latest Orders</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_DATA?.map((dataItem) => {
              return (
                <tr key={dataItem.id}>
                  <td>{dataItem.name}</td>
                  <td>{dataItem.order_id}</td>
                  <td>{dataItem.date}</td>
                  <td>{dataItem.customer}</td>
                  <td>
                    <div className="dt-status">
                      <span
                        className={`dt-status-dot dot-${dataItem.status}`}
                      ></span>
                      <span className={`dt-status-text`}>
                        {dataItem.status}
                      </span>
                    </div>
                  </td>
                  <td>${dataItem.amout.toFixed(2)}</td>
                  <td className="dt-cell-action">
                    <AreaTableAction />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AreaTable;
