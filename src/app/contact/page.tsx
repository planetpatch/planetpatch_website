import { gemunuLibre } from "@/components/ui/fonts";

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-b from-green-50 to-white dark:from-slate-800 dark:to-slate-900 py-16 md:py-24">
              <div className="container mx-auto px-6">
                <div className="text-center">
                  <h1
                    className={`text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 ${gemunuLibre.className}`}
                  >
                    Contact Us
                  </h1>
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    Reach out to us about your questions and thoughts!
                  </p>
                </div>
              </div>
            </section>

       <section className="py-16 md:py-20 bg-white dark:bg-slate-900">
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
