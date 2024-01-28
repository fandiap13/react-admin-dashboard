const data = [
  {
    id: 1,
    name: "Joni",
    percentValue: 24,
  },
  {
    id: 2,
    name: "Jono",
    percentValue: 13,
  },
  {
    id: 3,
    name: "Bagogo",
    percentValue: 98,
  },
  {
    id: 4,
    name: "Bagaga",
    percentValue: 39,
  },
  {
    id: 5,
    name: "Bagigi",
    percentValue: 48,
  },
  {
    id: 6,
    name: "Bagege",
    percentValue: 38,
  },
  {
    id: 7,
    name: "Tom",
    percentValue: 43,
  },
];

const AreaProgressChart = () => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Most Sold Item</h4>
      </div>
      <div className="progress-bar-lsit">
        {data?.map((progressBar) => {
          return (
            <div className="progress-bar-item" key={progressBar.id}>
              <div className="bar-item-info">
                <p className="bar-item-info-name">{progressBar.name}</p>
                <p className="bar-item-info-value">
                  {progressBar.percentValue}
                </p>
              </div>
              <div className="bar-item-full">
                <div
                  className="bar-item-filled"
                  style={{
                    width: `${progressBar.percentValue}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreaProgressChart;
