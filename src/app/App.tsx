import { Layout } from "components/layout";
import { init } from "services/init";

export const App = () => {
  init();
  return (
    <div className="container max-w-5xl flex flex-col overflow-hidden">
      <Layout />
    </div>
  );
};
