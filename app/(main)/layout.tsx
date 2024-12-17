import Footer from "@/components/ui/layout/footer"
import Navbar from "@/components/ui/layout/navbar"


export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

