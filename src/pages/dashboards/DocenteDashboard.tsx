import DocenteDashboard from "@/components/dashboard/docenteDashBoard/DocenteDashBoard";
import DefaultLayout from "@/layouts/default";

const DocsPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-4xl">
          <DocenteDashboard />
        </div>
      </section>
    </DefaultLayout>
  );
};

export default DocsPage;
