import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "Aldo Rebelo",
    party: "(sem partido)",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Alessandro Vieira",
    party: "Cidadania",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "André Janones",
    party: "Avante",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Bolsonaro",
    party: "PL",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Ciro Gomes",
    party: "PDT",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Felipe D'Ávilla",
    party: "Novo",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "João Doria",
    party: "PSDB",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Leonardo Péricles",
    party: "UP",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Lula",
    party: "PT",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Sergio Moro",
    party: "Podemos",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Simone Tebet",
    party: "MDB",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const PreCandidatos = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Pré Candidatos - 11.mar.2022</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
          Em orderm alfabética
          </CardSubtitle>
          <i> <a href="https://www.poder360.com.br/eleicoes/conheca-os-12-pre-candidatos-a-presidencia-da-republica-em-2022/">Fonte: Poder 360</a></i>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Candidato</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.party}</span>
                      </div>
                    </div>
                  </td>               
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default PreCandidatos;
