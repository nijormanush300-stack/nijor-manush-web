import React, { useState } from 'react';
import { ShoppingBag, Phone, MapPin, Clock, ShieldCheck, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    item: 'ডেলিভারি সার্ভিস (সাধারণ পার্সেল/পণ্য)'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert('দয়া করে নাম, মোবাইল নম্বর এবং সম্পূর্ণ ঠিকানা লিখুন।');
      return;
    }
    setOrderSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-['Hind_Siliguri',sans-serif]">
      {/* Header */}
      <header className="bg-emerald-700 text-white shadow-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-white text-emerald-700 p-2 rounded-xl font-bold text-xl shadow">
              📦
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">নিজর মানুষ</h1>
              <p className="text-xs text-emerald-100">বিশ্বনাথ পৌরসভা ও আশপাশ এলাকা</p>
            </div>
          </div>
          <a 
            href="tel:01805047037" 
            className="bg-emerald-800 hover:bg-emerald-900 px-3 py-1.5 rounded-lg text-sm flex items-center space-x-1.5 border border-emerald-600 transition"
          >
            <Phone size={16} />
            <span className="font-medium">কল করুন</span>
          </a>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-emerald-700 to-emerald-800 text-white py-8 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="bg-emerald-600/80 text-emerald-100 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
            বিশ্বস্ত পার্সেল ও হোম ডেলিভারি
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-2">
            আপনার প্রয়োজনীয় পণ্য, আপনার দোরগোড়ায়
          </h2>
          <p className="text-emerald-100 text-sm md:text-base mb-6">
            বিশ্বনাথের যেকোনো প্রান্ত থেকে পার্সেল পিকআপ এবং নিরাপদ ডেলিভারি নিশ্চিত করছি আমরা।
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs md:text-sm">
            <div className="bg-emerald-900/50 px-3 py-1.5 rounded-lg flex items-center space-x-1">
              <Truck size={16} className="text-emerald-300" />
              <span>দ্রুত ডেলিভারি</span>
            </div>
            <div className="bg-emerald-900/50 px-3 py-1.5 rounded-lg flex items-center space-x-1">
              <ShieldCheck size={16} className="text-emerald-300" />
              <span>১০০% নিরাপদ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content / Order Form */}
      <main className="max-w-md mx-auto px-4 -mt-4 mb-12 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-bold text-emerald-800 mb-4 flex items-center space-x-2">
            <ShoppingBag size={20} />
            <span>ডেলিভারির জন্য অর্ডার বা বুকিং দিন</span>
          </h3>

          {orderSubmitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-xl font-bold text-emerald-800">বুকিং সফল হয়েছে!</h4>
              <p className="text-sm text-gray-600">
                ধন্যবাদ, {formData.name}। আমরা খুব শীঘ্রই আপনার দেওয়া নম্বরে ({formData.phone}) যোগাযোগ করব।
              </p>
              <button
                onClick={() => setOrderSubmitted(false)}
                className="mt-4 bg-emerald-700 hover:bg-emerald-800 text-white text-sm px-5 py-2 rounded-xl font-medium transition"
              >
                새로운 অর্ডার / আরেকটি বুকিং দিন
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">আপনার নাম *</label>
                <input
                  type="text"
                  required
                  placeholder="যেমন: আব্দুল কাইয়ুম"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">মোবাইল নম্বর *</label>
                <input
                  type="tel"
                  required
                  placeholder="যেমন: 01805047037"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">ডেলিভারির ঠিকানা (বিশ্বনাথ) *</label>
                <textarea
                  required
                  rows={2}
                  placeholder="গ্রাম / এলাকা, রোড, বিশ্বনাথ সদর..."
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">সেবার ধরন</label>
                <select
                  value={formData.item}
                  onChange={(e) => setFormData({...formData, item: e.target.value})}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="ডেলিভারি সার্ভিস (সাধারণ পার্সেল/পণ্য)">সাধারণ পার্সেল ও ডেলিভারি</option>
                  <option value="অনলাইন শপ প্রোডাক্ট ডেলিভারি">অনলাইন শপ প্রোডাক্ট ডেলিভারি</option>
                  <option value="জরুরি পার্সেল ও ডকুমেন্ট">জরুরি পার্সেল ও ডকুমেন্ট</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 rounded-xl text-sm shadow-md transition flex items-center justify-center space-x-2"
              >
                <span>বুকিং কনফার্ম করুন</span>
                <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Info Cards */}
        <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
          <div className="bg-white p-3.5 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-2.5">
            <MapPin className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <div>
              <p className="font-bold text-gray-800">এলাকা</p>
              <p className="text-gray-500">বিশ্বনাথ পৌরসভা ও আশপাশ</p>
            </div>
          </div>
          <div className="bg-white p-3.5 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-2.5">
            <Clock className="text-emerald-600 shrink-0 mt-0.5" size={18} />
            <div>
              <p className="font-bold text-gray-800">সময়</p>
              <p className="text-gray-500">সকাল ৯টা - রাত ১০টা</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-xs border-t border-gray-800">
        <p>© ২০২৬ নিজর মানুষ — সর্বস্বত্ব সংরক্ষিত</p>
        <p className="mt-1 text-emerald-400">বিশ্বনাথ, সিলেট</p>
      </footer>
    </div>
  );
}
