export function BookConsultationCTA() {
return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-600 font-medium">
        Talk to a Doctor
        </span>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
        Book a Consultation
        <br />
        With Trusted Specialists
        </h2>
        <p className="text-gray-600 mb-8 max-w-lg">
        Connect instantly with certified doctors for video consultations,
        second opinions, or ongoing care — all from the comfort of your home.
        </p>


        <div className="flex gap-4">
        <a
        href="/book-consultation"
        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
        Book Consultation
        </a>
        </div>
        </div>


        {/* Right */}
        <div className="relative">
        <div className="bg-white rounded-3xl shadow-xl p-6 max-w-sm ml-auto">
        <p className="text-sm text-gray-500 mb-2">Next Available</p>
        <h4 className="font-semibold text-lg">Dr. Ahmed Hassan</h4>
        <p className="text-sm text-gray-500">General Physician</p>
        <div className="mt-4 flex justify-between items-center">
        <span className="text-green-600 font-medium">Available Today</span>
        <span className="text-sm text-gray-400">30 min</span>
        </div>
        </div>
        </div>
        </div>
        </section>
        );
}