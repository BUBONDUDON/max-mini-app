import { ROUTES } from "@/shared/model/routes";
import { href, Link } from "react-router-dom";

function PerformerListPage() {
  //Страница исполнителей для клиента
  return (
    <div>
      <Link to={href(ROUTES.PERFORMER, { performerId: "1" })}>
        Перейти к исполнителю
      </Link>
      Performer List Page
    </div>
  );
}
export const Component = PerformerListPage;
