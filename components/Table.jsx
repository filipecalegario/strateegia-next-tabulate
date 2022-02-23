import dynamic from "next/dynamic";
import { dummyData } from "../data/dummyData";
import { consolidadedUsers } from "../data/consolidatedData";

export default function Table() {
  
  let simplifiedData_ = consolidadedUsers.links.map(link => {
        
    return {
      source: link.source.id,
      target: link.target.id,
    }});

  console.log(simplifiedData);

  return (
    <div>
      <table className="table-fixed mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Autor</th>
            <th>Questão</th>
            <th>Resposta</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item, index) => (
            <tr key={index}>
              <td>{item.Id}</td>
              <td>{item.Autor}</td>
              <td>{item.Questão}</td>
              <td>{item.Resposta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
