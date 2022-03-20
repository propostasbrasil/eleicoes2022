import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const Calendar = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Calendário</CardTitle>
        <CardSubtitle className="text-muted" tag="h6">
          Principais datas - Eleições 2022
        </CardSubtitle>
        <div>
            <iframe width={800} height ={600} src={"data:text/html,"+encodeURIComponent('<iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&showNav=1&showCalendars=1&mode=AGENDA&src=amJzZDdkNnUwbmtzZWN2YTVnZWN2b2c1b2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Y2tjaDI0OTkydWZjaWpqdmdlNjU4NmRkbjJnZ2phdnJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23D81B60&color=%239E69AF" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>')}/>
        </div>
      </CardBody>
    </Card>
  );
};

export default Calendar;