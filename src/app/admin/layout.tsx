export const metadata = {
  title: "Admin Portal - Archie's by Priyanka",
  description: "Secure admin management portal",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#997451] font-sans">
      {children}
    </div>
  );
}
