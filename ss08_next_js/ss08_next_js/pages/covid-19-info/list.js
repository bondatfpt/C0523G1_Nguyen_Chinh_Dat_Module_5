import axios from "axios";

export default function Covid19InfoList({ covid19infoList }) {
    console.log(covid19infoList);
  return (
    <div>
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Active</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deaths</th>
          </tr>
        </thead>
        <tbody>
          {covid19infoList.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.confirmed}</td>
                <td>{item.active}</td>
                <td>{item.recovered}</td>
                <td>{item.deaths}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export const getStaticProps = async () => {
  const respone = await axios.get("http://localhost:3001/covid19info");
  return {
    props: {
      covid19infoList: respone.data,
    },
  };
};
