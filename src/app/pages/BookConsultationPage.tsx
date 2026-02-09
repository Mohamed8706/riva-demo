import Navbar from "../components/Navbar";

export default function BookConsultationPage() {
return (
    <>
    <Navbar />
<div className="min-h-screen bg-[#F7F9FC]">
{/* Header */}
<section className="bg-gradient-to-br from-blue-600 to-blue-500 text-white py-20">
<div className="max-w-5xl mx-auto px-6 text-center">
<h1 className="text-4xl font-bold mb-4">Book a Consultation</h1>
<p className="text-blue-100 max-w-xl mx-auto">
Choose a doctor, select a time, and start your consultation in minutes.
</p>
</div>
</section>


{/* Content */}
<section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
{/* Doctor List */}
<div className="md:col-span-2 space-y-6">
{[1, 2, 3].map((_, i) => (
<div
key={i}
className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between"
>
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl bg-gray-100" />
<div>
<h3 className="font-semibold">Dr. Ahmed Hassan</h3>
<p className="text-sm text-gray-500">General Physician</p>
<p className="text-sm text-green-600 mt-1">Available Today</p>
</div>
</div>
<a
href="#"
className="px-5 py-2 rounded-xl bg-blue-600 text-white text-sm hover:bg-blue-700"
>
Select
</a>
</div>
))}
</div>


{/* Booking Card */}
<div className="bg-white rounded-2xl p-6 shadow-lg h-fit">
<h3 className="font-semibold text-lg mb-4">Consultation Details</h3>


<label className="block mb-3">
<span className="text-sm text-gray-600">Select Date</span>
<input
type="date"
className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2"
/>
</label>


<label className="block mb-4">
<span className="text-sm text-gray-600">Select Time</span>
<select className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-2">
<option>10:00 AM</option>
<option>12:00 PM</option>
<option>2:00 PM</option>
</select>
</label>


<button className="w-full py-3 rounded-xl bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
Confirm Booking
</button>


<p className="text-xs text-gray-400 mt-4 text-center">
You will receive a confirmation instantly
</p>
</div>
</section>
</div>
</>
);
}