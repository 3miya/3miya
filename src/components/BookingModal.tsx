import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, Check, ArrowLeft, Download, ShieldCheck, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { STUDIO_INFO } from '../data/treatments';
import { BookingConfirmation } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
}) => {
  // 3-Step Flow per user request:
  // Step 1: 選時段 (日期與時段)
  // Step 2: 填寫資料 (姓名、電話、LINE ID、備註，取消88折扣輸入，提示限用一次)
  // Step 3: ics 行事曆 (預約單號與 .ics 匯出)
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('14:30');

  // Step 2 Fields
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [lineId, setLineId] = useState<string>('');
  const [skinConcerns, setSkinConcerns] = useState<string>('');

  // Step 3 Confirmation
  const [confirmation, setConfirmation] = useState<BookingConfirmation | null>(null);

  // Generate next 14 dates for appointment selection
  const availableDates = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const dayNames = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
    return {
      isoString: `${yyyy}-${mm}-${dd}`,
      label: `${mm}/${dd}`,
      dayOfWeek: dayNames[d.getDay()],
    };
  });

  // Default date to tomorrow
  useEffect(() => {
    if (!date && availableDates.length > 0) {
      setDate(availableDates[0].isoString);
    }
  }, []);

  const timeSlots = [
    '11:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00', '20:30'
  ];

  if (!isOpen) return null;

  const handleNextToStep2 = () => {
    if (!date || !timeSlot) return;
    setStep(2);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !phone.trim() || !timeSlot) {
      return;
    }

    const bookingCode = `BYS-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newConfirmation: BookingConfirmation = {
      bookingId: bookingCode,
      branchName: STUDIO_INFO.name,
      branchAddress: STUDIO_INFO.address,
      branchPhone: STUDIO_INFO.phone,
      date,
      timeSlot,
      customerName,
      phone,
      lineId: lineId.trim() || undefined,
      skinConcerns: skinConcerns.trim() || undefined,
      createdAt: new Date().toISOString(),
    };

    setConfirmation(newConfirmation);
    setStep(3);
  };

  // Generate standard calendar invite (.ics file)
  const handleDownloadCalendar = () => {
    if (!confirmation) return;
    const [startHour, startMin] = confirmation.timeSlot.split(':');
    const startObj = new Date(`${confirmation.date}T${startHour}:${startMin}:00`);
    const endObj = new Date(startObj.getTime() + 90 * 60000); // estimated 90 mins

    const pad = (n: number) => String(n).padStart(2, '0');
    const formatICSDate = (dt: Date) =>
      `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}T${pad(dt.getHours())}${pad(dt.getMinutes())}00`;

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Ben Yan Shi//Skincare Studio Booking//TW
BEGIN:VEVENT
UID:${confirmation.bookingId}@benyanshi.spa
DTSTAMP:${formatICSDate(new Date())}Z
DTSTART:${formatICSDate(startObj)}
DTEND:${formatICSDate(endObj)}
SUMMARY:本顏室 專屬護理預約
DESCRIPTION:預約單號: ${confirmation.bookingId}\\n貴賓姓名: ${confirmation.customerName}\\n預約門市: ${STUDIO_INFO.name}\\n地址: ${STUDIO_INFO.address} (捷運行天宮 3 號出口)\\n電話: ${STUDIO_INFO.phone}\\n提醒: 採全預約制，保留 10 分鐘。
LOCATION:${STUDIO_INFO.address}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT2H
ACTION:DISPLAY
DESCRIPTION:提醒：今日於本顏室有預約專屬課程
END:VALARM
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `本顏室預約憑證-${confirmation.bookingId}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleResetAndClose = () => {
    setStep(1);
    setCustomerName('');
    setPhone('');
    setLineId('');
    setSkinConcerns('');
    setConfirmation(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 p-0 sm:p-4">
      <div
        className="bg-white rounded-t-3xl sm:rounded-3xl w-full max-w-lg max-h-[92vh] sm:max-h-[88vh] overflow-hidden shadow-2xl border border-[#CADAE8] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#CADAE8] bg-[#F4F8FB] flex items-center justify-between">
          <div className="flex items-center gap-2">
            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-8 h-8 rounded-full bg-white hover:bg-[#E2ECF4] flex items-center justify-center text-[#576F84] mr-1 cursor-pointer transition-colors border border-[#CADAE8]"
                title="返回選時段"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
            <div>
              <h3 className="text-base sm:text-lg font-serif-tc font-bold text-[#152433]">
                {step === 3 ? '預約完成憑證' : '本顏室 · 3 步驟即時線上預約'}
              </h3>
              <p className="text-[11px] text-[#576F84]">
                {step === 1 && '第 1 步：選擇預約日期與時段'}
                {step === 2 && '第 2 步：填寫預約基本資料'}
                {step === 3 && '第 3 步：生成預約單號並支援匯出行事曆'}
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 border border-[#CADAE8] flex items-center justify-center text-[#576F84] cursor-pointer"
            aria-label="關閉"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 3-Step Progress Indicators */}
        <div className="grid grid-cols-3 border-b border-[#CADAE8]/60 bg-[#E2ECF4]/40 text-center py-2 px-3 text-xs font-semibold">
          <div className={`flex items-center justify-center gap-1.5 ${step === 1 ? 'text-sky-900 font-bold' : step > 1 ? 'text-[#06C755]' : 'text-[#829AB1]'}`}>
            <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center ${step === 1 ? 'bg-[#182837] text-white' : step > 1 ? 'bg-[#06C755] text-white' : 'bg-slate-200 text-slate-600'}`}>
              {step > 1 ? '✓' : '1'}
            </span>
            <span className="truncate">1. 選時段</span>
          </div>

          <div className={`flex items-center justify-center gap-1.5 ${step === 2 ? 'text-sky-900 font-bold' : step > 2 ? 'text-[#06C755]' : 'text-[#829AB1]'}`}>
            <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center ${step === 2 ? 'bg-[#182837] text-white' : step > 2 ? 'bg-[#06C755] text-white' : 'bg-slate-200 text-slate-600'}`}>
              {step > 2 ? '✓' : '2'}
            </span>
            <span className="truncate">2. 填資料</span>
          </div>

          <div className={`flex items-center justify-center gap-1.5 ${step === 3 ? 'text-sky-900 font-bold' : 'text-[#829AB1]'}`}>
            <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center ${step === 3 ? 'bg-[#06C755] text-white' : 'bg-slate-200 text-slate-600'}`}>
              3
            </span>
            <span className="truncate">3. ics 行事曆</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 text-xs sm:text-sm">
          {/* STEP 1: 選時段 (取消加購、取消預約費用、取消項目選擇) */}
          {step === 1 && (
            <div className="space-y-5">
              {/* Info banner */}
              <div className="bg-[#F4F8FB] border border-[#CADAE8] rounded-2xl p-3.5 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-sky-800 shrink-0 mt-0.5" />
                <div className="text-xs text-[#334E68] leading-relaxed">
                  <p className="font-bold text-[#152433]">工作室全預約制 · 獨立隱私包廂</p>
                  <p className="text-[#576F84] mt-0.5">
                    預約僅需確認時段，免預約費用與線上付費。施作項目將於現場由美容師進行 1v1 膚況諮詢後精準安排。
                  </p>
                </div>
              </div>

              {/* Date selection */}
              <div>
                <label className="block text-xs font-bold text-[#152433] mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-800" />
                  <span>選擇預約日期</span>
                </label>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {availableDates.map((d) => (
                    <button
                      key={d.isoString}
                      type="button"
                      onClick={() => setDate(d.isoString)}
                      className={`flex flex-col items-center justify-center w-16 h-18 rounded-2xl border transition-all shrink-0 cursor-pointer ${
                        date === d.isoString
                          ? 'bg-[#182837] text-white border-[#182837] shadow-sm'
                          : 'bg-white hover:bg-slate-50 text-[#334E68] border-[#CADAE8]'
                      }`}
                    >
                      <span className="text-[10px] opacity-80">{d.dayOfWeek}</span>
                      <span className="text-sm font-bold mt-0.5">{d.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time selection */}
              <div>
                <label className="block text-xs font-bold text-[#152433] mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-800" />
                  <span>選擇預約時段（營業時間 11:00 - 22:00）</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTimeSlot(slot)}
                      className={`h-11 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer flex items-center justify-center ${
                        timeSlot === slot
                          ? 'bg-[#182837] text-white border-[#182837] shadow-xs'
                          : 'bg-white hover:bg-slate-50 text-[#334E68] border-[#CADAE8]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Studio location summary */}
              <div className="text-[11px] text-[#576F84] border-t border-[#CADAE8]/60 pt-3 flex items-center justify-between">
                <span>預約門市：行天宮工作室</span>
                <span>時段保留 10 分鐘</span>
              </div>
            </div>
          )}

          {/* STEP 2: 填寫資料 (姓名、電話、LINE ID、備註，取消88折輸入，提示限用一次) */}
          {step === 2 && (
            <form id="booking-form" onSubmit={handleConfirmBooking} className="space-y-4">
              {/* Selected Slot summary */}
              <div className="bg-[#F4F8FB] border border-[#CADAE8] rounded-xl p-3 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#576F84]">已選預約時段：</span>
                  <span className="font-bold text-[#152433] ml-1">
                    {date}（{timeSlot}）
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-sky-800 hover:underline cursor-pointer"
                >
                  修改時段
                </button>
              </div>

              {/* 88 Discount notice: 免輸入，限用一次 */}
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-3 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed text-amber-950">
                  <p className="font-bold">新客專屬禮遇 · 免輸入折扣碼</p>
                  <p className="text-[11px] text-amber-900/80 mt-0.5">
                    初次到訪完成 Google 評論打卡即享任意課程 88 折（每位貴賓限享一次，現場結帳自動折抵）。
                  </p>
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-[#152433] mb-1">
                  貴賓姓名 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="請輸入姓名 / 稱呼"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-[#CADAE8] bg-white text-xs sm:text-sm text-[#152433] focus:outline-hidden focus:border-[#182837] focus:ring-1 focus:ring-[#182837]"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-[#152433] mb-1">
                  聯絡電話 <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="例：0912-345-678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-[#CADAE8] bg-white text-xs sm:text-sm text-[#152433] focus:outline-hidden focus:border-[#182837] focus:ring-1 focus:ring-[#182837]"
                />
              </div>

              {/* LINE ID */}
              <div>
                <label className="block text-xs font-bold text-[#152433] mb-1">
                  LINE ID <span className="text-[#576F84] font-normal">（選填，方便時段確認通知）</span>
                </label>
                <input
                  type="text"
                  placeholder="例：healglow_guest"
                  value={lineId}
                  onChange={(e) => setLineId(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-[#CADAE8] bg-white text-xs sm:text-sm text-[#152433] focus:outline-hidden focus:border-[#182837] focus:ring-1 focus:ring-[#182837]"
                />
              </div>

              {/* Skin Concerns / Notes */}
              <div>
                <label className="block text-xs font-bold text-[#152433] mb-1">
                  備註需求 <span className="text-[#576F84] font-normal">（選填，可簡述困擾如粉刺、乾燥、除毛等）</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="如：想清粉刺、敏感肌易泛紅、除毛諮詢..."
                  value={skinConcerns}
                  onChange={(e) => setSkinConcerns(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#CADAE8] bg-white text-xs sm:text-sm text-[#152433] focus:outline-hidden focus:border-[#182837] focus:ring-1 focus:ring-[#182837] resize-none"
                />
              </div>
            </form>
          )}

          {/* STEP 3: ics 行事曆 (憑證與行事曆匯出) */}
          {step === 3 && confirmation && (
            <div className="space-y-4 text-center">
              <div className="w-12 h-12 bg-[#06C755]/15 text-[#06C755] rounded-full flex items-center justify-center mx-auto border border-[#06C755]/30">
                <Check className="w-6 h-6 stroke-[2.5]" />
              </div>

              <div>
                <span className="text-[11px] font-bold text-[#06C755] bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  預約建立成功
                </span>
                <h4 className="text-base sm:text-lg font-serif-tc font-bold text-[#152433] mt-1.5">
                  已為您成功保留專屬包廂時段
                </h4>
                <p className="text-xs text-[#576F84] mt-0.5">
                  工作室夥伴將盡速為您安排專屬美容師
                </p>
              </div>

              {/* Confirmation Card */}
              <div className="bg-[#F4F8FB] border border-[#CADAE8] rounded-2xl p-4 text-left space-y-2.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-[#CADAE8]/60">
                  <span className="text-[#576F84]">預約單號</span>
                  <span className="font-mono font-bold text-[#152433] tracking-wider">
                    {confirmation.bookingId}
                  </span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-[#576F84] shrink-0">預約時段</span>
                  <span className="font-bold text-[#152433] text-right">
                    {confirmation.date} · {confirmation.timeSlot}
                  </span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-[#576F84] shrink-0">預約門市</span>
                  <span className="font-bold text-[#152433] text-right">
                    {STUDIO_INFO.name}
                  </span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-[#576F84] shrink-0">工作室地址</span>
                  <span className="text-[#334E68] text-right max-w-[240px]">
                    {STUDIO_INFO.address}
                    <span className="block text-[11px] text-[#576F84]">{STUDIO_INFO.metro}</span>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#576F84]">預約貴賓</span>
                  <span className="font-bold text-[#152433]">
                    {confirmation.customerName}（{confirmation.phone}）
                  </span>
                </div>

                {confirmation.lineId && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#576F84]">LINE ID</span>
                    <span className="font-medium text-[#152433]">{confirmation.lineId}</span>
                  </div>
                )}
              </div>

              {/* Reservation Policy Note */}
              <div className="p-3 bg-white rounded-xl border border-[#CADAE8] text-[11px] text-[#576F84] text-left leading-relaxed">
                <p className="font-bold text-[#152433] mb-0.5">預約須知小提醒：</p>
                <p>• 預約保留 10 分鐘，如需調整請於 24 小時前聯繫官方 LINE 或來電。</p>
                <p>• 為維護靜謐放鬆品質，一人一室包廂謝絕攜伴、男性陪同與寵物。</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions (統一按鈕高度 h-11 / h-12，控制文字長度不超框) */}
        <div className="p-4 sm:p-5 border-t border-[#CADAE8] bg-[#F4F8FB]">
          {step === 1 && (
            <button
              type="button"
              onClick={handleNextToStep2}
              className="w-full h-11 sm:h-12 bg-[#182837] hover:bg-[#25394d] active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>下一步 · 填寫預約資料</span>
            </button>
          )}

          {step === 2 && (
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 h-11 sm:h-12 bg-white hover:bg-slate-100 text-[#334E68] font-bold text-xs sm:text-sm rounded-xl transition-all border border-[#CADAE8] flex items-center justify-center cursor-pointer"
              >
                <span>上一步</span>
              </button>

              <button
                type="submit"
                form="booking-form"
                className="w-2/3 h-11 sm:h-12 bg-[#06C755] hover:bg-[#05b34c] active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>確認預約 · 生成憑證</span>
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <button
                type="button"
                onClick={handleDownloadCalendar}
                className="w-full sm:flex-1 h-11 sm:h-12 bg-[#182837] hover:bg-[#25394d] active:scale-[0.98] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-sky-300" />
                <span>加入行事曆 (.ics)</span>
              </button>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full sm:w-auto sm:px-6 h-11 sm:h-12 bg-white hover:bg-slate-50 text-[#152433] font-bold text-xs sm:text-sm rounded-xl transition-all border border-[#CADAE8] flex items-center justify-center cursor-pointer"
              >
                <span>完成並關閉</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
