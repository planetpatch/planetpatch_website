import PageHero from "@/components/ui/PageHero";

export default function Contact() {
  return (
    <>
      <PageHero
        badge="GET IN TOUCH"
        title="Contact Us"
        description="Reach out to us with your questions, ideas, or partnership opportunities."
      />

      <section className="py-16 md:py-20 bg-white dark:bg-slate-900">

        <div className="text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400"> Feel free to reach out at <a href="mailto:contact@planetpatch.dev">admin@planetpatch.dev </a>
            or use the form below. </p>
        </div>

        <div className="container mx-auto px-6">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScv4qJhH5ryB0Q8s1L3qhswtbqm8nJDwycTZG0wZKZ8UGgyLw/viewform?embedded=true"
            width="100%"
            height="721"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full border-0"
          >
            Loading…
          </iframe>

        </div>
      </section>
    </>
  );
}
