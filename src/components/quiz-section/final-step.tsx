export function FinalStep({
  phoneNumber,
  setPhoneNumber,
}: {
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div>
      <h3 className="text-white font-bold text-3xl mb-4">ВАШ НОМЕР ТЕЛЕФОНА</h3>
      <input
        type="tel"
        placeholder="Ваш номер телефона"
        className="px-5 py-3 text-base bg-input-theme border border-input-outline text-white outline-none w-full"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
      />
    </div>
  );
}
