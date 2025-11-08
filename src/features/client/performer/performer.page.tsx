import { ROUTES, type PathParams } from "@/shared/model/routes";
import { useNavigate, useParams } from "react-router-dom";

function PerformerPage() {
  //Страница исполнителя для клиента
  const params = useParams<PathParams[typeof ROUTES.PERFORMER]>();
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(ROUTES.PERFORMERS)}>Back</button>
      Performer Page {params.performerId}
    </div>
  );
}
export const Component = PerformerPage;
