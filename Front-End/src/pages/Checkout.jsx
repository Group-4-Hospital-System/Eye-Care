import React from "react";
import { CreditCard, Calendar, Clock, User, DollarSign } from "lucide-react";
import NavBar from "../components/NavBar";

const CheckoutPage = () => {
  return (
    <>
      <NavBar />
      <div className="bg-gradient-to-br from-white to-[#eafffb] min-h-screen flex items-center justify-center p-4 font-sans">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl overflow-hidden p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            الدفع وتأكيد الحجز
          </h1>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 md:rtl:space-x-reverse">
            {/* تفاصيل الحجز */}
            <div className="md:w-1/2 bg-mintD text-white rounded-xl p-6">
              <h2 className="text-3xl font-bold mb-6">تفاصيل الحجز</h2>
              <div className="space-y-4">
                <InfoItem
                  icon={<User className="w-5 h-5" />}
                  label="اسم المريض"
                  value="أحمد محمد"
                />
                <InfoItem
                  icon={<User className="w-5 h-5" />}
                  label="اسم الطبيب"
                  value="د. سارة أحمد"
                />
                <InfoItem
                  icon={<Calendar className="w-5 h-5" />}
                  label="تاريخ الموعد"
                  value="20 سبتمبر 2024"
                />
                <InfoItem
                  icon={<Clock className="w-5 h-5" />}
                  label="وقت الموعد"
                  value="10:00 صباحاً"
                />
                <InfoItem
                  icon={<CreditCard className="w-5 h-5" />}
                  label="نوع الفحص"
                  value="فحص شامل للعين"
                />
                <InfoItem
                  icon={<DollarSign className="w-5 h-5" />}
                  label="المبلغ المطلوب"
                  value="50 دينار أردني"
                />
              </div>
            </div>

            {/* نموذج الدفع */}
            <div className="md:w-1/2 bg-gray-50 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                إتمام الدفع
              </h2>
              <form className="space-y-6">
                <InputField
                  label="رقم البطاقة"
                  id="cardNumber"
                  placeholder="0000 0000 0000 0000"
                />
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <InputField
                    label="تاريخ الانتهاء"
                    id="expDate"
                    placeholder="MM / YY"
                    className="flex-1"
                  />
                  <InputField
                    label="رمز الأمان"
                    id="cvv"
                    placeholder="CVV"
                    className="flex-1"
                  />
                </div>
                <InputField
                  label="الاسم على البطاقة"
                  id="name"
                  placeholder="الاسم الكامل"
                />
                <button
                  type="submit"
                  className="w-full bg-mintD text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition duration-300 font-semibold text-lg shadow-lg"
                >
                  تأكيد الحجز والدفع
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 rtl:space-x-reverse">
    {icon}
    <div>
      <p className="text-sm opacity-75">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  </div>
);

const InputField = ({ label, id, placeholder, className = "" }) => (
  <div className={className}>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type="text"
      id={id}
      className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
      placeholder={placeholder}
    />
  </div>
);

export default CheckoutPage;
